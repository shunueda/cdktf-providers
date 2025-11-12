// https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/mail_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MailServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/mail_server#dns_asset_id MailServer#dns_asset_id}
  */
  readonly dnsAssetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/mail_server#id MailServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/mail_server#nic_uid MailServer#nic_uid}
  */
  readonly nicUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/mail_server#topology_uid MailServer#topology_uid}
  */
  readonly topologyUid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/mail_server dcloud_mail_server}
*/
export class MailServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcloud_mail_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MailServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MailServer to import
  * @param importFromId The id of the existing MailServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/mail_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MailServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcloud_mail_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/dcloud/0.1.29/docs/resources/mail_server dcloud_mail_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MailServerConfig
  */
  public constructor(scope: Construct, id: string, config: MailServerConfig) {
    super(scope, id, {
      terraformResourceType: 'dcloud_mail_server',
      terraformGeneratorMetadata: {
        providerName: 'dcloud',
        providerVersion: '0.1.29',
        providerVersionConstraint: '0.1.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsAssetId = config.dnsAssetId;
    this._id = config.id;
    this._nicUid = config.nicUid;
    this._topologyUid = config.topologyUid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_asset_id - computed: false, optional: false, required: true
  private _dnsAssetId?: string; 
  public get dnsAssetId() {
    return this.getStringAttribute('dns_asset_id');
  }
  public set dnsAssetId(value: string) {
    this._dnsAssetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAssetIdInput() {
    return this._dnsAssetId;
  }

  // dns_asset_name - computed: true, optional: false, required: false
  public get dnsAssetName() {
    return this.getStringAttribute('dns_asset_name');
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

  // nic_uid - computed: false, optional: false, required: true
  private _nicUid?: string; 
  public get nicUid() {
    return this.getStringAttribute('nic_uid');
  }
  public set nicUid(value: string) {
    this._nicUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicUidInput() {
    return this._nicUid;
  }

  // topology_uid - computed: false, optional: false, required: true
  private _topologyUid?: string; 
  public get topologyUid() {
    return this.getStringAttribute('topology_uid');
  }
  public set topologyUid(value: string) {
    this._topologyUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyUidInput() {
    return this._topologyUid;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_asset_id: cdktf.stringToTerraform(this._dnsAssetId),
      id: cdktf.stringToTerraform(this._id),
      nic_uid: cdktf.stringToTerraform(this._nicUid),
      topology_uid: cdktf.stringToTerraform(this._topologyUid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_asset_id: {
        value: cdktf.stringToHclTerraform(this._dnsAssetId),
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
      nic_uid: {
        value: cdktf.stringToHclTerraform(this._nicUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_uid: {
        value: cdktf.stringToHclTerraform(this._topologyUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
