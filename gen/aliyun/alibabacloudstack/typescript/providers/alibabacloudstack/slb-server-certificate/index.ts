// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_server_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbServerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_server_certificate#id SlbServerCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_server_certificate#name SlbServerCertificate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_server_certificate#private_key SlbServerCertificate#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_server_certificate#server_certificate SlbServerCertificate#server_certificate}
  */
  readonly serverCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_server_certificate#server_certificate_name SlbServerCertificate#server_certificate_name}
  */
  readonly serverCertificateName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_server_certificate alibabacloudstack_slb_server_certificate}
*/
export class SlbServerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_slb_server_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbServerCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbServerCertificate to import
  * @param importFromId The id of the existing SlbServerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_server_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbServerCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_slb_server_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/slb_server_certificate alibabacloudstack_slb_server_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbServerCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SlbServerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_slb_server_certificate',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._serverCertificate = config.serverCertificate;
    this._serverCertificateName = config.serverCertificateName;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate?: string; 
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }
  public set serverCertificate(value: string) {
    this._serverCertificate = value;
  }
  public resetServerCertificate() {
    this._serverCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate;
  }

  // server_certificate_name - computed: true, optional: true, required: false
  private _serverCertificateName?: string; 
  public get serverCertificateName() {
    return this.getStringAttribute('server_certificate_name');
  }
  public set serverCertificateName(value: string) {
    this._serverCertificateName = value;
  }
  public resetServerCertificateName() {
    this._serverCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateNameInput() {
    return this._serverCertificateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      server_certificate: cdktf.stringToTerraform(this._serverCertificate),
      server_certificate_name: cdktf.stringToTerraform(this._serverCertificateName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate: {
        value: cdktf.stringToHclTerraform(this._serverCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate_name: {
        value: cdktf.stringToHclTerraform(this._serverCertificateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
