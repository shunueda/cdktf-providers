// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpIpsecProposalConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#___path___ IpIpsecProposal#___path___}
  */
  readonly path?: string;
  /**
  * Allowed algorithms for authorization. SHA (Secure Hash Algorithm) is stronger but slower. MD5 uses a 128-bit key, sha1-160bit key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#auth_algorithms IpIpsecProposal#auth_algorithms}
  */
  readonly authAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#comment IpIpsecProposal#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#disabled IpIpsecProposal#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Allowed algorithms and key lengths to use for SAs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#enc_algorithms IpIpsecProposal#enc_algorithms}
  */
  readonly encAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#id IpIpsecProposal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How long to use SA before throwing it out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#lifetime IpIpsecProposal#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#name IpIpsecProposal#name}
  */
  readonly name: string;
  /**
  * The diffie-Helman group used for Perfect Forward Secrecy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#pfs_group IpIpsecProposal#pfs_group}
  */
  readonly pfsGroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal routeros_ip_ipsec_proposal}
*/
export class IpIpsecProposal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_ipsec_proposal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpIpsecProposal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpIpsecProposal to import
  * @param importFromId The id of the existing IpIpsecProposal that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpIpsecProposal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_ipsec_proposal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_proposal routeros_ip_ipsec_proposal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpIpsecProposalConfig
  */
  public constructor(scope: Construct, id: string, config: IpIpsecProposalConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_ipsec_proposal',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._authAlgorithms = config.authAlgorithms;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._encAlgorithms = config.encAlgorithms;
    this._id = config.id;
    this._lifetime = config.lifetime;
    this._name = config.name;
    this._pfsGroup = config.pfsGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // auth_algorithms - computed: false, optional: true, required: false
  private _authAlgorithms?: string[]; 
  public get authAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_algorithms'));
  }
  public set authAlgorithms(value: string[]) {
    this._authAlgorithms = value;
  }
  public resetAuthAlgorithms() {
    this._authAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgorithmsInput() {
    return this._authAlgorithms;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enc_algorithms - computed: false, optional: true, required: false
  private _encAlgorithms?: string[]; 
  public get encAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('enc_algorithms'));
  }
  public set encAlgorithms(value: string[]) {
    this._encAlgorithms = value;
  }
  public resetEncAlgorithms() {
    this._encAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmsInput() {
    return this._encAlgorithms;
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

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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

  // pfs_group - computed: false, optional: true, required: false
  private _pfsGroup?: string; 
  public get pfsGroup() {
    return this.getStringAttribute('pfs_group');
  }
  public set pfsGroup(value: string) {
    this._pfsGroup = value;
  }
  public resetPfsGroup() {
    this._pfsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsGroupInput() {
    return this._pfsGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      auth_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authAlgorithms),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enc_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encAlgorithms),
      id: cdktf.stringToTerraform(this._id),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      name: cdktf.stringToTerraform(this._name),
      pfs_group: cdktf.stringToTerraform(this._pfsGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_algorithms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enc_algorithms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifetime: {
        value: cdktf.stringToHclTerraform(this._lifetime),
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
      pfs_group: {
        value: cdktf.stringToHclTerraform(this._pfsGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
