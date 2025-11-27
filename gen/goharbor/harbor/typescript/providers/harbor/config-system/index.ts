// https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#audit_log_forward_endpoint ConfigSystem#audit_log_forward_endpoint}
  */
  readonly auditLogForwardEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#id ConfigSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#project_creation_restriction ConfigSystem#project_creation_restriction}
  */
  readonly projectCreationRestriction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#read_only ConfigSystem#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#robot_name_prefix ConfigSystem#robot_name_prefix}
  */
  readonly robotNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#robot_token_expiration ConfigSystem#robot_token_expiration}
  */
  readonly robotTokenExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#scanner_skip_update_pulltime ConfigSystem#scanner_skip_update_pulltime}
  */
  readonly scannerSkipUpdatePulltime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#skip_audit_log_database ConfigSystem#skip_audit_log_database}
  */
  readonly skipAuditLogDatabase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#storage_per_project ConfigSystem#storage_per_project}
  */
  readonly storagePerProject?: number;
  /**
  * banner_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#banner_message ConfigSystem#banner_message}
  */
  readonly bannerMessage?: ConfigSystemBannerMessage;
}
export interface ConfigSystemBannerMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#closable ConfigSystem#closable}
  */
  readonly closable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#from_date ConfigSystem#from_date}
  */
  readonly fromDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#message ConfigSystem#message}
  */
  readonly message: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#to_date ConfigSystem#to_date}
  */
  readonly toDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#type ConfigSystem#type}
  */
  readonly type?: string;
}

