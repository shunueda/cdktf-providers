// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFreeipaHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host fully qualified name
  * 
  * 	- May contain only letters, numbers, '-'.
  * 	- DNS label may not start or end with '-'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/host#name DataFreeipaHost#name}
  */
  readonly name: string;
  /**
  * Client credentials may be delegated to the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/host#trusted_for_delegation DataFreeipaHost#trusted_for_delegation}
  */
  readonly trustedForDelegation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/host freeipa_host}
*/
export class DataFreeipaHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFreeipaHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFreeipaHost to import
  * @param importFromId The id of the existing DataFreeipaHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFreeipaHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/host freeipa_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFreeipaHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataFreeipaHostConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_host',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.4',
        providerVersionConstraint: '5.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._trustedForDelegation = config.trustedForDelegation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_idview - computed: true, optional: false, required: false
  public get assignedIdview() {
    return this.getStringAttribute('assigned_idview');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipasshpubkeys - computed: true, optional: false, required: false
  public get ipasshpubkeys() {
    return this.getListAttribute('ipasshpubkeys');
  }

  // krb_auth_indicators - computed: true, optional: false, required: false
  public get krbAuthIndicators() {
    return this.getListAttribute('krb_auth_indicators');
  }

  // krb_preauth - computed: true, optional: false, required: false
  public get krbPreauth() {
    return this.getBooleanAttribute('krb_preauth');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // mac_addresses - computed: true, optional: false, required: false
  public get macAddresses() {
    return this.getListAttribute('mac_addresses');
  }

  // memberof_hbacrule - computed: true, optional: false, required: false
  public get memberofHbacrule() {
    return this.getListAttribute('memberof_hbacrule');
  }

  // memberof_hostgroup - computed: true, optional: false, required: false
  public get memberofHostgroup() {
    return this.getListAttribute('memberof_hostgroup');
  }

  // memberof_indirect_hbacrule - computed: true, optional: false, required: false
  public get memberofIndirectHbacrule() {
    return this.getListAttribute('memberof_indirect_hbacrule');
  }

  // memberof_indirect_hostgroup - computed: true, optional: false, required: false
  public get memberofIndirectHostgroup() {
    return this.getListAttribute('memberof_indirect_hostgroup');
  }

  // memberof_indirect_sudorule - computed: true, optional: false, required: false
  public get memberofIndirectSudorule() {
    return this.getListAttribute('memberof_indirect_sudorule');
  }

  // memberof_sudorule - computed: true, optional: false, required: false
  public get memberofSudorule() {
    return this.getListAttribute('memberof_sudorule');
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

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // trusted_for_delegation - computed: false, optional: true, required: false
  private _trustedForDelegation?: boolean | cdktf.IResolvable; 
  public get trustedForDelegation() {
    return this.getBooleanAttribute('trusted_for_delegation');
  }
  public set trustedForDelegation(value: boolean | cdktf.IResolvable) {
    this._trustedForDelegation = value;
  }
  public resetTrustedForDelegation() {
    this._trustedForDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedForDelegationInput() {
    return this._trustedForDelegation;
  }

  // trusted_to_auth_as_delegate - computed: true, optional: false, required: false
  public get trustedToAuthAsDelegate() {
    return this.getBooleanAttribute('trusted_to_auth_as_delegate');
  }

  // user_certificates - computed: true, optional: false, required: false
  public get userCertificates() {
    return this.getListAttribute('user_certificates');
  }

  // userclass - computed: true, optional: false, required: false
  public get userclass() {
    return this.getListAttribute('userclass');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      trusted_for_delegation: cdktf.booleanToTerraform(this._trustedForDelegation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_for_delegation: {
        value: cdktf.booleanToHclTerraform(this._trustedForDelegation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
