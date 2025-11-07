// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SxpDomainFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter#description SxpDomainFilter#description}
  */
  readonly description?: string;
  /**
  * List of SXP Domains, separated with comma
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter#domains SxpDomainFilter#domains}
  */
  readonly domains: string;
  /**
  * Resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter#name SxpDomainFilter#name}
  */
  readonly name?: string;
  /**
  * SGT name or ID. At least one of subnet or sgt or vn should be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter#sgt SxpDomainFilter#sgt}
  */
  readonly sgt?: string;
  /**
  * Subnet for filter policy (hostname is not supported). At least one of subnet or sgt or vn should be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter#subnet SxpDomainFilter#subnet}
  */
  readonly subnet?: string;
  /**
  * Virtual Network. At least one of subnet or sgt or vn should be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter#vn SxpDomainFilter#vn}
  */
  readonly vn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter ise_sxp_domain_filter}
*/
export class SxpDomainFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_sxp_domain_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SxpDomainFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SxpDomainFilter to import
  * @param importFromId The id of the existing SxpDomainFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SxpDomainFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_sxp_domain_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/sxp_domain_filter ise_sxp_domain_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SxpDomainFilterConfig
  */
  public constructor(scope: Construct, id: string, config: SxpDomainFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_sxp_domain_filter',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
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
    this._domains = config.domains;
    this._name = config.name;
    this._sgt = config.sgt;
    this._subnet = config.subnet;
    this._vn = config.vn;
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

  // domains - computed: false, optional: false, required: true
  private _domains?: string; 
  public get domains() {
    return this.getStringAttribute('domains');
  }
  public set domains(value: string) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sgt - computed: false, optional: true, required: false
  private _sgt?: string; 
  public get sgt() {
    return this.getStringAttribute('sgt');
  }
  public set sgt(value: string) {
    this._sgt = value;
  }
  public resetSgt() {
    this._sgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtInput() {
    return this._sgt;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // vn - computed: false, optional: true, required: false
  private _vn?: string; 
  public get vn() {
    return this.getStringAttribute('vn');
  }
  public set vn(value: string) {
    this._vn = value;
  }
  public resetVn() {
    this._vn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnInput() {
    return this._vn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      domains: cdktf.stringToTerraform(this._domains),
      name: cdktf.stringToTerraform(this._name),
      sgt: cdktf.stringToTerraform(this._sgt),
      subnet: cdktf.stringToTerraform(this._subnet),
      vn: cdktf.stringToTerraform(this._vn),
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
      domains: {
        value: cdktf.stringToHclTerraform(this._domains),
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
      sgt: {
        value: cdktf.stringToHclTerraform(this._sgt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vn: {
        value: cdktf.stringToHclTerraform(this._vn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
