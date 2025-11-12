// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#auditing_enabled ConnectMdmBucket#auditing_enabled}
  */
  readonly auditingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#cache_control_age ConnectMdmBucket#cache_control_age}
  */
  readonly cacheControlAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#default_region_id ConnectMdmBucket#default_region_id}
  */
  readonly defaultRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#description ConnectMdmBucket#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#enabled_cdn ConnectMdmBucket#enabled_cdn}
  */
  readonly enabledCdn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#id ConnectMdmBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#logging_enabled ConnectMdmBucket#logging_enabled}
  */
  readonly loggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#name ConnectMdmBucket#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#proposition_id ConnectMdmBucket#proposition_id}
  */
  readonly propositionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#replication_region_id ConnectMdmBucket#replication_region_id}
  */
  readonly replicationRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#versioning_enabled ConnectMdmBucket#versioning_enabled}
  */
  readonly versioningEnabled?: boolean | cdktf.IResolvable;
  /**
  * cors_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#cors_configuration ConnectMdmBucket#cors_configuration}
  */
  readonly corsConfiguration?: ConnectMdmBucketCorsConfiguration[] | cdktf.IResolvable;
}
export interface ConnectMdmBucketCorsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#allowed_headers ConnectMdmBucket#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#allowed_methods ConnectMdmBucket#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#allowed_origins ConnectMdmBucket#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#expose_headers ConnectMdmBucket#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#max_age_seconds ConnectMdmBucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

export function connectMdmBucketCorsConfigurationToTerraform(struct?: ConnectMdmBucketCorsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}


export function connectMdmBucketCorsConfigurationToHclTerraform(struct?: ConnectMdmBucketCorsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectMdmBucketCorsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConnectMdmBucketCorsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeSeconds = this._maxAgeSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMdmBucketCorsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposeHeaders = undefined;
      this._maxAgeSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAgeSeconds = value.maxAgeSeconds;
    }
  }

  // allowed_headers - computed: false, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_headers'));
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return cdktf.Fn.tolist(this.getListAttribute('expose_headers'));
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age_seconds - computed: false, optional: true, required: false
  private _maxAgeSeconds?: number; 
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
  public set maxAgeSeconds(value: number) {
    this._maxAgeSeconds = value;
  }
  public resetMaxAgeSeconds() {
    this._maxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeSecondsInput() {
    return this._maxAgeSeconds;
  }
}

