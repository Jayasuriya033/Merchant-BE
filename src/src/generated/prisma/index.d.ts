
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ShopDetails
 * 
 */
export type ShopDetails = $Result.DefaultSelection<Prisma.$ShopDetailsPayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model ShopLogo
 * 
 */
export type ShopLogo = $Result.DefaultSelection<Prisma.$ShopLogoPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model CustomerDetails
 * 
 */
export type CustomerDetails = $Result.DefaultSelection<Prisma.$CustomerDetailsPayload>
/**
 * Model CustomerLogo
 * 
 */
export type CustomerLogo = $Result.DefaultSelection<Prisma.$CustomerLogoPayload>
/**
 * Model SalesDetails
 * 
 */
export type SalesDetails = $Result.DefaultSelection<Prisma.$SalesDetailsPayload>
/**
 * Model BoxCollection
 * 
 */
export type BoxCollection = $Result.DefaultSelection<Prisma.$BoxCollectionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ShopDetails
 * const shopDetails = await prisma.shopDetails.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ShopDetails
   * const shopDetails = await prisma.shopDetails.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.shopDetails`: Exposes CRUD operations for the **ShopDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopDetails
    * const shopDetails = await prisma.shopDetails.findMany()
    * ```
    */
  get shopDetails(): Prisma.ShopDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopLogo`: Exposes CRUD operations for the **ShopLogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopLogos
    * const shopLogos = await prisma.shopLogo.findMany()
    * ```
    */
  get shopLogo(): Prisma.ShopLogoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerDetails`: Exposes CRUD operations for the **CustomerDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerDetails
    * const customerDetails = await prisma.customerDetails.findMany()
    * ```
    */
  get customerDetails(): Prisma.CustomerDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerLogo`: Exposes CRUD operations for the **CustomerLogo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerLogos
    * const customerLogos = await prisma.customerLogo.findMany()
    * ```
    */
  get customerLogo(): Prisma.CustomerLogoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesDetails`: Exposes CRUD operations for the **SalesDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesDetails
    * const salesDetails = await prisma.salesDetails.findMany()
    * ```
    */
  get salesDetails(): Prisma.SalesDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boxCollection`: Exposes CRUD operations for the **BoxCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoxCollections
    * const boxCollections = await prisma.boxCollection.findMany()
    * ```
    */
  get boxCollection(): Prisma.BoxCollectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ShopDetails: 'ShopDetails',
    Owner: 'Owner',
    ShopLogo: 'ShopLogo',
    Role: 'Role',
    CustomerDetails: 'CustomerDetails',
    CustomerLogo: 'CustomerLogo',
    SalesDetails: 'SalesDetails',
    BoxCollection: 'BoxCollection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "shopDetails" | "owner" | "shopLogo" | "role" | "customerDetails" | "customerLogo" | "salesDetails" | "boxCollection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ShopDetails: {
        payload: Prisma.$ShopDetailsPayload<ExtArgs>
        fields: Prisma.ShopDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopDetailsPayload>
          }
          findFirst: {
            args: Prisma.ShopDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopDetailsPayload>
          }
          findMany: {
            args: Prisma.ShopDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopDetailsPayload>[]
          }
          create: {
            args: Prisma.ShopDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopDetailsPayload>
          }
          createMany: {
            args: Prisma.ShopDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopDetailsPayload>
          }
          update: {
            args: Prisma.ShopDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopDetailsPayload>
          }
          deleteMany: {
            args: Prisma.ShopDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopDetailsPayload>
          }
          aggregate: {
            args: Prisma.ShopDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopDetails>
          }
          groupBy: {
            args: Prisma.ShopDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<ShopDetailsCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      ShopLogo: {
        payload: Prisma.$ShopLogoPayload<ExtArgs>
        fields: Prisma.ShopLogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopLogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopLogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopLogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopLogoPayload>
          }
          findFirst: {
            args: Prisma.ShopLogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopLogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopLogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopLogoPayload>
          }
          findMany: {
            args: Prisma.ShopLogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopLogoPayload>[]
          }
          create: {
            args: Prisma.ShopLogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopLogoPayload>
          }
          createMany: {
            args: Prisma.ShopLogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopLogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopLogoPayload>
          }
          update: {
            args: Prisma.ShopLogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopLogoPayload>
          }
          deleteMany: {
            args: Prisma.ShopLogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopLogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopLogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopLogoPayload>
          }
          aggregate: {
            args: Prisma.ShopLogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopLogo>
          }
          groupBy: {
            args: Prisma.ShopLogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopLogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopLogoCountArgs<ExtArgs>
            result: $Utils.Optional<ShopLogoCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      CustomerDetails: {
        payload: Prisma.$CustomerDetailsPayload<ExtArgs>
        fields: Prisma.CustomerDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDetailsPayload>
          }
          findFirst: {
            args: Prisma.CustomerDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDetailsPayload>
          }
          findMany: {
            args: Prisma.CustomerDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDetailsPayload>[]
          }
          create: {
            args: Prisma.CustomerDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDetailsPayload>
          }
          createMany: {
            args: Prisma.CustomerDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDetailsPayload>
          }
          update: {
            args: Prisma.CustomerDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDetailsPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDetailsPayload>
          }
          aggregate: {
            args: Prisma.CustomerDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerDetails>
          }
          groupBy: {
            args: Prisma.CustomerDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerDetailsCountAggregateOutputType> | number
          }
        }
      }
      CustomerLogo: {
        payload: Prisma.$CustomerLogoPayload<ExtArgs>
        fields: Prisma.CustomerLogoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerLogoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLogoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerLogoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLogoPayload>
          }
          findFirst: {
            args: Prisma.CustomerLogoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLogoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerLogoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLogoPayload>
          }
          findMany: {
            args: Prisma.CustomerLogoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLogoPayload>[]
          }
          create: {
            args: Prisma.CustomerLogoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLogoPayload>
          }
          createMany: {
            args: Prisma.CustomerLogoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerLogoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLogoPayload>
          }
          update: {
            args: Prisma.CustomerLogoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLogoPayload>
          }
          deleteMany: {
            args: Prisma.CustomerLogoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerLogoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerLogoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLogoPayload>
          }
          aggregate: {
            args: Prisma.CustomerLogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerLogo>
          }
          groupBy: {
            args: Prisma.CustomerLogoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerLogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerLogoCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerLogoCountAggregateOutputType> | number
          }
        }
      }
      SalesDetails: {
        payload: Prisma.$SalesDetailsPayload<ExtArgs>
        fields: Prisma.SalesDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesDetailsPayload>
          }
          findFirst: {
            args: Prisma.SalesDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesDetailsPayload>
          }
          findMany: {
            args: Prisma.SalesDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesDetailsPayload>[]
          }
          create: {
            args: Prisma.SalesDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesDetailsPayload>
          }
          createMany: {
            args: Prisma.SalesDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SalesDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesDetailsPayload>
          }
          update: {
            args: Prisma.SalesDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesDetailsPayload>
          }
          deleteMany: {
            args: Prisma.SalesDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesDetailsPayload>
          }
          aggregate: {
            args: Prisma.SalesDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesDetails>
          }
          groupBy: {
            args: Prisma.SalesDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<SalesDetailsCountAggregateOutputType> | number
          }
        }
      }
      BoxCollection: {
        payload: Prisma.$BoxCollectionPayload<ExtArgs>
        fields: Prisma.BoxCollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoxCollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxCollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoxCollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxCollectionPayload>
          }
          findFirst: {
            args: Prisma.BoxCollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxCollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoxCollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxCollectionPayload>
          }
          findMany: {
            args: Prisma.BoxCollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxCollectionPayload>[]
          }
          create: {
            args: Prisma.BoxCollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxCollectionPayload>
          }
          createMany: {
            args: Prisma.BoxCollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BoxCollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxCollectionPayload>
          }
          update: {
            args: Prisma.BoxCollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxCollectionPayload>
          }
          deleteMany: {
            args: Prisma.BoxCollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoxCollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoxCollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxCollectionPayload>
          }
          aggregate: {
            args: Prisma.BoxCollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoxCollection>
          }
          groupBy: {
            args: Prisma.BoxCollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoxCollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoxCollectionCountArgs<ExtArgs>
            result: $Utils.Optional<BoxCollectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    shopDetails?: ShopDetailsOmit
    owner?: OwnerOmit
    shopLogo?: ShopLogoOmit
    role?: RoleOmit
    customerDetails?: CustomerDetailsOmit
    customerLogo?: CustomerLogoOmit
    salesDetails?: SalesDetailsOmit
    boxCollection?: BoxCollectionOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ShopDetailsCountOutputType
   */

  export type ShopDetailsCountOutputType = {
    owners: number
    shopLogos: number
    roles: number
    customerDetails: number
    customerLogos: number
    salesDetails: number
    boxCollections: number
  }

  export type ShopDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | ShopDetailsCountOutputTypeCountOwnersArgs
    shopLogos?: boolean | ShopDetailsCountOutputTypeCountShopLogosArgs
    roles?: boolean | ShopDetailsCountOutputTypeCountRolesArgs
    customerDetails?: boolean | ShopDetailsCountOutputTypeCountCustomerDetailsArgs
    customerLogos?: boolean | ShopDetailsCountOutputTypeCountCustomerLogosArgs
    salesDetails?: boolean | ShopDetailsCountOutputTypeCountSalesDetailsArgs
    boxCollections?: boolean | ShopDetailsCountOutputTypeCountBoxCollectionsArgs
  }

  // Custom InputTypes
  /**
   * ShopDetailsCountOutputType without action
   */
  export type ShopDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetailsCountOutputType
     */
    select?: ShopDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopDetailsCountOutputType without action
   */
  export type ShopDetailsCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
  }

  /**
   * ShopDetailsCountOutputType without action
   */
  export type ShopDetailsCountOutputTypeCountShopLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopLogoWhereInput
  }

  /**
   * ShopDetailsCountOutputType without action
   */
  export type ShopDetailsCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * ShopDetailsCountOutputType without action
   */
  export type ShopDetailsCountOutputTypeCountCustomerDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerDetailsWhereInput
  }

  /**
   * ShopDetailsCountOutputType without action
   */
  export type ShopDetailsCountOutputTypeCountCustomerLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerLogoWhereInput
  }

  /**
   * ShopDetailsCountOutputType without action
   */
  export type ShopDetailsCountOutputTypeCountSalesDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesDetailsWhereInput
  }

  /**
   * ShopDetailsCountOutputType without action
   */
  export type ShopDetailsCountOutputTypeCountBoxCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxCollectionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    customerDetails: number
    customerLogos: number
    salesDetails: number
    boxCollections: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerDetails?: boolean | RoleCountOutputTypeCountCustomerDetailsArgs
    customerLogos?: boolean | RoleCountOutputTypeCountCustomerLogosArgs
    salesDetails?: boolean | RoleCountOutputTypeCountSalesDetailsArgs
    boxCollections?: boolean | RoleCountOutputTypeCountBoxCollectionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountCustomerDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerDetailsWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountCustomerLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerLogoWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountSalesDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesDetailsWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountBoxCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxCollectionWhereInput
  }


  /**
   * Count Type CustomerDetailsCountOutputType
   */

  export type CustomerDetailsCountOutputType = {
    customerLogos: number
    salesDetails: number
    boxCollections: number
  }

  export type CustomerDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerLogos?: boolean | CustomerDetailsCountOutputTypeCountCustomerLogosArgs
    salesDetails?: boolean | CustomerDetailsCountOutputTypeCountSalesDetailsArgs
    boxCollections?: boolean | CustomerDetailsCountOutputTypeCountBoxCollectionsArgs
  }

  // Custom InputTypes
  /**
   * CustomerDetailsCountOutputType without action
   */
  export type CustomerDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetailsCountOutputType
     */
    select?: CustomerDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerDetailsCountOutputType without action
   */
  export type CustomerDetailsCountOutputTypeCountCustomerLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerLogoWhereInput
  }

  /**
   * CustomerDetailsCountOutputType without action
   */
  export type CustomerDetailsCountOutputTypeCountSalesDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesDetailsWhereInput
  }

  /**
   * CustomerDetailsCountOutputType without action
   */
  export type CustomerDetailsCountOutputTypeCountBoxCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxCollectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ShopDetails
   */

  export type AggregateShopDetails = {
    _count: ShopDetailsCountAggregateOutputType | null
    _avg: ShopDetailsAvgAggregateOutputType | null
    _sum: ShopDetailsSumAggregateOutputType | null
    _min: ShopDetailsMinAggregateOutputType | null
    _max: ShopDetailsMaxAggregateOutputType | null
  }

  export type ShopDetailsAvgAggregateOutputType = {
    id: number | null
    mobileNumber: number | null
  }

  export type ShopDetailsSumAggregateOutputType = {
    id: number | null
    mobileNumber: bigint | null
  }

  export type ShopDetailsMinAggregateOutputType = {
    id: number | null
    shopName: string | null
    shortName: string | null
    mobileNumber: bigint | null
    email: string | null
    address: string | null
    subscriptionStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ShopDetailsMaxAggregateOutputType = {
    id: number | null
    shopName: string | null
    shortName: string | null
    mobileNumber: bigint | null
    email: string | null
    address: string | null
    subscriptionStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ShopDetailsCountAggregateOutputType = {
    id: number
    shopName: number
    shortName: number
    mobileNumber: number
    email: number
    address: number
    subscriptionStatus: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ShopDetailsAvgAggregateInputType = {
    id?: true
    mobileNumber?: true
  }

  export type ShopDetailsSumAggregateInputType = {
    id?: true
    mobileNumber?: true
  }

  export type ShopDetailsMinAggregateInputType = {
    id?: true
    shopName?: true
    shortName?: true
    mobileNumber?: true
    email?: true
    address?: true
    subscriptionStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ShopDetailsMaxAggregateInputType = {
    id?: true
    shopName?: true
    shortName?: true
    mobileNumber?: true
    email?: true
    address?: true
    subscriptionStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ShopDetailsCountAggregateInputType = {
    id?: true
    shopName?: true
    shortName?: true
    mobileNumber?: true
    email?: true
    address?: true
    subscriptionStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ShopDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopDetails to aggregate.
     */
    where?: ShopDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopDetails to fetch.
     */
    orderBy?: ShopDetailsOrderByWithRelationInput | ShopDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopDetails
    **/
    _count?: true | ShopDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopDetailsMaxAggregateInputType
  }

  export type GetShopDetailsAggregateType<T extends ShopDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateShopDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopDetails[P]>
      : GetScalarType<T[P], AggregateShopDetails[P]>
  }




  export type ShopDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopDetailsWhereInput
    orderBy?: ShopDetailsOrderByWithAggregationInput | ShopDetailsOrderByWithAggregationInput[]
    by: ShopDetailsScalarFieldEnum[] | ShopDetailsScalarFieldEnum
    having?: ShopDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopDetailsCountAggregateInputType | true
    _avg?: ShopDetailsAvgAggregateInputType
    _sum?: ShopDetailsSumAggregateInputType
    _min?: ShopDetailsMinAggregateInputType
    _max?: ShopDetailsMaxAggregateInputType
  }

  export type ShopDetailsGroupByOutputType = {
    id: number
    shopName: string
    shortName: string | null
    mobileNumber: bigint
    email: string | null
    address: string
    subscriptionStatus: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ShopDetailsCountAggregateOutputType | null
    _avg: ShopDetailsAvgAggregateOutputType | null
    _sum: ShopDetailsSumAggregateOutputType | null
    _min: ShopDetailsMinAggregateOutputType | null
    _max: ShopDetailsMaxAggregateOutputType | null
  }

  type GetShopDetailsGroupByPayload<T extends ShopDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], ShopDetailsGroupByOutputType[P]>
        }
      >
    >


  export type ShopDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopName?: boolean
    shortName?: boolean
    mobileNumber?: boolean
    email?: boolean
    address?: boolean
    subscriptionStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    owners?: boolean | ShopDetails$ownersArgs<ExtArgs>
    shopLogos?: boolean | ShopDetails$shopLogosArgs<ExtArgs>
    roles?: boolean | ShopDetails$rolesArgs<ExtArgs>
    customerDetails?: boolean | ShopDetails$customerDetailsArgs<ExtArgs>
    customerLogos?: boolean | ShopDetails$customerLogosArgs<ExtArgs>
    salesDetails?: boolean | ShopDetails$salesDetailsArgs<ExtArgs>
    boxCollections?: boolean | ShopDetails$boxCollectionsArgs<ExtArgs>
    _count?: boolean | ShopDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopDetails"]>



  export type ShopDetailsSelectScalar = {
    id?: boolean
    shopName?: boolean
    shortName?: boolean
    mobileNumber?: boolean
    email?: boolean
    address?: boolean
    subscriptionStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ShopDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopName" | "shortName" | "mobileNumber" | "email" | "address" | "subscriptionStatus" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["shopDetails"]>
  export type ShopDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | ShopDetails$ownersArgs<ExtArgs>
    shopLogos?: boolean | ShopDetails$shopLogosArgs<ExtArgs>
    roles?: boolean | ShopDetails$rolesArgs<ExtArgs>
    customerDetails?: boolean | ShopDetails$customerDetailsArgs<ExtArgs>
    customerLogos?: boolean | ShopDetails$customerLogosArgs<ExtArgs>
    salesDetails?: boolean | ShopDetails$salesDetailsArgs<ExtArgs>
    boxCollections?: boolean | ShopDetails$boxCollectionsArgs<ExtArgs>
    _count?: boolean | ShopDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShopDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopDetails"
    objects: {
      owners: Prisma.$OwnerPayload<ExtArgs>[]
      shopLogos: Prisma.$ShopLogoPayload<ExtArgs>[]
      roles: Prisma.$RolePayload<ExtArgs>[]
      customerDetails: Prisma.$CustomerDetailsPayload<ExtArgs>[]
      customerLogos: Prisma.$CustomerLogoPayload<ExtArgs>[]
      salesDetails: Prisma.$SalesDetailsPayload<ExtArgs>[]
      boxCollections: Prisma.$BoxCollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopName: string
      shortName: string | null
      mobileNumber: bigint
      email: string | null
      address: string
      subscriptionStatus: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["shopDetails"]>
    composites: {}
  }

  type ShopDetailsGetPayload<S extends boolean | null | undefined | ShopDetailsDefaultArgs> = $Result.GetResult<Prisma.$ShopDetailsPayload, S>

  type ShopDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopDetailsCountAggregateInputType | true
    }

  export interface ShopDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopDetails'], meta: { name: 'ShopDetails' } }
    /**
     * Find zero or one ShopDetails that matches the filter.
     * @param {ShopDetailsFindUniqueArgs} args - Arguments to find a ShopDetails
     * @example
     * // Get one ShopDetails
     * const shopDetails = await prisma.shopDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopDetailsFindUniqueArgs>(args: SelectSubset<T, ShopDetailsFindUniqueArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopDetailsFindUniqueOrThrowArgs} args - Arguments to find a ShopDetails
     * @example
     * // Get one ShopDetails
     * const shopDetails = await prisma.shopDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDetailsFindFirstArgs} args - Arguments to find a ShopDetails
     * @example
     * // Get one ShopDetails
     * const shopDetails = await prisma.shopDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopDetailsFindFirstArgs>(args?: SelectSubset<T, ShopDetailsFindFirstArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDetailsFindFirstOrThrowArgs} args - Arguments to find a ShopDetails
     * @example
     * // Get one ShopDetails
     * const shopDetails = await prisma.shopDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopDetails
     * const shopDetails = await prisma.shopDetails.findMany()
     * 
     * // Get first 10 ShopDetails
     * const shopDetails = await prisma.shopDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopDetailsWithIdOnly = await prisma.shopDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopDetailsFindManyArgs>(args?: SelectSubset<T, ShopDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopDetails.
     * @param {ShopDetailsCreateArgs} args - Arguments to create a ShopDetails.
     * @example
     * // Create one ShopDetails
     * const ShopDetails = await prisma.shopDetails.create({
     *   data: {
     *     // ... data to create a ShopDetails
     *   }
     * })
     * 
     */
    create<T extends ShopDetailsCreateArgs>(args: SelectSubset<T, ShopDetailsCreateArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopDetails.
     * @param {ShopDetailsCreateManyArgs} args - Arguments to create many ShopDetails.
     * @example
     * // Create many ShopDetails
     * const shopDetails = await prisma.shopDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopDetailsCreateManyArgs>(args?: SelectSubset<T, ShopDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopDetails.
     * @param {ShopDetailsDeleteArgs} args - Arguments to delete one ShopDetails.
     * @example
     * // Delete one ShopDetails
     * const ShopDetails = await prisma.shopDetails.delete({
     *   where: {
     *     // ... filter to delete one ShopDetails
     *   }
     * })
     * 
     */
    delete<T extends ShopDetailsDeleteArgs>(args: SelectSubset<T, ShopDetailsDeleteArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopDetails.
     * @param {ShopDetailsUpdateArgs} args - Arguments to update one ShopDetails.
     * @example
     * // Update one ShopDetails
     * const shopDetails = await prisma.shopDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopDetailsUpdateArgs>(args: SelectSubset<T, ShopDetailsUpdateArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopDetails.
     * @param {ShopDetailsDeleteManyArgs} args - Arguments to filter ShopDetails to delete.
     * @example
     * // Delete a few ShopDetails
     * const { count } = await prisma.shopDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDetailsDeleteManyArgs>(args?: SelectSubset<T, ShopDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopDetails
     * const shopDetails = await prisma.shopDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopDetailsUpdateManyArgs>(args: SelectSubset<T, ShopDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopDetails.
     * @param {ShopDetailsUpsertArgs} args - Arguments to update or create a ShopDetails.
     * @example
     * // Update or create a ShopDetails
     * const shopDetails = await prisma.shopDetails.upsert({
     *   create: {
     *     // ... data to create a ShopDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopDetails we want to update
     *   }
     * })
     */
    upsert<T extends ShopDetailsUpsertArgs>(args: SelectSubset<T, ShopDetailsUpsertArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDetailsCountArgs} args - Arguments to filter ShopDetails to count.
     * @example
     * // Count the number of ShopDetails
     * const count = await prisma.shopDetails.count({
     *   where: {
     *     // ... the filter for the ShopDetails we want to count
     *   }
     * })
    **/
    count<T extends ShopDetailsCountArgs>(
      args?: Subset<T, ShopDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopDetailsAggregateArgs>(args: Subset<T, ShopDetailsAggregateArgs>): Prisma.PrismaPromise<GetShopDetailsAggregateType<T>>

    /**
     * Group by ShopDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDetailsGroupByArgs} args - Group by arguments.
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
      T extends ShopDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopDetailsGroupByArgs['orderBy'] }
        : { orderBy?: ShopDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ShopDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopDetails model
   */
  readonly fields: ShopDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owners<T extends ShopDetails$ownersArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetails$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shopLogos<T extends ShopDetails$shopLogosArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetails$shopLogosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends ShopDetails$rolesArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetails$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customerDetails<T extends ShopDetails$customerDetailsArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetails$customerDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customerLogos<T extends ShopDetails$customerLogosArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetails$customerLogosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    salesDetails<T extends ShopDetails$salesDetailsArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetails$salesDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boxCollections<T extends ShopDetails$boxCollectionsArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetails$boxCollectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopDetails model
   */
  interface ShopDetailsFieldRefs {
    readonly id: FieldRef<"ShopDetails", 'Int'>
    readonly shopName: FieldRef<"ShopDetails", 'String'>
    readonly shortName: FieldRef<"ShopDetails", 'String'>
    readonly mobileNumber: FieldRef<"ShopDetails", 'BigInt'>
    readonly email: FieldRef<"ShopDetails", 'String'>
    readonly address: FieldRef<"ShopDetails", 'String'>
    readonly subscriptionStatus: FieldRef<"ShopDetails", 'Boolean'>
    readonly createdAt: FieldRef<"ShopDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"ShopDetails", 'DateTime'>
    readonly deletedAt: FieldRef<"ShopDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopDetails findUnique
   */
  export type ShopDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ShopDetails to fetch.
     */
    where: ShopDetailsWhereUniqueInput
  }

  /**
   * ShopDetails findUniqueOrThrow
   */
  export type ShopDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ShopDetails to fetch.
     */
    where: ShopDetailsWhereUniqueInput
  }

  /**
   * ShopDetails findFirst
   */
  export type ShopDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ShopDetails to fetch.
     */
    where?: ShopDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopDetails to fetch.
     */
    orderBy?: ShopDetailsOrderByWithRelationInput | ShopDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopDetails.
     */
    cursor?: ShopDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopDetails.
     */
    distinct?: ShopDetailsScalarFieldEnum | ShopDetailsScalarFieldEnum[]
  }

  /**
   * ShopDetails findFirstOrThrow
   */
  export type ShopDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ShopDetails to fetch.
     */
    where?: ShopDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopDetails to fetch.
     */
    orderBy?: ShopDetailsOrderByWithRelationInput | ShopDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopDetails.
     */
    cursor?: ShopDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopDetails.
     */
    distinct?: ShopDetailsScalarFieldEnum | ShopDetailsScalarFieldEnum[]
  }

  /**
   * ShopDetails findMany
   */
  export type ShopDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
    /**
     * Filter, which ShopDetails to fetch.
     */
    where?: ShopDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopDetails to fetch.
     */
    orderBy?: ShopDetailsOrderByWithRelationInput | ShopDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopDetails.
     */
    cursor?: ShopDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopDetails.
     */
    skip?: number
    distinct?: ShopDetailsScalarFieldEnum | ShopDetailsScalarFieldEnum[]
  }

  /**
   * ShopDetails create
   */
  export type ShopDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopDetails.
     */
    data: XOR<ShopDetailsCreateInput, ShopDetailsUncheckedCreateInput>
  }

  /**
   * ShopDetails createMany
   */
  export type ShopDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopDetails.
     */
    data: ShopDetailsCreateManyInput | ShopDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopDetails update
   */
  export type ShopDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopDetails.
     */
    data: XOR<ShopDetailsUpdateInput, ShopDetailsUncheckedUpdateInput>
    /**
     * Choose, which ShopDetails to update.
     */
    where: ShopDetailsWhereUniqueInput
  }

  /**
   * ShopDetails updateMany
   */
  export type ShopDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopDetails.
     */
    data: XOR<ShopDetailsUpdateManyMutationInput, ShopDetailsUncheckedUpdateManyInput>
    /**
     * Filter which ShopDetails to update
     */
    where?: ShopDetailsWhereInput
    /**
     * Limit how many ShopDetails to update.
     */
    limit?: number
  }

  /**
   * ShopDetails upsert
   */
  export type ShopDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopDetails to update in case it exists.
     */
    where: ShopDetailsWhereUniqueInput
    /**
     * In case the ShopDetails found by the `where` argument doesn't exist, create a new ShopDetails with this data.
     */
    create: XOR<ShopDetailsCreateInput, ShopDetailsUncheckedCreateInput>
    /**
     * In case the ShopDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopDetailsUpdateInput, ShopDetailsUncheckedUpdateInput>
  }

  /**
   * ShopDetails delete
   */
  export type ShopDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
    /**
     * Filter which ShopDetails to delete.
     */
    where: ShopDetailsWhereUniqueInput
  }

  /**
   * ShopDetails deleteMany
   */
  export type ShopDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopDetails to delete
     */
    where?: ShopDetailsWhereInput
    /**
     * Limit how many ShopDetails to delete.
     */
    limit?: number
  }

  /**
   * ShopDetails.owners
   */
  export type ShopDetails$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    cursor?: OwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * ShopDetails.shopLogos
   */
  export type ShopDetails$shopLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    where?: ShopLogoWhereInput
    orderBy?: ShopLogoOrderByWithRelationInput | ShopLogoOrderByWithRelationInput[]
    cursor?: ShopLogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopLogoScalarFieldEnum | ShopLogoScalarFieldEnum[]
  }

  /**
   * ShopDetails.roles
   */
  export type ShopDetails$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * ShopDetails.customerDetails
   */
  export type ShopDetails$customerDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    where?: CustomerDetailsWhereInput
    orderBy?: CustomerDetailsOrderByWithRelationInput | CustomerDetailsOrderByWithRelationInput[]
    cursor?: CustomerDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerDetailsScalarFieldEnum | CustomerDetailsScalarFieldEnum[]
  }

  /**
   * ShopDetails.customerLogos
   */
  export type ShopDetails$customerLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    where?: CustomerLogoWhereInput
    orderBy?: CustomerLogoOrderByWithRelationInput | CustomerLogoOrderByWithRelationInput[]
    cursor?: CustomerLogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerLogoScalarFieldEnum | CustomerLogoScalarFieldEnum[]
  }

  /**
   * ShopDetails.salesDetails
   */
  export type ShopDetails$salesDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    where?: SalesDetailsWhereInput
    orderBy?: SalesDetailsOrderByWithRelationInput | SalesDetailsOrderByWithRelationInput[]
    cursor?: SalesDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesDetailsScalarFieldEnum | SalesDetailsScalarFieldEnum[]
  }

  /**
   * ShopDetails.boxCollections
   */
  export type ShopDetails$boxCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    where?: BoxCollectionWhereInput
    orderBy?: BoxCollectionOrderByWithRelationInput | BoxCollectionOrderByWithRelationInput[]
    cursor?: BoxCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoxCollectionScalarFieldEnum | BoxCollectionScalarFieldEnum[]
  }

  /**
   * ShopDetails without action
   */
  export type ShopDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDetails
     */
    select?: ShopDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopDetails
     */
    omit?: ShopDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerAvgAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type OwnerSumAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type OwnerMinAggregateOutputType = {
    id: number | null
    shopId: number | null
    name: string | null
    mobileNumber: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: number | null
    shopId: number | null
    name: string | null
    mobileNumber: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    shopId: number
    name: number
    mobileNumber: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type OwnerAvgAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type OwnerSumAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type OwnerMinAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    mobileNumber?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    mobileNumber?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    mobileNumber?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _avg?: OwnerAvgAggregateInputType
    _sum?: OwnerSumAggregateInputType
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: number
    shopId: number
    name: string
    mobileNumber: string
    email: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    mobileNumber?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>



  export type OwnerSelectScalar = {
    id?: boolean
    shopId?: boolean
    name?: boolean
    mobileNumber?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "name" | "mobileNumber" | "email" | "password" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
  }

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      shop: Prisma.$ShopDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopId: number
      name: string
      mobileNumber: string
      email: string | null
      password: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
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
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetailsDefaultArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'Int'>
    readonly shopId: FieldRef<"Owner", 'Int'>
    readonly name: FieldRef<"Owner", 'String'>
    readonly mobileNumber: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly password: FieldRef<"Owner", 'String'>
    readonly createdAt: FieldRef<"Owner", 'DateTime'>
    readonly updatedAt: FieldRef<"Owner", 'DateTime'>
    readonly deletedAt: FieldRef<"Owner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model ShopLogo
   */

  export type AggregateShopLogo = {
    _count: ShopLogoCountAggregateOutputType | null
    _avg: ShopLogoAvgAggregateOutputType | null
    _sum: ShopLogoSumAggregateOutputType | null
    _min: ShopLogoMinAggregateOutputType | null
    _max: ShopLogoMaxAggregateOutputType | null
  }

  export type ShopLogoAvgAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type ShopLogoSumAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type ShopLogoMinAggregateOutputType = {
    id: number | null
    shopId: number | null
    fileName: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ShopLogoMaxAggregateOutputType = {
    id: number | null
    shopId: number | null
    fileName: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ShopLogoCountAggregateOutputType = {
    id: number
    shopId: number
    fileName: number
    filePath: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ShopLogoAvgAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type ShopLogoSumAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type ShopLogoMinAggregateInputType = {
    id?: true
    shopId?: true
    fileName?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ShopLogoMaxAggregateInputType = {
    id?: true
    shopId?: true
    fileName?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ShopLogoCountAggregateInputType = {
    id?: true
    shopId?: true
    fileName?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ShopLogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopLogo to aggregate.
     */
    where?: ShopLogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopLogos to fetch.
     */
    orderBy?: ShopLogoOrderByWithRelationInput | ShopLogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopLogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopLogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopLogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopLogos
    **/
    _count?: true | ShopLogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopLogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopLogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopLogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopLogoMaxAggregateInputType
  }

  export type GetShopLogoAggregateType<T extends ShopLogoAggregateArgs> = {
        [P in keyof T & keyof AggregateShopLogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopLogo[P]>
      : GetScalarType<T[P], AggregateShopLogo[P]>
  }




  export type ShopLogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopLogoWhereInput
    orderBy?: ShopLogoOrderByWithAggregationInput | ShopLogoOrderByWithAggregationInput[]
    by: ShopLogoScalarFieldEnum[] | ShopLogoScalarFieldEnum
    having?: ShopLogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopLogoCountAggregateInputType | true
    _avg?: ShopLogoAvgAggregateInputType
    _sum?: ShopLogoSumAggregateInputType
    _min?: ShopLogoMinAggregateInputType
    _max?: ShopLogoMaxAggregateInputType
  }

  export type ShopLogoGroupByOutputType = {
    id: number
    shopId: number
    fileName: string
    filePath: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ShopLogoCountAggregateOutputType | null
    _avg: ShopLogoAvgAggregateOutputType | null
    _sum: ShopLogoSumAggregateOutputType | null
    _min: ShopLogoMinAggregateOutputType | null
    _max: ShopLogoMaxAggregateOutputType | null
  }

  type GetShopLogoGroupByPayload<T extends ShopLogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopLogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopLogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopLogoGroupByOutputType[P]>
            : GetScalarType<T[P], ShopLogoGroupByOutputType[P]>
        }
      >
    >


  export type ShopLogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    fileName?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopLogo"]>



  export type ShopLogoSelectScalar = {
    id?: boolean
    shopId?: boolean
    fileName?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ShopLogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "fileName" | "filePath" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["shopLogo"]>
  export type ShopLogoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
  }

  export type $ShopLogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopLogo"
    objects: {
      shop: Prisma.$ShopDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopId: number
      fileName: string
      filePath: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["shopLogo"]>
    composites: {}
  }

  type ShopLogoGetPayload<S extends boolean | null | undefined | ShopLogoDefaultArgs> = $Result.GetResult<Prisma.$ShopLogoPayload, S>

  type ShopLogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopLogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopLogoCountAggregateInputType | true
    }

  export interface ShopLogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopLogo'], meta: { name: 'ShopLogo' } }
    /**
     * Find zero or one ShopLogo that matches the filter.
     * @param {ShopLogoFindUniqueArgs} args - Arguments to find a ShopLogo
     * @example
     * // Get one ShopLogo
     * const shopLogo = await prisma.shopLogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopLogoFindUniqueArgs>(args: SelectSubset<T, ShopLogoFindUniqueArgs<ExtArgs>>): Prisma__ShopLogoClient<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopLogo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopLogoFindUniqueOrThrowArgs} args - Arguments to find a ShopLogo
     * @example
     * // Get one ShopLogo
     * const shopLogo = await prisma.shopLogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopLogoFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopLogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopLogoClient<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopLogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopLogoFindFirstArgs} args - Arguments to find a ShopLogo
     * @example
     * // Get one ShopLogo
     * const shopLogo = await prisma.shopLogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopLogoFindFirstArgs>(args?: SelectSubset<T, ShopLogoFindFirstArgs<ExtArgs>>): Prisma__ShopLogoClient<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopLogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopLogoFindFirstOrThrowArgs} args - Arguments to find a ShopLogo
     * @example
     * // Get one ShopLogo
     * const shopLogo = await prisma.shopLogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopLogoFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopLogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopLogoClient<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopLogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopLogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopLogos
     * const shopLogos = await prisma.shopLogo.findMany()
     * 
     * // Get first 10 ShopLogos
     * const shopLogos = await prisma.shopLogo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopLogoWithIdOnly = await prisma.shopLogo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopLogoFindManyArgs>(args?: SelectSubset<T, ShopLogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopLogo.
     * @param {ShopLogoCreateArgs} args - Arguments to create a ShopLogo.
     * @example
     * // Create one ShopLogo
     * const ShopLogo = await prisma.shopLogo.create({
     *   data: {
     *     // ... data to create a ShopLogo
     *   }
     * })
     * 
     */
    create<T extends ShopLogoCreateArgs>(args: SelectSubset<T, ShopLogoCreateArgs<ExtArgs>>): Prisma__ShopLogoClient<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopLogos.
     * @param {ShopLogoCreateManyArgs} args - Arguments to create many ShopLogos.
     * @example
     * // Create many ShopLogos
     * const shopLogo = await prisma.shopLogo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopLogoCreateManyArgs>(args?: SelectSubset<T, ShopLogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShopLogo.
     * @param {ShopLogoDeleteArgs} args - Arguments to delete one ShopLogo.
     * @example
     * // Delete one ShopLogo
     * const ShopLogo = await prisma.shopLogo.delete({
     *   where: {
     *     // ... filter to delete one ShopLogo
     *   }
     * })
     * 
     */
    delete<T extends ShopLogoDeleteArgs>(args: SelectSubset<T, ShopLogoDeleteArgs<ExtArgs>>): Prisma__ShopLogoClient<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopLogo.
     * @param {ShopLogoUpdateArgs} args - Arguments to update one ShopLogo.
     * @example
     * // Update one ShopLogo
     * const shopLogo = await prisma.shopLogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopLogoUpdateArgs>(args: SelectSubset<T, ShopLogoUpdateArgs<ExtArgs>>): Prisma__ShopLogoClient<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopLogos.
     * @param {ShopLogoDeleteManyArgs} args - Arguments to filter ShopLogos to delete.
     * @example
     * // Delete a few ShopLogos
     * const { count } = await prisma.shopLogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopLogoDeleteManyArgs>(args?: SelectSubset<T, ShopLogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopLogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopLogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopLogos
     * const shopLogo = await prisma.shopLogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopLogoUpdateManyArgs>(args: SelectSubset<T, ShopLogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopLogo.
     * @param {ShopLogoUpsertArgs} args - Arguments to update or create a ShopLogo.
     * @example
     * // Update or create a ShopLogo
     * const shopLogo = await prisma.shopLogo.upsert({
     *   create: {
     *     // ... data to create a ShopLogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopLogo we want to update
     *   }
     * })
     */
    upsert<T extends ShopLogoUpsertArgs>(args: SelectSubset<T, ShopLogoUpsertArgs<ExtArgs>>): Prisma__ShopLogoClient<$Result.GetResult<Prisma.$ShopLogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopLogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopLogoCountArgs} args - Arguments to filter ShopLogos to count.
     * @example
     * // Count the number of ShopLogos
     * const count = await prisma.shopLogo.count({
     *   where: {
     *     // ... the filter for the ShopLogos we want to count
     *   }
     * })
    **/
    count<T extends ShopLogoCountArgs>(
      args?: Subset<T, ShopLogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopLogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopLogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopLogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopLogoAggregateArgs>(args: Subset<T, ShopLogoAggregateArgs>): Prisma.PrismaPromise<GetShopLogoAggregateType<T>>

    /**
     * Group by ShopLogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopLogoGroupByArgs} args - Group by arguments.
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
      T extends ShopLogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopLogoGroupByArgs['orderBy'] }
        : { orderBy?: ShopLogoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ShopLogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopLogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopLogo model
   */
  readonly fields: ShopLogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopLogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopLogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetailsDefaultArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopLogo model
   */
  interface ShopLogoFieldRefs {
    readonly id: FieldRef<"ShopLogo", 'Int'>
    readonly shopId: FieldRef<"ShopLogo", 'Int'>
    readonly fileName: FieldRef<"ShopLogo", 'String'>
    readonly filePath: FieldRef<"ShopLogo", 'String'>
    readonly createdAt: FieldRef<"ShopLogo", 'DateTime'>
    readonly updatedAt: FieldRef<"ShopLogo", 'DateTime'>
    readonly deletedAt: FieldRef<"ShopLogo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopLogo findUnique
   */
  export type ShopLogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    /**
     * Filter, which ShopLogo to fetch.
     */
    where: ShopLogoWhereUniqueInput
  }

  /**
   * ShopLogo findUniqueOrThrow
   */
  export type ShopLogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    /**
     * Filter, which ShopLogo to fetch.
     */
    where: ShopLogoWhereUniqueInput
  }

  /**
   * ShopLogo findFirst
   */
  export type ShopLogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    /**
     * Filter, which ShopLogo to fetch.
     */
    where?: ShopLogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopLogos to fetch.
     */
    orderBy?: ShopLogoOrderByWithRelationInput | ShopLogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopLogos.
     */
    cursor?: ShopLogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopLogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopLogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopLogos.
     */
    distinct?: ShopLogoScalarFieldEnum | ShopLogoScalarFieldEnum[]
  }

  /**
   * ShopLogo findFirstOrThrow
   */
  export type ShopLogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    /**
     * Filter, which ShopLogo to fetch.
     */
    where?: ShopLogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopLogos to fetch.
     */
    orderBy?: ShopLogoOrderByWithRelationInput | ShopLogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopLogos.
     */
    cursor?: ShopLogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopLogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopLogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopLogos.
     */
    distinct?: ShopLogoScalarFieldEnum | ShopLogoScalarFieldEnum[]
  }

  /**
   * ShopLogo findMany
   */
  export type ShopLogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    /**
     * Filter, which ShopLogos to fetch.
     */
    where?: ShopLogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopLogos to fetch.
     */
    orderBy?: ShopLogoOrderByWithRelationInput | ShopLogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopLogos.
     */
    cursor?: ShopLogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopLogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopLogos.
     */
    skip?: number
    distinct?: ShopLogoScalarFieldEnum | ShopLogoScalarFieldEnum[]
  }

  /**
   * ShopLogo create
   */
  export type ShopLogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopLogo.
     */
    data: XOR<ShopLogoCreateInput, ShopLogoUncheckedCreateInput>
  }

  /**
   * ShopLogo createMany
   */
  export type ShopLogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopLogos.
     */
    data: ShopLogoCreateManyInput | ShopLogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopLogo update
   */
  export type ShopLogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopLogo.
     */
    data: XOR<ShopLogoUpdateInput, ShopLogoUncheckedUpdateInput>
    /**
     * Choose, which ShopLogo to update.
     */
    where: ShopLogoWhereUniqueInput
  }

  /**
   * ShopLogo updateMany
   */
  export type ShopLogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopLogos.
     */
    data: XOR<ShopLogoUpdateManyMutationInput, ShopLogoUncheckedUpdateManyInput>
    /**
     * Filter which ShopLogos to update
     */
    where?: ShopLogoWhereInput
    /**
     * Limit how many ShopLogos to update.
     */
    limit?: number
  }

  /**
   * ShopLogo upsert
   */
  export type ShopLogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopLogo to update in case it exists.
     */
    where: ShopLogoWhereUniqueInput
    /**
     * In case the ShopLogo found by the `where` argument doesn't exist, create a new ShopLogo with this data.
     */
    create: XOR<ShopLogoCreateInput, ShopLogoUncheckedCreateInput>
    /**
     * In case the ShopLogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopLogoUpdateInput, ShopLogoUncheckedUpdateInput>
  }

  /**
   * ShopLogo delete
   */
  export type ShopLogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
    /**
     * Filter which ShopLogo to delete.
     */
    where: ShopLogoWhereUniqueInput
  }

  /**
   * ShopLogo deleteMany
   */
  export type ShopLogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopLogos to delete
     */
    where?: ShopLogoWhereInput
    /**
     * Limit how many ShopLogos to delete.
     */
    limit?: number
  }

  /**
   * ShopLogo without action
   */
  export type ShopLogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopLogo
     */
    select?: ShopLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopLogo
     */
    omit?: ShopLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopLogoInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    shopId: number | null
    mobileNumber: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    shopId: number | null
    mobileNumber: bigint | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    shopId: number | null
    name: string | null
    mobileNumber: bigint | null
    email: string | null
    roleName: string | null
    access: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    shopId: number | null
    name: string | null
    mobileNumber: bigint | null
    email: string | null
    roleName: string | null
    access: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    shopId: number
    name: number
    mobileNumber: number
    email: number
    roleName: number
    access: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    shopId?: true
    mobileNumber?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    shopId?: true
    mobileNumber?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    mobileNumber?: true
    email?: true
    roleName?: true
    access?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    mobileNumber?: true
    email?: true
    roleName?: true
    access?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    mobileNumber?: true
    email?: true
    roleName?: true
    access?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    shopId: number
    name: string
    mobileNumber: bigint
    email: string | null
    roleName: string
    access: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    mobileNumber?: boolean
    email?: boolean
    roleName?: boolean
    access?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customerDetails?: boolean | Role$customerDetailsArgs<ExtArgs>
    customerLogos?: boolean | Role$customerLogosArgs<ExtArgs>
    salesDetails?: boolean | Role$salesDetailsArgs<ExtArgs>
    boxCollections?: boolean | Role$boxCollectionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    shopId?: boolean
    name?: boolean
    mobileNumber?: boolean
    email?: boolean
    roleName?: boolean
    access?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "name" | "mobileNumber" | "email" | "roleName" | "access" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customerDetails?: boolean | Role$customerDetailsArgs<ExtArgs>
    customerLogos?: boolean | Role$customerLogosArgs<ExtArgs>
    salesDetails?: boolean | Role$salesDetailsArgs<ExtArgs>
    boxCollections?: boolean | Role$boxCollectionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      shop: Prisma.$ShopDetailsPayload<ExtArgs>
      customerDetails: Prisma.$CustomerDetailsPayload<ExtArgs>[]
      customerLogos: Prisma.$CustomerLogoPayload<ExtArgs>[]
      salesDetails: Prisma.$SalesDetailsPayload<ExtArgs>[]
      boxCollections: Prisma.$BoxCollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shopId: number
      name: string
      mobileNumber: bigint
      email: string | null
      roleName: string
      access: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetailsDefaultArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customerDetails<T extends Role$customerDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Role$customerDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customerLogos<T extends Role$customerLogosArgs<ExtArgs> = {}>(args?: Subset<T, Role$customerLogosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    salesDetails<T extends Role$salesDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Role$salesDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boxCollections<T extends Role$boxCollectionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$boxCollectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly shopId: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly mobileNumber: FieldRef<"Role", 'BigInt'>
    readonly email: FieldRef<"Role", 'String'>
    readonly roleName: FieldRef<"Role", 'String'>
    readonly access: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly deletedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.customerDetails
   */
  export type Role$customerDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    where?: CustomerDetailsWhereInput
    orderBy?: CustomerDetailsOrderByWithRelationInput | CustomerDetailsOrderByWithRelationInput[]
    cursor?: CustomerDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerDetailsScalarFieldEnum | CustomerDetailsScalarFieldEnum[]
  }

  /**
   * Role.customerLogos
   */
  export type Role$customerLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    where?: CustomerLogoWhereInput
    orderBy?: CustomerLogoOrderByWithRelationInput | CustomerLogoOrderByWithRelationInput[]
    cursor?: CustomerLogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerLogoScalarFieldEnum | CustomerLogoScalarFieldEnum[]
  }

  /**
   * Role.salesDetails
   */
  export type Role$salesDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    where?: SalesDetailsWhereInput
    orderBy?: SalesDetailsOrderByWithRelationInput | SalesDetailsOrderByWithRelationInput[]
    cursor?: SalesDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesDetailsScalarFieldEnum | SalesDetailsScalarFieldEnum[]
  }

  /**
   * Role.boxCollections
   */
  export type Role$boxCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    where?: BoxCollectionWhereInput
    orderBy?: BoxCollectionOrderByWithRelationInput | BoxCollectionOrderByWithRelationInput[]
    cursor?: BoxCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoxCollectionScalarFieldEnum | BoxCollectionScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model CustomerDetails
   */

  export type AggregateCustomerDetails = {
    _count: CustomerDetailsCountAggregateOutputType | null
    _avg: CustomerDetailsAvgAggregateOutputType | null
    _sum: CustomerDetailsSumAggregateOutputType | null
    _min: CustomerDetailsMinAggregateOutputType | null
    _max: CustomerDetailsMaxAggregateOutputType | null
  }

  export type CustomerDetailsAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    mobileNumber: number | null
    totalBoxes: number | null
    totalAmount: number | null
    totalDiscountAmount: number | null
    settledBoxes: number | null
    remainingBoxes: number | null
    settledAmount: number | null
    remainingAmount: number | null
  }

  export type CustomerDetailsSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    mobileNumber: bigint | null
    totalBoxes: number | null
    totalAmount: bigint | null
    totalDiscountAmount: bigint | null
    settledBoxes: number | null
    remainingBoxes: number | null
    settledAmount: bigint | null
    remainingAmount: bigint | null
  }

  export type CustomerDetailsMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    name: string | null
    mobileNumber: bigint | null
    email: string | null
    totalBoxes: number | null
    totalAmount: bigint | null
    totalDiscountAmount: bigint | null
    settledBoxes: number | null
    remainingBoxes: number | null
    settledAmount: bigint | null
    remainingAmount: bigint | null
    minAmountForOneBox: string | null
    maxAmountForOneBox: string | null
    averageAmountOneBox: string | null
    minDisForOneBox: string | null
    maxDisForOneBox: string | null
    averageDisOneBox: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CustomerDetailsMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    name: string | null
    mobileNumber: bigint | null
    email: string | null
    totalBoxes: number | null
    totalAmount: bigint | null
    totalDiscountAmount: bigint | null
    settledBoxes: number | null
    remainingBoxes: number | null
    settledAmount: bigint | null
    remainingAmount: bigint | null
    minAmountForOneBox: string | null
    maxAmountForOneBox: string | null
    averageAmountOneBox: string | null
    minDisForOneBox: string | null
    maxDisForOneBox: string | null
    averageDisOneBox: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CustomerDetailsCountAggregateOutputType = {
    id: number
    roleId: number
    shopId: number
    name: number
    mobileNumber: number
    email: number
    totalBoxes: number
    totalAmount: number
    totalDiscountAmount: number
    settledBoxes: number
    remainingBoxes: number
    settledAmount: number
    remainingAmount: number
    minAmountForOneBox: number
    maxAmountForOneBox: number
    averageAmountOneBox: number
    minDisForOneBox: number
    maxDisForOneBox: number
    averageDisOneBox: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CustomerDetailsAvgAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    mobileNumber?: true
    totalBoxes?: true
    totalAmount?: true
    totalDiscountAmount?: true
    settledBoxes?: true
    remainingBoxes?: true
    settledAmount?: true
    remainingAmount?: true
  }

  export type CustomerDetailsSumAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    mobileNumber?: true
    totalBoxes?: true
    totalAmount?: true
    totalDiscountAmount?: true
    settledBoxes?: true
    remainingBoxes?: true
    settledAmount?: true
    remainingAmount?: true
  }

  export type CustomerDetailsMinAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    name?: true
    mobileNumber?: true
    email?: true
    totalBoxes?: true
    totalAmount?: true
    totalDiscountAmount?: true
    settledBoxes?: true
    remainingBoxes?: true
    settledAmount?: true
    remainingAmount?: true
    minAmountForOneBox?: true
    maxAmountForOneBox?: true
    averageAmountOneBox?: true
    minDisForOneBox?: true
    maxDisForOneBox?: true
    averageDisOneBox?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CustomerDetailsMaxAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    name?: true
    mobileNumber?: true
    email?: true
    totalBoxes?: true
    totalAmount?: true
    totalDiscountAmount?: true
    settledBoxes?: true
    remainingBoxes?: true
    settledAmount?: true
    remainingAmount?: true
    minAmountForOneBox?: true
    maxAmountForOneBox?: true
    averageAmountOneBox?: true
    minDisForOneBox?: true
    maxDisForOneBox?: true
    averageDisOneBox?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CustomerDetailsCountAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    name?: true
    mobileNumber?: true
    email?: true
    totalBoxes?: true
    totalAmount?: true
    totalDiscountAmount?: true
    settledBoxes?: true
    remainingBoxes?: true
    settledAmount?: true
    remainingAmount?: true
    minAmountForOneBox?: true
    maxAmountForOneBox?: true
    averageAmountOneBox?: true
    minDisForOneBox?: true
    maxDisForOneBox?: true
    averageDisOneBox?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CustomerDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerDetails to aggregate.
     */
    where?: CustomerDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDetails to fetch.
     */
    orderBy?: CustomerDetailsOrderByWithRelationInput | CustomerDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerDetails
    **/
    _count?: true | CustomerDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerDetailsMaxAggregateInputType
  }

  export type GetCustomerDetailsAggregateType<T extends CustomerDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerDetails[P]>
      : GetScalarType<T[P], AggregateCustomerDetails[P]>
  }




  export type CustomerDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerDetailsWhereInput
    orderBy?: CustomerDetailsOrderByWithAggregationInput | CustomerDetailsOrderByWithAggregationInput[]
    by: CustomerDetailsScalarFieldEnum[] | CustomerDetailsScalarFieldEnum
    having?: CustomerDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerDetailsCountAggregateInputType | true
    _avg?: CustomerDetailsAvgAggregateInputType
    _sum?: CustomerDetailsSumAggregateInputType
    _min?: CustomerDetailsMinAggregateInputType
    _max?: CustomerDetailsMaxAggregateInputType
  }

  export type CustomerDetailsGroupByOutputType = {
    id: number
    roleId: number
    shopId: number
    name: string
    mobileNumber: bigint
    email: string | null
    totalBoxes: number | null
    totalAmount: bigint | null
    totalDiscountAmount: bigint | null
    settledBoxes: number | null
    remainingBoxes: number | null
    settledAmount: bigint | null
    remainingAmount: bigint | null
    minAmountForOneBox: string | null
    maxAmountForOneBox: string | null
    averageAmountOneBox: string | null
    minDisForOneBox: string | null
    maxDisForOneBox: string | null
    averageDisOneBox: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CustomerDetailsCountAggregateOutputType | null
    _avg: CustomerDetailsAvgAggregateOutputType | null
    _sum: CustomerDetailsSumAggregateOutputType | null
    _min: CustomerDetailsMinAggregateOutputType | null
    _max: CustomerDetailsMaxAggregateOutputType | null
  }

  type GetCustomerDetailsGroupByPayload<T extends CustomerDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerDetailsGroupByOutputType[P]>
        }
      >
    >


  export type CustomerDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    shopId?: boolean
    name?: boolean
    mobileNumber?: boolean
    email?: boolean
    totalBoxes?: boolean
    totalAmount?: boolean
    totalDiscountAmount?: boolean
    settledBoxes?: boolean
    remainingBoxes?: boolean
    settledAmount?: boolean
    remainingAmount?: boolean
    minAmountForOneBox?: boolean
    maxAmountForOneBox?: boolean
    averageAmountOneBox?: boolean
    minDisForOneBox?: boolean
    maxDisForOneBox?: boolean
    averageDisOneBox?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customerLogos?: boolean | CustomerDetails$customerLogosArgs<ExtArgs>
    salesDetails?: boolean | CustomerDetails$salesDetailsArgs<ExtArgs>
    boxCollections?: boolean | CustomerDetails$boxCollectionsArgs<ExtArgs>
    _count?: boolean | CustomerDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerDetails"]>



  export type CustomerDetailsSelectScalar = {
    id?: boolean
    roleId?: boolean
    shopId?: boolean
    name?: boolean
    mobileNumber?: boolean
    email?: boolean
    totalBoxes?: boolean
    totalAmount?: boolean
    totalDiscountAmount?: boolean
    settledBoxes?: boolean
    remainingBoxes?: boolean
    settledAmount?: boolean
    remainingAmount?: boolean
    minAmountForOneBox?: boolean
    maxAmountForOneBox?: boolean
    averageAmountOneBox?: boolean
    minDisForOneBox?: boolean
    maxDisForOneBox?: boolean
    averageDisOneBox?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CustomerDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "shopId" | "name" | "mobileNumber" | "email" | "totalBoxes" | "totalAmount" | "totalDiscountAmount" | "settledBoxes" | "remainingBoxes" | "settledAmount" | "remainingAmount" | "minAmountForOneBox" | "maxAmountForOneBox" | "averageAmountOneBox" | "minDisForOneBox" | "maxDisForOneBox" | "averageDisOneBox" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["customerDetails"]>
  export type CustomerDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customerLogos?: boolean | CustomerDetails$customerLogosArgs<ExtArgs>
    salesDetails?: boolean | CustomerDetails$salesDetailsArgs<ExtArgs>
    boxCollections?: boolean | CustomerDetails$boxCollectionsArgs<ExtArgs>
    _count?: boolean | CustomerDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerDetails"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      shop: Prisma.$ShopDetailsPayload<ExtArgs>
      customerLogos: Prisma.$CustomerLogoPayload<ExtArgs>[]
      salesDetails: Prisma.$SalesDetailsPayload<ExtArgs>[]
      boxCollections: Prisma.$BoxCollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      shopId: number
      name: string
      mobileNumber: bigint
      email: string | null
      totalBoxes: number | null
      totalAmount: bigint | null
      totalDiscountAmount: bigint | null
      settledBoxes: number | null
      remainingBoxes: number | null
      settledAmount: bigint | null
      remainingAmount: bigint | null
      minAmountForOneBox: string | null
      maxAmountForOneBox: string | null
      averageAmountOneBox: string | null
      minDisForOneBox: string | null
      maxDisForOneBox: string | null
      averageDisOneBox: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["customerDetails"]>
    composites: {}
  }

  type CustomerDetailsGetPayload<S extends boolean | null | undefined | CustomerDetailsDefaultArgs> = $Result.GetResult<Prisma.$CustomerDetailsPayload, S>

  type CustomerDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerDetailsCountAggregateInputType | true
    }

  export interface CustomerDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerDetails'], meta: { name: 'CustomerDetails' } }
    /**
     * Find zero or one CustomerDetails that matches the filter.
     * @param {CustomerDetailsFindUniqueArgs} args - Arguments to find a CustomerDetails
     * @example
     * // Get one CustomerDetails
     * const customerDetails = await prisma.customerDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerDetailsFindUniqueArgs>(args: SelectSubset<T, CustomerDetailsFindUniqueArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerDetailsFindUniqueOrThrowArgs} args - Arguments to find a CustomerDetails
     * @example
     * // Get one CustomerDetails
     * const customerDetails = await prisma.customerDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDetailsFindFirstArgs} args - Arguments to find a CustomerDetails
     * @example
     * // Get one CustomerDetails
     * const customerDetails = await prisma.customerDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerDetailsFindFirstArgs>(args?: SelectSubset<T, CustomerDetailsFindFirstArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDetailsFindFirstOrThrowArgs} args - Arguments to find a CustomerDetails
     * @example
     * // Get one CustomerDetails
     * const customerDetails = await prisma.customerDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerDetails
     * const customerDetails = await prisma.customerDetails.findMany()
     * 
     * // Get first 10 CustomerDetails
     * const customerDetails = await prisma.customerDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerDetailsWithIdOnly = await prisma.customerDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerDetailsFindManyArgs>(args?: SelectSubset<T, CustomerDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerDetails.
     * @param {CustomerDetailsCreateArgs} args - Arguments to create a CustomerDetails.
     * @example
     * // Create one CustomerDetails
     * const CustomerDetails = await prisma.customerDetails.create({
     *   data: {
     *     // ... data to create a CustomerDetails
     *   }
     * })
     * 
     */
    create<T extends CustomerDetailsCreateArgs>(args: SelectSubset<T, CustomerDetailsCreateArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerDetails.
     * @param {CustomerDetailsCreateManyArgs} args - Arguments to create many CustomerDetails.
     * @example
     * // Create many CustomerDetails
     * const customerDetails = await prisma.customerDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerDetailsCreateManyArgs>(args?: SelectSubset<T, CustomerDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerDetails.
     * @param {CustomerDetailsDeleteArgs} args - Arguments to delete one CustomerDetails.
     * @example
     * // Delete one CustomerDetails
     * const CustomerDetails = await prisma.customerDetails.delete({
     *   where: {
     *     // ... filter to delete one CustomerDetails
     *   }
     * })
     * 
     */
    delete<T extends CustomerDetailsDeleteArgs>(args: SelectSubset<T, CustomerDetailsDeleteArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerDetails.
     * @param {CustomerDetailsUpdateArgs} args - Arguments to update one CustomerDetails.
     * @example
     * // Update one CustomerDetails
     * const customerDetails = await prisma.customerDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerDetailsUpdateArgs>(args: SelectSubset<T, CustomerDetailsUpdateArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerDetails.
     * @param {CustomerDetailsDeleteManyArgs} args - Arguments to filter CustomerDetails to delete.
     * @example
     * // Delete a few CustomerDetails
     * const { count } = await prisma.customerDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDetailsDeleteManyArgs>(args?: SelectSubset<T, CustomerDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerDetails
     * const customerDetails = await prisma.customerDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerDetailsUpdateManyArgs>(args: SelectSubset<T, CustomerDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerDetails.
     * @param {CustomerDetailsUpsertArgs} args - Arguments to update or create a CustomerDetails.
     * @example
     * // Update or create a CustomerDetails
     * const customerDetails = await prisma.customerDetails.upsert({
     *   create: {
     *     // ... data to create a CustomerDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerDetails we want to update
     *   }
     * })
     */
    upsert<T extends CustomerDetailsUpsertArgs>(args: SelectSubset<T, CustomerDetailsUpsertArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDetailsCountArgs} args - Arguments to filter CustomerDetails to count.
     * @example
     * // Count the number of CustomerDetails
     * const count = await prisma.customerDetails.count({
     *   where: {
     *     // ... the filter for the CustomerDetails we want to count
     *   }
     * })
    **/
    count<T extends CustomerDetailsCountArgs>(
      args?: Subset<T, CustomerDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerDetailsAggregateArgs>(args: Subset<T, CustomerDetailsAggregateArgs>): Prisma.PrismaPromise<GetCustomerDetailsAggregateType<T>>

    /**
     * Group by CustomerDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDetailsGroupByArgs} args - Group by arguments.
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
      T extends CustomerDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerDetailsGroupByArgs['orderBy'] }
        : { orderBy?: CustomerDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerDetails model
   */
  readonly fields: CustomerDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetailsDefaultArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customerLogos<T extends CustomerDetails$customerLogosArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDetails$customerLogosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    salesDetails<T extends CustomerDetails$salesDetailsArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDetails$salesDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boxCollections<T extends CustomerDetails$boxCollectionsArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDetails$boxCollectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerDetails model
   */
  interface CustomerDetailsFieldRefs {
    readonly id: FieldRef<"CustomerDetails", 'Int'>
    readonly roleId: FieldRef<"CustomerDetails", 'Int'>
    readonly shopId: FieldRef<"CustomerDetails", 'Int'>
    readonly name: FieldRef<"CustomerDetails", 'String'>
    readonly mobileNumber: FieldRef<"CustomerDetails", 'BigInt'>
    readonly email: FieldRef<"CustomerDetails", 'String'>
    readonly totalBoxes: FieldRef<"CustomerDetails", 'Int'>
    readonly totalAmount: FieldRef<"CustomerDetails", 'BigInt'>
    readonly totalDiscountAmount: FieldRef<"CustomerDetails", 'BigInt'>
    readonly settledBoxes: FieldRef<"CustomerDetails", 'Int'>
    readonly remainingBoxes: FieldRef<"CustomerDetails", 'Int'>
    readonly settledAmount: FieldRef<"CustomerDetails", 'BigInt'>
    readonly remainingAmount: FieldRef<"CustomerDetails", 'BigInt'>
    readonly minAmountForOneBox: FieldRef<"CustomerDetails", 'String'>
    readonly maxAmountForOneBox: FieldRef<"CustomerDetails", 'String'>
    readonly averageAmountOneBox: FieldRef<"CustomerDetails", 'String'>
    readonly minDisForOneBox: FieldRef<"CustomerDetails", 'String'>
    readonly maxDisForOneBox: FieldRef<"CustomerDetails", 'String'>
    readonly averageDisOneBox: FieldRef<"CustomerDetails", 'String'>
    readonly createdAt: FieldRef<"CustomerDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerDetails", 'DateTime'>
    readonly deletedAt: FieldRef<"CustomerDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerDetails findUnique
   */
  export type CustomerDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDetails to fetch.
     */
    where: CustomerDetailsWhereUniqueInput
  }

  /**
   * CustomerDetails findUniqueOrThrow
   */
  export type CustomerDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDetails to fetch.
     */
    where: CustomerDetailsWhereUniqueInput
  }

  /**
   * CustomerDetails findFirst
   */
  export type CustomerDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDetails to fetch.
     */
    where?: CustomerDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDetails to fetch.
     */
    orderBy?: CustomerDetailsOrderByWithRelationInput | CustomerDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerDetails.
     */
    cursor?: CustomerDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerDetails.
     */
    distinct?: CustomerDetailsScalarFieldEnum | CustomerDetailsScalarFieldEnum[]
  }

  /**
   * CustomerDetails findFirstOrThrow
   */
  export type CustomerDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDetails to fetch.
     */
    where?: CustomerDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDetails to fetch.
     */
    orderBy?: CustomerDetailsOrderByWithRelationInput | CustomerDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerDetails.
     */
    cursor?: CustomerDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerDetails.
     */
    distinct?: CustomerDetailsScalarFieldEnum | CustomerDetailsScalarFieldEnum[]
  }

  /**
   * CustomerDetails findMany
   */
  export type CustomerDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDetails to fetch.
     */
    where?: CustomerDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDetails to fetch.
     */
    orderBy?: CustomerDetailsOrderByWithRelationInput | CustomerDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerDetails.
     */
    cursor?: CustomerDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDetails.
     */
    skip?: number
    distinct?: CustomerDetailsScalarFieldEnum | CustomerDetailsScalarFieldEnum[]
  }

  /**
   * CustomerDetails create
   */
  export type CustomerDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerDetails.
     */
    data: XOR<CustomerDetailsCreateInput, CustomerDetailsUncheckedCreateInput>
  }

  /**
   * CustomerDetails createMany
   */
  export type CustomerDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerDetails.
     */
    data: CustomerDetailsCreateManyInput | CustomerDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerDetails update
   */
  export type CustomerDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerDetails.
     */
    data: XOR<CustomerDetailsUpdateInput, CustomerDetailsUncheckedUpdateInput>
    /**
     * Choose, which CustomerDetails to update.
     */
    where: CustomerDetailsWhereUniqueInput
  }

  /**
   * CustomerDetails updateMany
   */
  export type CustomerDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerDetails.
     */
    data: XOR<CustomerDetailsUpdateManyMutationInput, CustomerDetailsUncheckedUpdateManyInput>
    /**
     * Filter which CustomerDetails to update
     */
    where?: CustomerDetailsWhereInput
    /**
     * Limit how many CustomerDetails to update.
     */
    limit?: number
  }

  /**
   * CustomerDetails upsert
   */
  export type CustomerDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerDetails to update in case it exists.
     */
    where: CustomerDetailsWhereUniqueInput
    /**
     * In case the CustomerDetails found by the `where` argument doesn't exist, create a new CustomerDetails with this data.
     */
    create: XOR<CustomerDetailsCreateInput, CustomerDetailsUncheckedCreateInput>
    /**
     * In case the CustomerDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerDetailsUpdateInput, CustomerDetailsUncheckedUpdateInput>
  }

  /**
   * CustomerDetails delete
   */
  export type CustomerDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
    /**
     * Filter which CustomerDetails to delete.
     */
    where: CustomerDetailsWhereUniqueInput
  }

  /**
   * CustomerDetails deleteMany
   */
  export type CustomerDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerDetails to delete
     */
    where?: CustomerDetailsWhereInput
    /**
     * Limit how many CustomerDetails to delete.
     */
    limit?: number
  }

  /**
   * CustomerDetails.customerLogos
   */
  export type CustomerDetails$customerLogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    where?: CustomerLogoWhereInput
    orderBy?: CustomerLogoOrderByWithRelationInput | CustomerLogoOrderByWithRelationInput[]
    cursor?: CustomerLogoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerLogoScalarFieldEnum | CustomerLogoScalarFieldEnum[]
  }

  /**
   * CustomerDetails.salesDetails
   */
  export type CustomerDetails$salesDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    where?: SalesDetailsWhereInput
    orderBy?: SalesDetailsOrderByWithRelationInput | SalesDetailsOrderByWithRelationInput[]
    cursor?: SalesDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesDetailsScalarFieldEnum | SalesDetailsScalarFieldEnum[]
  }

  /**
   * CustomerDetails.boxCollections
   */
  export type CustomerDetails$boxCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    where?: BoxCollectionWhereInput
    orderBy?: BoxCollectionOrderByWithRelationInput | BoxCollectionOrderByWithRelationInput[]
    cursor?: BoxCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoxCollectionScalarFieldEnum | BoxCollectionScalarFieldEnum[]
  }

  /**
   * CustomerDetails without action
   */
  export type CustomerDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDetails
     */
    select?: CustomerDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDetails
     */
    omit?: CustomerDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDetailsInclude<ExtArgs> | null
  }


  /**
   * Model CustomerLogo
   */

  export type AggregateCustomerLogo = {
    _count: CustomerLogoCountAggregateOutputType | null
    _avg: CustomerLogoAvgAggregateOutputType | null
    _sum: CustomerLogoSumAggregateOutputType | null
    _min: CustomerLogoMinAggregateOutputType | null
    _max: CustomerLogoMaxAggregateOutputType | null
  }

  export type CustomerLogoAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
  }

  export type CustomerLogoSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
  }

  export type CustomerLogoMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    fileName: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CustomerLogoMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    fileName: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CustomerLogoCountAggregateOutputType = {
    id: number
    roleId: number
    shopId: number
    customerId: number
    fileName: number
    filePath: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CustomerLogoAvgAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
  }

  export type CustomerLogoSumAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
  }

  export type CustomerLogoMinAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    fileName?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CustomerLogoMaxAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    fileName?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CustomerLogoCountAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    fileName?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CustomerLogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerLogo to aggregate.
     */
    where?: CustomerLogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLogos to fetch.
     */
    orderBy?: CustomerLogoOrderByWithRelationInput | CustomerLogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerLogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerLogos
    **/
    _count?: true | CustomerLogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerLogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerLogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerLogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerLogoMaxAggregateInputType
  }

  export type GetCustomerLogoAggregateType<T extends CustomerLogoAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerLogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerLogo[P]>
      : GetScalarType<T[P], AggregateCustomerLogo[P]>
  }




  export type CustomerLogoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerLogoWhereInput
    orderBy?: CustomerLogoOrderByWithAggregationInput | CustomerLogoOrderByWithAggregationInput[]
    by: CustomerLogoScalarFieldEnum[] | CustomerLogoScalarFieldEnum
    having?: CustomerLogoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerLogoCountAggregateInputType | true
    _avg?: CustomerLogoAvgAggregateInputType
    _sum?: CustomerLogoSumAggregateInputType
    _min?: CustomerLogoMinAggregateInputType
    _max?: CustomerLogoMaxAggregateInputType
  }

  export type CustomerLogoGroupByOutputType = {
    id: number
    roleId: number
    shopId: number
    customerId: number
    fileName: string
    filePath: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CustomerLogoCountAggregateOutputType | null
    _avg: CustomerLogoAvgAggregateOutputType | null
    _sum: CustomerLogoSumAggregateOutputType | null
    _min: CustomerLogoMinAggregateOutputType | null
    _max: CustomerLogoMaxAggregateOutputType | null
  }

  type GetCustomerLogoGroupByPayload<T extends CustomerLogoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerLogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerLogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerLogoGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerLogoGroupByOutputType[P]>
        }
      >
    >


  export type CustomerLogoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    shopId?: boolean
    customerId?: boolean
    fileName?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerLogo"]>



  export type CustomerLogoSelectScalar = {
    id?: boolean
    roleId?: boolean
    shopId?: boolean
    customerId?: boolean
    fileName?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CustomerLogoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "shopId" | "customerId" | "fileName" | "filePath" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["customerLogo"]>
  export type CustomerLogoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDetailsDefaultArgs<ExtArgs>
  }

  export type $CustomerLogoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerLogo"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      shop: Prisma.$ShopDetailsPayload<ExtArgs>
      customer: Prisma.$CustomerDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      shopId: number
      customerId: number
      fileName: string
      filePath: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["customerLogo"]>
    composites: {}
  }

  type CustomerLogoGetPayload<S extends boolean | null | undefined | CustomerLogoDefaultArgs> = $Result.GetResult<Prisma.$CustomerLogoPayload, S>

  type CustomerLogoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerLogoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerLogoCountAggregateInputType | true
    }

  export interface CustomerLogoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerLogo'], meta: { name: 'CustomerLogo' } }
    /**
     * Find zero or one CustomerLogo that matches the filter.
     * @param {CustomerLogoFindUniqueArgs} args - Arguments to find a CustomerLogo
     * @example
     * // Get one CustomerLogo
     * const customerLogo = await prisma.customerLogo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerLogoFindUniqueArgs>(args: SelectSubset<T, CustomerLogoFindUniqueArgs<ExtArgs>>): Prisma__CustomerLogoClient<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerLogo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerLogoFindUniqueOrThrowArgs} args - Arguments to find a CustomerLogo
     * @example
     * // Get one CustomerLogo
     * const customerLogo = await prisma.customerLogo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerLogoFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerLogoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerLogoClient<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerLogo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLogoFindFirstArgs} args - Arguments to find a CustomerLogo
     * @example
     * // Get one CustomerLogo
     * const customerLogo = await prisma.customerLogo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerLogoFindFirstArgs>(args?: SelectSubset<T, CustomerLogoFindFirstArgs<ExtArgs>>): Prisma__CustomerLogoClient<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerLogo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLogoFindFirstOrThrowArgs} args - Arguments to find a CustomerLogo
     * @example
     * // Get one CustomerLogo
     * const customerLogo = await prisma.customerLogo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerLogoFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerLogoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerLogoClient<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerLogos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLogoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerLogos
     * const customerLogos = await prisma.customerLogo.findMany()
     * 
     * // Get first 10 CustomerLogos
     * const customerLogos = await prisma.customerLogo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerLogoWithIdOnly = await prisma.customerLogo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerLogoFindManyArgs>(args?: SelectSubset<T, CustomerLogoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerLogo.
     * @param {CustomerLogoCreateArgs} args - Arguments to create a CustomerLogo.
     * @example
     * // Create one CustomerLogo
     * const CustomerLogo = await prisma.customerLogo.create({
     *   data: {
     *     // ... data to create a CustomerLogo
     *   }
     * })
     * 
     */
    create<T extends CustomerLogoCreateArgs>(args: SelectSubset<T, CustomerLogoCreateArgs<ExtArgs>>): Prisma__CustomerLogoClient<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerLogos.
     * @param {CustomerLogoCreateManyArgs} args - Arguments to create many CustomerLogos.
     * @example
     * // Create many CustomerLogos
     * const customerLogo = await prisma.customerLogo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerLogoCreateManyArgs>(args?: SelectSubset<T, CustomerLogoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomerLogo.
     * @param {CustomerLogoDeleteArgs} args - Arguments to delete one CustomerLogo.
     * @example
     * // Delete one CustomerLogo
     * const CustomerLogo = await prisma.customerLogo.delete({
     *   where: {
     *     // ... filter to delete one CustomerLogo
     *   }
     * })
     * 
     */
    delete<T extends CustomerLogoDeleteArgs>(args: SelectSubset<T, CustomerLogoDeleteArgs<ExtArgs>>): Prisma__CustomerLogoClient<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerLogo.
     * @param {CustomerLogoUpdateArgs} args - Arguments to update one CustomerLogo.
     * @example
     * // Update one CustomerLogo
     * const customerLogo = await prisma.customerLogo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerLogoUpdateArgs>(args: SelectSubset<T, CustomerLogoUpdateArgs<ExtArgs>>): Prisma__CustomerLogoClient<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerLogos.
     * @param {CustomerLogoDeleteManyArgs} args - Arguments to filter CustomerLogos to delete.
     * @example
     * // Delete a few CustomerLogos
     * const { count } = await prisma.customerLogo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerLogoDeleteManyArgs>(args?: SelectSubset<T, CustomerLogoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerLogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLogoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerLogos
     * const customerLogo = await prisma.customerLogo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerLogoUpdateManyArgs>(args: SelectSubset<T, CustomerLogoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerLogo.
     * @param {CustomerLogoUpsertArgs} args - Arguments to update or create a CustomerLogo.
     * @example
     * // Update or create a CustomerLogo
     * const customerLogo = await prisma.customerLogo.upsert({
     *   create: {
     *     // ... data to create a CustomerLogo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerLogo we want to update
     *   }
     * })
     */
    upsert<T extends CustomerLogoUpsertArgs>(args: SelectSubset<T, CustomerLogoUpsertArgs<ExtArgs>>): Prisma__CustomerLogoClient<$Result.GetResult<Prisma.$CustomerLogoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerLogos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLogoCountArgs} args - Arguments to filter CustomerLogos to count.
     * @example
     * // Count the number of CustomerLogos
     * const count = await prisma.customerLogo.count({
     *   where: {
     *     // ... the filter for the CustomerLogos we want to count
     *   }
     * })
    **/
    count<T extends CustomerLogoCountArgs>(
      args?: Subset<T, CustomerLogoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerLogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerLogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerLogoAggregateArgs>(args: Subset<T, CustomerLogoAggregateArgs>): Prisma.PrismaPromise<GetCustomerLogoAggregateType<T>>

    /**
     * Group by CustomerLogo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLogoGroupByArgs} args - Group by arguments.
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
      T extends CustomerLogoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerLogoGroupByArgs['orderBy'] }
        : { orderBy?: CustomerLogoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerLogoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerLogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerLogo model
   */
  readonly fields: CustomerLogoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerLogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerLogoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetailsDefaultArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDetailsDefaultArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerLogo model
   */
  interface CustomerLogoFieldRefs {
    readonly id: FieldRef<"CustomerLogo", 'Int'>
    readonly roleId: FieldRef<"CustomerLogo", 'Int'>
    readonly shopId: FieldRef<"CustomerLogo", 'Int'>
    readonly customerId: FieldRef<"CustomerLogo", 'Int'>
    readonly fileName: FieldRef<"CustomerLogo", 'String'>
    readonly filePath: FieldRef<"CustomerLogo", 'String'>
    readonly createdAt: FieldRef<"CustomerLogo", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerLogo", 'DateTime'>
    readonly deletedAt: FieldRef<"CustomerLogo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerLogo findUnique
   */
  export type CustomerLogoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLogo to fetch.
     */
    where: CustomerLogoWhereUniqueInput
  }

  /**
   * CustomerLogo findUniqueOrThrow
   */
  export type CustomerLogoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLogo to fetch.
     */
    where: CustomerLogoWhereUniqueInput
  }

  /**
   * CustomerLogo findFirst
   */
  export type CustomerLogoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLogo to fetch.
     */
    where?: CustomerLogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLogos to fetch.
     */
    orderBy?: CustomerLogoOrderByWithRelationInput | CustomerLogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerLogos.
     */
    cursor?: CustomerLogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerLogos.
     */
    distinct?: CustomerLogoScalarFieldEnum | CustomerLogoScalarFieldEnum[]
  }

  /**
   * CustomerLogo findFirstOrThrow
   */
  export type CustomerLogoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLogo to fetch.
     */
    where?: CustomerLogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLogos to fetch.
     */
    orderBy?: CustomerLogoOrderByWithRelationInput | CustomerLogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerLogos.
     */
    cursor?: CustomerLogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLogos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerLogos.
     */
    distinct?: CustomerLogoScalarFieldEnum | CustomerLogoScalarFieldEnum[]
  }

  /**
   * CustomerLogo findMany
   */
  export type CustomerLogoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLogos to fetch.
     */
    where?: CustomerLogoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLogos to fetch.
     */
    orderBy?: CustomerLogoOrderByWithRelationInput | CustomerLogoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerLogos.
     */
    cursor?: CustomerLogoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLogos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLogos.
     */
    skip?: number
    distinct?: CustomerLogoScalarFieldEnum | CustomerLogoScalarFieldEnum[]
  }

  /**
   * CustomerLogo create
   */
  export type CustomerLogoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerLogo.
     */
    data: XOR<CustomerLogoCreateInput, CustomerLogoUncheckedCreateInput>
  }

  /**
   * CustomerLogo createMany
   */
  export type CustomerLogoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerLogos.
     */
    data: CustomerLogoCreateManyInput | CustomerLogoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerLogo update
   */
  export type CustomerLogoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerLogo.
     */
    data: XOR<CustomerLogoUpdateInput, CustomerLogoUncheckedUpdateInput>
    /**
     * Choose, which CustomerLogo to update.
     */
    where: CustomerLogoWhereUniqueInput
  }

  /**
   * CustomerLogo updateMany
   */
  export type CustomerLogoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerLogos.
     */
    data: XOR<CustomerLogoUpdateManyMutationInput, CustomerLogoUncheckedUpdateManyInput>
    /**
     * Filter which CustomerLogos to update
     */
    where?: CustomerLogoWhereInput
    /**
     * Limit how many CustomerLogos to update.
     */
    limit?: number
  }

  /**
   * CustomerLogo upsert
   */
  export type CustomerLogoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerLogo to update in case it exists.
     */
    where: CustomerLogoWhereUniqueInput
    /**
     * In case the CustomerLogo found by the `where` argument doesn't exist, create a new CustomerLogo with this data.
     */
    create: XOR<CustomerLogoCreateInput, CustomerLogoUncheckedCreateInput>
    /**
     * In case the CustomerLogo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerLogoUpdateInput, CustomerLogoUncheckedUpdateInput>
  }

  /**
   * CustomerLogo delete
   */
  export type CustomerLogoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
    /**
     * Filter which CustomerLogo to delete.
     */
    where: CustomerLogoWhereUniqueInput
  }

  /**
   * CustomerLogo deleteMany
   */
  export type CustomerLogoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerLogos to delete
     */
    where?: CustomerLogoWhereInput
    /**
     * Limit how many CustomerLogos to delete.
     */
    limit?: number
  }

  /**
   * CustomerLogo without action
   */
  export type CustomerLogoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLogo
     */
    select?: CustomerLogoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLogo
     */
    omit?: CustomerLogoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLogoInclude<ExtArgs> | null
  }


  /**
   * Model SalesDetails
   */

  export type AggregateSalesDetails = {
    _count: SalesDetailsCountAggregateOutputType | null
    _avg: SalesDetailsAvgAggregateOutputType | null
    _sum: SalesDetailsSumAggregateOutputType | null
    _min: SalesDetailsMinAggregateOutputType | null
    _max: SalesDetailsMaxAggregateOutputType | null
  }

  export type SalesDetailsAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    soldBoxes: number | null
    soldAmount: number | null
    appliedDis: number | null
    totalAmount: number | null
  }

  export type SalesDetailsSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    soldBoxes: number | null
    soldAmount: bigint | null
    appliedDis: number | null
    totalAmount: bigint | null
  }

  export type SalesDetailsMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    soldBoxes: number | null
    soldAmount: bigint | null
    appliedDis: number | null
    totalAmount: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SalesDetailsMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    soldBoxes: number | null
    soldAmount: bigint | null
    appliedDis: number | null
    totalAmount: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SalesDetailsCountAggregateOutputType = {
    id: number
    roleId: number
    shopId: number
    customerId: number
    soldBoxes: number
    soldAmount: number
    appliedDis: number
    totalAmount: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SalesDetailsAvgAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    soldBoxes?: true
    soldAmount?: true
    appliedDis?: true
    totalAmount?: true
  }

  export type SalesDetailsSumAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    soldBoxes?: true
    soldAmount?: true
    appliedDis?: true
    totalAmount?: true
  }

  export type SalesDetailsMinAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    soldBoxes?: true
    soldAmount?: true
    appliedDis?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SalesDetailsMaxAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    soldBoxes?: true
    soldAmount?: true
    appliedDis?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SalesDetailsCountAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    soldBoxes?: true
    soldAmount?: true
    appliedDis?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SalesDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesDetails to aggregate.
     */
    where?: SalesDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesDetails to fetch.
     */
    orderBy?: SalesDetailsOrderByWithRelationInput | SalesDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesDetails
    **/
    _count?: true | SalesDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesDetailsMaxAggregateInputType
  }

  export type GetSalesDetailsAggregateType<T extends SalesDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesDetails[P]>
      : GetScalarType<T[P], AggregateSalesDetails[P]>
  }




  export type SalesDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesDetailsWhereInput
    orderBy?: SalesDetailsOrderByWithAggregationInput | SalesDetailsOrderByWithAggregationInput[]
    by: SalesDetailsScalarFieldEnum[] | SalesDetailsScalarFieldEnum
    having?: SalesDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesDetailsCountAggregateInputType | true
    _avg?: SalesDetailsAvgAggregateInputType
    _sum?: SalesDetailsSumAggregateInputType
    _min?: SalesDetailsMinAggregateInputType
    _max?: SalesDetailsMaxAggregateInputType
  }

  export type SalesDetailsGroupByOutputType = {
    id: number
    roleId: number
    shopId: number
    customerId: number
    soldBoxes: number
    soldAmount: bigint
    appliedDis: number
    totalAmount: bigint
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SalesDetailsCountAggregateOutputType | null
    _avg: SalesDetailsAvgAggregateOutputType | null
    _sum: SalesDetailsSumAggregateOutputType | null
    _min: SalesDetailsMinAggregateOutputType | null
    _max: SalesDetailsMaxAggregateOutputType | null
  }

  type GetSalesDetailsGroupByPayload<T extends SalesDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], SalesDetailsGroupByOutputType[P]>
        }
      >
    >


  export type SalesDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    shopId?: boolean
    customerId?: boolean
    soldBoxes?: boolean
    soldAmount?: boolean
    appliedDis?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesDetails"]>



  export type SalesDetailsSelectScalar = {
    id?: boolean
    roleId?: boolean
    shopId?: boolean
    customerId?: boolean
    soldBoxes?: boolean
    soldAmount?: boolean
    appliedDis?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SalesDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "shopId" | "customerId" | "soldBoxes" | "soldAmount" | "appliedDis" | "totalAmount" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["salesDetails"]>
  export type SalesDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDetailsDefaultArgs<ExtArgs>
  }

  export type $SalesDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesDetails"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      shop: Prisma.$ShopDetailsPayload<ExtArgs>
      customer: Prisma.$CustomerDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      shopId: number
      customerId: number
      soldBoxes: number
      soldAmount: bigint
      appliedDis: number
      totalAmount: bigint
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["salesDetails"]>
    composites: {}
  }

  type SalesDetailsGetPayload<S extends boolean | null | undefined | SalesDetailsDefaultArgs> = $Result.GetResult<Prisma.$SalesDetailsPayload, S>

  type SalesDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesDetailsCountAggregateInputType | true
    }

  export interface SalesDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesDetails'], meta: { name: 'SalesDetails' } }
    /**
     * Find zero or one SalesDetails that matches the filter.
     * @param {SalesDetailsFindUniqueArgs} args - Arguments to find a SalesDetails
     * @example
     * // Get one SalesDetails
     * const salesDetails = await prisma.salesDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesDetailsFindUniqueArgs>(args: SelectSubset<T, SalesDetailsFindUniqueArgs<ExtArgs>>): Prisma__SalesDetailsClient<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesDetailsFindUniqueOrThrowArgs} args - Arguments to find a SalesDetails
     * @example
     * // Get one SalesDetails
     * const salesDetails = await prisma.salesDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesDetailsClient<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDetailsFindFirstArgs} args - Arguments to find a SalesDetails
     * @example
     * // Get one SalesDetails
     * const salesDetails = await prisma.salesDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesDetailsFindFirstArgs>(args?: SelectSubset<T, SalesDetailsFindFirstArgs<ExtArgs>>): Prisma__SalesDetailsClient<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDetailsFindFirstOrThrowArgs} args - Arguments to find a SalesDetails
     * @example
     * // Get one SalesDetails
     * const salesDetails = await prisma.salesDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesDetailsClient<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesDetails
     * const salesDetails = await prisma.salesDetails.findMany()
     * 
     * // Get first 10 SalesDetails
     * const salesDetails = await prisma.salesDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesDetailsWithIdOnly = await prisma.salesDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesDetailsFindManyArgs>(args?: SelectSubset<T, SalesDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesDetails.
     * @param {SalesDetailsCreateArgs} args - Arguments to create a SalesDetails.
     * @example
     * // Create one SalesDetails
     * const SalesDetails = await prisma.salesDetails.create({
     *   data: {
     *     // ... data to create a SalesDetails
     *   }
     * })
     * 
     */
    create<T extends SalesDetailsCreateArgs>(args: SelectSubset<T, SalesDetailsCreateArgs<ExtArgs>>): Prisma__SalesDetailsClient<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesDetails.
     * @param {SalesDetailsCreateManyArgs} args - Arguments to create many SalesDetails.
     * @example
     * // Create many SalesDetails
     * const salesDetails = await prisma.salesDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesDetailsCreateManyArgs>(args?: SelectSubset<T, SalesDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalesDetails.
     * @param {SalesDetailsDeleteArgs} args - Arguments to delete one SalesDetails.
     * @example
     * // Delete one SalesDetails
     * const SalesDetails = await prisma.salesDetails.delete({
     *   where: {
     *     // ... filter to delete one SalesDetails
     *   }
     * })
     * 
     */
    delete<T extends SalesDetailsDeleteArgs>(args: SelectSubset<T, SalesDetailsDeleteArgs<ExtArgs>>): Prisma__SalesDetailsClient<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesDetails.
     * @param {SalesDetailsUpdateArgs} args - Arguments to update one SalesDetails.
     * @example
     * // Update one SalesDetails
     * const salesDetails = await prisma.salesDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesDetailsUpdateArgs>(args: SelectSubset<T, SalesDetailsUpdateArgs<ExtArgs>>): Prisma__SalesDetailsClient<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesDetails.
     * @param {SalesDetailsDeleteManyArgs} args - Arguments to filter SalesDetails to delete.
     * @example
     * // Delete a few SalesDetails
     * const { count } = await prisma.salesDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDetailsDeleteManyArgs>(args?: SelectSubset<T, SalesDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesDetails
     * const salesDetails = await prisma.salesDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesDetailsUpdateManyArgs>(args: SelectSubset<T, SalesDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesDetails.
     * @param {SalesDetailsUpsertArgs} args - Arguments to update or create a SalesDetails.
     * @example
     * // Update or create a SalesDetails
     * const salesDetails = await prisma.salesDetails.upsert({
     *   create: {
     *     // ... data to create a SalesDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesDetails we want to update
     *   }
     * })
     */
    upsert<T extends SalesDetailsUpsertArgs>(args: SelectSubset<T, SalesDetailsUpsertArgs<ExtArgs>>): Prisma__SalesDetailsClient<$Result.GetResult<Prisma.$SalesDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDetailsCountArgs} args - Arguments to filter SalesDetails to count.
     * @example
     * // Count the number of SalesDetails
     * const count = await prisma.salesDetails.count({
     *   where: {
     *     // ... the filter for the SalesDetails we want to count
     *   }
     * })
    **/
    count<T extends SalesDetailsCountArgs>(
      args?: Subset<T, SalesDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesDetailsAggregateArgs>(args: Subset<T, SalesDetailsAggregateArgs>): Prisma.PrismaPromise<GetSalesDetailsAggregateType<T>>

    /**
     * Group by SalesDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesDetailsGroupByArgs} args - Group by arguments.
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
      T extends SalesDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesDetailsGroupByArgs['orderBy'] }
        : { orderBy?: SalesDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SalesDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesDetails model
   */
  readonly fields: SalesDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetailsDefaultArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDetailsDefaultArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesDetails model
   */
  interface SalesDetailsFieldRefs {
    readonly id: FieldRef<"SalesDetails", 'Int'>
    readonly roleId: FieldRef<"SalesDetails", 'Int'>
    readonly shopId: FieldRef<"SalesDetails", 'Int'>
    readonly customerId: FieldRef<"SalesDetails", 'Int'>
    readonly soldBoxes: FieldRef<"SalesDetails", 'Int'>
    readonly soldAmount: FieldRef<"SalesDetails", 'BigInt'>
    readonly appliedDis: FieldRef<"SalesDetails", 'Int'>
    readonly totalAmount: FieldRef<"SalesDetails", 'BigInt'>
    readonly createdAt: FieldRef<"SalesDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesDetails", 'DateTime'>
    readonly deletedAt: FieldRef<"SalesDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesDetails findUnique
   */
  export type SalesDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SalesDetails to fetch.
     */
    where: SalesDetailsWhereUniqueInput
  }

  /**
   * SalesDetails findUniqueOrThrow
   */
  export type SalesDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SalesDetails to fetch.
     */
    where: SalesDetailsWhereUniqueInput
  }

  /**
   * SalesDetails findFirst
   */
  export type SalesDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SalesDetails to fetch.
     */
    where?: SalesDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesDetails to fetch.
     */
    orderBy?: SalesDetailsOrderByWithRelationInput | SalesDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesDetails.
     */
    cursor?: SalesDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesDetails.
     */
    distinct?: SalesDetailsScalarFieldEnum | SalesDetailsScalarFieldEnum[]
  }

  /**
   * SalesDetails findFirstOrThrow
   */
  export type SalesDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SalesDetails to fetch.
     */
    where?: SalesDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesDetails to fetch.
     */
    orderBy?: SalesDetailsOrderByWithRelationInput | SalesDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesDetails.
     */
    cursor?: SalesDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesDetails.
     */
    distinct?: SalesDetailsScalarFieldEnum | SalesDetailsScalarFieldEnum[]
  }

  /**
   * SalesDetails findMany
   */
  export type SalesDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    /**
     * Filter, which SalesDetails to fetch.
     */
    where?: SalesDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesDetails to fetch.
     */
    orderBy?: SalesDetailsOrderByWithRelationInput | SalesDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesDetails.
     */
    cursor?: SalesDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesDetails.
     */
    skip?: number
    distinct?: SalesDetailsScalarFieldEnum | SalesDetailsScalarFieldEnum[]
  }

  /**
   * SalesDetails create
   */
  export type SalesDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesDetails.
     */
    data: XOR<SalesDetailsCreateInput, SalesDetailsUncheckedCreateInput>
  }

  /**
   * SalesDetails createMany
   */
  export type SalesDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesDetails.
     */
    data: SalesDetailsCreateManyInput | SalesDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesDetails update
   */
  export type SalesDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesDetails.
     */
    data: XOR<SalesDetailsUpdateInput, SalesDetailsUncheckedUpdateInput>
    /**
     * Choose, which SalesDetails to update.
     */
    where: SalesDetailsWhereUniqueInput
  }

  /**
   * SalesDetails updateMany
   */
  export type SalesDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesDetails.
     */
    data: XOR<SalesDetailsUpdateManyMutationInput, SalesDetailsUncheckedUpdateManyInput>
    /**
     * Filter which SalesDetails to update
     */
    where?: SalesDetailsWhereInput
    /**
     * Limit how many SalesDetails to update.
     */
    limit?: number
  }

  /**
   * SalesDetails upsert
   */
  export type SalesDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesDetails to update in case it exists.
     */
    where: SalesDetailsWhereUniqueInput
    /**
     * In case the SalesDetails found by the `where` argument doesn't exist, create a new SalesDetails with this data.
     */
    create: XOR<SalesDetailsCreateInput, SalesDetailsUncheckedCreateInput>
    /**
     * In case the SalesDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesDetailsUpdateInput, SalesDetailsUncheckedUpdateInput>
  }

  /**
   * SalesDetails delete
   */
  export type SalesDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
    /**
     * Filter which SalesDetails to delete.
     */
    where: SalesDetailsWhereUniqueInput
  }

  /**
   * SalesDetails deleteMany
   */
  export type SalesDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesDetails to delete
     */
    where?: SalesDetailsWhereInput
    /**
     * Limit how many SalesDetails to delete.
     */
    limit?: number
  }

  /**
   * SalesDetails without action
   */
  export type SalesDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesDetails
     */
    select?: SalesDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesDetails
     */
    omit?: SalesDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesDetailsInclude<ExtArgs> | null
  }


  /**
   * Model BoxCollection
   */

  export type AggregateBoxCollection = {
    _count: BoxCollectionCountAggregateOutputType | null
    _avg: BoxCollectionAvgAggregateOutputType | null
    _sum: BoxCollectionSumAggregateOutputType | null
    _min: BoxCollectionMinAggregateOutputType | null
    _max: BoxCollectionMaxAggregateOutputType | null
  }

  export type BoxCollectionAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    collectedBoxes: number | null
  }

  export type BoxCollectionSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    collectedBoxes: number | null
  }

  export type BoxCollectionMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    collectedBoxes: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BoxCollectionMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    shopId: number | null
    customerId: number | null
    collectedBoxes: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BoxCollectionCountAggregateOutputType = {
    id: number
    roleId: number
    shopId: number
    customerId: number
    collectedBoxes: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type BoxCollectionAvgAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    collectedBoxes?: true
  }

  export type BoxCollectionSumAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    collectedBoxes?: true
  }

  export type BoxCollectionMinAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    collectedBoxes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BoxCollectionMaxAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    collectedBoxes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BoxCollectionCountAggregateInputType = {
    id?: true
    roleId?: true
    shopId?: true
    customerId?: true
    collectedBoxes?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type BoxCollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoxCollection to aggregate.
     */
    where?: BoxCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxCollections to fetch.
     */
    orderBy?: BoxCollectionOrderByWithRelationInput | BoxCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoxCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoxCollections
    **/
    _count?: true | BoxCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoxCollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoxCollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoxCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoxCollectionMaxAggregateInputType
  }

  export type GetBoxCollectionAggregateType<T extends BoxCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateBoxCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoxCollection[P]>
      : GetScalarType<T[P], AggregateBoxCollection[P]>
  }




  export type BoxCollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxCollectionWhereInput
    orderBy?: BoxCollectionOrderByWithAggregationInput | BoxCollectionOrderByWithAggregationInput[]
    by: BoxCollectionScalarFieldEnum[] | BoxCollectionScalarFieldEnum
    having?: BoxCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoxCollectionCountAggregateInputType | true
    _avg?: BoxCollectionAvgAggregateInputType
    _sum?: BoxCollectionSumAggregateInputType
    _min?: BoxCollectionMinAggregateInputType
    _max?: BoxCollectionMaxAggregateInputType
  }

  export type BoxCollectionGroupByOutputType = {
    id: number
    roleId: number
    shopId: number
    customerId: number
    collectedBoxes: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: BoxCollectionCountAggregateOutputType | null
    _avg: BoxCollectionAvgAggregateOutputType | null
    _sum: BoxCollectionSumAggregateOutputType | null
    _min: BoxCollectionMinAggregateOutputType | null
    _max: BoxCollectionMaxAggregateOutputType | null
  }

  type GetBoxCollectionGroupByPayload<T extends BoxCollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoxCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoxCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoxCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], BoxCollectionGroupByOutputType[P]>
        }
      >
    >


  export type BoxCollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    shopId?: boolean
    customerId?: boolean
    collectedBoxes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boxCollection"]>



  export type BoxCollectionSelectScalar = {
    id?: boolean
    roleId?: boolean
    shopId?: boolean
    customerId?: boolean
    collectedBoxes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type BoxCollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "shopId" | "customerId" | "collectedBoxes" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["boxCollection"]>
  export type BoxCollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    shop?: boolean | ShopDetailsDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDetailsDefaultArgs<ExtArgs>
  }

  export type $BoxCollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoxCollection"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      shop: Prisma.$ShopDetailsPayload<ExtArgs>
      customer: Prisma.$CustomerDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      shopId: number
      customerId: number
      collectedBoxes: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["boxCollection"]>
    composites: {}
  }

  type BoxCollectionGetPayload<S extends boolean | null | undefined | BoxCollectionDefaultArgs> = $Result.GetResult<Prisma.$BoxCollectionPayload, S>

  type BoxCollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoxCollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoxCollectionCountAggregateInputType | true
    }

  export interface BoxCollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoxCollection'], meta: { name: 'BoxCollection' } }
    /**
     * Find zero or one BoxCollection that matches the filter.
     * @param {BoxCollectionFindUniqueArgs} args - Arguments to find a BoxCollection
     * @example
     * // Get one BoxCollection
     * const boxCollection = await prisma.boxCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoxCollectionFindUniqueArgs>(args: SelectSubset<T, BoxCollectionFindUniqueArgs<ExtArgs>>): Prisma__BoxCollectionClient<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BoxCollection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoxCollectionFindUniqueOrThrowArgs} args - Arguments to find a BoxCollection
     * @example
     * // Get one BoxCollection
     * const boxCollection = await prisma.boxCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoxCollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, BoxCollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoxCollectionClient<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoxCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCollectionFindFirstArgs} args - Arguments to find a BoxCollection
     * @example
     * // Get one BoxCollection
     * const boxCollection = await prisma.boxCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoxCollectionFindFirstArgs>(args?: SelectSubset<T, BoxCollectionFindFirstArgs<ExtArgs>>): Prisma__BoxCollectionClient<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoxCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCollectionFindFirstOrThrowArgs} args - Arguments to find a BoxCollection
     * @example
     * // Get one BoxCollection
     * const boxCollection = await prisma.boxCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoxCollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, BoxCollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoxCollectionClient<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BoxCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoxCollections
     * const boxCollections = await prisma.boxCollection.findMany()
     * 
     * // Get first 10 BoxCollections
     * const boxCollections = await prisma.boxCollection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boxCollectionWithIdOnly = await prisma.boxCollection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoxCollectionFindManyArgs>(args?: SelectSubset<T, BoxCollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BoxCollection.
     * @param {BoxCollectionCreateArgs} args - Arguments to create a BoxCollection.
     * @example
     * // Create one BoxCollection
     * const BoxCollection = await prisma.boxCollection.create({
     *   data: {
     *     // ... data to create a BoxCollection
     *   }
     * })
     * 
     */
    create<T extends BoxCollectionCreateArgs>(args: SelectSubset<T, BoxCollectionCreateArgs<ExtArgs>>): Prisma__BoxCollectionClient<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BoxCollections.
     * @param {BoxCollectionCreateManyArgs} args - Arguments to create many BoxCollections.
     * @example
     * // Create many BoxCollections
     * const boxCollection = await prisma.boxCollection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoxCollectionCreateManyArgs>(args?: SelectSubset<T, BoxCollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoxCollection.
     * @param {BoxCollectionDeleteArgs} args - Arguments to delete one BoxCollection.
     * @example
     * // Delete one BoxCollection
     * const BoxCollection = await prisma.boxCollection.delete({
     *   where: {
     *     // ... filter to delete one BoxCollection
     *   }
     * })
     * 
     */
    delete<T extends BoxCollectionDeleteArgs>(args: SelectSubset<T, BoxCollectionDeleteArgs<ExtArgs>>): Prisma__BoxCollectionClient<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BoxCollection.
     * @param {BoxCollectionUpdateArgs} args - Arguments to update one BoxCollection.
     * @example
     * // Update one BoxCollection
     * const boxCollection = await prisma.boxCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoxCollectionUpdateArgs>(args: SelectSubset<T, BoxCollectionUpdateArgs<ExtArgs>>): Prisma__BoxCollectionClient<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BoxCollections.
     * @param {BoxCollectionDeleteManyArgs} args - Arguments to filter BoxCollections to delete.
     * @example
     * // Delete a few BoxCollections
     * const { count } = await prisma.boxCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoxCollectionDeleteManyArgs>(args?: SelectSubset<T, BoxCollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoxCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoxCollections
     * const boxCollection = await prisma.boxCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoxCollectionUpdateManyArgs>(args: SelectSubset<T, BoxCollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoxCollection.
     * @param {BoxCollectionUpsertArgs} args - Arguments to update or create a BoxCollection.
     * @example
     * // Update or create a BoxCollection
     * const boxCollection = await prisma.boxCollection.upsert({
     *   create: {
     *     // ... data to create a BoxCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoxCollection we want to update
     *   }
     * })
     */
    upsert<T extends BoxCollectionUpsertArgs>(args: SelectSubset<T, BoxCollectionUpsertArgs<ExtArgs>>): Prisma__BoxCollectionClient<$Result.GetResult<Prisma.$BoxCollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BoxCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCollectionCountArgs} args - Arguments to filter BoxCollections to count.
     * @example
     * // Count the number of BoxCollections
     * const count = await prisma.boxCollection.count({
     *   where: {
     *     // ... the filter for the BoxCollections we want to count
     *   }
     * })
    **/
    count<T extends BoxCollectionCountArgs>(
      args?: Subset<T, BoxCollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoxCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoxCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoxCollectionAggregateArgs>(args: Subset<T, BoxCollectionAggregateArgs>): Prisma.PrismaPromise<GetBoxCollectionAggregateType<T>>

    /**
     * Group by BoxCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCollectionGroupByArgs} args - Group by arguments.
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
      T extends BoxCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoxCollectionGroupByArgs['orderBy'] }
        : { orderBy?: BoxCollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BoxCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoxCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoxCollection model
   */
  readonly fields: BoxCollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoxCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoxCollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDetailsDefaultArgs<ExtArgs>>): Prisma__ShopDetailsClient<$Result.GetResult<Prisma.$ShopDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDetailsDefaultArgs<ExtArgs>>): Prisma__CustomerDetailsClient<$Result.GetResult<Prisma.$CustomerDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BoxCollection model
   */
  interface BoxCollectionFieldRefs {
    readonly id: FieldRef<"BoxCollection", 'Int'>
    readonly roleId: FieldRef<"BoxCollection", 'Int'>
    readonly shopId: FieldRef<"BoxCollection", 'Int'>
    readonly customerId: FieldRef<"BoxCollection", 'Int'>
    readonly collectedBoxes: FieldRef<"BoxCollection", 'Int'>
    readonly createdAt: FieldRef<"BoxCollection", 'DateTime'>
    readonly updatedAt: FieldRef<"BoxCollection", 'DateTime'>
    readonly deletedAt: FieldRef<"BoxCollection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BoxCollection findUnique
   */
  export type BoxCollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    /**
     * Filter, which BoxCollection to fetch.
     */
    where: BoxCollectionWhereUniqueInput
  }

  /**
   * BoxCollection findUniqueOrThrow
   */
  export type BoxCollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    /**
     * Filter, which BoxCollection to fetch.
     */
    where: BoxCollectionWhereUniqueInput
  }

  /**
   * BoxCollection findFirst
   */
  export type BoxCollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    /**
     * Filter, which BoxCollection to fetch.
     */
    where?: BoxCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxCollections to fetch.
     */
    orderBy?: BoxCollectionOrderByWithRelationInput | BoxCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoxCollections.
     */
    cursor?: BoxCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoxCollections.
     */
    distinct?: BoxCollectionScalarFieldEnum | BoxCollectionScalarFieldEnum[]
  }

  /**
   * BoxCollection findFirstOrThrow
   */
  export type BoxCollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    /**
     * Filter, which BoxCollection to fetch.
     */
    where?: BoxCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxCollections to fetch.
     */
    orderBy?: BoxCollectionOrderByWithRelationInput | BoxCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoxCollections.
     */
    cursor?: BoxCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoxCollections.
     */
    distinct?: BoxCollectionScalarFieldEnum | BoxCollectionScalarFieldEnum[]
  }

  /**
   * BoxCollection findMany
   */
  export type BoxCollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    /**
     * Filter, which BoxCollections to fetch.
     */
    where?: BoxCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxCollections to fetch.
     */
    orderBy?: BoxCollectionOrderByWithRelationInput | BoxCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoxCollections.
     */
    cursor?: BoxCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxCollections.
     */
    skip?: number
    distinct?: BoxCollectionScalarFieldEnum | BoxCollectionScalarFieldEnum[]
  }

  /**
   * BoxCollection create
   */
  export type BoxCollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a BoxCollection.
     */
    data: XOR<BoxCollectionCreateInput, BoxCollectionUncheckedCreateInput>
  }

  /**
   * BoxCollection createMany
   */
  export type BoxCollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoxCollections.
     */
    data: BoxCollectionCreateManyInput | BoxCollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoxCollection update
   */
  export type BoxCollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a BoxCollection.
     */
    data: XOR<BoxCollectionUpdateInput, BoxCollectionUncheckedUpdateInput>
    /**
     * Choose, which BoxCollection to update.
     */
    where: BoxCollectionWhereUniqueInput
  }

  /**
   * BoxCollection updateMany
   */
  export type BoxCollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoxCollections.
     */
    data: XOR<BoxCollectionUpdateManyMutationInput, BoxCollectionUncheckedUpdateManyInput>
    /**
     * Filter which BoxCollections to update
     */
    where?: BoxCollectionWhereInput
    /**
     * Limit how many BoxCollections to update.
     */
    limit?: number
  }

  /**
   * BoxCollection upsert
   */
  export type BoxCollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the BoxCollection to update in case it exists.
     */
    where: BoxCollectionWhereUniqueInput
    /**
     * In case the BoxCollection found by the `where` argument doesn't exist, create a new BoxCollection with this data.
     */
    create: XOR<BoxCollectionCreateInput, BoxCollectionUncheckedCreateInput>
    /**
     * In case the BoxCollection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoxCollectionUpdateInput, BoxCollectionUncheckedUpdateInput>
  }

  /**
   * BoxCollection delete
   */
  export type BoxCollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
    /**
     * Filter which BoxCollection to delete.
     */
    where: BoxCollectionWhereUniqueInput
  }

  /**
   * BoxCollection deleteMany
   */
  export type BoxCollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoxCollections to delete
     */
    where?: BoxCollectionWhereInput
    /**
     * Limit how many BoxCollections to delete.
     */
    limit?: number
  }

  /**
   * BoxCollection without action
   */
  export type BoxCollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCollection
     */
    select?: BoxCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxCollection
     */
    omit?: BoxCollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxCollectionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShopDetailsScalarFieldEnum: {
    id: 'id',
    shopName: 'shopName',
    shortName: 'shortName',
    mobileNumber: 'mobileNumber',
    email: 'email',
    address: 'address',
    subscriptionStatus: 'subscriptionStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ShopDetailsScalarFieldEnum = (typeof ShopDetailsScalarFieldEnum)[keyof typeof ShopDetailsScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    mobileNumber: 'mobileNumber',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const ShopLogoScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    fileName: 'fileName',
    filePath: 'filePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ShopLogoScalarFieldEnum = (typeof ShopLogoScalarFieldEnum)[keyof typeof ShopLogoScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    mobileNumber: 'mobileNumber',
    email: 'email',
    roleName: 'roleName',
    access: 'access',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const CustomerDetailsScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    shopId: 'shopId',
    name: 'name',
    mobileNumber: 'mobileNumber',
    email: 'email',
    totalBoxes: 'totalBoxes',
    totalAmount: 'totalAmount',
    totalDiscountAmount: 'totalDiscountAmount',
    settledBoxes: 'settledBoxes',
    remainingBoxes: 'remainingBoxes',
    settledAmount: 'settledAmount',
    remainingAmount: 'remainingAmount',
    minAmountForOneBox: 'minAmountForOneBox',
    maxAmountForOneBox: 'maxAmountForOneBox',
    averageAmountOneBox: 'averageAmountOneBox',
    minDisForOneBox: 'minDisForOneBox',
    maxDisForOneBox: 'maxDisForOneBox',
    averageDisOneBox: 'averageDisOneBox',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CustomerDetailsScalarFieldEnum = (typeof CustomerDetailsScalarFieldEnum)[keyof typeof CustomerDetailsScalarFieldEnum]


  export const CustomerLogoScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    shopId: 'shopId',
    customerId: 'customerId',
    fileName: 'fileName',
    filePath: 'filePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CustomerLogoScalarFieldEnum = (typeof CustomerLogoScalarFieldEnum)[keyof typeof CustomerLogoScalarFieldEnum]


  export const SalesDetailsScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    shopId: 'shopId',
    customerId: 'customerId',
    soldBoxes: 'soldBoxes',
    soldAmount: 'soldAmount',
    appliedDis: 'appliedDis',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SalesDetailsScalarFieldEnum = (typeof SalesDetailsScalarFieldEnum)[keyof typeof SalesDetailsScalarFieldEnum]


  export const BoxCollectionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    shopId: 'shopId',
    customerId: 'customerId',
    collectedBoxes: 'collectedBoxes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type BoxCollectionScalarFieldEnum = (typeof BoxCollectionScalarFieldEnum)[keyof typeof BoxCollectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ShopDetailsOrderByRelevanceFieldEnum: {
    shopName: 'shopName',
    shortName: 'shortName',
    email: 'email',
    address: 'address'
  };

  export type ShopDetailsOrderByRelevanceFieldEnum = (typeof ShopDetailsOrderByRelevanceFieldEnum)[keyof typeof ShopDetailsOrderByRelevanceFieldEnum]


  export const OwnerOrderByRelevanceFieldEnum: {
    name: 'name',
    mobileNumber: 'mobileNumber',
    email: 'email',
    password: 'password'
  };

  export type OwnerOrderByRelevanceFieldEnum = (typeof OwnerOrderByRelevanceFieldEnum)[keyof typeof OwnerOrderByRelevanceFieldEnum]


  export const ShopLogoOrderByRelevanceFieldEnum: {
    fileName: 'fileName',
    filePath: 'filePath'
  };

  export type ShopLogoOrderByRelevanceFieldEnum = (typeof ShopLogoOrderByRelevanceFieldEnum)[keyof typeof ShopLogoOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    roleName: 'roleName',
    access: 'access'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const CustomerDetailsOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    minAmountForOneBox: 'minAmountForOneBox',
    maxAmountForOneBox: 'maxAmountForOneBox',
    averageAmountOneBox: 'averageAmountOneBox',
    minDisForOneBox: 'minDisForOneBox',
    maxDisForOneBox: 'maxDisForOneBox',
    averageDisOneBox: 'averageDisOneBox'
  };

  export type CustomerDetailsOrderByRelevanceFieldEnum = (typeof CustomerDetailsOrderByRelevanceFieldEnum)[keyof typeof CustomerDetailsOrderByRelevanceFieldEnum]


  export const CustomerLogoOrderByRelevanceFieldEnum: {
    fileName: 'fileName',
    filePath: 'filePath'
  };

  export type CustomerLogoOrderByRelevanceFieldEnum = (typeof CustomerLogoOrderByRelevanceFieldEnum)[keyof typeof CustomerLogoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ShopDetailsWhereInput = {
    AND?: ShopDetailsWhereInput | ShopDetailsWhereInput[]
    OR?: ShopDetailsWhereInput[]
    NOT?: ShopDetailsWhereInput | ShopDetailsWhereInput[]
    id?: IntFilter<"ShopDetails"> | number
    shopName?: StringFilter<"ShopDetails"> | string
    shortName?: StringNullableFilter<"ShopDetails"> | string | null
    mobileNumber?: BigIntFilter<"ShopDetails"> | bigint | number
    email?: StringNullableFilter<"ShopDetails"> | string | null
    address?: StringFilter<"ShopDetails"> | string
    subscriptionStatus?: BoolFilter<"ShopDetails"> | boolean
    createdAt?: DateTimeFilter<"ShopDetails"> | Date | string
    updatedAt?: DateTimeFilter<"ShopDetails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ShopDetails"> | Date | string | null
    owners?: OwnerListRelationFilter
    shopLogos?: ShopLogoListRelationFilter
    roles?: RoleListRelationFilter
    customerDetails?: CustomerDetailsListRelationFilter
    customerLogos?: CustomerLogoListRelationFilter
    salesDetails?: SalesDetailsListRelationFilter
    boxCollections?: BoxCollectionListRelationFilter
  }

  export type ShopDetailsOrderByWithRelationInput = {
    id?: SortOrder
    shopName?: SortOrder
    shortName?: SortOrderInput | SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    subscriptionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    owners?: OwnerOrderByRelationAggregateInput
    shopLogos?: ShopLogoOrderByRelationAggregateInput
    roles?: RoleOrderByRelationAggregateInput
    customerDetails?: CustomerDetailsOrderByRelationAggregateInput
    customerLogos?: CustomerLogoOrderByRelationAggregateInput
    salesDetails?: SalesDetailsOrderByRelationAggregateInput
    boxCollections?: BoxCollectionOrderByRelationAggregateInput
    _relevance?: ShopDetailsOrderByRelevanceInput
  }

  export type ShopDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mobileNumber?: bigint | number
    AND?: ShopDetailsWhereInput | ShopDetailsWhereInput[]
    OR?: ShopDetailsWhereInput[]
    NOT?: ShopDetailsWhereInput | ShopDetailsWhereInput[]
    shopName?: StringFilter<"ShopDetails"> | string
    shortName?: StringNullableFilter<"ShopDetails"> | string | null
    email?: StringNullableFilter<"ShopDetails"> | string | null
    address?: StringFilter<"ShopDetails"> | string
    subscriptionStatus?: BoolFilter<"ShopDetails"> | boolean
    createdAt?: DateTimeFilter<"ShopDetails"> | Date | string
    updatedAt?: DateTimeFilter<"ShopDetails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ShopDetails"> | Date | string | null
    owners?: OwnerListRelationFilter
    shopLogos?: ShopLogoListRelationFilter
    roles?: RoleListRelationFilter
    customerDetails?: CustomerDetailsListRelationFilter
    customerLogos?: CustomerLogoListRelationFilter
    salesDetails?: SalesDetailsListRelationFilter
    boxCollections?: BoxCollectionListRelationFilter
  }, "id" | "mobileNumber">

  export type ShopDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    shopName?: SortOrder
    shortName?: SortOrderInput | SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    subscriptionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ShopDetailsCountOrderByAggregateInput
    _avg?: ShopDetailsAvgOrderByAggregateInput
    _max?: ShopDetailsMaxOrderByAggregateInput
    _min?: ShopDetailsMinOrderByAggregateInput
    _sum?: ShopDetailsSumOrderByAggregateInput
  }

  export type ShopDetailsScalarWhereWithAggregatesInput = {
    AND?: ShopDetailsScalarWhereWithAggregatesInput | ShopDetailsScalarWhereWithAggregatesInput[]
    OR?: ShopDetailsScalarWhereWithAggregatesInput[]
    NOT?: ShopDetailsScalarWhereWithAggregatesInput | ShopDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShopDetails"> | number
    shopName?: StringWithAggregatesFilter<"ShopDetails"> | string
    shortName?: StringNullableWithAggregatesFilter<"ShopDetails"> | string | null
    mobileNumber?: BigIntWithAggregatesFilter<"ShopDetails"> | bigint | number
    email?: StringNullableWithAggregatesFilter<"ShopDetails"> | string | null
    address?: StringWithAggregatesFilter<"ShopDetails"> | string
    subscriptionStatus?: BoolWithAggregatesFilter<"ShopDetails"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ShopDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShopDetails"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ShopDetails"> | Date | string | null
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: IntFilter<"Owner"> | number
    shopId?: IntFilter<"Owner"> | number
    name?: StringFilter<"Owner"> | string
    mobileNumber?: StringFilter<"Owner"> | string
    email?: StringNullableFilter<"Owner"> | string | null
    password?: StringFilter<"Owner"> | string
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeFilter<"Owner"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Owner"> | Date | string | null
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    shop?: ShopDetailsOrderByWithRelationInput
    _relevance?: OwnerOrderByRelevanceInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mobileNumber?: string
    email?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    shopId?: IntFilter<"Owner"> | number
    name?: StringFilter<"Owner"> | string
    password?: StringFilter<"Owner"> | string
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeFilter<"Owner"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Owner"> | Date | string | null
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
  }, "id" | "mobileNumber" | "email">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _avg?: OwnerAvgOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
    _sum?: OwnerSumOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Owner"> | number
    shopId?: IntWithAggregatesFilter<"Owner"> | number
    name?: StringWithAggregatesFilter<"Owner"> | string
    mobileNumber?: StringWithAggregatesFilter<"Owner"> | string
    email?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    password?: StringWithAggregatesFilter<"Owner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Owner"> | Date | string | null
  }

  export type ShopLogoWhereInput = {
    AND?: ShopLogoWhereInput | ShopLogoWhereInput[]
    OR?: ShopLogoWhereInput[]
    NOT?: ShopLogoWhereInput | ShopLogoWhereInput[]
    id?: IntFilter<"ShopLogo"> | number
    shopId?: IntFilter<"ShopLogo"> | number
    fileName?: StringFilter<"ShopLogo"> | string
    filePath?: StringFilter<"ShopLogo"> | string
    createdAt?: DateTimeFilter<"ShopLogo"> | Date | string
    updatedAt?: DateTimeFilter<"ShopLogo"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ShopLogo"> | Date | string | null
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
  }

  export type ShopLogoOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    shop?: ShopDetailsOrderByWithRelationInput
    _relevance?: ShopLogoOrderByRelevanceInput
  }

  export type ShopLogoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShopLogoWhereInput | ShopLogoWhereInput[]
    OR?: ShopLogoWhereInput[]
    NOT?: ShopLogoWhereInput | ShopLogoWhereInput[]
    shopId?: IntFilter<"ShopLogo"> | number
    fileName?: StringFilter<"ShopLogo"> | string
    filePath?: StringFilter<"ShopLogo"> | string
    createdAt?: DateTimeFilter<"ShopLogo"> | Date | string
    updatedAt?: DateTimeFilter<"ShopLogo"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ShopLogo"> | Date | string | null
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
  }, "id">

  export type ShopLogoOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ShopLogoCountOrderByAggregateInput
    _avg?: ShopLogoAvgOrderByAggregateInput
    _max?: ShopLogoMaxOrderByAggregateInput
    _min?: ShopLogoMinOrderByAggregateInput
    _sum?: ShopLogoSumOrderByAggregateInput
  }

  export type ShopLogoScalarWhereWithAggregatesInput = {
    AND?: ShopLogoScalarWhereWithAggregatesInput | ShopLogoScalarWhereWithAggregatesInput[]
    OR?: ShopLogoScalarWhereWithAggregatesInput[]
    NOT?: ShopLogoScalarWhereWithAggregatesInput | ShopLogoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShopLogo"> | number
    shopId?: IntWithAggregatesFilter<"ShopLogo"> | number
    fileName?: StringWithAggregatesFilter<"ShopLogo"> | string
    filePath?: StringWithAggregatesFilter<"ShopLogo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShopLogo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShopLogo"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ShopLogo"> | Date | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    shopId?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    mobileNumber?: BigIntFilter<"Role"> | bigint | number
    email?: StringNullableFilter<"Role"> | string | null
    roleName?: StringFilter<"Role"> | string
    access?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customerDetails?: CustomerDetailsListRelationFilter
    customerLogos?: CustomerLogoListRelationFilter
    salesDetails?: SalesDetailsListRelationFilter
    boxCollections?: BoxCollectionListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    roleName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    shop?: ShopDetailsOrderByWithRelationInput
    customerDetails?: CustomerDetailsOrderByRelationAggregateInput
    customerLogos?: CustomerLogoOrderByRelationAggregateInput
    salesDetails?: SalesDetailsOrderByRelationAggregateInput
    boxCollections?: BoxCollectionOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mobileNumber?: bigint | number
    email?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    shopId?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    roleName?: StringFilter<"Role"> | string
    access?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customerDetails?: CustomerDetailsListRelationFilter
    customerLogos?: CustomerLogoListRelationFilter
    salesDetails?: SalesDetailsListRelationFilter
    boxCollections?: BoxCollectionListRelationFilter
  }, "id" | "mobileNumber" | "email">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    roleName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    shopId?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    mobileNumber?: BigIntWithAggregatesFilter<"Role"> | bigint | number
    email?: StringNullableWithAggregatesFilter<"Role"> | string | null
    roleName?: StringWithAggregatesFilter<"Role"> | string
    access?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
  }

  export type CustomerDetailsWhereInput = {
    AND?: CustomerDetailsWhereInput | CustomerDetailsWhereInput[]
    OR?: CustomerDetailsWhereInput[]
    NOT?: CustomerDetailsWhereInput | CustomerDetailsWhereInput[]
    id?: IntFilter<"CustomerDetails"> | number
    roleId?: IntFilter<"CustomerDetails"> | number
    shopId?: IntFilter<"CustomerDetails"> | number
    name?: StringFilter<"CustomerDetails"> | string
    mobileNumber?: BigIntFilter<"CustomerDetails"> | bigint | number
    email?: StringNullableFilter<"CustomerDetails"> | string | null
    totalBoxes?: IntNullableFilter<"CustomerDetails"> | number | null
    totalAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    totalDiscountAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    settledBoxes?: IntNullableFilter<"CustomerDetails"> | number | null
    remainingBoxes?: IntNullableFilter<"CustomerDetails"> | number | null
    settledAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    remainingAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    minAmountForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    maxAmountForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    averageAmountOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    minDisForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    maxDisForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    averageDisOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    createdAt?: DateTimeFilter<"CustomerDetails"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerDetails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CustomerDetails"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customerLogos?: CustomerLogoListRelationFilter
    salesDetails?: SalesDetailsListRelationFilter
    boxCollections?: BoxCollectionListRelationFilter
  }

  export type CustomerDetailsOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    totalBoxes?: SortOrderInput | SortOrder
    totalAmount?: SortOrderInput | SortOrder
    totalDiscountAmount?: SortOrderInput | SortOrder
    settledBoxes?: SortOrderInput | SortOrder
    remainingBoxes?: SortOrderInput | SortOrder
    settledAmount?: SortOrderInput | SortOrder
    remainingAmount?: SortOrderInput | SortOrder
    minAmountForOneBox?: SortOrderInput | SortOrder
    maxAmountForOneBox?: SortOrderInput | SortOrder
    averageAmountOneBox?: SortOrderInput | SortOrder
    minDisForOneBox?: SortOrderInput | SortOrder
    maxDisForOneBox?: SortOrderInput | SortOrder
    averageDisOneBox?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    shop?: ShopDetailsOrderByWithRelationInput
    customerLogos?: CustomerLogoOrderByRelationAggregateInput
    salesDetails?: SalesDetailsOrderByRelationAggregateInput
    boxCollections?: BoxCollectionOrderByRelationAggregateInput
    _relevance?: CustomerDetailsOrderByRelevanceInput
  }

  export type CustomerDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mobileNumber?: bigint | number
    email?: string
    AND?: CustomerDetailsWhereInput | CustomerDetailsWhereInput[]
    OR?: CustomerDetailsWhereInput[]
    NOT?: CustomerDetailsWhereInput | CustomerDetailsWhereInput[]
    roleId?: IntFilter<"CustomerDetails"> | number
    shopId?: IntFilter<"CustomerDetails"> | number
    name?: StringFilter<"CustomerDetails"> | string
    totalBoxes?: IntNullableFilter<"CustomerDetails"> | number | null
    totalAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    totalDiscountAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    settledBoxes?: IntNullableFilter<"CustomerDetails"> | number | null
    remainingBoxes?: IntNullableFilter<"CustomerDetails"> | number | null
    settledAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    remainingAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    minAmountForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    maxAmountForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    averageAmountOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    minDisForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    maxDisForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    averageDisOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    createdAt?: DateTimeFilter<"CustomerDetails"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerDetails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CustomerDetails"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customerLogos?: CustomerLogoListRelationFilter
    salesDetails?: SalesDetailsListRelationFilter
    boxCollections?: BoxCollectionListRelationFilter
  }, "id" | "mobileNumber" | "email">

  export type CustomerDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    totalBoxes?: SortOrderInput | SortOrder
    totalAmount?: SortOrderInput | SortOrder
    totalDiscountAmount?: SortOrderInput | SortOrder
    settledBoxes?: SortOrderInput | SortOrder
    remainingBoxes?: SortOrderInput | SortOrder
    settledAmount?: SortOrderInput | SortOrder
    remainingAmount?: SortOrderInput | SortOrder
    minAmountForOneBox?: SortOrderInput | SortOrder
    maxAmountForOneBox?: SortOrderInput | SortOrder
    averageAmountOneBox?: SortOrderInput | SortOrder
    minDisForOneBox?: SortOrderInput | SortOrder
    maxDisForOneBox?: SortOrderInput | SortOrder
    averageDisOneBox?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CustomerDetailsCountOrderByAggregateInput
    _avg?: CustomerDetailsAvgOrderByAggregateInput
    _max?: CustomerDetailsMaxOrderByAggregateInput
    _min?: CustomerDetailsMinOrderByAggregateInput
    _sum?: CustomerDetailsSumOrderByAggregateInput
  }

  export type CustomerDetailsScalarWhereWithAggregatesInput = {
    AND?: CustomerDetailsScalarWhereWithAggregatesInput | CustomerDetailsScalarWhereWithAggregatesInput[]
    OR?: CustomerDetailsScalarWhereWithAggregatesInput[]
    NOT?: CustomerDetailsScalarWhereWithAggregatesInput | CustomerDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerDetails"> | number
    roleId?: IntWithAggregatesFilter<"CustomerDetails"> | number
    shopId?: IntWithAggregatesFilter<"CustomerDetails"> | number
    name?: StringWithAggregatesFilter<"CustomerDetails"> | string
    mobileNumber?: BigIntWithAggregatesFilter<"CustomerDetails"> | bigint | number
    email?: StringNullableWithAggregatesFilter<"CustomerDetails"> | string | null
    totalBoxes?: IntNullableWithAggregatesFilter<"CustomerDetails"> | number | null
    totalAmount?: BigIntNullableWithAggregatesFilter<"CustomerDetails"> | bigint | number | null
    totalDiscountAmount?: BigIntNullableWithAggregatesFilter<"CustomerDetails"> | bigint | number | null
    settledBoxes?: IntNullableWithAggregatesFilter<"CustomerDetails"> | number | null
    remainingBoxes?: IntNullableWithAggregatesFilter<"CustomerDetails"> | number | null
    settledAmount?: BigIntNullableWithAggregatesFilter<"CustomerDetails"> | bigint | number | null
    remainingAmount?: BigIntNullableWithAggregatesFilter<"CustomerDetails"> | bigint | number | null
    minAmountForOneBox?: StringNullableWithAggregatesFilter<"CustomerDetails"> | string | null
    maxAmountForOneBox?: StringNullableWithAggregatesFilter<"CustomerDetails"> | string | null
    averageAmountOneBox?: StringNullableWithAggregatesFilter<"CustomerDetails"> | string | null
    minDisForOneBox?: StringNullableWithAggregatesFilter<"CustomerDetails"> | string | null
    maxDisForOneBox?: StringNullableWithAggregatesFilter<"CustomerDetails"> | string | null
    averageDisOneBox?: StringNullableWithAggregatesFilter<"CustomerDetails"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerDetails"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CustomerDetails"> | Date | string | null
  }

  export type CustomerLogoWhereInput = {
    AND?: CustomerLogoWhereInput | CustomerLogoWhereInput[]
    OR?: CustomerLogoWhereInput[]
    NOT?: CustomerLogoWhereInput | CustomerLogoWhereInput[]
    id?: IntFilter<"CustomerLogo"> | number
    roleId?: IntFilter<"CustomerLogo"> | number
    shopId?: IntFilter<"CustomerLogo"> | number
    customerId?: IntFilter<"CustomerLogo"> | number
    fileName?: StringFilter<"CustomerLogo"> | string
    filePath?: StringFilter<"CustomerLogo"> | string
    createdAt?: DateTimeFilter<"CustomerLogo"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerLogo"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CustomerLogo"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customer?: XOR<CustomerDetailsScalarRelationFilter, CustomerDetailsWhereInput>
  }

  export type CustomerLogoOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    shop?: ShopDetailsOrderByWithRelationInput
    customer?: CustomerDetailsOrderByWithRelationInput
    _relevance?: CustomerLogoOrderByRelevanceInput
  }

  export type CustomerLogoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerLogoWhereInput | CustomerLogoWhereInput[]
    OR?: CustomerLogoWhereInput[]
    NOT?: CustomerLogoWhereInput | CustomerLogoWhereInput[]
    roleId?: IntFilter<"CustomerLogo"> | number
    shopId?: IntFilter<"CustomerLogo"> | number
    customerId?: IntFilter<"CustomerLogo"> | number
    fileName?: StringFilter<"CustomerLogo"> | string
    filePath?: StringFilter<"CustomerLogo"> | string
    createdAt?: DateTimeFilter<"CustomerLogo"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerLogo"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CustomerLogo"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customer?: XOR<CustomerDetailsScalarRelationFilter, CustomerDetailsWhereInput>
  }, "id">

  export type CustomerLogoOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CustomerLogoCountOrderByAggregateInput
    _avg?: CustomerLogoAvgOrderByAggregateInput
    _max?: CustomerLogoMaxOrderByAggregateInput
    _min?: CustomerLogoMinOrderByAggregateInput
    _sum?: CustomerLogoSumOrderByAggregateInput
  }

  export type CustomerLogoScalarWhereWithAggregatesInput = {
    AND?: CustomerLogoScalarWhereWithAggregatesInput | CustomerLogoScalarWhereWithAggregatesInput[]
    OR?: CustomerLogoScalarWhereWithAggregatesInput[]
    NOT?: CustomerLogoScalarWhereWithAggregatesInput | CustomerLogoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomerLogo"> | number
    roleId?: IntWithAggregatesFilter<"CustomerLogo"> | number
    shopId?: IntWithAggregatesFilter<"CustomerLogo"> | number
    customerId?: IntWithAggregatesFilter<"CustomerLogo"> | number
    fileName?: StringWithAggregatesFilter<"CustomerLogo"> | string
    filePath?: StringWithAggregatesFilter<"CustomerLogo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CustomerLogo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerLogo"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CustomerLogo"> | Date | string | null
  }

  export type SalesDetailsWhereInput = {
    AND?: SalesDetailsWhereInput | SalesDetailsWhereInput[]
    OR?: SalesDetailsWhereInput[]
    NOT?: SalesDetailsWhereInput | SalesDetailsWhereInput[]
    id?: IntFilter<"SalesDetails"> | number
    roleId?: IntFilter<"SalesDetails"> | number
    shopId?: IntFilter<"SalesDetails"> | number
    customerId?: IntFilter<"SalesDetails"> | number
    soldBoxes?: IntFilter<"SalesDetails"> | number
    soldAmount?: BigIntFilter<"SalesDetails"> | bigint | number
    appliedDis?: IntFilter<"SalesDetails"> | number
    totalAmount?: BigIntFilter<"SalesDetails"> | bigint | number
    createdAt?: DateTimeFilter<"SalesDetails"> | Date | string
    updatedAt?: DateTimeFilter<"SalesDetails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SalesDetails"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customer?: XOR<CustomerDetailsScalarRelationFilter, CustomerDetailsWhereInput>
  }

  export type SalesDetailsOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    soldBoxes?: SortOrder
    soldAmount?: SortOrder
    appliedDis?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    shop?: ShopDetailsOrderByWithRelationInput
    customer?: CustomerDetailsOrderByWithRelationInput
  }

  export type SalesDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalesDetailsWhereInput | SalesDetailsWhereInput[]
    OR?: SalesDetailsWhereInput[]
    NOT?: SalesDetailsWhereInput | SalesDetailsWhereInput[]
    roleId?: IntFilter<"SalesDetails"> | number
    shopId?: IntFilter<"SalesDetails"> | number
    customerId?: IntFilter<"SalesDetails"> | number
    soldBoxes?: IntFilter<"SalesDetails"> | number
    soldAmount?: BigIntFilter<"SalesDetails"> | bigint | number
    appliedDis?: IntFilter<"SalesDetails"> | number
    totalAmount?: BigIntFilter<"SalesDetails"> | bigint | number
    createdAt?: DateTimeFilter<"SalesDetails"> | Date | string
    updatedAt?: DateTimeFilter<"SalesDetails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SalesDetails"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customer?: XOR<CustomerDetailsScalarRelationFilter, CustomerDetailsWhereInput>
  }, "id">

  export type SalesDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    soldBoxes?: SortOrder
    soldAmount?: SortOrder
    appliedDis?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SalesDetailsCountOrderByAggregateInput
    _avg?: SalesDetailsAvgOrderByAggregateInput
    _max?: SalesDetailsMaxOrderByAggregateInput
    _min?: SalesDetailsMinOrderByAggregateInput
    _sum?: SalesDetailsSumOrderByAggregateInput
  }

  export type SalesDetailsScalarWhereWithAggregatesInput = {
    AND?: SalesDetailsScalarWhereWithAggregatesInput | SalesDetailsScalarWhereWithAggregatesInput[]
    OR?: SalesDetailsScalarWhereWithAggregatesInput[]
    NOT?: SalesDetailsScalarWhereWithAggregatesInput | SalesDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SalesDetails"> | number
    roleId?: IntWithAggregatesFilter<"SalesDetails"> | number
    shopId?: IntWithAggregatesFilter<"SalesDetails"> | number
    customerId?: IntWithAggregatesFilter<"SalesDetails"> | number
    soldBoxes?: IntWithAggregatesFilter<"SalesDetails"> | number
    soldAmount?: BigIntWithAggregatesFilter<"SalesDetails"> | bigint | number
    appliedDis?: IntWithAggregatesFilter<"SalesDetails"> | number
    totalAmount?: BigIntWithAggregatesFilter<"SalesDetails"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"SalesDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesDetails"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"SalesDetails"> | Date | string | null
  }

  export type BoxCollectionWhereInput = {
    AND?: BoxCollectionWhereInput | BoxCollectionWhereInput[]
    OR?: BoxCollectionWhereInput[]
    NOT?: BoxCollectionWhereInput | BoxCollectionWhereInput[]
    id?: IntFilter<"BoxCollection"> | number
    roleId?: IntFilter<"BoxCollection"> | number
    shopId?: IntFilter<"BoxCollection"> | number
    customerId?: IntFilter<"BoxCollection"> | number
    collectedBoxes?: IntFilter<"BoxCollection"> | number
    createdAt?: DateTimeFilter<"BoxCollection"> | Date | string
    updatedAt?: DateTimeFilter<"BoxCollection"> | Date | string
    deletedAt?: DateTimeNullableFilter<"BoxCollection"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customer?: XOR<CustomerDetailsScalarRelationFilter, CustomerDetailsWhereInput>
  }

  export type BoxCollectionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    collectedBoxes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    shop?: ShopDetailsOrderByWithRelationInput
    customer?: CustomerDetailsOrderByWithRelationInput
  }

  export type BoxCollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoxCollectionWhereInput | BoxCollectionWhereInput[]
    OR?: BoxCollectionWhereInput[]
    NOT?: BoxCollectionWhereInput | BoxCollectionWhereInput[]
    roleId?: IntFilter<"BoxCollection"> | number
    shopId?: IntFilter<"BoxCollection"> | number
    customerId?: IntFilter<"BoxCollection"> | number
    collectedBoxes?: IntFilter<"BoxCollection"> | number
    createdAt?: DateTimeFilter<"BoxCollection"> | Date | string
    updatedAt?: DateTimeFilter<"BoxCollection"> | Date | string
    deletedAt?: DateTimeNullableFilter<"BoxCollection"> | Date | string | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    shop?: XOR<ShopDetailsScalarRelationFilter, ShopDetailsWhereInput>
    customer?: XOR<CustomerDetailsScalarRelationFilter, CustomerDetailsWhereInput>
  }, "id">

  export type BoxCollectionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    collectedBoxes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: BoxCollectionCountOrderByAggregateInput
    _avg?: BoxCollectionAvgOrderByAggregateInput
    _max?: BoxCollectionMaxOrderByAggregateInput
    _min?: BoxCollectionMinOrderByAggregateInput
    _sum?: BoxCollectionSumOrderByAggregateInput
  }

  export type BoxCollectionScalarWhereWithAggregatesInput = {
    AND?: BoxCollectionScalarWhereWithAggregatesInput | BoxCollectionScalarWhereWithAggregatesInput[]
    OR?: BoxCollectionScalarWhereWithAggregatesInput[]
    NOT?: BoxCollectionScalarWhereWithAggregatesInput | BoxCollectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BoxCollection"> | number
    roleId?: IntWithAggregatesFilter<"BoxCollection"> | number
    shopId?: IntWithAggregatesFilter<"BoxCollection"> | number
    customerId?: IntWithAggregatesFilter<"BoxCollection"> | number
    collectedBoxes?: IntWithAggregatesFilter<"BoxCollection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BoxCollection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BoxCollection"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"BoxCollection"> | Date | string | null
  }

  export type ShopDetailsCreateInput = {
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoCreateNestedManyWithoutShopInput
    roles?: RoleCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsUncheckedCreateInput = {
    id?: number
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerUncheckedCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoUncheckedCreateNestedManyWithoutShopInput
    roles?: RoleUncheckedCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsUpdateInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUpdateManyWithoutShopNestedInput
    roles?: RoleUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUncheckedUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUncheckedUpdateManyWithoutShopNestedInput
    roles?: RoleUncheckedUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsCreateManyInput = {
    id?: number
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShopDetailsUpdateManyMutationInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerCreateInput = {
    name: string
    mobileNumber: string
    email?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutOwnersInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: string
    email?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OwnerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerCreateManyInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: string
    email?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OwnerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopLogoCreateInput = {
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutShopLogosInput
  }

  export type ShopLogoUncheckedCreateInput = {
    id?: number
    shopId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShopLogoUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutShopLogosNestedInput
  }

  export type ShopLogoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopLogoCreateManyInput = {
    id?: number
    shopId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShopLogoUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopLogoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleCreateInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutRolesInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutRoleInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutRoleInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutRolesNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutRoleNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutRoleNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerDetailsCreateInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutCustomerDetailsInput
    shop: ShopDetailsCreateNestedOneWithoutCustomerDetailsInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutCustomerInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsUncheckedCreateInput = {
    id?: number
    roleId: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutCustomerInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutCustomerDetailsNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutCustomerDetailsNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutCustomerNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutCustomerNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerDetailsCreateManyInput = {
    id?: number
    roleId: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerDetailsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerLogoCreateInput = {
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutCustomerLogosInput
    shop: ShopDetailsCreateNestedOneWithoutCustomerLogosInput
    customer: CustomerDetailsCreateNestedOneWithoutCustomerLogosInput
  }

  export type CustomerLogoUncheckedCreateInput = {
    id?: number
    roleId: number
    shopId: number
    customerId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerLogoUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutCustomerLogosNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutCustomerLogosNestedInput
    customer?: CustomerDetailsUpdateOneRequiredWithoutCustomerLogosNestedInput
  }

  export type CustomerLogoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerLogoCreateManyInput = {
    id?: number
    roleId: number
    shopId: number
    customerId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerLogoUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerLogoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesDetailsCreateInput = {
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutSalesDetailsInput
    shop: ShopDetailsCreateNestedOneWithoutSalesDetailsInput
    customer: CustomerDetailsCreateNestedOneWithoutSalesDetailsInput
  }

  export type SalesDetailsUncheckedCreateInput = {
    id?: number
    roleId: number
    shopId: number
    customerId: number
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SalesDetailsUpdateInput = {
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutSalesDetailsNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutSalesDetailsNestedInput
    customer?: CustomerDetailsUpdateOneRequiredWithoutSalesDetailsNestedInput
  }

  export type SalesDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesDetailsCreateManyInput = {
    id?: number
    roleId: number
    shopId: number
    customerId: number
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SalesDetailsUpdateManyMutationInput = {
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoxCollectionCreateInput = {
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutBoxCollectionsInput
    shop: ShopDetailsCreateNestedOneWithoutBoxCollectionsInput
    customer: CustomerDetailsCreateNestedOneWithoutBoxCollectionsInput
  }

  export type BoxCollectionUncheckedCreateInput = {
    id?: number
    roleId: number
    shopId: number
    customerId: number
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BoxCollectionUpdateInput = {
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutBoxCollectionsNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutBoxCollectionsNestedInput
    customer?: CustomerDetailsUpdateOneRequiredWithoutBoxCollectionsNestedInput
  }

  export type BoxCollectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoxCollectionCreateManyInput = {
    id?: number
    roleId: number
    shopId: number
    customerId: number
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BoxCollectionUpdateManyMutationInput = {
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoxCollectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OwnerListRelationFilter = {
    every?: OwnerWhereInput
    some?: OwnerWhereInput
    none?: OwnerWhereInput
  }

  export type ShopLogoListRelationFilter = {
    every?: ShopLogoWhereInput
    some?: ShopLogoWhereInput
    none?: ShopLogoWhereInput
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type CustomerDetailsListRelationFilter = {
    every?: CustomerDetailsWhereInput
    some?: CustomerDetailsWhereInput
    none?: CustomerDetailsWhereInput
  }

  export type CustomerLogoListRelationFilter = {
    every?: CustomerLogoWhereInput
    some?: CustomerLogoWhereInput
    none?: CustomerLogoWhereInput
  }

  export type SalesDetailsListRelationFilter = {
    every?: SalesDetailsWhereInput
    some?: SalesDetailsWhereInput
    none?: SalesDetailsWhereInput
  }

  export type BoxCollectionListRelationFilter = {
    every?: BoxCollectionWhereInput
    some?: BoxCollectionWhereInput
    none?: BoxCollectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OwnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopLogoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerLogoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalesDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoxCollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopDetailsOrderByRelevanceInput = {
    fields: ShopDetailsOrderByRelevanceFieldEnum | ShopDetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShopDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    shopName?: SortOrder
    shortName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    subscriptionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShopDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
  }

  export type ShopDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    shopName?: SortOrder
    shortName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    subscriptionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShopDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    shopName?: SortOrder
    shortName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    subscriptionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShopDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ShopDetailsScalarRelationFilter = {
    is?: ShopDetailsWhereInput
    isNot?: ShopDetailsWhereInput
  }

  export type OwnerOrderByRelevanceInput = {
    fields: OwnerOrderByRelevanceFieldEnum | OwnerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OwnerAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type OwnerSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type ShopLogoOrderByRelevanceInput = {
    fields: ShopLogoOrderByRelevanceFieldEnum | ShopLogoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShopLogoCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShopLogoAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type ShopLogoMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShopLogoMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ShopLogoSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    roleName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    mobileNumber?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    roleName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    roleName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    mobileNumber?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type CustomerDetailsOrderByRelevanceInput = {
    fields: CustomerDetailsOrderByRelevanceFieldEnum | CustomerDetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    totalBoxes?: SortOrder
    totalAmount?: SortOrder
    totalDiscountAmount?: SortOrder
    settledBoxes?: SortOrder
    remainingBoxes?: SortOrder
    settledAmount?: SortOrder
    remainingAmount?: SortOrder
    minAmountForOneBox?: SortOrder
    maxAmountForOneBox?: SortOrder
    averageAmountOneBox?: SortOrder
    minDisForOneBox?: SortOrder
    maxDisForOneBox?: SortOrder
    averageDisOneBox?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    mobileNumber?: SortOrder
    totalBoxes?: SortOrder
    totalAmount?: SortOrder
    totalDiscountAmount?: SortOrder
    settledBoxes?: SortOrder
    remainingBoxes?: SortOrder
    settledAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type CustomerDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    totalBoxes?: SortOrder
    totalAmount?: SortOrder
    totalDiscountAmount?: SortOrder
    settledBoxes?: SortOrder
    remainingBoxes?: SortOrder
    settledAmount?: SortOrder
    remainingAmount?: SortOrder
    minAmountForOneBox?: SortOrder
    maxAmountForOneBox?: SortOrder
    averageAmountOneBox?: SortOrder
    minDisForOneBox?: SortOrder
    maxDisForOneBox?: SortOrder
    averageDisOneBox?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    totalBoxes?: SortOrder
    totalAmount?: SortOrder
    totalDiscountAmount?: SortOrder
    settledBoxes?: SortOrder
    remainingBoxes?: SortOrder
    settledAmount?: SortOrder
    remainingAmount?: SortOrder
    minAmountForOneBox?: SortOrder
    maxAmountForOneBox?: SortOrder
    averageAmountOneBox?: SortOrder
    minDisForOneBox?: SortOrder
    maxDisForOneBox?: SortOrder
    averageDisOneBox?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    mobileNumber?: SortOrder
    totalBoxes?: SortOrder
    totalAmount?: SortOrder
    totalDiscountAmount?: SortOrder
    settledBoxes?: SortOrder
    remainingBoxes?: SortOrder
    settledAmount?: SortOrder
    remainingAmount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type CustomerDetailsScalarRelationFilter = {
    is?: CustomerDetailsWhereInput
    isNot?: CustomerDetailsWhereInput
  }

  export type CustomerLogoOrderByRelevanceInput = {
    fields: CustomerLogoOrderByRelevanceFieldEnum | CustomerLogoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerLogoCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerLogoAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
  }

  export type CustomerLogoMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerLogoMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CustomerLogoSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
  }

  export type SalesDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    soldBoxes?: SortOrder
    soldAmount?: SortOrder
    appliedDis?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SalesDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    soldBoxes?: SortOrder
    soldAmount?: SortOrder
    appliedDis?: SortOrder
    totalAmount?: SortOrder
  }

  export type SalesDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    soldBoxes?: SortOrder
    soldAmount?: SortOrder
    appliedDis?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SalesDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    soldBoxes?: SortOrder
    soldAmount?: SortOrder
    appliedDis?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SalesDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    soldBoxes?: SortOrder
    soldAmount?: SortOrder
    appliedDis?: SortOrder
    totalAmount?: SortOrder
  }

  export type BoxCollectionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    collectedBoxes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BoxCollectionAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    collectedBoxes?: SortOrder
  }

  export type BoxCollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    collectedBoxes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BoxCollectionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    collectedBoxes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BoxCollectionSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    collectedBoxes?: SortOrder
  }

  export type OwnerCreateNestedManyWithoutShopInput = {
    create?: XOR<OwnerCreateWithoutShopInput, OwnerUncheckedCreateWithoutShopInput> | OwnerCreateWithoutShopInput[] | OwnerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OwnerCreateOrConnectWithoutShopInput | OwnerCreateOrConnectWithoutShopInput[]
    createMany?: OwnerCreateManyShopInputEnvelope
    connect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
  }

  export type ShopLogoCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopLogoCreateWithoutShopInput, ShopLogoUncheckedCreateWithoutShopInput> | ShopLogoCreateWithoutShopInput[] | ShopLogoUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopLogoCreateOrConnectWithoutShopInput | ShopLogoCreateOrConnectWithoutShopInput[]
    createMany?: ShopLogoCreateManyShopInputEnvelope
    connect?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutShopInput = {
    create?: XOR<RoleCreateWithoutShopInput, RoleUncheckedCreateWithoutShopInput> | RoleCreateWithoutShopInput[] | RoleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutShopInput | RoleCreateOrConnectWithoutShopInput[]
    createMany?: RoleCreateManyShopInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type CustomerDetailsCreateNestedManyWithoutShopInput = {
    create?: XOR<CustomerDetailsCreateWithoutShopInput, CustomerDetailsUncheckedCreateWithoutShopInput> | CustomerDetailsCreateWithoutShopInput[] | CustomerDetailsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutShopInput | CustomerDetailsCreateOrConnectWithoutShopInput[]
    createMany?: CustomerDetailsCreateManyShopInputEnvelope
    connect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
  }

  export type CustomerLogoCreateNestedManyWithoutShopInput = {
    create?: XOR<CustomerLogoCreateWithoutShopInput, CustomerLogoUncheckedCreateWithoutShopInput> | CustomerLogoCreateWithoutShopInput[] | CustomerLogoUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutShopInput | CustomerLogoCreateOrConnectWithoutShopInput[]
    createMany?: CustomerLogoCreateManyShopInputEnvelope
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
  }

  export type SalesDetailsCreateNestedManyWithoutShopInput = {
    create?: XOR<SalesDetailsCreateWithoutShopInput, SalesDetailsUncheckedCreateWithoutShopInput> | SalesDetailsCreateWithoutShopInput[] | SalesDetailsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutShopInput | SalesDetailsCreateOrConnectWithoutShopInput[]
    createMany?: SalesDetailsCreateManyShopInputEnvelope
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
  }

  export type BoxCollectionCreateNestedManyWithoutShopInput = {
    create?: XOR<BoxCollectionCreateWithoutShopInput, BoxCollectionUncheckedCreateWithoutShopInput> | BoxCollectionCreateWithoutShopInput[] | BoxCollectionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutShopInput | BoxCollectionCreateOrConnectWithoutShopInput[]
    createMany?: BoxCollectionCreateManyShopInputEnvelope
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
  }

  export type OwnerUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<OwnerCreateWithoutShopInput, OwnerUncheckedCreateWithoutShopInput> | OwnerCreateWithoutShopInput[] | OwnerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OwnerCreateOrConnectWithoutShopInput | OwnerCreateOrConnectWithoutShopInput[]
    createMany?: OwnerCreateManyShopInputEnvelope
    connect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
  }

  export type ShopLogoUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopLogoCreateWithoutShopInput, ShopLogoUncheckedCreateWithoutShopInput> | ShopLogoCreateWithoutShopInput[] | ShopLogoUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopLogoCreateOrConnectWithoutShopInput | ShopLogoCreateOrConnectWithoutShopInput[]
    createMany?: ShopLogoCreateManyShopInputEnvelope
    connect?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<RoleCreateWithoutShopInput, RoleUncheckedCreateWithoutShopInput> | RoleCreateWithoutShopInput[] | RoleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutShopInput | RoleCreateOrConnectWithoutShopInput[]
    createMany?: RoleCreateManyShopInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type CustomerDetailsUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<CustomerDetailsCreateWithoutShopInput, CustomerDetailsUncheckedCreateWithoutShopInput> | CustomerDetailsCreateWithoutShopInput[] | CustomerDetailsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutShopInput | CustomerDetailsCreateOrConnectWithoutShopInput[]
    createMany?: CustomerDetailsCreateManyShopInputEnvelope
    connect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
  }

  export type CustomerLogoUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<CustomerLogoCreateWithoutShopInput, CustomerLogoUncheckedCreateWithoutShopInput> | CustomerLogoCreateWithoutShopInput[] | CustomerLogoUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutShopInput | CustomerLogoCreateOrConnectWithoutShopInput[]
    createMany?: CustomerLogoCreateManyShopInputEnvelope
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
  }

  export type SalesDetailsUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<SalesDetailsCreateWithoutShopInput, SalesDetailsUncheckedCreateWithoutShopInput> | SalesDetailsCreateWithoutShopInput[] | SalesDetailsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutShopInput | SalesDetailsCreateOrConnectWithoutShopInput[]
    createMany?: SalesDetailsCreateManyShopInputEnvelope
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
  }

  export type BoxCollectionUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<BoxCollectionCreateWithoutShopInput, BoxCollectionUncheckedCreateWithoutShopInput> | BoxCollectionCreateWithoutShopInput[] | BoxCollectionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutShopInput | BoxCollectionCreateOrConnectWithoutShopInput[]
    createMany?: BoxCollectionCreateManyShopInputEnvelope
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OwnerUpdateManyWithoutShopNestedInput = {
    create?: XOR<OwnerCreateWithoutShopInput, OwnerUncheckedCreateWithoutShopInput> | OwnerCreateWithoutShopInput[] | OwnerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OwnerCreateOrConnectWithoutShopInput | OwnerCreateOrConnectWithoutShopInput[]
    upsert?: OwnerUpsertWithWhereUniqueWithoutShopInput | OwnerUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OwnerCreateManyShopInputEnvelope
    set?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    disconnect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    delete?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    connect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    update?: OwnerUpdateWithWhereUniqueWithoutShopInput | OwnerUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OwnerUpdateManyWithWhereWithoutShopInput | OwnerUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OwnerScalarWhereInput | OwnerScalarWhereInput[]
  }

  export type ShopLogoUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopLogoCreateWithoutShopInput, ShopLogoUncheckedCreateWithoutShopInput> | ShopLogoCreateWithoutShopInput[] | ShopLogoUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopLogoCreateOrConnectWithoutShopInput | ShopLogoCreateOrConnectWithoutShopInput[]
    upsert?: ShopLogoUpsertWithWhereUniqueWithoutShopInput | ShopLogoUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopLogoCreateManyShopInputEnvelope
    set?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
    disconnect?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
    delete?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
    connect?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
    update?: ShopLogoUpdateWithWhereUniqueWithoutShopInput | ShopLogoUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopLogoUpdateManyWithWhereWithoutShopInput | ShopLogoUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopLogoScalarWhereInput | ShopLogoScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutShopNestedInput = {
    create?: XOR<RoleCreateWithoutShopInput, RoleUncheckedCreateWithoutShopInput> | RoleCreateWithoutShopInput[] | RoleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutShopInput | RoleCreateOrConnectWithoutShopInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutShopInput | RoleUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: RoleCreateManyShopInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutShopInput | RoleUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutShopInput | RoleUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type CustomerDetailsUpdateManyWithoutShopNestedInput = {
    create?: XOR<CustomerDetailsCreateWithoutShopInput, CustomerDetailsUncheckedCreateWithoutShopInput> | CustomerDetailsCreateWithoutShopInput[] | CustomerDetailsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutShopInput | CustomerDetailsCreateOrConnectWithoutShopInput[]
    upsert?: CustomerDetailsUpsertWithWhereUniqueWithoutShopInput | CustomerDetailsUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CustomerDetailsCreateManyShopInputEnvelope
    set?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    disconnect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    delete?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    connect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    update?: CustomerDetailsUpdateWithWhereUniqueWithoutShopInput | CustomerDetailsUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CustomerDetailsUpdateManyWithWhereWithoutShopInput | CustomerDetailsUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CustomerDetailsScalarWhereInput | CustomerDetailsScalarWhereInput[]
  }

  export type CustomerLogoUpdateManyWithoutShopNestedInput = {
    create?: XOR<CustomerLogoCreateWithoutShopInput, CustomerLogoUncheckedCreateWithoutShopInput> | CustomerLogoCreateWithoutShopInput[] | CustomerLogoUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutShopInput | CustomerLogoCreateOrConnectWithoutShopInput[]
    upsert?: CustomerLogoUpsertWithWhereUniqueWithoutShopInput | CustomerLogoUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CustomerLogoCreateManyShopInputEnvelope
    set?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    disconnect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    delete?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    update?: CustomerLogoUpdateWithWhereUniqueWithoutShopInput | CustomerLogoUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CustomerLogoUpdateManyWithWhereWithoutShopInput | CustomerLogoUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CustomerLogoScalarWhereInput | CustomerLogoScalarWhereInput[]
  }

  export type SalesDetailsUpdateManyWithoutShopNestedInput = {
    create?: XOR<SalesDetailsCreateWithoutShopInput, SalesDetailsUncheckedCreateWithoutShopInput> | SalesDetailsCreateWithoutShopInput[] | SalesDetailsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutShopInput | SalesDetailsCreateOrConnectWithoutShopInput[]
    upsert?: SalesDetailsUpsertWithWhereUniqueWithoutShopInput | SalesDetailsUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: SalesDetailsCreateManyShopInputEnvelope
    set?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    disconnect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    delete?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    update?: SalesDetailsUpdateWithWhereUniqueWithoutShopInput | SalesDetailsUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: SalesDetailsUpdateManyWithWhereWithoutShopInput | SalesDetailsUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: SalesDetailsScalarWhereInput | SalesDetailsScalarWhereInput[]
  }

  export type BoxCollectionUpdateManyWithoutShopNestedInput = {
    create?: XOR<BoxCollectionCreateWithoutShopInput, BoxCollectionUncheckedCreateWithoutShopInput> | BoxCollectionCreateWithoutShopInput[] | BoxCollectionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutShopInput | BoxCollectionCreateOrConnectWithoutShopInput[]
    upsert?: BoxCollectionUpsertWithWhereUniqueWithoutShopInput | BoxCollectionUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BoxCollectionCreateManyShopInputEnvelope
    set?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    disconnect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    delete?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    update?: BoxCollectionUpdateWithWhereUniqueWithoutShopInput | BoxCollectionUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BoxCollectionUpdateManyWithWhereWithoutShopInput | BoxCollectionUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BoxCollectionScalarWhereInput | BoxCollectionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OwnerUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<OwnerCreateWithoutShopInput, OwnerUncheckedCreateWithoutShopInput> | OwnerCreateWithoutShopInput[] | OwnerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OwnerCreateOrConnectWithoutShopInput | OwnerCreateOrConnectWithoutShopInput[]
    upsert?: OwnerUpsertWithWhereUniqueWithoutShopInput | OwnerUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OwnerCreateManyShopInputEnvelope
    set?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    disconnect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    delete?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    connect?: OwnerWhereUniqueInput | OwnerWhereUniqueInput[]
    update?: OwnerUpdateWithWhereUniqueWithoutShopInput | OwnerUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OwnerUpdateManyWithWhereWithoutShopInput | OwnerUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OwnerScalarWhereInput | OwnerScalarWhereInput[]
  }

  export type ShopLogoUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopLogoCreateWithoutShopInput, ShopLogoUncheckedCreateWithoutShopInput> | ShopLogoCreateWithoutShopInput[] | ShopLogoUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopLogoCreateOrConnectWithoutShopInput | ShopLogoCreateOrConnectWithoutShopInput[]
    upsert?: ShopLogoUpsertWithWhereUniqueWithoutShopInput | ShopLogoUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopLogoCreateManyShopInputEnvelope
    set?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
    disconnect?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
    delete?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
    connect?: ShopLogoWhereUniqueInput | ShopLogoWhereUniqueInput[]
    update?: ShopLogoUpdateWithWhereUniqueWithoutShopInput | ShopLogoUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopLogoUpdateManyWithWhereWithoutShopInput | ShopLogoUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopLogoScalarWhereInput | ShopLogoScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<RoleCreateWithoutShopInput, RoleUncheckedCreateWithoutShopInput> | RoleCreateWithoutShopInput[] | RoleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutShopInput | RoleCreateOrConnectWithoutShopInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutShopInput | RoleUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: RoleCreateManyShopInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutShopInput | RoleUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutShopInput | RoleUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type CustomerDetailsUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<CustomerDetailsCreateWithoutShopInput, CustomerDetailsUncheckedCreateWithoutShopInput> | CustomerDetailsCreateWithoutShopInput[] | CustomerDetailsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutShopInput | CustomerDetailsCreateOrConnectWithoutShopInput[]
    upsert?: CustomerDetailsUpsertWithWhereUniqueWithoutShopInput | CustomerDetailsUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CustomerDetailsCreateManyShopInputEnvelope
    set?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    disconnect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    delete?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    connect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    update?: CustomerDetailsUpdateWithWhereUniqueWithoutShopInput | CustomerDetailsUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CustomerDetailsUpdateManyWithWhereWithoutShopInput | CustomerDetailsUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CustomerDetailsScalarWhereInput | CustomerDetailsScalarWhereInput[]
  }

  export type CustomerLogoUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<CustomerLogoCreateWithoutShopInput, CustomerLogoUncheckedCreateWithoutShopInput> | CustomerLogoCreateWithoutShopInput[] | CustomerLogoUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutShopInput | CustomerLogoCreateOrConnectWithoutShopInput[]
    upsert?: CustomerLogoUpsertWithWhereUniqueWithoutShopInput | CustomerLogoUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CustomerLogoCreateManyShopInputEnvelope
    set?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    disconnect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    delete?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    update?: CustomerLogoUpdateWithWhereUniqueWithoutShopInput | CustomerLogoUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CustomerLogoUpdateManyWithWhereWithoutShopInput | CustomerLogoUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CustomerLogoScalarWhereInput | CustomerLogoScalarWhereInput[]
  }

  export type SalesDetailsUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<SalesDetailsCreateWithoutShopInput, SalesDetailsUncheckedCreateWithoutShopInput> | SalesDetailsCreateWithoutShopInput[] | SalesDetailsUncheckedCreateWithoutShopInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutShopInput | SalesDetailsCreateOrConnectWithoutShopInput[]
    upsert?: SalesDetailsUpsertWithWhereUniqueWithoutShopInput | SalesDetailsUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: SalesDetailsCreateManyShopInputEnvelope
    set?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    disconnect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    delete?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    update?: SalesDetailsUpdateWithWhereUniqueWithoutShopInput | SalesDetailsUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: SalesDetailsUpdateManyWithWhereWithoutShopInput | SalesDetailsUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: SalesDetailsScalarWhereInput | SalesDetailsScalarWhereInput[]
  }

  export type BoxCollectionUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<BoxCollectionCreateWithoutShopInput, BoxCollectionUncheckedCreateWithoutShopInput> | BoxCollectionCreateWithoutShopInput[] | BoxCollectionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutShopInput | BoxCollectionCreateOrConnectWithoutShopInput[]
    upsert?: BoxCollectionUpsertWithWhereUniqueWithoutShopInput | BoxCollectionUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BoxCollectionCreateManyShopInputEnvelope
    set?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    disconnect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    delete?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    update?: BoxCollectionUpdateWithWhereUniqueWithoutShopInput | BoxCollectionUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BoxCollectionUpdateManyWithWhereWithoutShopInput | BoxCollectionUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BoxCollectionScalarWhereInput | BoxCollectionScalarWhereInput[]
  }

  export type ShopDetailsCreateNestedOneWithoutOwnersInput = {
    create?: XOR<ShopDetailsCreateWithoutOwnersInput, ShopDetailsUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutOwnersInput
    connect?: ShopDetailsWhereUniqueInput
  }

  export type ShopDetailsUpdateOneRequiredWithoutOwnersNestedInput = {
    create?: XOR<ShopDetailsCreateWithoutOwnersInput, ShopDetailsUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutOwnersInput
    upsert?: ShopDetailsUpsertWithoutOwnersInput
    connect?: ShopDetailsWhereUniqueInput
    update?: XOR<XOR<ShopDetailsUpdateToOneWithWhereWithoutOwnersInput, ShopDetailsUpdateWithoutOwnersInput>, ShopDetailsUncheckedUpdateWithoutOwnersInput>
  }

  export type ShopDetailsCreateNestedOneWithoutShopLogosInput = {
    create?: XOR<ShopDetailsCreateWithoutShopLogosInput, ShopDetailsUncheckedCreateWithoutShopLogosInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutShopLogosInput
    connect?: ShopDetailsWhereUniqueInput
  }

  export type ShopDetailsUpdateOneRequiredWithoutShopLogosNestedInput = {
    create?: XOR<ShopDetailsCreateWithoutShopLogosInput, ShopDetailsUncheckedCreateWithoutShopLogosInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutShopLogosInput
    upsert?: ShopDetailsUpsertWithoutShopLogosInput
    connect?: ShopDetailsWhereUniqueInput
    update?: XOR<XOR<ShopDetailsUpdateToOneWithWhereWithoutShopLogosInput, ShopDetailsUpdateWithoutShopLogosInput>, ShopDetailsUncheckedUpdateWithoutShopLogosInput>
  }

  export type ShopDetailsCreateNestedOneWithoutRolesInput = {
    create?: XOR<ShopDetailsCreateWithoutRolesInput, ShopDetailsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutRolesInput
    connect?: ShopDetailsWhereUniqueInput
  }

  export type CustomerDetailsCreateNestedManyWithoutRoleInput = {
    create?: XOR<CustomerDetailsCreateWithoutRoleInput, CustomerDetailsUncheckedCreateWithoutRoleInput> | CustomerDetailsCreateWithoutRoleInput[] | CustomerDetailsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutRoleInput | CustomerDetailsCreateOrConnectWithoutRoleInput[]
    createMany?: CustomerDetailsCreateManyRoleInputEnvelope
    connect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
  }

  export type CustomerLogoCreateNestedManyWithoutRoleInput = {
    create?: XOR<CustomerLogoCreateWithoutRoleInput, CustomerLogoUncheckedCreateWithoutRoleInput> | CustomerLogoCreateWithoutRoleInput[] | CustomerLogoUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutRoleInput | CustomerLogoCreateOrConnectWithoutRoleInput[]
    createMany?: CustomerLogoCreateManyRoleInputEnvelope
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
  }

  export type SalesDetailsCreateNestedManyWithoutRoleInput = {
    create?: XOR<SalesDetailsCreateWithoutRoleInput, SalesDetailsUncheckedCreateWithoutRoleInput> | SalesDetailsCreateWithoutRoleInput[] | SalesDetailsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutRoleInput | SalesDetailsCreateOrConnectWithoutRoleInput[]
    createMany?: SalesDetailsCreateManyRoleInputEnvelope
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
  }

  export type BoxCollectionCreateNestedManyWithoutRoleInput = {
    create?: XOR<BoxCollectionCreateWithoutRoleInput, BoxCollectionUncheckedCreateWithoutRoleInput> | BoxCollectionCreateWithoutRoleInput[] | BoxCollectionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutRoleInput | BoxCollectionCreateOrConnectWithoutRoleInput[]
    createMany?: BoxCollectionCreateManyRoleInputEnvelope
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
  }

  export type CustomerDetailsUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<CustomerDetailsCreateWithoutRoleInput, CustomerDetailsUncheckedCreateWithoutRoleInput> | CustomerDetailsCreateWithoutRoleInput[] | CustomerDetailsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutRoleInput | CustomerDetailsCreateOrConnectWithoutRoleInput[]
    createMany?: CustomerDetailsCreateManyRoleInputEnvelope
    connect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
  }

  export type CustomerLogoUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<CustomerLogoCreateWithoutRoleInput, CustomerLogoUncheckedCreateWithoutRoleInput> | CustomerLogoCreateWithoutRoleInput[] | CustomerLogoUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutRoleInput | CustomerLogoCreateOrConnectWithoutRoleInput[]
    createMany?: CustomerLogoCreateManyRoleInputEnvelope
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
  }

  export type SalesDetailsUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<SalesDetailsCreateWithoutRoleInput, SalesDetailsUncheckedCreateWithoutRoleInput> | SalesDetailsCreateWithoutRoleInput[] | SalesDetailsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutRoleInput | SalesDetailsCreateOrConnectWithoutRoleInput[]
    createMany?: SalesDetailsCreateManyRoleInputEnvelope
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
  }

  export type BoxCollectionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<BoxCollectionCreateWithoutRoleInput, BoxCollectionUncheckedCreateWithoutRoleInput> | BoxCollectionCreateWithoutRoleInput[] | BoxCollectionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutRoleInput | BoxCollectionCreateOrConnectWithoutRoleInput[]
    createMany?: BoxCollectionCreateManyRoleInputEnvelope
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
  }

  export type ShopDetailsUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<ShopDetailsCreateWithoutRolesInput, ShopDetailsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutRolesInput
    upsert?: ShopDetailsUpsertWithoutRolesInput
    connect?: ShopDetailsWhereUniqueInput
    update?: XOR<XOR<ShopDetailsUpdateToOneWithWhereWithoutRolesInput, ShopDetailsUpdateWithoutRolesInput>, ShopDetailsUncheckedUpdateWithoutRolesInput>
  }

  export type CustomerDetailsUpdateManyWithoutRoleNestedInput = {
    create?: XOR<CustomerDetailsCreateWithoutRoleInput, CustomerDetailsUncheckedCreateWithoutRoleInput> | CustomerDetailsCreateWithoutRoleInput[] | CustomerDetailsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutRoleInput | CustomerDetailsCreateOrConnectWithoutRoleInput[]
    upsert?: CustomerDetailsUpsertWithWhereUniqueWithoutRoleInput | CustomerDetailsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: CustomerDetailsCreateManyRoleInputEnvelope
    set?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    disconnect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    delete?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    connect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    update?: CustomerDetailsUpdateWithWhereUniqueWithoutRoleInput | CustomerDetailsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: CustomerDetailsUpdateManyWithWhereWithoutRoleInput | CustomerDetailsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: CustomerDetailsScalarWhereInput | CustomerDetailsScalarWhereInput[]
  }

  export type CustomerLogoUpdateManyWithoutRoleNestedInput = {
    create?: XOR<CustomerLogoCreateWithoutRoleInput, CustomerLogoUncheckedCreateWithoutRoleInput> | CustomerLogoCreateWithoutRoleInput[] | CustomerLogoUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutRoleInput | CustomerLogoCreateOrConnectWithoutRoleInput[]
    upsert?: CustomerLogoUpsertWithWhereUniqueWithoutRoleInput | CustomerLogoUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: CustomerLogoCreateManyRoleInputEnvelope
    set?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    disconnect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    delete?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    update?: CustomerLogoUpdateWithWhereUniqueWithoutRoleInput | CustomerLogoUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: CustomerLogoUpdateManyWithWhereWithoutRoleInput | CustomerLogoUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: CustomerLogoScalarWhereInput | CustomerLogoScalarWhereInput[]
  }

  export type SalesDetailsUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SalesDetailsCreateWithoutRoleInput, SalesDetailsUncheckedCreateWithoutRoleInput> | SalesDetailsCreateWithoutRoleInput[] | SalesDetailsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutRoleInput | SalesDetailsCreateOrConnectWithoutRoleInput[]
    upsert?: SalesDetailsUpsertWithWhereUniqueWithoutRoleInput | SalesDetailsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SalesDetailsCreateManyRoleInputEnvelope
    set?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    disconnect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    delete?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    update?: SalesDetailsUpdateWithWhereUniqueWithoutRoleInput | SalesDetailsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SalesDetailsUpdateManyWithWhereWithoutRoleInput | SalesDetailsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SalesDetailsScalarWhereInput | SalesDetailsScalarWhereInput[]
  }

  export type BoxCollectionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<BoxCollectionCreateWithoutRoleInput, BoxCollectionUncheckedCreateWithoutRoleInput> | BoxCollectionCreateWithoutRoleInput[] | BoxCollectionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutRoleInput | BoxCollectionCreateOrConnectWithoutRoleInput[]
    upsert?: BoxCollectionUpsertWithWhereUniqueWithoutRoleInput | BoxCollectionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: BoxCollectionCreateManyRoleInputEnvelope
    set?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    disconnect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    delete?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    update?: BoxCollectionUpdateWithWhereUniqueWithoutRoleInput | BoxCollectionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: BoxCollectionUpdateManyWithWhereWithoutRoleInput | BoxCollectionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: BoxCollectionScalarWhereInput | BoxCollectionScalarWhereInput[]
  }

  export type CustomerDetailsUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<CustomerDetailsCreateWithoutRoleInput, CustomerDetailsUncheckedCreateWithoutRoleInput> | CustomerDetailsCreateWithoutRoleInput[] | CustomerDetailsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutRoleInput | CustomerDetailsCreateOrConnectWithoutRoleInput[]
    upsert?: CustomerDetailsUpsertWithWhereUniqueWithoutRoleInput | CustomerDetailsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: CustomerDetailsCreateManyRoleInputEnvelope
    set?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    disconnect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    delete?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    connect?: CustomerDetailsWhereUniqueInput | CustomerDetailsWhereUniqueInput[]
    update?: CustomerDetailsUpdateWithWhereUniqueWithoutRoleInput | CustomerDetailsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: CustomerDetailsUpdateManyWithWhereWithoutRoleInput | CustomerDetailsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: CustomerDetailsScalarWhereInput | CustomerDetailsScalarWhereInput[]
  }

  export type CustomerLogoUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<CustomerLogoCreateWithoutRoleInput, CustomerLogoUncheckedCreateWithoutRoleInput> | CustomerLogoCreateWithoutRoleInput[] | CustomerLogoUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutRoleInput | CustomerLogoCreateOrConnectWithoutRoleInput[]
    upsert?: CustomerLogoUpsertWithWhereUniqueWithoutRoleInput | CustomerLogoUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: CustomerLogoCreateManyRoleInputEnvelope
    set?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    disconnect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    delete?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    update?: CustomerLogoUpdateWithWhereUniqueWithoutRoleInput | CustomerLogoUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: CustomerLogoUpdateManyWithWhereWithoutRoleInput | CustomerLogoUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: CustomerLogoScalarWhereInput | CustomerLogoScalarWhereInput[]
  }

  export type SalesDetailsUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SalesDetailsCreateWithoutRoleInput, SalesDetailsUncheckedCreateWithoutRoleInput> | SalesDetailsCreateWithoutRoleInput[] | SalesDetailsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutRoleInput | SalesDetailsCreateOrConnectWithoutRoleInput[]
    upsert?: SalesDetailsUpsertWithWhereUniqueWithoutRoleInput | SalesDetailsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SalesDetailsCreateManyRoleInputEnvelope
    set?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    disconnect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    delete?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    update?: SalesDetailsUpdateWithWhereUniqueWithoutRoleInput | SalesDetailsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SalesDetailsUpdateManyWithWhereWithoutRoleInput | SalesDetailsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SalesDetailsScalarWhereInput | SalesDetailsScalarWhereInput[]
  }

  export type BoxCollectionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<BoxCollectionCreateWithoutRoleInput, BoxCollectionUncheckedCreateWithoutRoleInput> | BoxCollectionCreateWithoutRoleInput[] | BoxCollectionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutRoleInput | BoxCollectionCreateOrConnectWithoutRoleInput[]
    upsert?: BoxCollectionUpsertWithWhereUniqueWithoutRoleInput | BoxCollectionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: BoxCollectionCreateManyRoleInputEnvelope
    set?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    disconnect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    delete?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    update?: BoxCollectionUpdateWithWhereUniqueWithoutRoleInput | BoxCollectionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: BoxCollectionUpdateManyWithWhereWithoutRoleInput | BoxCollectionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: BoxCollectionScalarWhereInput | BoxCollectionScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutCustomerDetailsInput = {
    create?: XOR<RoleCreateWithoutCustomerDetailsInput, RoleUncheckedCreateWithoutCustomerDetailsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutCustomerDetailsInput
    connect?: RoleWhereUniqueInput
  }

  export type ShopDetailsCreateNestedOneWithoutCustomerDetailsInput = {
    create?: XOR<ShopDetailsCreateWithoutCustomerDetailsInput, ShopDetailsUncheckedCreateWithoutCustomerDetailsInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutCustomerDetailsInput
    connect?: ShopDetailsWhereUniqueInput
  }

  export type CustomerLogoCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerLogoCreateWithoutCustomerInput, CustomerLogoUncheckedCreateWithoutCustomerInput> | CustomerLogoCreateWithoutCustomerInput[] | CustomerLogoUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutCustomerInput | CustomerLogoCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerLogoCreateManyCustomerInputEnvelope
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
  }

  export type SalesDetailsCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SalesDetailsCreateWithoutCustomerInput, SalesDetailsUncheckedCreateWithoutCustomerInput> | SalesDetailsCreateWithoutCustomerInput[] | SalesDetailsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutCustomerInput | SalesDetailsCreateOrConnectWithoutCustomerInput[]
    createMany?: SalesDetailsCreateManyCustomerInputEnvelope
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
  }

  export type BoxCollectionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BoxCollectionCreateWithoutCustomerInput, BoxCollectionUncheckedCreateWithoutCustomerInput> | BoxCollectionCreateWithoutCustomerInput[] | BoxCollectionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutCustomerInput | BoxCollectionCreateOrConnectWithoutCustomerInput[]
    createMany?: BoxCollectionCreateManyCustomerInputEnvelope
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
  }

  export type CustomerLogoUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerLogoCreateWithoutCustomerInput, CustomerLogoUncheckedCreateWithoutCustomerInput> | CustomerLogoCreateWithoutCustomerInput[] | CustomerLogoUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutCustomerInput | CustomerLogoCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerLogoCreateManyCustomerInputEnvelope
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
  }

  export type SalesDetailsUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SalesDetailsCreateWithoutCustomerInput, SalesDetailsUncheckedCreateWithoutCustomerInput> | SalesDetailsCreateWithoutCustomerInput[] | SalesDetailsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutCustomerInput | SalesDetailsCreateOrConnectWithoutCustomerInput[]
    createMany?: SalesDetailsCreateManyCustomerInputEnvelope
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
  }

  export type BoxCollectionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BoxCollectionCreateWithoutCustomerInput, BoxCollectionUncheckedCreateWithoutCustomerInput> | BoxCollectionCreateWithoutCustomerInput[] | BoxCollectionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutCustomerInput | BoxCollectionCreateOrConnectWithoutCustomerInput[]
    createMany?: BoxCollectionCreateManyCustomerInputEnvelope
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type RoleUpdateOneRequiredWithoutCustomerDetailsNestedInput = {
    create?: XOR<RoleCreateWithoutCustomerDetailsInput, RoleUncheckedCreateWithoutCustomerDetailsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutCustomerDetailsInput
    upsert?: RoleUpsertWithoutCustomerDetailsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutCustomerDetailsInput, RoleUpdateWithoutCustomerDetailsInput>, RoleUncheckedUpdateWithoutCustomerDetailsInput>
  }

  export type ShopDetailsUpdateOneRequiredWithoutCustomerDetailsNestedInput = {
    create?: XOR<ShopDetailsCreateWithoutCustomerDetailsInput, ShopDetailsUncheckedCreateWithoutCustomerDetailsInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutCustomerDetailsInput
    upsert?: ShopDetailsUpsertWithoutCustomerDetailsInput
    connect?: ShopDetailsWhereUniqueInput
    update?: XOR<XOR<ShopDetailsUpdateToOneWithWhereWithoutCustomerDetailsInput, ShopDetailsUpdateWithoutCustomerDetailsInput>, ShopDetailsUncheckedUpdateWithoutCustomerDetailsInput>
  }

  export type CustomerLogoUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerLogoCreateWithoutCustomerInput, CustomerLogoUncheckedCreateWithoutCustomerInput> | CustomerLogoCreateWithoutCustomerInput[] | CustomerLogoUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutCustomerInput | CustomerLogoCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerLogoUpsertWithWhereUniqueWithoutCustomerInput | CustomerLogoUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerLogoCreateManyCustomerInputEnvelope
    set?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    disconnect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    delete?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    update?: CustomerLogoUpdateWithWhereUniqueWithoutCustomerInput | CustomerLogoUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerLogoUpdateManyWithWhereWithoutCustomerInput | CustomerLogoUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerLogoScalarWhereInput | CustomerLogoScalarWhereInput[]
  }

  export type SalesDetailsUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SalesDetailsCreateWithoutCustomerInput, SalesDetailsUncheckedCreateWithoutCustomerInput> | SalesDetailsCreateWithoutCustomerInput[] | SalesDetailsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutCustomerInput | SalesDetailsCreateOrConnectWithoutCustomerInput[]
    upsert?: SalesDetailsUpsertWithWhereUniqueWithoutCustomerInput | SalesDetailsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SalesDetailsCreateManyCustomerInputEnvelope
    set?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    disconnect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    delete?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    update?: SalesDetailsUpdateWithWhereUniqueWithoutCustomerInput | SalesDetailsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SalesDetailsUpdateManyWithWhereWithoutCustomerInput | SalesDetailsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SalesDetailsScalarWhereInput | SalesDetailsScalarWhereInput[]
  }

  export type BoxCollectionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BoxCollectionCreateWithoutCustomerInput, BoxCollectionUncheckedCreateWithoutCustomerInput> | BoxCollectionCreateWithoutCustomerInput[] | BoxCollectionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutCustomerInput | BoxCollectionCreateOrConnectWithoutCustomerInput[]
    upsert?: BoxCollectionUpsertWithWhereUniqueWithoutCustomerInput | BoxCollectionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BoxCollectionCreateManyCustomerInputEnvelope
    set?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    disconnect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    delete?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    update?: BoxCollectionUpdateWithWhereUniqueWithoutCustomerInput | BoxCollectionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BoxCollectionUpdateManyWithWhereWithoutCustomerInput | BoxCollectionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BoxCollectionScalarWhereInput | BoxCollectionScalarWhereInput[]
  }

  export type CustomerLogoUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerLogoCreateWithoutCustomerInput, CustomerLogoUncheckedCreateWithoutCustomerInput> | CustomerLogoCreateWithoutCustomerInput[] | CustomerLogoUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerLogoCreateOrConnectWithoutCustomerInput | CustomerLogoCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerLogoUpsertWithWhereUniqueWithoutCustomerInput | CustomerLogoUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerLogoCreateManyCustomerInputEnvelope
    set?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    disconnect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    delete?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    connect?: CustomerLogoWhereUniqueInput | CustomerLogoWhereUniqueInput[]
    update?: CustomerLogoUpdateWithWhereUniqueWithoutCustomerInput | CustomerLogoUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerLogoUpdateManyWithWhereWithoutCustomerInput | CustomerLogoUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerLogoScalarWhereInput | CustomerLogoScalarWhereInput[]
  }

  export type SalesDetailsUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SalesDetailsCreateWithoutCustomerInput, SalesDetailsUncheckedCreateWithoutCustomerInput> | SalesDetailsCreateWithoutCustomerInput[] | SalesDetailsUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesDetailsCreateOrConnectWithoutCustomerInput | SalesDetailsCreateOrConnectWithoutCustomerInput[]
    upsert?: SalesDetailsUpsertWithWhereUniqueWithoutCustomerInput | SalesDetailsUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SalesDetailsCreateManyCustomerInputEnvelope
    set?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    disconnect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    delete?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    connect?: SalesDetailsWhereUniqueInput | SalesDetailsWhereUniqueInput[]
    update?: SalesDetailsUpdateWithWhereUniqueWithoutCustomerInput | SalesDetailsUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SalesDetailsUpdateManyWithWhereWithoutCustomerInput | SalesDetailsUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SalesDetailsScalarWhereInput | SalesDetailsScalarWhereInput[]
  }

  export type BoxCollectionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BoxCollectionCreateWithoutCustomerInput, BoxCollectionUncheckedCreateWithoutCustomerInput> | BoxCollectionCreateWithoutCustomerInput[] | BoxCollectionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BoxCollectionCreateOrConnectWithoutCustomerInput | BoxCollectionCreateOrConnectWithoutCustomerInput[]
    upsert?: BoxCollectionUpsertWithWhereUniqueWithoutCustomerInput | BoxCollectionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BoxCollectionCreateManyCustomerInputEnvelope
    set?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    disconnect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    delete?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    connect?: BoxCollectionWhereUniqueInput | BoxCollectionWhereUniqueInput[]
    update?: BoxCollectionUpdateWithWhereUniqueWithoutCustomerInput | BoxCollectionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BoxCollectionUpdateManyWithWhereWithoutCustomerInput | BoxCollectionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BoxCollectionScalarWhereInput | BoxCollectionScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutCustomerLogosInput = {
    create?: XOR<RoleCreateWithoutCustomerLogosInput, RoleUncheckedCreateWithoutCustomerLogosInput>
    connectOrCreate?: RoleCreateOrConnectWithoutCustomerLogosInput
    connect?: RoleWhereUniqueInput
  }

  export type ShopDetailsCreateNestedOneWithoutCustomerLogosInput = {
    create?: XOR<ShopDetailsCreateWithoutCustomerLogosInput, ShopDetailsUncheckedCreateWithoutCustomerLogosInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutCustomerLogosInput
    connect?: ShopDetailsWhereUniqueInput
  }

  export type CustomerDetailsCreateNestedOneWithoutCustomerLogosInput = {
    create?: XOR<CustomerDetailsCreateWithoutCustomerLogosInput, CustomerDetailsUncheckedCreateWithoutCustomerLogosInput>
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutCustomerLogosInput
    connect?: CustomerDetailsWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutCustomerLogosNestedInput = {
    create?: XOR<RoleCreateWithoutCustomerLogosInput, RoleUncheckedCreateWithoutCustomerLogosInput>
    connectOrCreate?: RoleCreateOrConnectWithoutCustomerLogosInput
    upsert?: RoleUpsertWithoutCustomerLogosInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutCustomerLogosInput, RoleUpdateWithoutCustomerLogosInput>, RoleUncheckedUpdateWithoutCustomerLogosInput>
  }

  export type ShopDetailsUpdateOneRequiredWithoutCustomerLogosNestedInput = {
    create?: XOR<ShopDetailsCreateWithoutCustomerLogosInput, ShopDetailsUncheckedCreateWithoutCustomerLogosInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutCustomerLogosInput
    upsert?: ShopDetailsUpsertWithoutCustomerLogosInput
    connect?: ShopDetailsWhereUniqueInput
    update?: XOR<XOR<ShopDetailsUpdateToOneWithWhereWithoutCustomerLogosInput, ShopDetailsUpdateWithoutCustomerLogosInput>, ShopDetailsUncheckedUpdateWithoutCustomerLogosInput>
  }

  export type CustomerDetailsUpdateOneRequiredWithoutCustomerLogosNestedInput = {
    create?: XOR<CustomerDetailsCreateWithoutCustomerLogosInput, CustomerDetailsUncheckedCreateWithoutCustomerLogosInput>
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutCustomerLogosInput
    upsert?: CustomerDetailsUpsertWithoutCustomerLogosInput
    connect?: CustomerDetailsWhereUniqueInput
    update?: XOR<XOR<CustomerDetailsUpdateToOneWithWhereWithoutCustomerLogosInput, CustomerDetailsUpdateWithoutCustomerLogosInput>, CustomerDetailsUncheckedUpdateWithoutCustomerLogosInput>
  }

  export type RoleCreateNestedOneWithoutSalesDetailsInput = {
    create?: XOR<RoleCreateWithoutSalesDetailsInput, RoleUncheckedCreateWithoutSalesDetailsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutSalesDetailsInput
    connect?: RoleWhereUniqueInput
  }

  export type ShopDetailsCreateNestedOneWithoutSalesDetailsInput = {
    create?: XOR<ShopDetailsCreateWithoutSalesDetailsInput, ShopDetailsUncheckedCreateWithoutSalesDetailsInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutSalesDetailsInput
    connect?: ShopDetailsWhereUniqueInput
  }

  export type CustomerDetailsCreateNestedOneWithoutSalesDetailsInput = {
    create?: XOR<CustomerDetailsCreateWithoutSalesDetailsInput, CustomerDetailsUncheckedCreateWithoutSalesDetailsInput>
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutSalesDetailsInput
    connect?: CustomerDetailsWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutSalesDetailsNestedInput = {
    create?: XOR<RoleCreateWithoutSalesDetailsInput, RoleUncheckedCreateWithoutSalesDetailsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutSalesDetailsInput
    upsert?: RoleUpsertWithoutSalesDetailsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutSalesDetailsInput, RoleUpdateWithoutSalesDetailsInput>, RoleUncheckedUpdateWithoutSalesDetailsInput>
  }

  export type ShopDetailsUpdateOneRequiredWithoutSalesDetailsNestedInput = {
    create?: XOR<ShopDetailsCreateWithoutSalesDetailsInput, ShopDetailsUncheckedCreateWithoutSalesDetailsInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutSalesDetailsInput
    upsert?: ShopDetailsUpsertWithoutSalesDetailsInput
    connect?: ShopDetailsWhereUniqueInput
    update?: XOR<XOR<ShopDetailsUpdateToOneWithWhereWithoutSalesDetailsInput, ShopDetailsUpdateWithoutSalesDetailsInput>, ShopDetailsUncheckedUpdateWithoutSalesDetailsInput>
  }

  export type CustomerDetailsUpdateOneRequiredWithoutSalesDetailsNestedInput = {
    create?: XOR<CustomerDetailsCreateWithoutSalesDetailsInput, CustomerDetailsUncheckedCreateWithoutSalesDetailsInput>
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutSalesDetailsInput
    upsert?: CustomerDetailsUpsertWithoutSalesDetailsInput
    connect?: CustomerDetailsWhereUniqueInput
    update?: XOR<XOR<CustomerDetailsUpdateToOneWithWhereWithoutSalesDetailsInput, CustomerDetailsUpdateWithoutSalesDetailsInput>, CustomerDetailsUncheckedUpdateWithoutSalesDetailsInput>
  }

  export type RoleCreateNestedOneWithoutBoxCollectionsInput = {
    create?: XOR<RoleCreateWithoutBoxCollectionsInput, RoleUncheckedCreateWithoutBoxCollectionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutBoxCollectionsInput
    connect?: RoleWhereUniqueInput
  }

  export type ShopDetailsCreateNestedOneWithoutBoxCollectionsInput = {
    create?: XOR<ShopDetailsCreateWithoutBoxCollectionsInput, ShopDetailsUncheckedCreateWithoutBoxCollectionsInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutBoxCollectionsInput
    connect?: ShopDetailsWhereUniqueInput
  }

  export type CustomerDetailsCreateNestedOneWithoutBoxCollectionsInput = {
    create?: XOR<CustomerDetailsCreateWithoutBoxCollectionsInput, CustomerDetailsUncheckedCreateWithoutBoxCollectionsInput>
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutBoxCollectionsInput
    connect?: CustomerDetailsWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutBoxCollectionsNestedInput = {
    create?: XOR<RoleCreateWithoutBoxCollectionsInput, RoleUncheckedCreateWithoutBoxCollectionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutBoxCollectionsInput
    upsert?: RoleUpsertWithoutBoxCollectionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutBoxCollectionsInput, RoleUpdateWithoutBoxCollectionsInput>, RoleUncheckedUpdateWithoutBoxCollectionsInput>
  }

  export type ShopDetailsUpdateOneRequiredWithoutBoxCollectionsNestedInput = {
    create?: XOR<ShopDetailsCreateWithoutBoxCollectionsInput, ShopDetailsUncheckedCreateWithoutBoxCollectionsInput>
    connectOrCreate?: ShopDetailsCreateOrConnectWithoutBoxCollectionsInput
    upsert?: ShopDetailsUpsertWithoutBoxCollectionsInput
    connect?: ShopDetailsWhereUniqueInput
    update?: XOR<XOR<ShopDetailsUpdateToOneWithWhereWithoutBoxCollectionsInput, ShopDetailsUpdateWithoutBoxCollectionsInput>, ShopDetailsUncheckedUpdateWithoutBoxCollectionsInput>
  }

  export type CustomerDetailsUpdateOneRequiredWithoutBoxCollectionsNestedInput = {
    create?: XOR<CustomerDetailsCreateWithoutBoxCollectionsInput, CustomerDetailsUncheckedCreateWithoutBoxCollectionsInput>
    connectOrCreate?: CustomerDetailsCreateOrConnectWithoutBoxCollectionsInput
    upsert?: CustomerDetailsUpsertWithoutBoxCollectionsInput
    connect?: CustomerDetailsWhereUniqueInput
    update?: XOR<XOR<CustomerDetailsUpdateToOneWithWhereWithoutBoxCollectionsInput, CustomerDetailsUpdateWithoutBoxCollectionsInput>, CustomerDetailsUncheckedUpdateWithoutBoxCollectionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type OwnerCreateWithoutShopInput = {
    name: string
    mobileNumber: string
    email?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OwnerUncheckedCreateWithoutShopInput = {
    id?: number
    name: string
    mobileNumber: string
    email?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OwnerCreateOrConnectWithoutShopInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutShopInput, OwnerUncheckedCreateWithoutShopInput>
  }

  export type OwnerCreateManyShopInputEnvelope = {
    data: OwnerCreateManyShopInput | OwnerCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ShopLogoCreateWithoutShopInput = {
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShopLogoUncheckedCreateWithoutShopInput = {
    id?: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShopLogoCreateOrConnectWithoutShopInput = {
    where: ShopLogoWhereUniqueInput
    create: XOR<ShopLogoCreateWithoutShopInput, ShopLogoUncheckedCreateWithoutShopInput>
  }

  export type ShopLogoCreateManyShopInputEnvelope = {
    data: ShopLogoCreateManyShopInput | ShopLogoCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutShopInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerDetails?: CustomerDetailsCreateNestedManyWithoutRoleInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutShopInput = {
    id?: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutRoleInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutShopInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutShopInput, RoleUncheckedCreateWithoutShopInput>
  }

  export type RoleCreateManyShopInputEnvelope = {
    data: RoleCreateManyShopInput | RoleCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type CustomerDetailsCreateWithoutShopInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutCustomerDetailsInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutCustomerInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsUncheckedCreateWithoutShopInput = {
    id?: number
    roleId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutCustomerInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsCreateOrConnectWithoutShopInput = {
    where: CustomerDetailsWhereUniqueInput
    create: XOR<CustomerDetailsCreateWithoutShopInput, CustomerDetailsUncheckedCreateWithoutShopInput>
  }

  export type CustomerDetailsCreateManyShopInputEnvelope = {
    data: CustomerDetailsCreateManyShopInput | CustomerDetailsCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type CustomerLogoCreateWithoutShopInput = {
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutCustomerLogosInput
    customer: CustomerDetailsCreateNestedOneWithoutCustomerLogosInput
  }

  export type CustomerLogoUncheckedCreateWithoutShopInput = {
    id?: number
    roleId: number
    customerId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerLogoCreateOrConnectWithoutShopInput = {
    where: CustomerLogoWhereUniqueInput
    create: XOR<CustomerLogoCreateWithoutShopInput, CustomerLogoUncheckedCreateWithoutShopInput>
  }

  export type CustomerLogoCreateManyShopInputEnvelope = {
    data: CustomerLogoCreateManyShopInput | CustomerLogoCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type SalesDetailsCreateWithoutShopInput = {
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutSalesDetailsInput
    customer: CustomerDetailsCreateNestedOneWithoutSalesDetailsInput
  }

  export type SalesDetailsUncheckedCreateWithoutShopInput = {
    id?: number
    roleId: number
    customerId: number
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SalesDetailsCreateOrConnectWithoutShopInput = {
    where: SalesDetailsWhereUniqueInput
    create: XOR<SalesDetailsCreateWithoutShopInput, SalesDetailsUncheckedCreateWithoutShopInput>
  }

  export type SalesDetailsCreateManyShopInputEnvelope = {
    data: SalesDetailsCreateManyShopInput | SalesDetailsCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type BoxCollectionCreateWithoutShopInput = {
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutBoxCollectionsInput
    customer: CustomerDetailsCreateNestedOneWithoutBoxCollectionsInput
  }

  export type BoxCollectionUncheckedCreateWithoutShopInput = {
    id?: number
    roleId: number
    customerId: number
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BoxCollectionCreateOrConnectWithoutShopInput = {
    where: BoxCollectionWhereUniqueInput
    create: XOR<BoxCollectionCreateWithoutShopInput, BoxCollectionUncheckedCreateWithoutShopInput>
  }

  export type BoxCollectionCreateManyShopInputEnvelope = {
    data: BoxCollectionCreateManyShopInput | BoxCollectionCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type OwnerUpsertWithWhereUniqueWithoutShopInput = {
    where: OwnerWhereUniqueInput
    update: XOR<OwnerUpdateWithoutShopInput, OwnerUncheckedUpdateWithoutShopInput>
    create: XOR<OwnerCreateWithoutShopInput, OwnerUncheckedCreateWithoutShopInput>
  }

  export type OwnerUpdateWithWhereUniqueWithoutShopInput = {
    where: OwnerWhereUniqueInput
    data: XOR<OwnerUpdateWithoutShopInput, OwnerUncheckedUpdateWithoutShopInput>
  }

  export type OwnerUpdateManyWithWhereWithoutShopInput = {
    where: OwnerScalarWhereInput
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyWithoutShopInput>
  }

  export type OwnerScalarWhereInput = {
    AND?: OwnerScalarWhereInput | OwnerScalarWhereInput[]
    OR?: OwnerScalarWhereInput[]
    NOT?: OwnerScalarWhereInput | OwnerScalarWhereInput[]
    id?: IntFilter<"Owner"> | number
    shopId?: IntFilter<"Owner"> | number
    name?: StringFilter<"Owner"> | string
    mobileNumber?: StringFilter<"Owner"> | string
    email?: StringNullableFilter<"Owner"> | string | null
    password?: StringFilter<"Owner"> | string
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeFilter<"Owner"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Owner"> | Date | string | null
  }

  export type ShopLogoUpsertWithWhereUniqueWithoutShopInput = {
    where: ShopLogoWhereUniqueInput
    update: XOR<ShopLogoUpdateWithoutShopInput, ShopLogoUncheckedUpdateWithoutShopInput>
    create: XOR<ShopLogoCreateWithoutShopInput, ShopLogoUncheckedCreateWithoutShopInput>
  }

  export type ShopLogoUpdateWithWhereUniqueWithoutShopInput = {
    where: ShopLogoWhereUniqueInput
    data: XOR<ShopLogoUpdateWithoutShopInput, ShopLogoUncheckedUpdateWithoutShopInput>
  }

  export type ShopLogoUpdateManyWithWhereWithoutShopInput = {
    where: ShopLogoScalarWhereInput
    data: XOR<ShopLogoUpdateManyMutationInput, ShopLogoUncheckedUpdateManyWithoutShopInput>
  }

  export type ShopLogoScalarWhereInput = {
    AND?: ShopLogoScalarWhereInput | ShopLogoScalarWhereInput[]
    OR?: ShopLogoScalarWhereInput[]
    NOT?: ShopLogoScalarWhereInput | ShopLogoScalarWhereInput[]
    id?: IntFilter<"ShopLogo"> | number
    shopId?: IntFilter<"ShopLogo"> | number
    fileName?: StringFilter<"ShopLogo"> | string
    filePath?: StringFilter<"ShopLogo"> | string
    createdAt?: DateTimeFilter<"ShopLogo"> | Date | string
    updatedAt?: DateTimeFilter<"ShopLogo"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ShopLogo"> | Date | string | null
  }

  export type RoleUpsertWithWhereUniqueWithoutShopInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutShopInput, RoleUncheckedUpdateWithoutShopInput>
    create: XOR<RoleCreateWithoutShopInput, RoleUncheckedCreateWithoutShopInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutShopInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutShopInput, RoleUncheckedUpdateWithoutShopInput>
  }

  export type RoleUpdateManyWithWhereWithoutShopInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutShopInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: IntFilter<"Role"> | number
    shopId?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    mobileNumber?: BigIntFilter<"Role"> | bigint | number
    email?: StringNullableFilter<"Role"> | string | null
    roleName?: StringFilter<"Role"> | string
    access?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
  }

  export type CustomerDetailsUpsertWithWhereUniqueWithoutShopInput = {
    where: CustomerDetailsWhereUniqueInput
    update: XOR<CustomerDetailsUpdateWithoutShopInput, CustomerDetailsUncheckedUpdateWithoutShopInput>
    create: XOR<CustomerDetailsCreateWithoutShopInput, CustomerDetailsUncheckedCreateWithoutShopInput>
  }

  export type CustomerDetailsUpdateWithWhereUniqueWithoutShopInput = {
    where: CustomerDetailsWhereUniqueInput
    data: XOR<CustomerDetailsUpdateWithoutShopInput, CustomerDetailsUncheckedUpdateWithoutShopInput>
  }

  export type CustomerDetailsUpdateManyWithWhereWithoutShopInput = {
    where: CustomerDetailsScalarWhereInput
    data: XOR<CustomerDetailsUpdateManyMutationInput, CustomerDetailsUncheckedUpdateManyWithoutShopInput>
  }

  export type CustomerDetailsScalarWhereInput = {
    AND?: CustomerDetailsScalarWhereInput | CustomerDetailsScalarWhereInput[]
    OR?: CustomerDetailsScalarWhereInput[]
    NOT?: CustomerDetailsScalarWhereInput | CustomerDetailsScalarWhereInput[]
    id?: IntFilter<"CustomerDetails"> | number
    roleId?: IntFilter<"CustomerDetails"> | number
    shopId?: IntFilter<"CustomerDetails"> | number
    name?: StringFilter<"CustomerDetails"> | string
    mobileNumber?: BigIntFilter<"CustomerDetails"> | bigint | number
    email?: StringNullableFilter<"CustomerDetails"> | string | null
    totalBoxes?: IntNullableFilter<"CustomerDetails"> | number | null
    totalAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    totalDiscountAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    settledBoxes?: IntNullableFilter<"CustomerDetails"> | number | null
    remainingBoxes?: IntNullableFilter<"CustomerDetails"> | number | null
    settledAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    remainingAmount?: BigIntNullableFilter<"CustomerDetails"> | bigint | number | null
    minAmountForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    maxAmountForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    averageAmountOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    minDisForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    maxDisForOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    averageDisOneBox?: StringNullableFilter<"CustomerDetails"> | string | null
    createdAt?: DateTimeFilter<"CustomerDetails"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerDetails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CustomerDetails"> | Date | string | null
  }

  export type CustomerLogoUpsertWithWhereUniqueWithoutShopInput = {
    where: CustomerLogoWhereUniqueInput
    update: XOR<CustomerLogoUpdateWithoutShopInput, CustomerLogoUncheckedUpdateWithoutShopInput>
    create: XOR<CustomerLogoCreateWithoutShopInput, CustomerLogoUncheckedCreateWithoutShopInput>
  }

  export type CustomerLogoUpdateWithWhereUniqueWithoutShopInput = {
    where: CustomerLogoWhereUniqueInput
    data: XOR<CustomerLogoUpdateWithoutShopInput, CustomerLogoUncheckedUpdateWithoutShopInput>
  }

  export type CustomerLogoUpdateManyWithWhereWithoutShopInput = {
    where: CustomerLogoScalarWhereInput
    data: XOR<CustomerLogoUpdateManyMutationInput, CustomerLogoUncheckedUpdateManyWithoutShopInput>
  }

  export type CustomerLogoScalarWhereInput = {
    AND?: CustomerLogoScalarWhereInput | CustomerLogoScalarWhereInput[]
    OR?: CustomerLogoScalarWhereInput[]
    NOT?: CustomerLogoScalarWhereInput | CustomerLogoScalarWhereInput[]
    id?: IntFilter<"CustomerLogo"> | number
    roleId?: IntFilter<"CustomerLogo"> | number
    shopId?: IntFilter<"CustomerLogo"> | number
    customerId?: IntFilter<"CustomerLogo"> | number
    fileName?: StringFilter<"CustomerLogo"> | string
    filePath?: StringFilter<"CustomerLogo"> | string
    createdAt?: DateTimeFilter<"CustomerLogo"> | Date | string
    updatedAt?: DateTimeFilter<"CustomerLogo"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CustomerLogo"> | Date | string | null
  }

  export type SalesDetailsUpsertWithWhereUniqueWithoutShopInput = {
    where: SalesDetailsWhereUniqueInput
    update: XOR<SalesDetailsUpdateWithoutShopInput, SalesDetailsUncheckedUpdateWithoutShopInput>
    create: XOR<SalesDetailsCreateWithoutShopInput, SalesDetailsUncheckedCreateWithoutShopInput>
  }

  export type SalesDetailsUpdateWithWhereUniqueWithoutShopInput = {
    where: SalesDetailsWhereUniqueInput
    data: XOR<SalesDetailsUpdateWithoutShopInput, SalesDetailsUncheckedUpdateWithoutShopInput>
  }

  export type SalesDetailsUpdateManyWithWhereWithoutShopInput = {
    where: SalesDetailsScalarWhereInput
    data: XOR<SalesDetailsUpdateManyMutationInput, SalesDetailsUncheckedUpdateManyWithoutShopInput>
  }

  export type SalesDetailsScalarWhereInput = {
    AND?: SalesDetailsScalarWhereInput | SalesDetailsScalarWhereInput[]
    OR?: SalesDetailsScalarWhereInput[]
    NOT?: SalesDetailsScalarWhereInput | SalesDetailsScalarWhereInput[]
    id?: IntFilter<"SalesDetails"> | number
    roleId?: IntFilter<"SalesDetails"> | number
    shopId?: IntFilter<"SalesDetails"> | number
    customerId?: IntFilter<"SalesDetails"> | number
    soldBoxes?: IntFilter<"SalesDetails"> | number
    soldAmount?: BigIntFilter<"SalesDetails"> | bigint | number
    appliedDis?: IntFilter<"SalesDetails"> | number
    totalAmount?: BigIntFilter<"SalesDetails"> | bigint | number
    createdAt?: DateTimeFilter<"SalesDetails"> | Date | string
    updatedAt?: DateTimeFilter<"SalesDetails"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SalesDetails"> | Date | string | null
  }

  export type BoxCollectionUpsertWithWhereUniqueWithoutShopInput = {
    where: BoxCollectionWhereUniqueInput
    update: XOR<BoxCollectionUpdateWithoutShopInput, BoxCollectionUncheckedUpdateWithoutShopInput>
    create: XOR<BoxCollectionCreateWithoutShopInput, BoxCollectionUncheckedCreateWithoutShopInput>
  }

  export type BoxCollectionUpdateWithWhereUniqueWithoutShopInput = {
    where: BoxCollectionWhereUniqueInput
    data: XOR<BoxCollectionUpdateWithoutShopInput, BoxCollectionUncheckedUpdateWithoutShopInput>
  }

  export type BoxCollectionUpdateManyWithWhereWithoutShopInput = {
    where: BoxCollectionScalarWhereInput
    data: XOR<BoxCollectionUpdateManyMutationInput, BoxCollectionUncheckedUpdateManyWithoutShopInput>
  }

  export type BoxCollectionScalarWhereInput = {
    AND?: BoxCollectionScalarWhereInput | BoxCollectionScalarWhereInput[]
    OR?: BoxCollectionScalarWhereInput[]
    NOT?: BoxCollectionScalarWhereInput | BoxCollectionScalarWhereInput[]
    id?: IntFilter<"BoxCollection"> | number
    roleId?: IntFilter<"BoxCollection"> | number
    shopId?: IntFilter<"BoxCollection"> | number
    customerId?: IntFilter<"BoxCollection"> | number
    collectedBoxes?: IntFilter<"BoxCollection"> | number
    createdAt?: DateTimeFilter<"BoxCollection"> | Date | string
    updatedAt?: DateTimeFilter<"BoxCollection"> | Date | string
    deletedAt?: DateTimeNullableFilter<"BoxCollection"> | Date | string | null
  }

  export type ShopDetailsCreateWithoutOwnersInput = {
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shopLogos?: ShopLogoCreateNestedManyWithoutShopInput
    roles?: RoleCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsUncheckedCreateWithoutOwnersInput = {
    id?: number
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shopLogos?: ShopLogoUncheckedCreateNestedManyWithoutShopInput
    roles?: RoleUncheckedCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsCreateOrConnectWithoutOwnersInput = {
    where: ShopDetailsWhereUniqueInput
    create: XOR<ShopDetailsCreateWithoutOwnersInput, ShopDetailsUncheckedCreateWithoutOwnersInput>
  }

  export type ShopDetailsUpsertWithoutOwnersInput = {
    update: XOR<ShopDetailsUpdateWithoutOwnersInput, ShopDetailsUncheckedUpdateWithoutOwnersInput>
    create: XOR<ShopDetailsCreateWithoutOwnersInput, ShopDetailsUncheckedCreateWithoutOwnersInput>
    where?: ShopDetailsWhereInput
  }

  export type ShopDetailsUpdateToOneWithWhereWithoutOwnersInput = {
    where?: ShopDetailsWhereInput
    data: XOR<ShopDetailsUpdateWithoutOwnersInput, ShopDetailsUncheckedUpdateWithoutOwnersInput>
  }

  export type ShopDetailsUpdateWithoutOwnersInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shopLogos?: ShopLogoUpdateManyWithoutShopNestedInput
    roles?: RoleUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsUncheckedUpdateWithoutOwnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shopLogos?: ShopLogoUncheckedUpdateManyWithoutShopNestedInput
    roles?: RoleUncheckedUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsCreateWithoutShopLogosInput = {
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerCreateNestedManyWithoutShopInput
    roles?: RoleCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsUncheckedCreateWithoutShopLogosInput = {
    id?: number
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerUncheckedCreateNestedManyWithoutShopInput
    roles?: RoleUncheckedCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsCreateOrConnectWithoutShopLogosInput = {
    where: ShopDetailsWhereUniqueInput
    create: XOR<ShopDetailsCreateWithoutShopLogosInput, ShopDetailsUncheckedCreateWithoutShopLogosInput>
  }

  export type ShopDetailsUpsertWithoutShopLogosInput = {
    update: XOR<ShopDetailsUpdateWithoutShopLogosInput, ShopDetailsUncheckedUpdateWithoutShopLogosInput>
    create: XOR<ShopDetailsCreateWithoutShopLogosInput, ShopDetailsUncheckedCreateWithoutShopLogosInput>
    where?: ShopDetailsWhereInput
  }

  export type ShopDetailsUpdateToOneWithWhereWithoutShopLogosInput = {
    where?: ShopDetailsWhereInput
    data: XOR<ShopDetailsUpdateWithoutShopLogosInput, ShopDetailsUncheckedUpdateWithoutShopLogosInput>
  }

  export type ShopDetailsUpdateWithoutShopLogosInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUpdateManyWithoutShopNestedInput
    roles?: RoleUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsUncheckedUpdateWithoutShopLogosInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUncheckedUpdateManyWithoutShopNestedInput
    roles?: RoleUncheckedUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsCreateWithoutRolesInput = {
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsUncheckedCreateWithoutRolesInput = {
    id?: number
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerUncheckedCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoUncheckedCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsCreateOrConnectWithoutRolesInput = {
    where: ShopDetailsWhereUniqueInput
    create: XOR<ShopDetailsCreateWithoutRolesInput, ShopDetailsUncheckedCreateWithoutRolesInput>
  }

  export type CustomerDetailsCreateWithoutRoleInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutCustomerDetailsInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutCustomerInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsUncheckedCreateWithoutRoleInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutCustomerInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsCreateOrConnectWithoutRoleInput = {
    where: CustomerDetailsWhereUniqueInput
    create: XOR<CustomerDetailsCreateWithoutRoleInput, CustomerDetailsUncheckedCreateWithoutRoleInput>
  }

  export type CustomerDetailsCreateManyRoleInputEnvelope = {
    data: CustomerDetailsCreateManyRoleInput | CustomerDetailsCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type CustomerLogoCreateWithoutRoleInput = {
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutCustomerLogosInput
    customer: CustomerDetailsCreateNestedOneWithoutCustomerLogosInput
  }

  export type CustomerLogoUncheckedCreateWithoutRoleInput = {
    id?: number
    shopId: number
    customerId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerLogoCreateOrConnectWithoutRoleInput = {
    where: CustomerLogoWhereUniqueInput
    create: XOR<CustomerLogoCreateWithoutRoleInput, CustomerLogoUncheckedCreateWithoutRoleInput>
  }

  export type CustomerLogoCreateManyRoleInputEnvelope = {
    data: CustomerLogoCreateManyRoleInput | CustomerLogoCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type SalesDetailsCreateWithoutRoleInput = {
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutSalesDetailsInput
    customer: CustomerDetailsCreateNestedOneWithoutSalesDetailsInput
  }

  export type SalesDetailsUncheckedCreateWithoutRoleInput = {
    id?: number
    shopId: number
    customerId: number
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SalesDetailsCreateOrConnectWithoutRoleInput = {
    where: SalesDetailsWhereUniqueInput
    create: XOR<SalesDetailsCreateWithoutRoleInput, SalesDetailsUncheckedCreateWithoutRoleInput>
  }

  export type SalesDetailsCreateManyRoleInputEnvelope = {
    data: SalesDetailsCreateManyRoleInput | SalesDetailsCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type BoxCollectionCreateWithoutRoleInput = {
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutBoxCollectionsInput
    customer: CustomerDetailsCreateNestedOneWithoutBoxCollectionsInput
  }

  export type BoxCollectionUncheckedCreateWithoutRoleInput = {
    id?: number
    shopId: number
    customerId: number
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BoxCollectionCreateOrConnectWithoutRoleInput = {
    where: BoxCollectionWhereUniqueInput
    create: XOR<BoxCollectionCreateWithoutRoleInput, BoxCollectionUncheckedCreateWithoutRoleInput>
  }

  export type BoxCollectionCreateManyRoleInputEnvelope = {
    data: BoxCollectionCreateManyRoleInput | BoxCollectionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type ShopDetailsUpsertWithoutRolesInput = {
    update: XOR<ShopDetailsUpdateWithoutRolesInput, ShopDetailsUncheckedUpdateWithoutRolesInput>
    create: XOR<ShopDetailsCreateWithoutRolesInput, ShopDetailsUncheckedCreateWithoutRolesInput>
    where?: ShopDetailsWhereInput
  }

  export type ShopDetailsUpdateToOneWithWhereWithoutRolesInput = {
    where?: ShopDetailsWhereInput
    data: XOR<ShopDetailsUpdateWithoutRolesInput, ShopDetailsUncheckedUpdateWithoutRolesInput>
  }

  export type ShopDetailsUpdateWithoutRolesInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUncheckedUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUncheckedUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type CustomerDetailsUpsertWithWhereUniqueWithoutRoleInput = {
    where: CustomerDetailsWhereUniqueInput
    update: XOR<CustomerDetailsUpdateWithoutRoleInput, CustomerDetailsUncheckedUpdateWithoutRoleInput>
    create: XOR<CustomerDetailsCreateWithoutRoleInput, CustomerDetailsUncheckedCreateWithoutRoleInput>
  }

  export type CustomerDetailsUpdateWithWhereUniqueWithoutRoleInput = {
    where: CustomerDetailsWhereUniqueInput
    data: XOR<CustomerDetailsUpdateWithoutRoleInput, CustomerDetailsUncheckedUpdateWithoutRoleInput>
  }

  export type CustomerDetailsUpdateManyWithWhereWithoutRoleInput = {
    where: CustomerDetailsScalarWhereInput
    data: XOR<CustomerDetailsUpdateManyMutationInput, CustomerDetailsUncheckedUpdateManyWithoutRoleInput>
  }

  export type CustomerLogoUpsertWithWhereUniqueWithoutRoleInput = {
    where: CustomerLogoWhereUniqueInput
    update: XOR<CustomerLogoUpdateWithoutRoleInput, CustomerLogoUncheckedUpdateWithoutRoleInput>
    create: XOR<CustomerLogoCreateWithoutRoleInput, CustomerLogoUncheckedCreateWithoutRoleInput>
  }

  export type CustomerLogoUpdateWithWhereUniqueWithoutRoleInput = {
    where: CustomerLogoWhereUniqueInput
    data: XOR<CustomerLogoUpdateWithoutRoleInput, CustomerLogoUncheckedUpdateWithoutRoleInput>
  }

  export type CustomerLogoUpdateManyWithWhereWithoutRoleInput = {
    where: CustomerLogoScalarWhereInput
    data: XOR<CustomerLogoUpdateManyMutationInput, CustomerLogoUncheckedUpdateManyWithoutRoleInput>
  }

  export type SalesDetailsUpsertWithWhereUniqueWithoutRoleInput = {
    where: SalesDetailsWhereUniqueInput
    update: XOR<SalesDetailsUpdateWithoutRoleInput, SalesDetailsUncheckedUpdateWithoutRoleInput>
    create: XOR<SalesDetailsCreateWithoutRoleInput, SalesDetailsUncheckedCreateWithoutRoleInput>
  }

  export type SalesDetailsUpdateWithWhereUniqueWithoutRoleInput = {
    where: SalesDetailsWhereUniqueInput
    data: XOR<SalesDetailsUpdateWithoutRoleInput, SalesDetailsUncheckedUpdateWithoutRoleInput>
  }

  export type SalesDetailsUpdateManyWithWhereWithoutRoleInput = {
    where: SalesDetailsScalarWhereInput
    data: XOR<SalesDetailsUpdateManyMutationInput, SalesDetailsUncheckedUpdateManyWithoutRoleInput>
  }

  export type BoxCollectionUpsertWithWhereUniqueWithoutRoleInput = {
    where: BoxCollectionWhereUniqueInput
    update: XOR<BoxCollectionUpdateWithoutRoleInput, BoxCollectionUncheckedUpdateWithoutRoleInput>
    create: XOR<BoxCollectionCreateWithoutRoleInput, BoxCollectionUncheckedCreateWithoutRoleInput>
  }

  export type BoxCollectionUpdateWithWhereUniqueWithoutRoleInput = {
    where: BoxCollectionWhereUniqueInput
    data: XOR<BoxCollectionUpdateWithoutRoleInput, BoxCollectionUncheckedUpdateWithoutRoleInput>
  }

  export type BoxCollectionUpdateManyWithWhereWithoutRoleInput = {
    where: BoxCollectionScalarWhereInput
    data: XOR<BoxCollectionUpdateManyMutationInput, BoxCollectionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleCreateWithoutCustomerDetailsInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutRolesInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutCustomerDetailsInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutCustomerDetailsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutCustomerDetailsInput, RoleUncheckedCreateWithoutCustomerDetailsInput>
  }

  export type ShopDetailsCreateWithoutCustomerDetailsInput = {
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoCreateNestedManyWithoutShopInput
    roles?: RoleCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsUncheckedCreateWithoutCustomerDetailsInput = {
    id?: number
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerUncheckedCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoUncheckedCreateNestedManyWithoutShopInput
    roles?: RoleUncheckedCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsCreateOrConnectWithoutCustomerDetailsInput = {
    where: ShopDetailsWhereUniqueInput
    create: XOR<ShopDetailsCreateWithoutCustomerDetailsInput, ShopDetailsUncheckedCreateWithoutCustomerDetailsInput>
  }

  export type CustomerLogoCreateWithoutCustomerInput = {
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutCustomerLogosInput
    shop: ShopDetailsCreateNestedOneWithoutCustomerLogosInput
  }

  export type CustomerLogoUncheckedCreateWithoutCustomerInput = {
    id?: number
    roleId: number
    shopId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerLogoCreateOrConnectWithoutCustomerInput = {
    where: CustomerLogoWhereUniqueInput
    create: XOR<CustomerLogoCreateWithoutCustomerInput, CustomerLogoUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerLogoCreateManyCustomerInputEnvelope = {
    data: CustomerLogoCreateManyCustomerInput | CustomerLogoCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SalesDetailsCreateWithoutCustomerInput = {
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutSalesDetailsInput
    shop: ShopDetailsCreateNestedOneWithoutSalesDetailsInput
  }

  export type SalesDetailsUncheckedCreateWithoutCustomerInput = {
    id?: number
    roleId: number
    shopId: number
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SalesDetailsCreateOrConnectWithoutCustomerInput = {
    where: SalesDetailsWhereUniqueInput
    create: XOR<SalesDetailsCreateWithoutCustomerInput, SalesDetailsUncheckedCreateWithoutCustomerInput>
  }

  export type SalesDetailsCreateManyCustomerInputEnvelope = {
    data: SalesDetailsCreateManyCustomerInput | SalesDetailsCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BoxCollectionCreateWithoutCustomerInput = {
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutBoxCollectionsInput
    shop: ShopDetailsCreateNestedOneWithoutBoxCollectionsInput
  }

  export type BoxCollectionUncheckedCreateWithoutCustomerInput = {
    id?: number
    roleId: number
    shopId: number
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BoxCollectionCreateOrConnectWithoutCustomerInput = {
    where: BoxCollectionWhereUniqueInput
    create: XOR<BoxCollectionCreateWithoutCustomerInput, BoxCollectionUncheckedCreateWithoutCustomerInput>
  }

  export type BoxCollectionCreateManyCustomerInputEnvelope = {
    data: BoxCollectionCreateManyCustomerInput | BoxCollectionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutCustomerDetailsInput = {
    update: XOR<RoleUpdateWithoutCustomerDetailsInput, RoleUncheckedUpdateWithoutCustomerDetailsInput>
    create: XOR<RoleCreateWithoutCustomerDetailsInput, RoleUncheckedCreateWithoutCustomerDetailsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutCustomerDetailsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutCustomerDetailsInput, RoleUncheckedUpdateWithoutCustomerDetailsInput>
  }

  export type RoleUpdateWithoutCustomerDetailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutRolesNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutCustomerDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ShopDetailsUpsertWithoutCustomerDetailsInput = {
    update: XOR<ShopDetailsUpdateWithoutCustomerDetailsInput, ShopDetailsUncheckedUpdateWithoutCustomerDetailsInput>
    create: XOR<ShopDetailsCreateWithoutCustomerDetailsInput, ShopDetailsUncheckedCreateWithoutCustomerDetailsInput>
    where?: ShopDetailsWhereInput
  }

  export type ShopDetailsUpdateToOneWithWhereWithoutCustomerDetailsInput = {
    where?: ShopDetailsWhereInput
    data: XOR<ShopDetailsUpdateWithoutCustomerDetailsInput, ShopDetailsUncheckedUpdateWithoutCustomerDetailsInput>
  }

  export type ShopDetailsUpdateWithoutCustomerDetailsInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUpdateManyWithoutShopNestedInput
    roles?: RoleUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsUncheckedUpdateWithoutCustomerDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUncheckedUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUncheckedUpdateManyWithoutShopNestedInput
    roles?: RoleUncheckedUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type CustomerLogoUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerLogoWhereUniqueInput
    update: XOR<CustomerLogoUpdateWithoutCustomerInput, CustomerLogoUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerLogoCreateWithoutCustomerInput, CustomerLogoUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerLogoUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerLogoWhereUniqueInput
    data: XOR<CustomerLogoUpdateWithoutCustomerInput, CustomerLogoUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerLogoUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerLogoScalarWhereInput
    data: XOR<CustomerLogoUpdateManyMutationInput, CustomerLogoUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SalesDetailsUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SalesDetailsWhereUniqueInput
    update: XOR<SalesDetailsUpdateWithoutCustomerInput, SalesDetailsUncheckedUpdateWithoutCustomerInput>
    create: XOR<SalesDetailsCreateWithoutCustomerInput, SalesDetailsUncheckedCreateWithoutCustomerInput>
  }

  export type SalesDetailsUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SalesDetailsWhereUniqueInput
    data: XOR<SalesDetailsUpdateWithoutCustomerInput, SalesDetailsUncheckedUpdateWithoutCustomerInput>
  }

  export type SalesDetailsUpdateManyWithWhereWithoutCustomerInput = {
    where: SalesDetailsScalarWhereInput
    data: XOR<SalesDetailsUpdateManyMutationInput, SalesDetailsUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BoxCollectionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BoxCollectionWhereUniqueInput
    update: XOR<BoxCollectionUpdateWithoutCustomerInput, BoxCollectionUncheckedUpdateWithoutCustomerInput>
    create: XOR<BoxCollectionCreateWithoutCustomerInput, BoxCollectionUncheckedCreateWithoutCustomerInput>
  }

  export type BoxCollectionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BoxCollectionWhereUniqueInput
    data: XOR<BoxCollectionUpdateWithoutCustomerInput, BoxCollectionUncheckedUpdateWithoutCustomerInput>
  }

  export type BoxCollectionUpdateManyWithWhereWithoutCustomerInput = {
    where: BoxCollectionScalarWhereInput
    data: XOR<BoxCollectionUpdateManyMutationInput, BoxCollectionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type RoleCreateWithoutCustomerLogosInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutRolesInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutCustomerLogosInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutCustomerLogosInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutCustomerLogosInput, RoleUncheckedCreateWithoutCustomerLogosInput>
  }

  export type ShopDetailsCreateWithoutCustomerLogosInput = {
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoCreateNestedManyWithoutShopInput
    roles?: RoleCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsUncheckedCreateWithoutCustomerLogosInput = {
    id?: number
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerUncheckedCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoUncheckedCreateNestedManyWithoutShopInput
    roles?: RoleUncheckedCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsCreateOrConnectWithoutCustomerLogosInput = {
    where: ShopDetailsWhereUniqueInput
    create: XOR<ShopDetailsCreateWithoutCustomerLogosInput, ShopDetailsUncheckedCreateWithoutCustomerLogosInput>
  }

  export type CustomerDetailsCreateWithoutCustomerLogosInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutCustomerDetailsInput
    shop: ShopDetailsCreateNestedOneWithoutCustomerDetailsInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsUncheckedCreateWithoutCustomerLogosInput = {
    id?: number
    roleId: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsCreateOrConnectWithoutCustomerLogosInput = {
    where: CustomerDetailsWhereUniqueInput
    create: XOR<CustomerDetailsCreateWithoutCustomerLogosInput, CustomerDetailsUncheckedCreateWithoutCustomerLogosInput>
  }

  export type RoleUpsertWithoutCustomerLogosInput = {
    update: XOR<RoleUpdateWithoutCustomerLogosInput, RoleUncheckedUpdateWithoutCustomerLogosInput>
    create: XOR<RoleCreateWithoutCustomerLogosInput, RoleUncheckedCreateWithoutCustomerLogosInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutCustomerLogosInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutCustomerLogosInput, RoleUncheckedUpdateWithoutCustomerLogosInput>
  }

  export type RoleUpdateWithoutCustomerLogosInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutRolesNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutCustomerLogosInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ShopDetailsUpsertWithoutCustomerLogosInput = {
    update: XOR<ShopDetailsUpdateWithoutCustomerLogosInput, ShopDetailsUncheckedUpdateWithoutCustomerLogosInput>
    create: XOR<ShopDetailsCreateWithoutCustomerLogosInput, ShopDetailsUncheckedCreateWithoutCustomerLogosInput>
    where?: ShopDetailsWhereInput
  }

  export type ShopDetailsUpdateToOneWithWhereWithoutCustomerLogosInput = {
    where?: ShopDetailsWhereInput
    data: XOR<ShopDetailsUpdateWithoutCustomerLogosInput, ShopDetailsUncheckedUpdateWithoutCustomerLogosInput>
  }

  export type ShopDetailsUpdateWithoutCustomerLogosInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUpdateManyWithoutShopNestedInput
    roles?: RoleUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsUncheckedUpdateWithoutCustomerLogosInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUncheckedUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUncheckedUpdateManyWithoutShopNestedInput
    roles?: RoleUncheckedUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type CustomerDetailsUpsertWithoutCustomerLogosInput = {
    update: XOR<CustomerDetailsUpdateWithoutCustomerLogosInput, CustomerDetailsUncheckedUpdateWithoutCustomerLogosInput>
    create: XOR<CustomerDetailsCreateWithoutCustomerLogosInput, CustomerDetailsUncheckedCreateWithoutCustomerLogosInput>
    where?: CustomerDetailsWhereInput
  }

  export type CustomerDetailsUpdateToOneWithWhereWithoutCustomerLogosInput = {
    where?: CustomerDetailsWhereInput
    data: XOR<CustomerDetailsUpdateWithoutCustomerLogosInput, CustomerDetailsUncheckedUpdateWithoutCustomerLogosInput>
  }

  export type CustomerDetailsUpdateWithoutCustomerLogosInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutCustomerDetailsNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutCustomerDetailsNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerDetailsUncheckedUpdateWithoutCustomerLogosInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RoleCreateWithoutSalesDetailsInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutRolesInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutRoleInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutSalesDetailsInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutRoleInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutRoleInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutSalesDetailsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutSalesDetailsInput, RoleUncheckedCreateWithoutSalesDetailsInput>
  }

  export type ShopDetailsCreateWithoutSalesDetailsInput = {
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoCreateNestedManyWithoutShopInput
    roles?: RoleCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsUncheckedCreateWithoutSalesDetailsInput = {
    id?: number
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerUncheckedCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoUncheckedCreateNestedManyWithoutShopInput
    roles?: RoleUncheckedCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutShopInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsCreateOrConnectWithoutSalesDetailsInput = {
    where: ShopDetailsWhereUniqueInput
    create: XOR<ShopDetailsCreateWithoutSalesDetailsInput, ShopDetailsUncheckedCreateWithoutSalesDetailsInput>
  }

  export type CustomerDetailsCreateWithoutSalesDetailsInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutCustomerDetailsInput
    shop: ShopDetailsCreateNestedOneWithoutCustomerDetailsInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsUncheckedCreateWithoutSalesDetailsInput = {
    id?: number
    roleId: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutCustomerInput
    boxCollections?: BoxCollectionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsCreateOrConnectWithoutSalesDetailsInput = {
    where: CustomerDetailsWhereUniqueInput
    create: XOR<CustomerDetailsCreateWithoutSalesDetailsInput, CustomerDetailsUncheckedCreateWithoutSalesDetailsInput>
  }

  export type RoleUpsertWithoutSalesDetailsInput = {
    update: XOR<RoleUpdateWithoutSalesDetailsInput, RoleUncheckedUpdateWithoutSalesDetailsInput>
    create: XOR<RoleCreateWithoutSalesDetailsInput, RoleUncheckedCreateWithoutSalesDetailsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutSalesDetailsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutSalesDetailsInput, RoleUncheckedUpdateWithoutSalesDetailsInput>
  }

  export type RoleUpdateWithoutSalesDetailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutRolesNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutRoleNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutSalesDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutRoleNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ShopDetailsUpsertWithoutSalesDetailsInput = {
    update: XOR<ShopDetailsUpdateWithoutSalesDetailsInput, ShopDetailsUncheckedUpdateWithoutSalesDetailsInput>
    create: XOR<ShopDetailsCreateWithoutSalesDetailsInput, ShopDetailsUncheckedCreateWithoutSalesDetailsInput>
    where?: ShopDetailsWhereInput
  }

  export type ShopDetailsUpdateToOneWithWhereWithoutSalesDetailsInput = {
    where?: ShopDetailsWhereInput
    data: XOR<ShopDetailsUpdateWithoutSalesDetailsInput, ShopDetailsUncheckedUpdateWithoutSalesDetailsInput>
  }

  export type ShopDetailsUpdateWithoutSalesDetailsInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUpdateManyWithoutShopNestedInput
    roles?: RoleUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsUncheckedUpdateWithoutSalesDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUncheckedUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUncheckedUpdateManyWithoutShopNestedInput
    roles?: RoleUncheckedUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutShopNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type CustomerDetailsUpsertWithoutSalesDetailsInput = {
    update: XOR<CustomerDetailsUpdateWithoutSalesDetailsInput, CustomerDetailsUncheckedUpdateWithoutSalesDetailsInput>
    create: XOR<CustomerDetailsCreateWithoutSalesDetailsInput, CustomerDetailsUncheckedCreateWithoutSalesDetailsInput>
    where?: CustomerDetailsWhereInput
  }

  export type CustomerDetailsUpdateToOneWithWhereWithoutSalesDetailsInput = {
    where?: CustomerDetailsWhereInput
    data: XOR<CustomerDetailsUpdateWithoutSalesDetailsInput, CustomerDetailsUncheckedUpdateWithoutSalesDetailsInput>
  }

  export type CustomerDetailsUpdateWithoutSalesDetailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutCustomerDetailsNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutCustomerDetailsNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerDetailsUncheckedUpdateWithoutSalesDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RoleCreateWithoutBoxCollectionsInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    shop: ShopDetailsCreateNestedOneWithoutRolesInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutRoleInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutBoxCollectionsInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutRoleInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutRoleInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutBoxCollectionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutBoxCollectionsInput, RoleUncheckedCreateWithoutBoxCollectionsInput>
  }

  export type ShopDetailsCreateWithoutBoxCollectionsInput = {
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoCreateNestedManyWithoutShopInput
    roles?: RoleCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsUncheckedCreateWithoutBoxCollectionsInput = {
    id?: number
    shopName: string
    shortName?: string | null
    mobileNumber: bigint | number
    email?: string | null
    address: string
    subscriptionStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    owners?: OwnerUncheckedCreateNestedManyWithoutShopInput
    shopLogos?: ShopLogoUncheckedCreateNestedManyWithoutShopInput
    roles?: RoleUncheckedCreateNestedManyWithoutShopInput
    customerDetails?: CustomerDetailsUncheckedCreateNestedManyWithoutShopInput
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutShopInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopDetailsCreateOrConnectWithoutBoxCollectionsInput = {
    where: ShopDetailsWhereUniqueInput
    create: XOR<ShopDetailsCreateWithoutBoxCollectionsInput, ShopDetailsUncheckedCreateWithoutBoxCollectionsInput>
  }

  export type CustomerDetailsCreateWithoutBoxCollectionsInput = {
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutCustomerDetailsInput
    shop: ShopDetailsCreateNestedOneWithoutCustomerDetailsInput
    customerLogos?: CustomerLogoCreateNestedManyWithoutCustomerInput
    salesDetails?: SalesDetailsCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsUncheckedCreateWithoutBoxCollectionsInput = {
    id?: number
    roleId: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    customerLogos?: CustomerLogoUncheckedCreateNestedManyWithoutCustomerInput
    salesDetails?: SalesDetailsUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerDetailsCreateOrConnectWithoutBoxCollectionsInput = {
    where: CustomerDetailsWhereUniqueInput
    create: XOR<CustomerDetailsCreateWithoutBoxCollectionsInput, CustomerDetailsUncheckedCreateWithoutBoxCollectionsInput>
  }

  export type RoleUpsertWithoutBoxCollectionsInput = {
    update: XOR<RoleUpdateWithoutBoxCollectionsInput, RoleUncheckedUpdateWithoutBoxCollectionsInput>
    create: XOR<RoleCreateWithoutBoxCollectionsInput, RoleUncheckedCreateWithoutBoxCollectionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutBoxCollectionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutBoxCollectionsInput, RoleUncheckedUpdateWithoutBoxCollectionsInput>
  }

  export type RoleUpdateWithoutBoxCollectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutRolesNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutRoleNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutBoxCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutRoleNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ShopDetailsUpsertWithoutBoxCollectionsInput = {
    update: XOR<ShopDetailsUpdateWithoutBoxCollectionsInput, ShopDetailsUncheckedUpdateWithoutBoxCollectionsInput>
    create: XOR<ShopDetailsCreateWithoutBoxCollectionsInput, ShopDetailsUncheckedCreateWithoutBoxCollectionsInput>
    where?: ShopDetailsWhereInput
  }

  export type ShopDetailsUpdateToOneWithWhereWithoutBoxCollectionsInput = {
    where?: ShopDetailsWhereInput
    data: XOR<ShopDetailsUpdateWithoutBoxCollectionsInput, ShopDetailsUncheckedUpdateWithoutBoxCollectionsInput>
  }

  export type ShopDetailsUpdateWithoutBoxCollectionsInput = {
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUpdateManyWithoutShopNestedInput
    roles?: RoleUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutShopNestedInput
  }

  export type ShopDetailsUncheckedUpdateWithoutBoxCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopName?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owners?: OwnerUncheckedUpdateManyWithoutShopNestedInput
    shopLogos?: ShopLogoUncheckedUpdateManyWithoutShopNestedInput
    roles?: RoleUncheckedUpdateManyWithoutShopNestedInput
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutShopNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutShopNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutShopNestedInput
  }

  export type CustomerDetailsUpsertWithoutBoxCollectionsInput = {
    update: XOR<CustomerDetailsUpdateWithoutBoxCollectionsInput, CustomerDetailsUncheckedUpdateWithoutBoxCollectionsInput>
    create: XOR<CustomerDetailsCreateWithoutBoxCollectionsInput, CustomerDetailsUncheckedCreateWithoutBoxCollectionsInput>
    where?: CustomerDetailsWhereInput
  }

  export type CustomerDetailsUpdateToOneWithWhereWithoutBoxCollectionsInput = {
    where?: CustomerDetailsWhereInput
    data: XOR<CustomerDetailsUpdateWithoutBoxCollectionsInput, CustomerDetailsUncheckedUpdateWithoutBoxCollectionsInput>
  }

  export type CustomerDetailsUpdateWithoutBoxCollectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutCustomerDetailsNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutCustomerDetailsNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutCustomerNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerDetailsUncheckedUpdateWithoutBoxCollectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutCustomerNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type OwnerCreateManyShopInput = {
    id?: number
    name: string
    mobileNumber: string
    email?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ShopLogoCreateManyShopInput = {
    id?: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleCreateManyShopInput = {
    id?: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    roleName: string
    access: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerDetailsCreateManyShopInput = {
    id?: number
    roleId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerLogoCreateManyShopInput = {
    id?: number
    roleId: number
    customerId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SalesDetailsCreateManyShopInput = {
    id?: number
    roleId: number
    customerId: number
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BoxCollectionCreateManyShopInput = {
    id?: number
    roleId: number
    customerId: number
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type OwnerUpdateWithoutShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopLogoUpdateWithoutShopInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopLogoUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ShopLogoUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUpdateWithoutShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerDetails?: CustomerDetailsUpdateManyWithoutRoleNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerDetails?: CustomerDetailsUncheckedUpdateManyWithoutRoleNestedInput
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutRoleNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutRoleNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    roleName?: StringFieldUpdateOperationsInput | string
    access?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerDetailsUpdateWithoutShopInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutCustomerDetailsNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutCustomerNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerDetailsUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutCustomerNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerDetailsUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerLogoUpdateWithoutShopInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutCustomerLogosNestedInput
    customer?: CustomerDetailsUpdateOneRequiredWithoutCustomerLogosNestedInput
  }

  export type CustomerLogoUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerLogoUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesDetailsUpdateWithoutShopInput = {
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutSalesDetailsNestedInput
    customer?: CustomerDetailsUpdateOneRequiredWithoutSalesDetailsNestedInput
  }

  export type SalesDetailsUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesDetailsUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoxCollectionUpdateWithoutShopInput = {
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutBoxCollectionsNestedInput
    customer?: CustomerDetailsUpdateOneRequiredWithoutBoxCollectionsNestedInput
  }

  export type BoxCollectionUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoxCollectionUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerDetailsCreateManyRoleInput = {
    id?: number
    shopId: number
    name: string
    mobileNumber: bigint | number
    email?: string | null
    totalBoxes?: number | null
    totalAmount?: bigint | number | null
    totalDiscountAmount?: bigint | number | null
    settledBoxes?: number | null
    remainingBoxes?: number | null
    settledAmount?: bigint | number | null
    remainingAmount?: bigint | number | null
    minAmountForOneBox?: string | null
    maxAmountForOneBox?: string | null
    averageAmountOneBox?: string | null
    minDisForOneBox?: string | null
    maxDisForOneBox?: string | null
    averageDisOneBox?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerLogoCreateManyRoleInput = {
    id?: number
    shopId: number
    customerId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SalesDetailsCreateManyRoleInput = {
    id?: number
    shopId: number
    customerId: number
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BoxCollectionCreateManyRoleInput = {
    id?: number
    shopId: number
    customerId: number
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerDetailsUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutCustomerDetailsNestedInput
    customerLogos?: CustomerLogoUpdateManyWithoutCustomerNestedInput
    salesDetails?: SalesDetailsUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerDetailsUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customerLogos?: CustomerLogoUncheckedUpdateManyWithoutCustomerNestedInput
    salesDetails?: SalesDetailsUncheckedUpdateManyWithoutCustomerNestedInput
    boxCollections?: BoxCollectionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerDetailsUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mobileNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    totalAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    totalDiscountAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    settledBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    remainingBoxes?: NullableIntFieldUpdateOperationsInput | number | null
    settledAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    remainingAmount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    minAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxAmountForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageAmountOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    minDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    maxDisForOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    averageDisOneBox?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerLogoUpdateWithoutRoleInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutCustomerLogosNestedInput
    customer?: CustomerDetailsUpdateOneRequiredWithoutCustomerLogosNestedInput
  }

  export type CustomerLogoUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerLogoUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesDetailsUpdateWithoutRoleInput = {
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutSalesDetailsNestedInput
    customer?: CustomerDetailsUpdateOneRequiredWithoutSalesDetailsNestedInput
  }

  export type SalesDetailsUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesDetailsUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoxCollectionUpdateWithoutRoleInput = {
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shop?: ShopDetailsUpdateOneRequiredWithoutBoxCollectionsNestedInput
    customer?: CustomerDetailsUpdateOneRequiredWithoutBoxCollectionsNestedInput
  }

  export type BoxCollectionUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoxCollectionUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerLogoCreateManyCustomerInput = {
    id?: number
    roleId: number
    shopId: number
    fileName: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SalesDetailsCreateManyCustomerInput = {
    id?: number
    roleId: number
    shopId: number
    soldBoxes: number
    soldAmount: bigint | number
    appliedDis: number
    totalAmount: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BoxCollectionCreateManyCustomerInput = {
    id?: number
    roleId: number
    shopId: number
    collectedBoxes: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CustomerLogoUpdateWithoutCustomerInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutCustomerLogosNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutCustomerLogosNestedInput
  }

  export type CustomerLogoUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerLogoUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesDetailsUpdateWithoutCustomerInput = {
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutSalesDetailsNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutSalesDetailsNestedInput
  }

  export type SalesDetailsUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesDetailsUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    soldBoxes?: IntFieldUpdateOperationsInput | number
    soldAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    appliedDis?: IntFieldUpdateOperationsInput | number
    totalAmount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoxCollectionUpdateWithoutCustomerInput = {
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutBoxCollectionsNestedInput
    shop?: ShopDetailsUpdateOneRequiredWithoutBoxCollectionsNestedInput
  }

  export type BoxCollectionUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BoxCollectionUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    shopId?: IntFieldUpdateOperationsInput | number
    collectedBoxes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
  export const dmmf: runtime.BaseDMMF
}