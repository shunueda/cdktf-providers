// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciBgpTimersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#annotation DataAciBgpTimers#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#description DataAciBgpTimers#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#gr_ctrl DataAciBgpTimers#gr_ctrl}
  */
  readonly grCtrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#hold_intvl DataAciBgpTimers#hold_intvl}
  */
  readonly holdIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#id DataAciBgpTimers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#ka_intvl DataAciBgpTimers#ka_intvl}
  */
  readonly kaIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#max_as_limit DataAciBgpTimers#max_as_limit}
  */
  readonly maxAsLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#name DataAciBgpTimers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#name_alias DataAciBgpTimers#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#stale_intvl DataAciBgpTimers#stale_intvl}
  */
  readonly staleIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#tenant_dn DataAciBgpTimers#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers aci_bgp_timers}
*/
export class DataAciBgpTimers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_bgp_timers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciBgpTimers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciBgpTimers to import
  * @param importFromId The id of the existing DataAciBgpTimers that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciBgpTimers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_bgp_timers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bgp_timers aci_bgp_timers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciBgpTimersConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciBgpTimersConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_bgp_timers',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._grCtrl = config.grCtrl;
    this._holdIntvl = config.holdIntvl;
    this._id = config.id;
    this._kaIntvl = config.kaIntvl;
    this._maxAsLimit = config.maxAsLimit;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._staleIntvl = config.staleIntvl;
    this._tenantDn = config.tenantDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
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

  // gr_ctrl - computed: true, optional: true, required: false
  private _grCtrl?: string; 
  public get grCtrl() {
    return this.getStringAttribute('gr_ctrl');
  }
  public set grCtrl(value: string) {
    this._grCtrl = value;
  }
  public resetGrCtrl() {
    this._grCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grCtrlInput() {
    return this._grCtrl;
  }

  // hold_intvl - computed: true, optional: true, required: false
  private _holdIntvl?: string; 
  public get holdIntvl() {
    return this.getStringAttribute('hold_intvl');
  }
  public set holdIntvl(value: string) {
    this._holdIntvl = value;
  }
  public resetHoldIntvl() {
    this._holdIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdIntvlInput() {
    return this._holdIntvl;
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

  // ka_intvl - computed: true, optional: true, required: false
  private _kaIntvl?: string; 
  public get kaIntvl() {
    return this.getStringAttribute('ka_intvl');
  }
  public set kaIntvl(value: string) {
    this._kaIntvl = value;
  }
  public resetKaIntvl() {
    this._kaIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kaIntvlInput() {
    return this._kaIntvl;
  }

  // max_as_limit - computed: true, optional: true, required: false
  private _maxAsLimit?: string; 
  public get maxAsLimit() {
    return this.getStringAttribute('max_as_limit');
  }
  public set maxAsLimit(value: string) {
    this._maxAsLimit = value;
  }
  public resetMaxAsLimit() {
    this._maxAsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAsLimitInput() {
    return this._maxAsLimit;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // stale_intvl - computed: true, optional: true, required: false
  private _staleIntvl?: string; 
  public get staleIntvl() {
    return this.getStringAttribute('stale_intvl');
  }
  public set staleIntvl(value: string) {
    this._staleIntvl = value;
  }
  public resetStaleIntvl() {
    this._staleIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleIntvlInput() {
    return this._staleIntvl;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      gr_ctrl: cdktf.stringToTerraform(this._grCtrl),
      hold_intvl: cdktf.stringToTerraform(this._holdIntvl),
      id: cdktf.stringToTerraform(this._id),
      ka_intvl: cdktf.stringToTerraform(this._kaIntvl),
      max_as_limit: cdktf.stringToTerraform(this._maxAsLimit),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      stale_intvl: cdktf.stringToTerraform(this._staleIntvl),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gr_ctrl: {
        value: cdktf.stringToHclTerraform(this._grCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_intvl: {
        value: cdktf.stringToHclTerraform(this._holdIntvl),
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
      ka_intvl: {
        value: cdktf.stringToHclTerraform(this._kaIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_as_limit: {
        value: cdktf.stringToHclTerraform(this._maxAsLimit),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stale_intvl: {
        value: cdktf.stringToHclTerraform(this._staleIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
