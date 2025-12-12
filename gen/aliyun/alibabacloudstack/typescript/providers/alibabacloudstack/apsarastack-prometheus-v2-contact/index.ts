// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackPrometheusV2ContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_contact#id ApsarastackPrometheusV2Contact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_contact#mail ApsarastackPrometheusV2Contact#mail}
  */
  readonly mail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_contact#mobile ApsarastackPrometheusV2Contact#mobile}
  */
  readonly mobile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_contact#username ApsarastackPrometheusV2Contact#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_contact apsarastack_prometheus_v2_contact}
*/
export class ApsarastackPrometheusV2Contact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_prometheus_v2_contact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackPrometheusV2Contact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackPrometheusV2Contact to import
  * @param importFromId The id of the existing ApsarastackPrometheusV2Contact that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_contact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackPrometheusV2Contact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_prometheus_v2_contact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_prometheus_v2_contact apsarastack_prometheus_v2_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackPrometheusV2ContactConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackPrometheusV2ContactConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_prometheus_v2_contact',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._mail = config.mail;
    this._mobile = config.mobile;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mail - computed: false, optional: false, required: true
  private _mail?: string; 
  public get mail() {
    return this.getStringAttribute('mail');
  }
  public set mail(value: string) {
    this._mail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mailInput() {
    return this._mail;
  }

  // mobile - computed: false, optional: false, required: true
  private _mobile?: string; 
  public get mobile() {
    return this.getStringAttribute('mobile');
  }
  public set mobile(value: string) {
    this._mobile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mail: cdktf.stringToTerraform(this._mail),
      mobile: cdktf.stringToTerraform(this._mobile),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mail: {
        value: cdktf.stringToHclTerraform(this._mail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobile: {
        value: cdktf.stringToHclTerraform(this._mobile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
