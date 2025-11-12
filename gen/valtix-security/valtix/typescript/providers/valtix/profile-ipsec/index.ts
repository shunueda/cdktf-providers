// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileIpsecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#description ProfileIpsec#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#id ProfileIpsec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#ike_dhgroup ProfileIpsec#ike_dhgroup}
  */
  readonly ikeDhgroup: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#ike_encryption ProfileIpsec#ike_encryption}
  */
  readonly ikeEncryption: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#ike_integrity ProfileIpsec#ike_integrity}
  */
  readonly ikeIntegrity: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#ike_prf ProfileIpsec#ike_prf}
  */
  readonly ikePrf: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#ike_version ProfileIpsec#ike_version}
  */
  readonly ikeVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#ipsec_encryption ProfileIpsec#ipsec_encryption}
  */
  readonly ipsecEncryption: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#ipsec_integrity ProfileIpsec#ipsec_integrity}
  */
  readonly ipsecIntegrity: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#ipsec_mode ProfileIpsec#ipsec_mode}
  */
  readonly ipsecMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#lifetime_seconds ProfileIpsec#lifetime_seconds}
  */
  readonly lifetimeSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#name ProfileIpsec#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec valtix_profile_ipsec}
*/
export class ProfileIpsec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_profile_ipsec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileIpsec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileIpsec to import
  * @param importFromId The id of the existing ProfileIpsec that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileIpsec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_profile_ipsec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_ipsec valtix_profile_ipsec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileIpsecConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileIpsecConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_profile_ipsec',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ikeDhgroup = config.ikeDhgroup;
    this._ikeEncryption = config.ikeEncryption;
    this._ikeIntegrity = config.ikeIntegrity;
    this._ikePrf = config.ikePrf;
    this._ikeVersion = config.ikeVersion;
    this._ipsecEncryption = config.ipsecEncryption;
    this._ipsecIntegrity = config.ipsecIntegrity;
    this._ipsecMode = config.ipsecMode;
    this._lifetimeSeconds = config.lifetimeSeconds;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ike_dhgroup - computed: false, optional: false, required: true
  private _ikeDhgroup?: string[]; 
  public get ikeDhgroup() {
    return this.getListAttribute('ike_dhgroup');
  }
  public set ikeDhgroup(value: string[]) {
    this._ikeDhgroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeDhgroupInput() {
    return this._ikeDhgroup;
  }

  // ike_encryption - computed: false, optional: false, required: true
  private _ikeEncryption?: string[]; 
  public get ikeEncryption() {
    return this.getListAttribute('ike_encryption');
  }
  public set ikeEncryption(value: string[]) {
    this._ikeEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeEncryptionInput() {
    return this._ikeEncryption;
  }

  // ike_integrity - computed: false, optional: false, required: true
  private _ikeIntegrity?: string[]; 
  public get ikeIntegrity() {
    return this.getListAttribute('ike_integrity');
  }
  public set ikeIntegrity(value: string[]) {
    this._ikeIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIntegrityInput() {
    return this._ikeIntegrity;
  }

  // ike_prf - computed: false, optional: false, required: true
  private _ikePrf?: string[]; 
  public get ikePrf() {
    return this.getListAttribute('ike_prf');
  }
  public set ikePrf(value: string[]) {
    this._ikePrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePrfInput() {
    return this._ikePrf;
  }

  // ike_version - computed: false, optional: false, required: true
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // ipsec_encryption - computed: false, optional: false, required: true
  private _ipsecEncryption?: string[]; 
  public get ipsecEncryption() {
    return this.getListAttribute('ipsec_encryption');
  }
  public set ipsecEncryption(value: string[]) {
    this._ipsecEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncryptionInput() {
    return this._ipsecEncryption;
  }

  // ipsec_integrity - computed: false, optional: false, required: true
  private _ipsecIntegrity?: string[]; 
  public get ipsecIntegrity() {
    return this.getListAttribute('ipsec_integrity');
  }
  public set ipsecIntegrity(value: string[]) {
    this._ipsecIntegrity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIntegrityInput() {
    return this._ipsecIntegrity;
  }

  // ipsec_mode - computed: false, optional: false, required: true
  private _ipsecMode?: string; 
  public get ipsecMode() {
    return this.getStringAttribute('ipsec_mode');
  }
  public set ipsecMode(value: string) {
    this._ipsecMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecModeInput() {
    return this._ipsecMode;
  }

  // lifetime_seconds - computed: false, optional: false, required: true
  private _lifetimeSeconds?: number; 
  public get lifetimeSeconds() {
    return this.getNumberAttribute('lifetime_seconds');
  }
  public set lifetimeSeconds(value: number) {
    this._lifetimeSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeSecondsInput() {
    return this._lifetimeSeconds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ike_dhgroup: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ikeDhgroup),
      ike_encryption: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ikeEncryption),
      ike_integrity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ikeIntegrity),
      ike_prf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ikePrf),
      ike_version: cdktf.stringToTerraform(this._ikeVersion),
      ipsec_encryption: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipsecEncryption),
      ipsec_integrity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipsecIntegrity),
      ipsec_mode: cdktf.stringToTerraform(this._ipsecMode),
      lifetime_seconds: cdktf.numberToTerraform(this._lifetimeSeconds),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ike_dhgroup: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ikeDhgroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ike_encryption: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ikeEncryption),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ike_integrity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ikeIntegrity),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ike_prf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ikePrf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ike_version: {
        value: cdktf.stringToHclTerraform(this._ikeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_encryption: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipsecEncryption),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipsec_integrity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipsecIntegrity),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipsec_mode: {
        value: cdktf.stringToHclTerraform(this._ipsecMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifetime_seconds: {
        value: cdktf.numberToHclTerraform(this._lifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
