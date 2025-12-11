// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domains of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_certificate#bind_domains TseCngwCertificate#bind_domains}
  */
  readonly bindDomains: string[];
  /**
  * Certificate ID of ssl platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_certificate#cert_id TseCngwCertificate#cert_id}
  */
  readonly certId: string;
  /**
  * Gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_certificate#gateway_id TseCngwCertificate#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_certificate#id TseCngwCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Certificate name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_certificate#name TseCngwCertificate#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_certificate tencentcloud_tse_cngw_certificate}
*/
export class TseCngwCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwCertificate to import
  * @param importFromId The id of the existing TseCngwCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_certificate tencentcloud_tse_cngw_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_certificate',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindDomains = config.bindDomains;
    this._certId = config.certId;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_domains - computed: false, optional: false, required: true
  private _bindDomains?: string[]; 
  public get bindDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('bind_domains'));
  }
  public set bindDomains(value: string[]) {
    this._bindDomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDomainsInput() {
    return this._bindDomains;
  }

  // cert_id - computed: false, optional: false, required: true
  private _certId?: string; 
  public get certId() {
    return this.getStringAttribute('cert_id');
  }
  public set certId(value: string) {
    this._certId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdInput() {
    return this._certId;
  }

  // crt - computed: true, optional: false, required: false
  public get crt() {
    return this.getStringAttribute('crt');
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bind_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bindDomains),
      cert_id: cdktf.stringToTerraform(this._certId),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bind_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bindDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cert_id: {
        value: cdktf.stringToHclTerraform(this._certId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