export class ConnectMdmBucketCorsConfigurationList extends cdktf.ComplexList {
  public internalValue? : ConnectMdmBucketCorsConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConnectMdmBucketCorsConfigurationOutputReference {
    return new ConnectMdmBucketCorsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket hsdp_connect_mdm_bucket}
*/
export class ConnectMdmBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmBucket to import
  * @param importFromId The id of the existing ConnectMdmBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_bucket hsdp_connect_mdm_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmBucketConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_bucket',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditingEnabled = config.auditingEnabled;
    this._cacheControlAge = config.cacheControlAge;
    this._defaultRegionId = config.defaultRegionId;
    this._description = config.description;
    this._enabledCdn = config.enabledCdn;
    this._id = config.id;
    this._loggingEnabled = config.loggingEnabled;
    this._name = config.name;
    this._propositionId = config.propositionId;
    this._replicationRegionId = config.replicationRegionId;
    this._versioningEnabled = config.versioningEnabled;
    this._corsConfiguration.internalValue = config.corsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auditing_enabled - computed: false, optional: true, required: false
  private _auditingEnabled?: boolean | cdktf.IResolvable; 
  public get auditingEnabled() {
    return this.getBooleanAttribute('auditing_enabled');
  }
  public set auditingEnabled(value: boolean | cdktf.IResolvable) {
    this._auditingEnabled = value;
  }
  public resetAuditingEnabled() {
    this._auditingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditingEnabledInput() {
    return this._auditingEnabled;
  }

  // cache_control_age - computed: false, optional: true, required: false
  private _cacheControlAge?: number; 
  public get cacheControlAge() {
    return this.getNumberAttribute('cache_control_age');
  }
  public set cacheControlAge(value: number) {
    this._cacheControlAge = value;
  }
  public resetCacheControlAge() {
    this._cacheControlAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlAgeInput() {
    return this._cacheControlAge;
  }

  // default_region_id - computed: false, optional: false, required: true
  private _defaultRegionId?: string; 
  public get defaultRegionId() {
    return this.getStringAttribute('default_region_id');
  }
  public set defaultRegionId(value: string) {
    this._defaultRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRegionIdInput() {
    return this._defaultRegionId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled_cdn - computed: false, optional: true, required: false
  private _enabledCdn?: boolean | cdktf.IResolvable; 
  public get enabledCdn() {
    return this.getBooleanAttribute('enabled_cdn');
  }
  public set enabledCdn(value: boolean | cdktf.IResolvable) {
    this._enabledCdn = value;
  }
  public resetEnabledCdn() {
    this._enabledCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledCdnInput() {
    return this._enabledCdn;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled?: boolean | cdktf.IResolvable; 
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }
  public set loggingEnabled(value: boolean | cdktf.IResolvable) {
    this._loggingEnabled = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled;
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

  // proposition_id - computed: false, optional: false, required: true
  private _propositionId?: string; 
  public get propositionId() {
    return this.getStringAttribute('proposition_id');
  }
  public set propositionId(value: string) {
    this._propositionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propositionIdInput() {
    return this._propositionId;
  }

  // replication_region_id - computed: false, optional: true, required: false
  private _replicationRegionId?: string; 
  public get replicationRegionId() {
    return this.getStringAttribute('replication_region_id');
  }
  public set replicationRegionId(value: string) {
    this._replicationRegionId = value;
  }
  public resetReplicationRegionId() {
    this._replicationRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRegionIdInput() {
    return this._replicationRegionId;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // versioning_enabled - computed: false, optional: true, required: false
  private _versioningEnabled?: boolean | cdktf.IResolvable; 
  public get versioningEnabled() {
    return this.getBooleanAttribute('versioning_enabled');
  }
  public set versioningEnabled(value: boolean | cdktf.IResolvable) {
    this._versioningEnabled = value;
  }
  public resetVersioningEnabled() {
    this._versioningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningEnabledInput() {
    return this._versioningEnabled;
  }

  // cors_configuration - computed: false, optional: true, required: false
  private _corsConfiguration = new ConnectMdmBucketCorsConfigurationList(this, "cors_configuration", true);
  public get corsConfiguration() {
    return this._corsConfiguration;
  }
  public putCorsConfiguration(value: ConnectMdmBucketCorsConfiguration[] | cdktf.IResolvable) {
    this._corsConfiguration.internalValue = value;
  }
  public resetCorsConfiguration() {
    this._corsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigurationInput() {
    return this._corsConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auditing_enabled: cdktf.booleanToTerraform(this._auditingEnabled),
      cache_control_age: cdktf.numberToTerraform(this._cacheControlAge),
      default_region_id: cdktf.stringToTerraform(this._defaultRegionId),
      description: cdktf.stringToTerraform(this._description),
      enabled_cdn: cdktf.booleanToTerraform(this._enabledCdn),
      id: cdktf.stringToTerraform(this._id),
      logging_enabled: cdktf.booleanToTerraform(this._loggingEnabled),
      name: cdktf.stringToTerraform(this._name),
      proposition_id: cdktf.stringToTerraform(this._propositionId),
      replication_region_id: cdktf.stringToTerraform(this._replicationRegionId),
      versioning_enabled: cdktf.booleanToTerraform(this._versioningEnabled),
      cors_configuration: cdktf.listMapper(connectMdmBucketCorsConfigurationToTerraform, true)(this._corsConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auditing_enabled: {
        value: cdktf.booleanToHclTerraform(this._auditingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cache_control_age: {
        value: cdktf.numberToHclTerraform(this._cacheControlAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_region_id: {
        value: cdktf.stringToHclTerraform(this._defaultRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_cdn: {
        value: cdktf.booleanToHclTerraform(this._enabledCdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._loggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposition_id: {
        value: cdktf.stringToHclTerraform(this._propositionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_region_id: {
        value: cdktf.stringToHclTerraform(this._replicationRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      versioning_enabled: {
        value: cdktf.booleanToHclTerraform(this._versioningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cors_configuration: {
        value: cdktf.listMapperHcl(connectMdmBucketCorsConfigurationToHclTerraform, true)(this._corsConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectMdmBucketCorsConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
