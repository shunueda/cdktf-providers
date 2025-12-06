// https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceLoadGeneratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster to maintain this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#cluster_name SourceLoadGenerator#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#comment SourceLoadGenerator#comment}
  */
  readonly comment?: string;
  /**
  * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#database_name SourceLoadGenerator#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#id SourceLoadGenerator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The load generator types: [AUCTION MARKETING TPCH].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#load_generator_type SourceLoadGenerator#load_generator_type}
  */
  readonly loadGeneratorType: string;
  /**
  * The identifier for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#name SourceLoadGenerator#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#ownership_role SourceLoadGenerator#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#region SourceLoadGenerator#region}
  */
  readonly region?: string;
  /**
  * The identifier for the source schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#schema_name SourceLoadGenerator#schema_name}
  */
  readonly schemaName?: string;
  /**
  * auction_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#auction_options SourceLoadGenerator#auction_options}
  */
  readonly auctionOptions?: SourceLoadGeneratorAuctionOptions;
  /**
  * expose_progress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#expose_progress SourceLoadGenerator#expose_progress}
  */
  readonly exposeProgress?: SourceLoadGeneratorExposeProgress;
  /**
  * marketing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#marketing_options SourceLoadGenerator#marketing_options}
  */
  readonly marketingOptions?: SourceLoadGeneratorMarketingOptions;
  /**
  * tpch_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#tpch_options SourceLoadGenerator#tpch_options}
  */
  readonly tpchOptions?: SourceLoadGeneratorTpchOptions;
}
export interface SourceLoadGeneratorAuctionOptions {
  /**
  * (Deprecated) The scale factor for the generator. Defaults to 0.01 (~ 10MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#scale_factor SourceLoadGenerator#scale_factor}
  */
  readonly scaleFactor?: number;
  /**
  * The interval at which the next datum should be emitted. Defaults to one second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#tick_interval SourceLoadGenerator#tick_interval}
  */
  readonly tickInterval?: string;
}

export function sourceLoadGeneratorAuctionOptionsToTerraform(struct?: SourceLoadGeneratorAuctionOptionsOutputReference | SourceLoadGeneratorAuctionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_factor: cdktf.numberToTerraform(struct!.scaleFactor),
    tick_interval: cdktf.stringToTerraform(struct!.tickInterval),
  }
}


