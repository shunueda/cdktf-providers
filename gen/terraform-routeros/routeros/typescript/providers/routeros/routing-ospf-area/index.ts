// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingOspfAreaConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#___path___ RoutingOspfArea#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#___unset___ RoutingOspfArea#___unset___}
  */
  readonly unset?: string;
  /**
  * OSPF area identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#area_id RoutingOspfArea#area_id}
  */
  readonly areaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#comment RoutingOspfArea#comment}
  */
  readonly comment?: string;
  /**
  * Default cost of injected LSAs into the area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#default_cost RoutingOspfArea#default_cost}
  */
  readonly defaultCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#disabled RoutingOspfArea#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#id RoutingOspfArea#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the OSPF instance this area belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#instance RoutingOspfArea#instance}
  */
  readonly instance: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#name RoutingOspfArea#name}
  */
  readonly name: string;
  /**
  * If set then the area will not flood summary LSAs in the stub area. <em>The correct value of this attribute may not be displayed in Winbox. Please check the parameters in the console!</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#no_summaries RoutingOspfArea#no_summaries}
  */
  readonly noSummaries?: boolean | cdktf.IResolvable;
  /**
  * The parameter indicates which ABR will be used as a translator from type7 to type5 LSA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#nssa_translate RoutingOspfArea#nssa_translate}
  */
  readonly nssaTranslate?: string;
  /**
  * The area type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#type RoutingOspfArea#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area routeros_routing_ospf_area}
*/
export class RoutingOspfArea extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_ospf_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingOspfArea resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingOspfArea to import
  * @param importFromId The id of the existing RoutingOspfArea that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingOspfArea to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_ospf_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/routing_ospf_area routeros_routing_ospf_area} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingOspfAreaConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingOspfAreaConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_ospf_area',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
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
    this._unset = config.unset;
    this._areaId = config.areaId;
    this._comment = config.comment;
    this._defaultCost = config.defaultCost;
    this._disabled = config.disabled;
    this._id = config.id;
    this._instance = config.instance;
    this._name = config.name;
    this._noSummaries = config.noSummaries;
    this._nssaTranslate = config.nssaTranslate;
    this._type = config.type;
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

  // ___unset___ - computed: false, optional: true, required: false
  private _unset?: string; 
  public get unset() {
    return this.getStringAttribute('___unset___');
  }
  public set unset(value: string) {
    this._unset = value;
  }
  public resetUnset() {
    this._unset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetInput() {
    return this._unset;
  }

  // area_id - computed: false, optional: true, required: false
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  public resetAreaId() {
    this._areaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
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

  // default_cost - computed: false, optional: true, required: false
  private _defaultCost?: number; 
  public get defaultCost() {
    return this.getNumberAttribute('default_cost');
  }
  public set defaultCost(value: number) {
    this._defaultCost = value;
  }
  public resetDefaultCost() {
    this._defaultCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCostInput() {
    return this._defaultCost;
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

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // no_summaries - computed: false, optional: true, required: false
  private _noSummaries?: boolean | cdktf.IResolvable; 
  public get noSummaries() {
    return this.getBooleanAttribute('no_summaries');
  }
  public set noSummaries(value: boolean | cdktf.IResolvable) {
    this._noSummaries = value;
  }
  public resetNoSummaries() {
    this._noSummaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummariesInput() {
    return this._noSummaries;
  }

  // nssa_translate - computed: false, optional: true, required: false
  private _nssaTranslate?: string; 
  public get nssaTranslate() {
    return this.getStringAttribute('nssa_translate');
  }
  public set nssaTranslate(value: string) {
    this._nssaTranslate = value;
  }
  public resetNssaTranslate() {
    this._nssaTranslate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaTranslateInput() {
    return this._nssaTranslate;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___unset___: cdktf.stringToTerraform(this._unset),
      area_id: cdktf.stringToTerraform(this._areaId),
      comment: cdktf.stringToTerraform(this._comment),
      default_cost: cdktf.numberToTerraform(this._defaultCost),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      no_summaries: cdktf.booleanToTerraform(this._noSummaries),
      nssa_translate: cdktf.stringToTerraform(this._nssaTranslate),
      type: cdktf.stringToTerraform(this._type),
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
      ___unset___: {
        value: cdktf.stringToHclTerraform(this._unset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_id: {
        value: cdktf.stringToHclTerraform(this._areaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_cost: {
        value: cdktf.numberToHclTerraform(this._defaultCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
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
      no_summaries: {
        value: cdktf.booleanToHclTerraform(this._noSummaries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nssa_translate: {
        value: cdktf.stringToHclTerraform(this._nssaTranslate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
