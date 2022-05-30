declare module 'mongoose' {

  /**
   * Reference another Model
   */
   type PopulatedDoc<
     PopulatedType,
     RawId extends RefType = (PopulatedType extends { _id?: RefType; } ? NonNullable<PopulatedType['_id']> : Types.ObjectId) | undefined
   > = PopulatedType | RawId;

   interface PopulateOptions {
     /** space delimited path(s) to populate */
     path: string;
     /** fields to select */
     select?: any;
     /** query conditions to match */
     match?: any;
     /** optional model to use for population */
     model?: string | Model<any>;
     /** optional query options like sort, limit, etc */
     options?: QueryOptions;
     /** correct limit on populated array */
     perDocumentLimit?: number;
     /** optional boolean, set to `false` to allow populating paths that aren't in the schema */
     strictPopulate?: boolean;
     /** deep populate */
     populate?: string | PopulateOptions | (string | PopulateOptions)[];
     /**
     * If true Mongoose will always set `path` to an array, if false Mongoose will
     * always set `path` to a document. Inferred from schema by default.
     */
     justOne?: boolean;
     /** transform function to call on every populated doc */
     transform?: (doc: any, id: any) => any;
   }

   interface PopulateOption {
     populate?: string | string[] | PopulateOptions | PopulateOptions[];
   }
}