export function configSystemBannerMessageToTerraform(struct?: ConfigSystemBannerMessageOutputReference | ConfigSystemBannerMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    closable: cdktf.booleanToTerraform(struct!.closable),
    from_date: cdktf.stringToTerraform(struct!.fromDate),
    message: cdktf.stringToTerraform(struct!.message),
    to_date: cdktf.stringToTerraform(struct!.toDate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function configSystemBannerMessageToHclTerraform(struct?: ConfigSystemBannerMessageOutputReference | ConfigSystemBannerMessage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    closable: {
      value: cdktf.booleanToHclTerraform(struct!.closable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_date: {
      value: cdktf.stringToHclTerraform(struct!.fromDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_date: {
      value: cdktf.stringToHclTerraform(struct!.toDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigSystemBannerMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigSystemBannerMessage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._closable !== undefined) {
      hasAnyValues = true;
      internalValueResult.closable = this._closable;
    }
    if (this._fromDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromDate = this._fromDate;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._toDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.toDate = this._toDate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigSystemBannerMessage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._closable = undefined;
      this._fromDate = undefined;
      this._message = undefined;
      this._toDate = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._closable = value.closable;
      this._fromDate = value.fromDate;
      this._message = value.message;
      this._toDate = value.toDate;
      this._type = value.type;
    }
  }

  // closable - computed: false, optional: true, required: false
  private _closable?: boolean | cdktf.IResolvable; 
  public get closable() {
    return this.getBooleanAttribute('closable');
  }
  public set closable(value: boolean | cdktf.IResolvable) {
    this._closable = value;
  }
  public resetClosable() {
    this._closable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closableInput() {
    return this._closable;
  }

  // from_date - computed: false, optional: true, required: false
  private _fromDate?: string; 
  public get fromDate() {
    return this.getStringAttribute('from_date');
  }
  public set fromDate(value: string) {
    this._fromDate = value;
  }
  public resetFromDate() {
    this._fromDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromDateInput() {
    return this._fromDate;
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // to_date - computed: false, optional: true, required: false
  private _toDate?: string; 
  public get toDate() {
    return this.getStringAttribute('to_date');
  }
  public set toDate(value: string) {
    this._toDate = value;
  }
  public resetToDate() {
    this._toDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toDateInput() {
    return this._toDate;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system harbor_config_system}
*/
export class ConfigSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_config_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigSystem to import
  * @param importFromId The id of the existing ConfigSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_config_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/config_system harbor_config_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfigSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'harbor_config_system',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.3',
        providerVersionConstraint: '3.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditLogForwardEndpoint = config.auditLogForwardEndpoint;
    this._id = config.id;
    this._projectCreationRestriction = config.projectCreationRestriction;
    this._readOnly = config.readOnly;
    this._robotNamePrefix = config.robotNamePrefix;
    this._robotTokenExpiration = config.robotTokenExpiration;
    this._scannerSkipUpdatePulltime = config.scannerSkipUpdatePulltime;
    this._skipAuditLogDatabase = config.skipAuditLogDatabase;
    this._storagePerProject = config.storagePerProject;
    this._bannerMessage.internalValue = config.bannerMessage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_log_forward_endpoint - computed: false, optional: true, required: false
  private _auditLogForwardEndpoint?: string; 
  public get auditLogForwardEndpoint() {
    return this.getStringAttribute('audit_log_forward_endpoint');
  }
  public set auditLogForwardEndpoint(value: string) {
    this._auditLogForwardEndpoint = value;
  }
  public resetAuditLogForwardEndpoint() {
    this._auditLogForwardEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogForwardEndpointInput() {
    return this._auditLogForwardEndpoint;
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

  // project_creation_restriction - computed: false, optional: true, required: false
  private _projectCreationRestriction?: string; 
  public get projectCreationRestriction() {
    return this.getStringAttribute('project_creation_restriction');
  }
  public set projectCreationRestriction(value: string) {
    this._projectCreationRestriction = value;
  }
  public resetProjectCreationRestriction() {
    this._projectCreationRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectCreationRestrictionInput() {
    return this._projectCreationRestriction;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // robot_name_prefix - computed: false, optional: true, required: false
  private _robotNamePrefix?: string; 
  public get robotNamePrefix() {
    return this.getStringAttribute('robot_name_prefix');
  }
  public set robotNamePrefix(value: string) {
    this._robotNamePrefix = value;
  }
  public resetRobotNamePrefix() {
    this._robotNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get robotNamePrefixInput() {
    return this._robotNamePrefix;
  }

  // robot_token_expiration - computed: false, optional: true, required: false
  private _robotTokenExpiration?: number; 
  public get robotTokenExpiration() {
    return this.getNumberAttribute('robot_token_expiration');
  }
  public set robotTokenExpiration(value: number) {
    this._robotTokenExpiration = value;
  }
  public resetRobotTokenExpiration() {
    this._robotTokenExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get robotTokenExpirationInput() {
    return this._robotTokenExpiration;
  }

  // scanner_skip_update_pulltime - computed: false, optional: true, required: false
  private _scannerSkipUpdatePulltime?: boolean | cdktf.IResolvable; 
  public get scannerSkipUpdatePulltime() {
    return this.getBooleanAttribute('scanner_skip_update_pulltime');
  }
  public set scannerSkipUpdatePulltime(value: boolean | cdktf.IResolvable) {
    this._scannerSkipUpdatePulltime = value;
  }
  public resetScannerSkipUpdatePulltime() {
    this._scannerSkipUpdatePulltime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scannerSkipUpdatePulltimeInput() {
    return this._scannerSkipUpdatePulltime;
  }

  // skip_audit_log_database - computed: false, optional: true, required: false
  private _skipAuditLogDatabase?: boolean | cdktf.IResolvable; 
  public get skipAuditLogDatabase() {
    return this.getBooleanAttribute('skip_audit_log_database');
  }
  public set skipAuditLogDatabase(value: boolean | cdktf.IResolvable) {
    this._skipAuditLogDatabase = value;
  }
  public resetSkipAuditLogDatabase() {
    this._skipAuditLogDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAuditLogDatabaseInput() {
    return this._skipAuditLogDatabase;
  }

  // storage_per_project - computed: false, optional: true, required: false
  private _storagePerProject?: number; 
  public get storagePerProject() {
    return this.getNumberAttribute('storage_per_project');
  }
  public set storagePerProject(value: number) {
    this._storagePerProject = value;
  }
  public resetStoragePerProject() {
    this._storagePerProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePerProjectInput() {
    return this._storagePerProject;
  }

  // banner_message - computed: false, optional: true, required: false
  private _bannerMessage = new ConfigSystemBannerMessageOutputReference(this, "banner_message");
  public get bannerMessage() {
    return this._bannerMessage;
  }
  public putBannerMessage(value: ConfigSystemBannerMessage) {
    this._bannerMessage.internalValue = value;
  }
  public resetBannerMessage() {
    this._bannerMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerMessageInput() {
    return this._bannerMessage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_log_forward_endpoint: cdktf.stringToTerraform(this._auditLogForwardEndpoint),
      id: cdktf.stringToTerraform(this._id),
      project_creation_restriction: cdktf.stringToTerraform(this._projectCreationRestriction),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      robot_name_prefix: cdktf.stringToTerraform(this._robotNamePrefix),
      robot_token_expiration: cdktf.numberToTerraform(this._robotTokenExpiration),
      scanner_skip_update_pulltime: cdktf.booleanToTerraform(this._scannerSkipUpdatePulltime),
      skip_audit_log_database: cdktf.booleanToTerraform(this._skipAuditLogDatabase),
      storage_per_project: cdktf.numberToTerraform(this._storagePerProject),
      banner_message: configSystemBannerMessageToTerraform(this._bannerMessage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_log_forward_endpoint: {
        value: cdktf.stringToHclTerraform(this._auditLogForwardEndpoint),
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
      project_creation_restriction: {
        value: cdktf.stringToHclTerraform(this._projectCreationRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      robot_name_prefix: {
        value: cdktf.stringToHclTerraform(this._robotNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      robot_token_expiration: {
        value: cdktf.numberToHclTerraform(this._robotTokenExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scanner_skip_update_pulltime: {
        value: cdktf.booleanToHclTerraform(this._scannerSkipUpdatePulltime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_audit_log_database: {
        value: cdktf.booleanToHclTerraform(this._skipAuditLogDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_per_project: {
        value: cdktf.numberToHclTerraform(this._storagePerProject),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      banner_message: {
        value: configSystemBannerMessageToHclTerraform(this._bannerMessage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigSystemBannerMessageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
