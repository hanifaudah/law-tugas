
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  username: string
  password: string
  fullName: string
}

/**
 * Model Token
 * 
 */
export type Token = {
  token: string
  type: string
  userId: number
  clientId: string
  createdAt: Date | null
}

/**
 * Model ClientApp
 * 
 */
export type ClientApp = {
  id: number
  name: string
  clientId: string
  clientSecret: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<GlobalReject>;

  /**
   * `prisma.clientApp`: Exposes CRUD operations for the **ClientApp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientApps
    * const clientApps = await prisma.clientApp.findMany()
    * ```
    */
  get clientApp(): Prisma.ClientAppDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.10.0
   * Query Engine version: 73e60b76d394f8d37d8ebd1f8918c79029f0db86
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Token: 'Token',
    ClientApp: 'ClientApp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    tokens: number
  }

  export type UserCountOutputTypeSelect = {
    tokens?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ClientAppCountOutputType
   */


  export type ClientAppCountOutputType = {
    tokens: number
  }

  export type ClientAppCountOutputTypeSelect = {
    tokens?: boolean
  }

  export type ClientAppCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ClientAppCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ClientAppCountOutputType
    : S extends undefined
    ? never
    : S extends ClientAppCountOutputTypeArgs
    ?'include' extends U
    ? ClientAppCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ClientAppCountOutputType ? ClientAppCountOutputType[P] : never
  } 
    : ClientAppCountOutputType
  : ClientAppCountOutputType




  // Custom InputTypes

  /**
   * ClientAppCountOutputType without action
   */
  export type ClientAppCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClientAppCountOutputType
     * 
    **/
    select?: ClientAppCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    fullName: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    fullName: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    fullName: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullName?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullName?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    fullName?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    fullName: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    username?: boolean
    password?: boolean
    fullName?: boolean
    tokens?: boolean | TokenFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    tokens?: boolean | TokenFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'tokens' ? Array < TokenGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'tokens' ? Array < TokenGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tokens<T extends TokenFindManyArgs = {}>(args?: Subset<T, TokenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Token>>, PrismaPromise<Array<TokenGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Token
   */


  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    token: string | null
    type: string | null
    userId: number | null
    clientId: string | null
    createdAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    token: string | null
    type: string | null
    userId: number | null
    clientId: string | null
    createdAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    token: number
    type: number
    userId: number
    clientId: number
    createdAt: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    token?: true
    type?: true
    userId?: true
    clientId?: true
    createdAt?: true
  }

  export type TokenMaxAggregateInputType = {
    token?: true
    type?: true
    userId?: true
    clientId?: true
    createdAt?: true
  }

  export type TokenCountAggregateInputType = {
    token?: true
    type?: true
    userId?: true
    clientId?: true
    createdAt?: true
    _all?: true
  }

  export type TokenAggregateArgs = {
    /**
     * Filter which Token to aggregate.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs = {
    where?: TokenWhereInput
    orderBy?: Enumerable<TokenOrderByWithAggregationInput>
    by: Array<TokenScalarFieldEnum>
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }


  export type TokenGroupByOutputType = {
    token: string
    type: string
    userId: number
    clientId: string
    createdAt: Date | null
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect = {
    token?: boolean
    type?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    clientApp?: boolean | ClientAppArgs
    clientId?: boolean
    createdAt?: boolean
  }

  export type TokenInclude = {
    user?: boolean | UserArgs
    clientApp?: boolean | ClientAppArgs
  }

  export type TokenGetPayload<
    S extends boolean | null | undefined | TokenArgs,
    U = keyof S
      > = S extends true
        ? Token
    : S extends undefined
    ? never
    : S extends TokenArgs | TokenFindManyArgs
    ?'include' extends U
    ? Token  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'clientApp' ? ClientAppGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'clientApp' ? ClientAppGetPayload<S['select'][P]> :  P extends keyof Token ? Token[P] : never
  } 
    : Token
  : Token


  type TokenCountArgs = Merge<
    Omit<TokenFindManyArgs, 'select' | 'include'> & {
      select?: TokenCountAggregateInputType | true
    }
  >

  export interface TokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Token'> extends True ? CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>> : CheckSelect<T, Prisma__TokenClient<Token | null >, Prisma__TokenClient<TokenGetPayload<T> | null >>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Token'> extends True ? CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>> : CheckSelect<T, Prisma__TokenClient<Token | null >, Prisma__TokenClient<TokenGetPayload<T> | null >>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const tokenWithTokenOnly = await prisma.token.findMany({ select: { token: true } })
     * 
    **/
    findMany<T extends TokenFindManyArgs>(
      args?: SelectSubset<T, TokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Token>>, PrismaPromise<Array<TokenGetPayload<T>>>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
    **/
    create<T extends TokenCreateArgs>(
      args: SelectSubset<T, TokenCreateArgs>
    ): CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>>

    /**
     * Create many Tokens.
     *     @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const token = await prisma.token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokenCreateManyArgs>(
      args?: SelectSubset<T, TokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
    **/
    delete<T extends TokenDeleteArgs>(
      args: SelectSubset<T, TokenDeleteArgs>
    ): CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokenUpdateArgs>(
      args: SelectSubset<T, TokenUpdateArgs>
    ): CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokenDeleteManyArgs>(
      args?: SelectSubset<T, TokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokenUpdateManyArgs>(
      args: SelectSubset<T, TokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
    **/
    upsert<T extends TokenUpsertArgs>(
      args: SelectSubset<T, TokenUpsertArgs>
    ): CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    clientApp<T extends ClientAppArgs = {}>(args?: Subset<T, ClientAppArgs>): CheckSelect<T, Prisma__ClientAppClient<ClientApp | null >, Prisma__ClientAppClient<ClientAppGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Throw an Error if a Token can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Token to fetch.
     * 
    **/
    where: TokenWhereUniqueInput
  }


  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Throw an Error if a Token can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Token to fetch.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     * 
    **/
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token findMany
   */
  export type TokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter, which Tokens to fetch.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token create
   */
  export type TokenCreateArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * The data needed to create a Token.
     * 
    **/
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }


  /**
   * Token createMany
   */
  export type TokenCreateManyArgs = {
    /**
     * The data used to create many Tokens.
     * 
    **/
    data: Enumerable<TokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Token update
   */
  export type TokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * The data needed to update a Token.
     * 
    **/
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     * 
    **/
    where: TokenWhereUniqueInput
  }


  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs = {
    /**
     * The data used to update Tokens.
     * 
    **/
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     * 
    **/
    where?: TokenWhereInput
  }


  /**
   * Token upsert
   */
  export type TokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * The filter to search for the Token to update in case it exists.
     * 
    **/
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     * 
    **/
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }


  /**
   * Token delete
   */
  export type TokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter which Token to delete.
     * 
    **/
    where: TokenWhereUniqueInput
  }


  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs = {
    /**
     * Filter which Tokens to delete
     * 
    **/
    where?: TokenWhereInput
  }


  /**
   * Token without action
   */
  export type TokenArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
  }



  /**
   * Model ClientApp
   */


  export type AggregateClientApp = {
    _count: ClientAppCountAggregateOutputType | null
    _avg: ClientAppAvgAggregateOutputType | null
    _sum: ClientAppSumAggregateOutputType | null
    _min: ClientAppMinAggregateOutputType | null
    _max: ClientAppMaxAggregateOutputType | null
  }

  export type ClientAppAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientAppSumAggregateOutputType = {
    id: number | null
  }

  export type ClientAppMinAggregateOutputType = {
    id: number | null
    name: string | null
    clientId: string | null
    clientSecret: string | null
  }

  export type ClientAppMaxAggregateOutputType = {
    id: number | null
    name: string | null
    clientId: string | null
    clientSecret: string | null
  }

  export type ClientAppCountAggregateOutputType = {
    id: number
    name: number
    clientId: number
    clientSecret: number
    _all: number
  }


  export type ClientAppAvgAggregateInputType = {
    id?: true
  }

  export type ClientAppSumAggregateInputType = {
    id?: true
  }

  export type ClientAppMinAggregateInputType = {
    id?: true
    name?: true
    clientId?: true
    clientSecret?: true
  }

  export type ClientAppMaxAggregateInputType = {
    id?: true
    name?: true
    clientId?: true
    clientSecret?: true
  }

  export type ClientAppCountAggregateInputType = {
    id?: true
    name?: true
    clientId?: true
    clientSecret?: true
    _all?: true
  }

  export type ClientAppAggregateArgs = {
    /**
     * Filter which ClientApp to aggregate.
     * 
    **/
    where?: ClientAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientApps to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientAppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClientAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientApps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientApps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientApps
    **/
    _count?: true | ClientAppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAppAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientAppSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientAppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientAppMaxAggregateInputType
  }

  export type GetClientAppAggregateType<T extends ClientAppAggregateArgs> = {
        [P in keyof T & keyof AggregateClientApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientApp[P]>
      : GetScalarType<T[P], AggregateClientApp[P]>
  }




  export type ClientAppGroupByArgs = {
    where?: ClientAppWhereInput
    orderBy?: Enumerable<ClientAppOrderByWithAggregationInput>
    by: Array<ClientAppScalarFieldEnum>
    having?: ClientAppScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientAppCountAggregateInputType | true
    _avg?: ClientAppAvgAggregateInputType
    _sum?: ClientAppSumAggregateInputType
    _min?: ClientAppMinAggregateInputType
    _max?: ClientAppMaxAggregateInputType
  }


  export type ClientAppGroupByOutputType = {
    id: number
    name: string
    clientId: string
    clientSecret: string
    _count: ClientAppCountAggregateOutputType | null
    _avg: ClientAppAvgAggregateOutputType | null
    _sum: ClientAppSumAggregateOutputType | null
    _min: ClientAppMinAggregateOutputType | null
    _max: ClientAppMaxAggregateOutputType | null
  }

  type GetClientAppGroupByPayload<T extends ClientAppGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ClientAppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientAppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientAppGroupByOutputType[P]>
            : GetScalarType<T[P], ClientAppGroupByOutputType[P]>
        }
      >
    >


  export type ClientAppSelect = {
    id?: boolean
    name?: boolean
    clientId?: boolean
    clientSecret?: boolean
    tokens?: boolean | TokenFindManyArgs
    _count?: boolean | ClientAppCountOutputTypeArgs
  }

  export type ClientAppInclude = {
    tokens?: boolean | TokenFindManyArgs
    _count?: boolean | ClientAppCountOutputTypeArgs
  }

  export type ClientAppGetPayload<
    S extends boolean | null | undefined | ClientAppArgs,
    U = keyof S
      > = S extends true
        ? ClientApp
    : S extends undefined
    ? never
    : S extends ClientAppArgs | ClientAppFindManyArgs
    ?'include' extends U
    ? ClientApp  & {
    [P in TrueKeys<S['include']>]:
        P extends 'tokens' ? Array < TokenGetPayload<S['include'][P]>>  :
        P extends '_count' ? ClientAppCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'tokens' ? Array < TokenGetPayload<S['select'][P]>>  :
        P extends '_count' ? ClientAppCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof ClientApp ? ClientApp[P] : never
  } 
    : ClientApp
  : ClientApp


  type ClientAppCountArgs = Merge<
    Omit<ClientAppFindManyArgs, 'select' | 'include'> & {
      select?: ClientAppCountAggregateInputType | true
    }
  >

  export interface ClientAppDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ClientApp that matches the filter.
     * @param {ClientAppFindUniqueArgs} args - Arguments to find a ClientApp
     * @example
     * // Get one ClientApp
     * const clientApp = await prisma.clientApp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientAppFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClientAppFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ClientApp'> extends True ? CheckSelect<T, Prisma__ClientAppClient<ClientApp>, Prisma__ClientAppClient<ClientAppGetPayload<T>>> : CheckSelect<T, Prisma__ClientAppClient<ClientApp | null >, Prisma__ClientAppClient<ClientAppGetPayload<T> | null >>

    /**
     * Find the first ClientApp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAppFindFirstArgs} args - Arguments to find a ClientApp
     * @example
     * // Get one ClientApp
     * const clientApp = await prisma.clientApp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientAppFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClientAppFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ClientApp'> extends True ? CheckSelect<T, Prisma__ClientAppClient<ClientApp>, Prisma__ClientAppClient<ClientAppGetPayload<T>>> : CheckSelect<T, Prisma__ClientAppClient<ClientApp | null >, Prisma__ClientAppClient<ClientAppGetPayload<T> | null >>

    /**
     * Find zero or more ClientApps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAppFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientApps
     * const clientApps = await prisma.clientApp.findMany()
     * 
     * // Get first 10 ClientApps
     * const clientApps = await prisma.clientApp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientAppWithIdOnly = await prisma.clientApp.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientAppFindManyArgs>(
      args?: SelectSubset<T, ClientAppFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ClientApp>>, PrismaPromise<Array<ClientAppGetPayload<T>>>>

    /**
     * Create a ClientApp.
     * @param {ClientAppCreateArgs} args - Arguments to create a ClientApp.
     * @example
     * // Create one ClientApp
     * const ClientApp = await prisma.clientApp.create({
     *   data: {
     *     // ... data to create a ClientApp
     *   }
     * })
     * 
    **/
    create<T extends ClientAppCreateArgs>(
      args: SelectSubset<T, ClientAppCreateArgs>
    ): CheckSelect<T, Prisma__ClientAppClient<ClientApp>, Prisma__ClientAppClient<ClientAppGetPayload<T>>>

    /**
     * Create many ClientApps.
     *     @param {ClientAppCreateManyArgs} args - Arguments to create many ClientApps.
     *     @example
     *     // Create many ClientApps
     *     const clientApp = await prisma.clientApp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientAppCreateManyArgs>(
      args?: SelectSubset<T, ClientAppCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ClientApp.
     * @param {ClientAppDeleteArgs} args - Arguments to delete one ClientApp.
     * @example
     * // Delete one ClientApp
     * const ClientApp = await prisma.clientApp.delete({
     *   where: {
     *     // ... filter to delete one ClientApp
     *   }
     * })
     * 
    **/
    delete<T extends ClientAppDeleteArgs>(
      args: SelectSubset<T, ClientAppDeleteArgs>
    ): CheckSelect<T, Prisma__ClientAppClient<ClientApp>, Prisma__ClientAppClient<ClientAppGetPayload<T>>>

    /**
     * Update one ClientApp.
     * @param {ClientAppUpdateArgs} args - Arguments to update one ClientApp.
     * @example
     * // Update one ClientApp
     * const clientApp = await prisma.clientApp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientAppUpdateArgs>(
      args: SelectSubset<T, ClientAppUpdateArgs>
    ): CheckSelect<T, Prisma__ClientAppClient<ClientApp>, Prisma__ClientAppClient<ClientAppGetPayload<T>>>

    /**
     * Delete zero or more ClientApps.
     * @param {ClientAppDeleteManyArgs} args - Arguments to filter ClientApps to delete.
     * @example
     * // Delete a few ClientApps
     * const { count } = await prisma.clientApp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientAppDeleteManyArgs>(
      args?: SelectSubset<T, ClientAppDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientApps
     * const clientApp = await prisma.clientApp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientAppUpdateManyArgs>(
      args: SelectSubset<T, ClientAppUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ClientApp.
     * @param {ClientAppUpsertArgs} args - Arguments to update or create a ClientApp.
     * @example
     * // Update or create a ClientApp
     * const clientApp = await prisma.clientApp.upsert({
     *   create: {
     *     // ... data to create a ClientApp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientApp we want to update
     *   }
     * })
    **/
    upsert<T extends ClientAppUpsertArgs>(
      args: SelectSubset<T, ClientAppUpsertArgs>
    ): CheckSelect<T, Prisma__ClientAppClient<ClientApp>, Prisma__ClientAppClient<ClientAppGetPayload<T>>>

    /**
     * Count the number of ClientApps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAppCountArgs} args - Arguments to filter ClientApps to count.
     * @example
     * // Count the number of ClientApps
     * const count = await prisma.clientApp.count({
     *   where: {
     *     // ... the filter for the ClientApps we want to count
     *   }
     * })
    **/
    count<T extends ClientAppCountArgs>(
      args?: Subset<T, ClientAppCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientAppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAppAggregateArgs>(args: Subset<T, ClientAppAggregateArgs>): PrismaPromise<GetClientAppAggregateType<T>>

    /**
     * Group by ClientApp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAppGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientAppGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientAppGroupByArgs['orderBy'] }
        : { orderBy?: ClientAppGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientAppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientAppGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientApp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClientAppClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tokens<T extends TokenFindManyArgs = {}>(args?: Subset<T, TokenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Token>>, PrismaPromise<Array<TokenGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ClientApp findUnique
   */
  export type ClientAppFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the ClientApp
     * 
    **/
    select?: ClientAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientAppInclude | null
    /**
     * Throw an Error if a ClientApp can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ClientApp to fetch.
     * 
    **/
    where: ClientAppWhereUniqueInput
  }


  /**
   * ClientApp findFirst
   */
  export type ClientAppFindFirstArgs = {
    /**
     * Select specific fields to fetch from the ClientApp
     * 
    **/
    select?: ClientAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientAppInclude | null
    /**
     * Throw an Error if a ClientApp can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which ClientApp to fetch.
     * 
    **/
    where?: ClientAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientApps to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientAppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientApps.
     * 
    **/
    cursor?: ClientAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientApps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientApps.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientApps.
     * 
    **/
    distinct?: Enumerable<ClientAppScalarFieldEnum>
  }


  /**
   * ClientApp findMany
   */
  export type ClientAppFindManyArgs = {
    /**
     * Select specific fields to fetch from the ClientApp
     * 
    **/
    select?: ClientAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientAppInclude | null
    /**
     * Filter, which ClientApps to fetch.
     * 
    **/
    where?: ClientAppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientApps to fetch.
     * 
    **/
    orderBy?: Enumerable<ClientAppOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientApps.
     * 
    **/
    cursor?: ClientAppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientApps from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientApps.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClientAppScalarFieldEnum>
  }


  /**
   * ClientApp create
   */
  export type ClientAppCreateArgs = {
    /**
     * Select specific fields to fetch from the ClientApp
     * 
    **/
    select?: ClientAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientAppInclude | null
    /**
     * The data needed to create a ClientApp.
     * 
    **/
    data: XOR<ClientAppCreateInput, ClientAppUncheckedCreateInput>
  }


  /**
   * ClientApp createMany
   */
  export type ClientAppCreateManyArgs = {
    /**
     * The data used to create many ClientApps.
     * 
    **/
    data: Enumerable<ClientAppCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ClientApp update
   */
  export type ClientAppUpdateArgs = {
    /**
     * Select specific fields to fetch from the ClientApp
     * 
    **/
    select?: ClientAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientAppInclude | null
    /**
     * The data needed to update a ClientApp.
     * 
    **/
    data: XOR<ClientAppUpdateInput, ClientAppUncheckedUpdateInput>
    /**
     * Choose, which ClientApp to update.
     * 
    **/
    where: ClientAppWhereUniqueInput
  }


  /**
   * ClientApp updateMany
   */
  export type ClientAppUpdateManyArgs = {
    /**
     * The data used to update ClientApps.
     * 
    **/
    data: XOR<ClientAppUpdateManyMutationInput, ClientAppUncheckedUpdateManyInput>
    /**
     * Filter which ClientApps to update
     * 
    **/
    where?: ClientAppWhereInput
  }


  /**
   * ClientApp upsert
   */
  export type ClientAppUpsertArgs = {
    /**
     * Select specific fields to fetch from the ClientApp
     * 
    **/
    select?: ClientAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientAppInclude | null
    /**
     * The filter to search for the ClientApp to update in case it exists.
     * 
    **/
    where: ClientAppWhereUniqueInput
    /**
     * In case the ClientApp found by the `where` argument doesn't exist, create a new ClientApp with this data.
     * 
    **/
    create: XOR<ClientAppCreateInput, ClientAppUncheckedCreateInput>
    /**
     * In case the ClientApp was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClientAppUpdateInput, ClientAppUncheckedUpdateInput>
  }


  /**
   * ClientApp delete
   */
  export type ClientAppDeleteArgs = {
    /**
     * Select specific fields to fetch from the ClientApp
     * 
    **/
    select?: ClientAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientAppInclude | null
    /**
     * Filter which ClientApp to delete.
     * 
    **/
    where: ClientAppWhereUniqueInput
  }


  /**
   * ClientApp deleteMany
   */
  export type ClientAppDeleteManyArgs = {
    /**
     * Filter which ClientApps to delete
     * 
    **/
    where?: ClientAppWhereInput
  }


  /**
   * ClientApp without action
   */
  export type ClientAppArgs = {
    /**
     * Select specific fields to fetch from the ClientApp
     * 
    **/
    select?: ClientAppSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClientAppInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    fullName: 'fullName'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    token: 'token',
    type: 'type',
    userId: 'userId',
    clientId: 'clientId',
    createdAt: 'createdAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const ClientAppScalarFieldEnum: {
    id: 'id',
    name: 'name',
    clientId: 'clientId',
    clientSecret: 'clientSecret'
  };

  export type ClientAppScalarFieldEnum = (typeof ClientAppScalarFieldEnum)[keyof typeof ClientAppScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    username?: StringFilter | string
    password?: StringFilter | string
    fullName?: StringFilter | string
    tokens?: TokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    fullName?: StringWithAggregatesFilter | string
  }

  export type TokenWhereInput = {
    AND?: Enumerable<TokenWhereInput>
    OR?: Enumerable<TokenWhereInput>
    NOT?: Enumerable<TokenWhereInput>
    token?: StringFilter | string
    type?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    clientApp?: XOR<ClientAppRelationFilter, ClientAppWhereInput>
    clientId?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
  }

  export type TokenOrderByWithRelationInput = {
    token?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    clientApp?: ClientAppOrderByWithRelationInput
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenWhereUniqueInput = {
    token?: string
  }

  export type TokenOrderByWithAggregationInput = {
    token?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<TokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TokenScalarWhereWithAggregatesInput>
    token?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    clientId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ClientAppWhereInput = {
    AND?: Enumerable<ClientAppWhereInput>
    OR?: Enumerable<ClientAppWhereInput>
    NOT?: Enumerable<ClientAppWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    clientId?: StringFilter | string
    clientSecret?: StringFilter | string
    tokens?: TokenListRelationFilter
  }

  export type ClientAppOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type ClientAppWhereUniqueInput = {
    id?: number
    clientId?: string
  }

  export type ClientAppOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    _count?: ClientAppCountOrderByAggregateInput
    _avg?: ClientAppAvgOrderByAggregateInput
    _max?: ClientAppMaxOrderByAggregateInput
    _min?: ClientAppMinOrderByAggregateInput
    _sum?: ClientAppSumOrderByAggregateInput
  }

  export type ClientAppScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClientAppScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClientAppScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClientAppScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    clientId?: StringWithAggregatesFilter | string
    clientSecret?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    fullName: string
    tokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    fullName: string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    tokens?: TokenUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    tokens?: TokenUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    fullName: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateInput = {
    token: string
    type: string
    user: UserCreateNestedOneWithoutTokensInput
    clientApp: ClientAppCreateNestedOneWithoutTokensInput
    createdAt?: Date | string | null
  }

  export type TokenUncheckedCreateInput = {
    token: string
    type: string
    userId: number
    clientId: string
    createdAt?: Date | string | null
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTokensInput
    clientApp?: ClientAppUpdateOneRequiredWithoutTokensInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenCreateManyInput = {
    token: string
    type: string
    userId: number
    clientId: string
    createdAt?: Date | string | null
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientAppCreateInput = {
    name: string
    clientId: string
    clientSecret: string
    tokens?: TokenCreateNestedManyWithoutClientAppInput
  }

  export type ClientAppUncheckedCreateInput = {
    id?: number
    name: string
    clientId: string
    clientSecret: string
    tokens?: TokenUncheckedCreateNestedManyWithoutClientAppInput
  }

  export type ClientAppUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    tokens?: TokenUpdateManyWithoutClientAppInput
  }

  export type ClientAppUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    tokens?: TokenUncheckedUpdateManyWithoutClientAppInput
  }

  export type ClientAppCreateManyInput = {
    id?: number
    name: string
    clientId: string
    clientSecret: string
  }

  export type ClientAppUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
  }

  export type ClientAppUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClientAppRelationFilter = {
    is?: ClientAppWhereInput
    isNot?: ClientAppWhereInput
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type TokenCountOrderByAggregateInput = {
    token?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    token?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    token?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type ClientAppCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
  }

  export type ClientAppAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientAppMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
  }

  export type ClientAppMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
  }

  export type ClientAppSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TokenUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<TokenCreateWithoutUserInput>, Enumerable<TokenUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TokenCreateManyUserInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type ClientAppCreateNestedOneWithoutTokensInput = {
    create?: XOR<ClientAppCreateWithoutTokensInput, ClientAppUncheckedCreateWithoutTokensInput>
    connectOrCreate?: ClientAppCreateOrConnectWithoutTokensInput
    connect?: ClientAppWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type ClientAppUpdateOneRequiredWithoutTokensInput = {
    create?: XOR<ClientAppCreateWithoutTokensInput, ClientAppUncheckedCreateWithoutTokensInput>
    connectOrCreate?: ClientAppCreateOrConnectWithoutTokensInput
    upsert?: ClientAppUpsertWithoutTokensInput
    connect?: ClientAppWhereUniqueInput
    update?: XOR<ClientAppUpdateWithoutTokensInput, ClientAppUncheckedUpdateWithoutTokensInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TokenCreateNestedManyWithoutClientAppInput = {
    create?: XOR<Enumerable<TokenCreateWithoutClientAppInput>, Enumerable<TokenUncheckedCreateWithoutClientAppInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutClientAppInput>
    createMany?: TokenCreateManyClientAppInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type TokenUncheckedCreateNestedManyWithoutClientAppInput = {
    create?: XOR<Enumerable<TokenCreateWithoutClientAppInput>, Enumerable<TokenUncheckedCreateWithoutClientAppInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutClientAppInput>
    createMany?: TokenCreateManyClientAppInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type TokenUpdateManyWithoutClientAppInput = {
    create?: XOR<Enumerable<TokenCreateWithoutClientAppInput>, Enumerable<TokenUncheckedCreateWithoutClientAppInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutClientAppInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutClientAppInput>
    createMany?: TokenCreateManyClientAppInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutClientAppInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutClientAppInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type TokenUncheckedUpdateManyWithoutClientAppInput = {
    create?: XOR<Enumerable<TokenCreateWithoutClientAppInput>, Enumerable<TokenUncheckedCreateWithoutClientAppInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutClientAppInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutClientAppInput>
    createMany?: TokenCreateManyClientAppInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutClientAppInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutClientAppInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type TokenCreateWithoutUserInput = {
    token: string
    type: string
    clientApp: ClientAppCreateNestedOneWithoutTokensInput
    createdAt?: Date | string | null
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    token: string
    type: string
    clientId: string
    createdAt?: Date | string | null
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: Enumerable<TokenCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutTokensInput>
  }

  export type TokenScalarWhereInput = {
    AND?: Enumerable<TokenScalarWhereInput>
    OR?: Enumerable<TokenScalarWhereInput>
    NOT?: Enumerable<TokenScalarWhereInput>
    token?: StringFilter | string
    type?: StringFilter | string
    userId?: IntFilter | number
    clientId?: StringFilter | string
    createdAt?: DateTimeNullableFilter | Date | string | null
  }

  export type UserCreateWithoutTokensInput = {
    username: string
    password: string
    fullName: string
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: number
    username: string
    password: string
    fullName: string
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type ClientAppCreateWithoutTokensInput = {
    name: string
    clientId: string
    clientSecret: string
  }

  export type ClientAppUncheckedCreateWithoutTokensInput = {
    id?: number
    name: string
    clientId: string
    clientSecret: string
  }

  export type ClientAppCreateOrConnectWithoutTokensInput = {
    where: ClientAppWhereUniqueInput
    create: XOR<ClientAppCreateWithoutTokensInput, ClientAppUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
  }

  export type ClientAppUpsertWithoutTokensInput = {
    update: XOR<ClientAppUpdateWithoutTokensInput, ClientAppUncheckedUpdateWithoutTokensInput>
    create: XOR<ClientAppCreateWithoutTokensInput, ClientAppUncheckedCreateWithoutTokensInput>
  }

  export type ClientAppUpdateWithoutTokensInput = {
    name?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
  }

  export type ClientAppUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateWithoutClientAppInput = {
    token: string
    type: string
    user: UserCreateNestedOneWithoutTokensInput
    createdAt?: Date | string | null
  }

  export type TokenUncheckedCreateWithoutClientAppInput = {
    token: string
    type: string
    userId: number
    createdAt?: Date | string | null
  }

  export type TokenCreateOrConnectWithoutClientAppInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutClientAppInput, TokenUncheckedCreateWithoutClientAppInput>
  }

  export type TokenCreateManyClientAppInputEnvelope = {
    data: Enumerable<TokenCreateManyClientAppInput>
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithWhereUniqueWithoutClientAppInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutClientAppInput, TokenUncheckedUpdateWithoutClientAppInput>
    create: XOR<TokenCreateWithoutClientAppInput, TokenUncheckedCreateWithoutClientAppInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutClientAppInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutClientAppInput, TokenUncheckedUpdateWithoutClientAppInput>
  }

  export type TokenUpdateManyWithWhereWithoutClientAppInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutTokensInput>
  }

  export type TokenCreateManyUserInput = {
    token: string
    type: string
    clientId: string
    createdAt?: Date | string | null
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientApp?: ClientAppUpdateOneRequiredWithoutTokensInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUncheckedUpdateManyWithoutTokensInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenCreateManyClientAppInput = {
    token: string
    type: string
    userId: number
    createdAt?: Date | string | null
  }

  export type TokenUpdateWithoutClientAppInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTokensInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUncheckedUpdateWithoutClientAppInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}