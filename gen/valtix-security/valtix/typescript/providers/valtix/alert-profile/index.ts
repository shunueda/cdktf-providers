// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#bucket_name AlertProfile#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#bucket_prefix AlertProfile#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#csp_acct_name AlertProfile#csp_acct_name}
  */
  readonly cspAcctName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#description AlertProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#id AlertProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#index AlertProfile#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#integration_key AlertProfile#integration_key}
  */
  readonly integrationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#integration_url AlertProfile#integration_url}
  */
  readonly integrationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#log_analytics_log_type AlertProfile#log_analytics_log_type}
  */
  readonly logAnalyticsLogType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#log_analytics_workspace_id AlertProfile#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#name AlertProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#skip_verify AlertProfile#skip_verify}
  */
  readonly skipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#type AlertProfile#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile valtix_alert_profile}
*/
export class AlertProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_alert_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertProfile to import
  * @param importFromId The id of the existing AlertProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_alert_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/alert_profile valtix_alert_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AlertProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_alert_profile',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._bucketPrefix = config.bucketPrefix;
    this._cspAcctName = config.cspAcctName;
    this._description = config.description;
    this._id = config.id;
    this._index = config.index;
    this._integrationKey = config.integrationKey;
    this._integrationUrl = config.integrationUrl;
    this._logAnalyticsLogType = config.logAnalyticsLogType;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._skipVerify = config.skipVerify;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // csp_acct_name - computed: false, optional: true, required: false
  private _cspAcctName?: string; 
  public get cspAcctName() {
    return this.getStringAttribute('csp_acct_name');
  }
  public set cspAcctName(value: string) {
    this._cspAcctName = value;
  }
  public resetCspAcctName() {
    this._cspAcctName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAcctNameInput() {
    return this._cspAcctName;
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

  // index - computed: false, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // integration_key - computed: false, optional: true, required: false
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  public resetIntegrationKey() {
    this._integrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // integration_url - computed: false, optional: true, required: false
  private _integrationUrl?: string; 
  public get integrationUrl() {
    return this.getStringAttribute('integration_url');
  }
  public set integrationUrl(value: string) {
    this._integrationUrl = value;
  }
  public resetIntegrationUrl() {
    this._integrationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationUrlInput() {
    return this._integrationUrl;
  }

  // log_analytics_log_type - computed: false, optional: true, required: false
  private _logAnalyticsLogType?: string; 
  public get logAnalyticsLogType() {
    return this.getStringAttribute('log_analytics_log_type');
  }
  public set logAnalyticsLogType(value: string) {
    this._logAnalyticsLogType = value;
  }
  public resetLogAnalyticsLogType() {
    this._logAnalyticsLogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsLogTypeInput() {
    return this._logAnalyticsLogType;
  }

  // log_analytics_workspace_id - computed: false, optional: true, required: false
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  public resetLogAnalyticsWorkspaceId() {
    this._logAnalyticsWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // skip_verify - computed: false, optional: true, required: false
  private _skipVerify?: boolean | cdktf.IResolvable; 
  public get skipVerify() {
    return this.getBooleanAttribute('skip_verify');
  }
  public set skipVerify(value: boolean | cdktf.IResolvable) {
    this._skipVerify = value;
  }
  public resetSkipVerify() {
    this._skipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyInput() {
    return this._skipVerify;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      csp_acct_name: cdktf.stringToTerraform(this._cspAcctName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.stringToTerraform(this._index),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      integration_url: cdktf.stringToTerraform(this._integrationUrl),
      log_analytics_log_type: cdktf.stringToTerraform(this._logAnalyticsLogType),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      skip_verify: cdktf.booleanToTerraform(this._skipVerify),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._bucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_acct_name: {
        value: cdktf.stringToHclTerraform(this._cspAcctName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index: {
        value: cdktf.stringToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_url: {
        value: cdktf.stringToHclTerraform(this._integrationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_analytics_log_type: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsLogType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_analytics_workspace_id: {
        value: cdktf.stringToHclTerraform(this._logAnalyticsWorkspaceId),
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
      skip_verify: {
        value: cdktf.booleanToHclTerraform(this._skipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
