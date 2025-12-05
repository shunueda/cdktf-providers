// https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogExportConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Either the AWS Role ARN that identifies a role that the cluster account can assume to write to CloudWatch or the GCP Project ID that the cluster service account has permissions to write to for cloud logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#auth_principal LogExportConfig#auth_principal}
  */
  readonly authPrincipal: string;
  /**
  * The external ID to use when assuming the AWS role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#aws_external_id LogExportConfig#aws_external_id}
  */
  readonly awsExternalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#groups LogExportConfig#groups}
  */
  readonly groups?: LogExportConfigGroups[] | cdktf.IResolvable;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#id LogExportConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * An identifier for the logs in the customer's log sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#log_name LogExportConfig#log_name}
  */
  readonly logName: string;
  /**
  * Controls what CRDB channels do not get exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#omitted_channels LogExportConfig#omitted_channels}
  */
  readonly omittedChannels?: string[];
  /**
  * Controls whether logs are redacted before forwarding to customer sinks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#redact LogExportConfig#redact}
  */
  readonly redact?: boolean | cdktf.IResolvable;
  /**
  * Controls whether all logs are sent to a specific region in the customer sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#region LogExportConfig#region}
  */
  readonly region?: string;
  /**
  * The cloud selection being exported to along with the cloud logging platform. Possible values are:
  *   * AWS_CLOUDWATCH
  *   * GCP_CLOUD_LOGGING
  *   * AZURE_LOG_ANALYTICS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#type LogExportConfig#type}
  */
  readonly type: string;
}
export interface LogExportConfigGroups {
  /**
  * A list of CockroachDB log channels to include in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#channels LogExportConfig#channels}
  */
  readonly channels: string[];
  /**
  * The name of the group, reflected in the log sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#log_name LogExportConfig#log_name}
  */
  readonly logName: string;
  /**
  * The minimum log level to filter to this log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#min_level LogExportConfig#min_level}
  */
  readonly minLevel?: string;
  /**
  * Governs whether this log group should aggregate redacted logs if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#redact LogExportConfig#redact}
  */
  readonly redact?: boolean | cdktf.IResolvable;
}

export function logExportConfigGroupsToTerraform(struct?: LogExportConfigGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    log_name: cdktf.stringToTerraform(struct!.logName),
    min_level: cdktf.stringToTerraform(struct!.minLevel),
    redact: cdktf.booleanToTerraform(struct!.redact),
  }
}


export function logExportConfigGroupsToHclTerraform(struct?: LogExportConfigGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_name: {
      value: cdktf.stringToHclTerraform(struct!.logName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_level: {
      value: cdktf.stringToHclTerraform(struct!.minLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redact: {
      value: cdktf.booleanToHclTerraform(struct!.redact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogExportConfigGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogExportConfigGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._logName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logName = this._logName;
    }
    if (this._minLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLevel = this._minLevel;
    }
    if (this._redact !== undefined) {
      hasAnyValues = true;
      internalValueResult.redact = this._redact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogExportConfigGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channels = undefined;
      this._logName = undefined;
      this._minLevel = undefined;
      this._redact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channels = value.channels;
      this._logName = value.logName;
      this._minLevel = value.minLevel;
      this._redact = value.redact;
    }
  }

  // channels - computed: false, optional: false, required: true
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // log_name - computed: false, optional: false, required: true
  private _logName?: string; 
  public get logName() {
    return this.getStringAttribute('log_name');
  }
  public set logName(value: string) {
    this._logName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logNameInput() {
    return this._logName;
  }

  // min_level - computed: false, optional: true, required: false
  private _minLevel?: string; 
  public get minLevel() {
    return this.getStringAttribute('min_level');
  }
  public set minLevel(value: string) {
    this._minLevel = value;
  }
  public resetMinLevel() {
    this._minLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLevelInput() {
    return this._minLevel;
  }

  // redact - computed: false, optional: true, required: false
  private _redact?: boolean | cdktf.IResolvable; 
  public get redact() {
    return this.getBooleanAttribute('redact');
  }
  public set redact(value: boolean | cdktf.IResolvable) {
    this._redact = value;
  }
  public resetRedact() {
    this._redact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact;
  }
}

export class LogExportConfigGroupsList extends cdktf.ComplexList {
  public internalValue? : LogExportConfigGroups[] | cdktf.IResolvable

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
  public get(index: number): LogExportConfigGroupsOutputReference {
    return new LogExportConfigGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config cockroach_log_export_config}
*/
export class LogExportConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_log_export_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogExportConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogExportConfig to import
  * @param importFromId The id of the existing LogExportConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogExportConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_log_export_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.17.0/docs/resources/log_export_config cockroach_log_export_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogExportConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LogExportConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_log_export_config',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authPrincipal = config.authPrincipal;
    this._awsExternalId = config.awsExternalId;
    this._groups.internalValue = config.groups;
    this._id = config.id;
    this._logName = config.logName;
    this._omittedChannels = config.omittedChannels;
    this._redact = config.redact;
    this._region = config.region;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_principal - computed: false, optional: false, required: true
  private _authPrincipal?: string; 
  public get authPrincipal() {
    return this.getStringAttribute('auth_principal');
  }
  public set authPrincipal(value: string) {
    this._authPrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authPrincipalInput() {
    return this._authPrincipal;
  }

  // aws_external_id - computed: false, optional: true, required: false
  private _awsExternalId?: string; 
  public get awsExternalId() {
    return this.getStringAttribute('aws_external_id');
  }
  public set awsExternalId(value: string) {
    this._awsExternalId = value;
  }
  public resetAwsExternalId() {
    this._awsExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsExternalIdInput() {
    return this._awsExternalId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new LogExportConfigGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: LogExportConfigGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_name - computed: false, optional: false, required: true
  private _logName?: string; 
  public get logName() {
    return this.getStringAttribute('log_name');
  }
  public set logName(value: string) {
    this._logName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logNameInput() {
    return this._logName;
  }

  // omitted_channels - computed: false, optional: true, required: false
  private _omittedChannels?: string[]; 
  public get omittedChannels() {
    return this.getListAttribute('omitted_channels');
  }
  public set omittedChannels(value: string[]) {
    this._omittedChannels = value;
  }
  public resetOmittedChannels() {
    this._omittedChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omittedChannelsInput() {
    return this._omittedChannels;
  }

  // redact - computed: false, optional: true, required: false
  private _redact?: boolean | cdktf.IResolvable; 
  public get redact() {
    return this.getBooleanAttribute('redact');
  }
  public set redact(value: boolean | cdktf.IResolvable) {
    this._redact = value;
  }
  public resetRedact() {
    this._redact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact;
  }

  // region - computed: false, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_message - computed: true, optional: false, required: false
  public get userMessage() {
    return this.getStringAttribute('user_message');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_principal: cdktf.stringToTerraform(this._authPrincipal),
      aws_external_id: cdktf.stringToTerraform(this._awsExternalId),
      groups: cdktf.listMapper(logExportConfigGroupsToTerraform, false)(this._groups.internalValue),
      id: cdktf.stringToTerraform(this._id),
      log_name: cdktf.stringToTerraform(this._logName),
      omitted_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._omittedChannels),
      redact: cdktf.booleanToTerraform(this._redact),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_principal: {
        value: cdktf.stringToHclTerraform(this._authPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_external_id: {
        value: cdktf.stringToHclTerraform(this._awsExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(logExportConfigGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogExportConfigGroupsList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_name: {
        value: cdktf.stringToHclTerraform(this._logName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omitted_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._omittedChannels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      redact: {
        value: cdktf.booleanToHclTerraform(this._redact),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
