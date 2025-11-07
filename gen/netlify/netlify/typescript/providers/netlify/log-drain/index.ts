// https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogDrainConfig extends cdktf.TerraformMetaArguments {
  /**
  * One of datadog, newrelic, logflare, s3, splunkcloud, http, axiom, or azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#destination LogDrain#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#exclude_pii LogDrain#exclude_pii}
  */
  readonly excludePii: boolean | cdktf.IResolvable;
  /**
  * json or ndjson
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#format LogDrain#format}
  */
  readonly format?: string;
  /**
  * One or more of user_traffic, functions, edge_functions, waf_logs, and deploys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#log_types LogDrain#log_types}
  */
  readonly logTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#service_config LogDrain#service_config}
  */
  readonly serviceConfig: LogDrainServiceConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#site_id LogDrain#site_id}
  */
  readonly siteId: string;
}
export interface LogDrainServiceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#authorization_header LogDrain#authorization_header}
  */
  readonly authorizationHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#bucket_name LogDrain#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#bucket_region LogDrain#bucket_region}
  */
  readonly bucketRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#integration_name LogDrain#integration_name}
  */
  readonly integrationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#path LogDrain#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#tags LogDrain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#url LogDrain#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#verification_filename LogDrain#verification_filename}
  */
  readonly verificationFilename?: string;
}

export function logDrainServiceConfigToTerraform(struct?: LogDrainServiceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_header: cdktf.stringToTerraform(struct!.authorizationHeader),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_region: cdktf.stringToTerraform(struct!.bucketRegion),
    integration_name: cdktf.stringToTerraform(struct!.integrationName),
    path: cdktf.stringToTerraform(struct!.path),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    url: cdktf.stringToTerraform(struct!.url),
    verification_filename: cdktf.stringToTerraform(struct!.verificationFilename),
  }
}


export function logDrainServiceConfigToHclTerraform(struct?: LogDrainServiceConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_header: {
      value: cdktf.stringToHclTerraform(struct!.authorizationHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_region: {
      value: cdktf.stringToHclTerraform(struct!.bucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_name: {
      value: cdktf.stringToHclTerraform(struct!.integrationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification_filename: {
      value: cdktf.stringToHclTerraform(struct!.verificationFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogDrainServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogDrainServiceConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationHeader = this._authorizationHeader;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketRegion = this._bucketRegion;
    }
    if (this._integrationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationName = this._integrationName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._verificationFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationFilename = this._verificationFilename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogDrainServiceConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationHeader = undefined;
      this._bucketName = undefined;
      this._bucketRegion = undefined;
      this._integrationName = undefined;
      this._path = undefined;
      this._tags = undefined;
      this._url = undefined;
      this._verificationFilename = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationHeader = value.authorizationHeader;
      this._bucketName = value.bucketName;
      this._bucketRegion = value.bucketRegion;
      this._integrationName = value.integrationName;
      this._path = value.path;
      this._tags = value.tags;
      this._url = value.url;
      this._verificationFilename = value.verificationFilename;
    }
  }

  // authorization_header - computed: false, optional: true, required: false
  private _authorizationHeader?: string; 
  public get authorizationHeader() {
    return this.getStringAttribute('authorization_header');
  }
  public set authorizationHeader(value: string) {
    this._authorizationHeader = value;
  }
  public resetAuthorizationHeader() {
    this._authorizationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationHeaderInput() {
    return this._authorizationHeader;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_region - computed: false, optional: true, required: false
  private _bucketRegion?: string; 
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  public resetBucketRegion() {
    this._bucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion;
  }

  // integration_name - computed: false, optional: true, required: false
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  public resetIntegrationName() {
    this._integrationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // verification_filename - computed: false, optional: true, required: false
  private _verificationFilename?: string; 
  public get verificationFilename() {
    return this.getStringAttribute('verification_filename');
  }
  public set verificationFilename(value: string) {
    this._verificationFilename = value;
  }
  public resetVerificationFilename() {
    this._verificationFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationFilenameInput() {
    return this._verificationFilename;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain netlify_log_drain}
*/
export class LogDrain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_log_drain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogDrain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogDrain to import
  * @param importFromId The id of the existing LogDrain that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogDrain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_log_drain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/log_drain netlify_log_drain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogDrainConfig
  */
  public constructor(scope: Construct, id: string, config: LogDrainConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_log_drain',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destination = config.destination;
    this._excludePii = config.excludePii;
    this._format = config.format;
    this._logTypes = config.logTypes;
    this._serviceConfig.internalValue = config.serviceConfig;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // exclude_pii - computed: false, optional: false, required: true
  private _excludePii?: boolean | cdktf.IResolvable; 
  public get excludePii() {
    return this.getBooleanAttribute('exclude_pii');
  }
  public set excludePii(value: boolean | cdktf.IResolvable) {
    this._excludePii = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePiiInput() {
    return this._excludePii;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // log_types - computed: false, optional: false, required: true
  private _logTypes?: string[]; 
  public get logTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('log_types'));
  }
  public set logTypes(value: string[]) {
    this._logTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }

  // service_config - computed: false, optional: false, required: true
  private _serviceConfig = new LogDrainServiceConfigOutputReference(this, "service_config");
  public get serviceConfig() {
    return this._serviceConfig;
  }
  public putServiceConfig(value: LogDrainServiceConfig) {
    this._serviceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigInput() {
    return this._serviceConfig.internalValue;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktf.stringToTerraform(this._destination),
      exclude_pii: cdktf.booleanToTerraform(this._excludePii),
      format: cdktf.stringToTerraform(this._format),
      log_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logTypes),
      service_config: logDrainServiceConfigToTerraform(this._serviceConfig.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_pii: {
        value: cdktf.booleanToHclTerraform(this._excludePii),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_config: {
        value: logDrainServiceConfigToHclTerraform(this._serviceConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogDrainServiceConfig",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