export function sourceLoadGeneratorAuctionOptionsToHclTerraform(struct?: SourceLoadGeneratorAuctionOptionsOutputReference | SourceLoadGeneratorAuctionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.scaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tick_interval: {
      value: cdktf.stringToHclTerraform(struct!.tickInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceLoadGeneratorAuctionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceLoadGeneratorAuctionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleFactor = this._scaleFactor;
    }
    if (this._tickInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickInterval = this._tickInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLoadGeneratorAuctionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleFactor = undefined;
      this._tickInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleFactor = value.scaleFactor;
      this._tickInterval = value.tickInterval;
    }
  }

  // scale_factor - computed: false, optional: true, required: false
  private _scaleFactor?: number; 
  public get scaleFactor() {
    return this.getNumberAttribute('scale_factor');
  }
  public set scaleFactor(value: number) {
    this._scaleFactor = value;
  }
  public resetScaleFactor() {
    this._scaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleFactorInput() {
    return this._scaleFactor;
  }

  // tick_interval - computed: false, optional: true, required: false
  private _tickInterval?: string; 
  public get tickInterval() {
    return this.getStringAttribute('tick_interval');
  }
  public set tickInterval(value: string) {
    this._tickInterval = value;
  }
  public resetTickInterval() {
    this._tickInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickIntervalInput() {
    return this._tickInterval;
  }
}
export interface SourceLoadGeneratorExposeProgress {
  /**
  * The expose_progress database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#database_name SourceLoadGenerator#database_name}
  */
  readonly databaseName?: string;
  /**
  * The expose_progress name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#name SourceLoadGenerator#name}
  */
  readonly name: string;
  /**
  * The expose_progress schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#schema_name SourceLoadGenerator#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceLoadGeneratorExposeProgressToTerraform(struct?: SourceLoadGeneratorExposeProgressOutputReference | SourceLoadGeneratorExposeProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function sourceLoadGeneratorExposeProgressToHclTerraform(struct?: SourceLoadGeneratorExposeProgressOutputReference | SourceLoadGeneratorExposeProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceLoadGeneratorExposeProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceLoadGeneratorExposeProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLoadGeneratorExposeProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface SourceLoadGeneratorMarketingOptions {
  /**
  * (Deprecated) The scale factor for the generator. Defaults to 0.01 (~ 10MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#scale_factor SourceLoadGenerator#scale_factor}
  */
  readonly scaleFactor?: number;
  /**
  * The interval at which the next datum should be emitted. Defaults to one second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#tick_interval SourceLoadGenerator#tick_interval}
  */
  readonly tickInterval?: string;
}

export function sourceLoadGeneratorMarketingOptionsToTerraform(struct?: SourceLoadGeneratorMarketingOptionsOutputReference | SourceLoadGeneratorMarketingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_factor: cdktf.numberToTerraform(struct!.scaleFactor),
    tick_interval: cdktf.stringToTerraform(struct!.tickInterval),
  }
}


export function sourceLoadGeneratorMarketingOptionsToHclTerraform(struct?: SourceLoadGeneratorMarketingOptionsOutputReference | SourceLoadGeneratorMarketingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.scaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tick_interval: {
      value: cdktf.stringToHclTerraform(struct!.tickInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceLoadGeneratorMarketingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceLoadGeneratorMarketingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleFactor = this._scaleFactor;
    }
    if (this._tickInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickInterval = this._tickInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLoadGeneratorMarketingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleFactor = undefined;
      this._tickInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleFactor = value.scaleFactor;
      this._tickInterval = value.tickInterval;
    }
  }

  // scale_factor - computed: false, optional: true, required: false
  private _scaleFactor?: number; 
  public get scaleFactor() {
    return this.getNumberAttribute('scale_factor');
  }
  public set scaleFactor(value: number) {
    this._scaleFactor = value;
  }
  public resetScaleFactor() {
    this._scaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleFactorInput() {
    return this._scaleFactor;
  }

  // tick_interval - computed: false, optional: true, required: false
  private _tickInterval?: string; 
  public get tickInterval() {
    return this.getStringAttribute('tick_interval');
  }
  public set tickInterval(value: string) {
    this._tickInterval = value;
  }
  public resetTickInterval() {
    this._tickInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickIntervalInput() {
    return this._tickInterval;
  }
}
export interface SourceLoadGeneratorTpchOptions {
  /**
  * The scale factor for the generator. Defaults to 0.01 (~ 10MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#scale_factor SourceLoadGenerator#scale_factor}
  */
  readonly scaleFactor?: number;
  /**
  * The interval at which the next datum should be emitted. Defaults to one second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#tick_interval SourceLoadGenerator#tick_interval}
  */
  readonly tickInterval?: string;
}

export function sourceLoadGeneratorTpchOptionsToTerraform(struct?: SourceLoadGeneratorTpchOptionsOutputReference | SourceLoadGeneratorTpchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_factor: cdktf.numberToTerraform(struct!.scaleFactor),
    tick_interval: cdktf.stringToTerraform(struct!.tickInterval),
  }
}


export function sourceLoadGeneratorTpchOptionsToHclTerraform(struct?: SourceLoadGeneratorTpchOptionsOutputReference | SourceLoadGeneratorTpchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.scaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tick_interval: {
      value: cdktf.stringToHclTerraform(struct!.tickInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceLoadGeneratorTpchOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceLoadGeneratorTpchOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleFactor = this._scaleFactor;
    }
    if (this._tickInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickInterval = this._tickInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLoadGeneratorTpchOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleFactor = undefined;
      this._tickInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleFactor = value.scaleFactor;
      this._tickInterval = value.tickInterval;
    }
  }

  // scale_factor - computed: false, optional: true, required: false
  private _scaleFactor?: number; 
  public get scaleFactor() {
    return this.getNumberAttribute('scale_factor');
  }
  public set scaleFactor(value: number) {
    this._scaleFactor = value;
  }
  public resetScaleFactor() {
    this._scaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleFactorInput() {
    return this._scaleFactor;
  }

  // tick_interval - computed: false, optional: true, required: false
  private _tickInterval?: string; 
  public get tickInterval() {
    return this.getStringAttribute('tick_interval');
  }
  public set tickInterval(value: string) {
    this._tickInterval = value;
  }
  public resetTickInterval() {
    this._tickInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickIntervalInput() {
    return this._tickInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator materialize_source_load_generator}
*/
export class SourceLoadGenerator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_source_load_generator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceLoadGenerator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceLoadGenerator to import
  * @param importFromId The id of the existing SourceLoadGenerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceLoadGenerator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_source_load_generator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_load_generator materialize_source_load_generator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceLoadGeneratorConfig
  */
  public constructor(scope: Construct, id: string, config: SourceLoadGeneratorConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_source_load_generator',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._comment = config.comment;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._loadGeneratorType = config.loadGeneratorType;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._auctionOptions.internalValue = config.auctionOptions;
    this._exposeProgress.internalValue = config.exposeProgress;
    this._marketingOptions.internalValue = config.marketingOptions;
    this._tpchOptions.internalValue = config.tpchOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // load_generator_type - computed: false, optional: false, required: true
  private _loadGeneratorType?: string; 
  public get loadGeneratorType() {
    return this.getStringAttribute('load_generator_type');
  }
  public set loadGeneratorType(value: string) {
    this._loadGeneratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadGeneratorTypeInput() {
    return this._loadGeneratorType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ownership_role - computed: true, optional: true, required: false
  private _ownershipRole?: string; 
  public get ownershipRole() {
    return this.getStringAttribute('ownership_role');
  }
  public set ownershipRole(value: string) {
    this._ownershipRole = value;
  }
  public resetOwnershipRole() {
    this._ownershipRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipRoleInput() {
    return this._ownershipRole;
  }

  // qualified_sql_name - computed: true, optional: false, required: false
  public get qualifiedSqlName() {
    return this.getStringAttribute('qualified_sql_name');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // auction_options - computed: false, optional: true, required: false
  private _auctionOptions = new SourceLoadGeneratorAuctionOptionsOutputReference(this, "auction_options");
  public get auctionOptions() {
    return this._auctionOptions;
  }
  public putAuctionOptions(value: SourceLoadGeneratorAuctionOptions) {
    this._auctionOptions.internalValue = value;
  }
  public resetAuctionOptions() {
    this._auctionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auctionOptionsInput() {
    return this._auctionOptions.internalValue;
  }

  // expose_progress - computed: false, optional: true, required: false
  private _exposeProgress = new SourceLoadGeneratorExposeProgressOutputReference(this, "expose_progress");
  public get exposeProgress() {
    return this._exposeProgress;
  }
  public putExposeProgress(value: SourceLoadGeneratorExposeProgress) {
    this._exposeProgress.internalValue = value;
  }
  public resetExposeProgress() {
    this._exposeProgress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeProgressInput() {
    return this._exposeProgress.internalValue;
  }

  // marketing_options - computed: false, optional: true, required: false
  private _marketingOptions = new SourceLoadGeneratorMarketingOptionsOutputReference(this, "marketing_options");
  public get marketingOptions() {
    return this._marketingOptions;
  }
  public putMarketingOptions(value: SourceLoadGeneratorMarketingOptions) {
    this._marketingOptions.internalValue = value;
  }
  public resetMarketingOptions() {
    this._marketingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketingOptionsInput() {
    return this._marketingOptions.internalValue;
  }

  // tpch_options - computed: false, optional: true, required: false
  private _tpchOptions = new SourceLoadGeneratorTpchOptionsOutputReference(this, "tpch_options");
  public get tpchOptions() {
    return this._tpchOptions;
  }
  public putTpchOptions(value: SourceLoadGeneratorTpchOptions) {
    this._tpchOptions.internalValue = value;
  }
  public resetTpchOptions() {
    this._tpchOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpchOptionsInput() {
    return this._tpchOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      comment: cdktf.stringToTerraform(this._comment),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      load_generator_type: cdktf.stringToTerraform(this._loadGeneratorType),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      auction_options: sourceLoadGeneratorAuctionOptionsToTerraform(this._auctionOptions.internalValue),
      expose_progress: sourceLoadGeneratorExposeProgressToTerraform(this._exposeProgress.internalValue),
      marketing_options: sourceLoadGeneratorMarketingOptionsToTerraform(this._marketingOptions.internalValue),
      tpch_options: sourceLoadGeneratorTpchOptionsToTerraform(this._tpchOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_generator_type: {
        value: cdktf.stringToHclTerraform(this._loadGeneratorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownership_role: {
        value: cdktf.stringToHclTerraform(this._ownershipRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auction_options: {
        value: sourceLoadGeneratorAuctionOptionsToHclTerraform(this._auctionOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceLoadGeneratorAuctionOptionsList",
      },
      expose_progress: {
        value: sourceLoadGeneratorExposeProgressToHclTerraform(this._exposeProgress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceLoadGeneratorExposeProgressList",
      },
      marketing_options: {
        value: sourceLoadGeneratorMarketingOptionsToHclTerraform(this._marketingOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceLoadGeneratorMarketingOptionsList",
      },
      tpch_options: {
        value: sourceLoadGeneratorTpchOptionsToHclTerraform(this._tpchOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceLoadGeneratorTpchOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
