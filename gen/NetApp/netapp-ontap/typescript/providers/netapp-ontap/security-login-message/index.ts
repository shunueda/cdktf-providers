// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityLoginMessageConfig extends cdktf.TerraformMetaArguments {
  /**
  * SecurityLoginMessage login banner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message#banner SecurityLoginMessage#banner}
  */
  readonly banner?: string;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message#cx_profile_name SecurityLoginMessage#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * SecurityLoginMessage the message of the day (MOTD). This message appears just before the clustershell prompt after a successful login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message#message SecurityLoginMessage#message}
  */
  readonly message?: string;
  /**
  * SecurityLoginMessage network scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message#scope SecurityLoginMessage#scope}
  */
  readonly scope?: string;
  /**
  * Specifies whether to show a cluster-level message before the SVM message when logging in as an SVM administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message#show_cluster_message SecurityLoginMessage#show_cluster_message}
  */
  readonly showClusterMessage?: boolean | cdktf.IResolvable;
  /**
  * SecurityLoginMessage svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message#svm_name SecurityLoginMessage#svm_name}
  */
  readonly svmName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message netapp-ontap_security_login_message}
*/
export class SecurityLoginMessage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_security_login_message";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityLoginMessage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityLoginMessage to import
  * @param importFromId The id of the existing SecurityLoginMessage that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityLoginMessage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_security_login_message", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/security_login_message netapp-ontap_security_login_message} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityLoginMessageConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityLoginMessageConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_security_login_message',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._banner = config.banner;
    this._cxProfileName = config.cxProfileName;
    this._message = config.message;
    this._scope = config.scope;
    this._showClusterMessage = config.showClusterMessage;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // banner - computed: true, optional: true, required: false
  private _banner?: string; 
  public get banner() {
    return this.getStringAttribute('banner');
  }
  public set banner(value: string) {
    this._banner = value;
  }
  public resetBanner() {
    this._banner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerInput() {
    return this._banner;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // show_cluster_message - computed: true, optional: true, required: false
  private _showClusterMessage?: boolean | cdktf.IResolvable; 
  public get showClusterMessage() {
    return this.getBooleanAttribute('show_cluster_message');
  }
  public set showClusterMessage(value: boolean | cdktf.IResolvable) {
    this._showClusterMessage = value;
  }
  public resetShowClusterMessage() {
    this._showClusterMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showClusterMessageInput() {
    return this._showClusterMessage;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      banner: cdktf.stringToTerraform(this._banner),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      message: cdktf.stringToTerraform(this._message),
      scope: cdktf.stringToTerraform(this._scope),
      show_cluster_message: cdktf.booleanToTerraform(this._showClusterMessage),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      banner: {
        value: cdktf.stringToHclTerraform(this._banner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_cluster_message: {
        value: cdktf.booleanToHclTerraform(this._showClusterMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
