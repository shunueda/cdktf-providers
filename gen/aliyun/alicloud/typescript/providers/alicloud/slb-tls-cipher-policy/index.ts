// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/slb_tls_cipher_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTlsCipherPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/slb_tls_cipher_policy#ciphers SlbTlsCipherPolicy#ciphers}
  */
  readonly ciphers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/slb_tls_cipher_policy#id SlbTlsCipherPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/slb_tls_cipher_policy#tls_cipher_policy_name SlbTlsCipherPolicy#tls_cipher_policy_name}
  */
  readonly tlsCipherPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/slb_tls_cipher_policy#tls_versions SlbTlsCipherPolicy#tls_versions}
  */
  readonly tlsVersions: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/slb_tls_cipher_policy alicloud_slb_tls_cipher_policy}
*/
export class SlbTlsCipherPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_slb_tls_cipher_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTlsCipherPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTlsCipherPolicy to import
  * @param importFromId The id of the existing SlbTlsCipherPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/slb_tls_cipher_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTlsCipherPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_slb_tls_cipher_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/slb_tls_cipher_policy alicloud_slb_tls_cipher_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTlsCipherPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTlsCipherPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_slb_tls_cipher_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ciphers = config.ciphers;
    this._id = config.id;
    this._tlsCipherPolicyName = config.tlsCipherPolicyName;
    this._tlsVersions = config.tlsVersions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphers - computed: false, optional: false, required: true
  private _ciphers?: string[]; 
  public get ciphers() {
    return this.getListAttribute('ciphers');
  }
  public set ciphers(value: string[]) {
    this._ciphers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tls_cipher_policy_name - computed: false, optional: false, required: true
  private _tlsCipherPolicyName?: string; 
  public get tlsCipherPolicyName() {
    return this.getStringAttribute('tls_cipher_policy_name');
  }
  public set tlsCipherPolicyName(value: string) {
    this._tlsCipherPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherPolicyNameInput() {
    return this._tlsCipherPolicyName;
  }

  // tls_versions - computed: false, optional: false, required: true
  private _tlsVersions?: string[]; 
  public get tlsVersions() {
    return this.getListAttribute('tls_versions');
  }
  public set tlsVersions(value: string[]) {
    this._tlsVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionsInput() {
    return this._tlsVersions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ciphers),
      id: cdktf.stringToTerraform(this._id),
      tls_cipher_policy_name: cdktf.stringToTerraform(this._tlsCipherPolicyName),
      tls_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsVersions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ciphers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ciphers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_cipher_policy_name: {
        value: cdktf.stringToHclTerraform(this._tlsCipherPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
