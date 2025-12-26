// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RackTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#comments RackType#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#description RackType#description}
  */
  readonly description?: string;
  /**
  * Valid values are `2-post-frame`, `4-post-frame`, `4-post-cabinet`, `wall-frame`, `wall-frame-vertical`, `wall-cabinet` and `wall-cabinet-vertical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#form_factor RackType#form_factor}
  */
  readonly formFactor: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#id RackType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#manufacturer_id RackType#manufacturer_id}
  */
  readonly manufacturerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#max_weight RackType#max_weight}
  */
  readonly maxWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#model RackType#model}
  */
  readonly model: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#mounting_depth_mm RackType#mounting_depth_mm}
  */
  readonly mountingDepthMm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#outer_depth RackType#outer_depth}
  */
  readonly outerDepth?: number;
  /**
  * Valid values are `mm` and `in`. Required when `outer_width` and `outer_depth` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#outer_unit RackType#outer_unit}
  */
  readonly outerUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#outer_width RackType#outer_width}
  */
  readonly outerWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#slug RackType#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#starting_unit RackType#starting_unit}
  */
  readonly startingUnit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#tags RackType#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#u_height RackType#u_height}
  */
  readonly uHeight: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#weight RackType#weight}
  */
  readonly weight?: number;
  /**
  * Valid values are `kg`, `g`, `lb` and `oz`. Required when `weight` and `max_weight` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#weight_unit RackType#weight_unit}
  */
  readonly weightUnit?: string;
  /**
  * Valid values are `10`, `19`, `21` and `23`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#width RackType#width}
  */
  readonly width: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type netbox_rack_type}
*/
export class RackType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_rack_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RackType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RackType to import
  * @param importFromId The id of the existing RackType that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RackType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_rack_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/rack_type netbox_rack_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RackTypeConfig
  */
  public constructor(scope: Construct, id: string, config: RackTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_rack_type',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._description = config.description;
    this._formFactor = config.formFactor;
    this._id = config.id;
    this._manufacturerId = config.manufacturerId;
    this._maxWeight = config.maxWeight;
    this._model = config.model;
    this._mountingDepthMm = config.mountingDepthMm;
    this._outerDepth = config.outerDepth;
    this._outerUnit = config.outerUnit;
    this._outerWidth = config.outerWidth;
    this._slug = config.slug;
    this._startingUnit = config.startingUnit;
    this._tags = config.tags;
    this._uHeight = config.uHeight;
    this._weight = config.weight;
    this._weightUnit = config.weightUnit;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

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

  // form_factor - computed: false, optional: false, required: true
  private _formFactor?: string; 
  public get formFactor() {
    return this.getStringAttribute('form_factor');
  }
  public set formFactor(value: string) {
    this._formFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formFactorInput() {
    return this._formFactor;
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

  // manufacturer_id - computed: false, optional: true, required: false
  private _manufacturerId?: number; 
  public get manufacturerId() {
    return this.getNumberAttribute('manufacturer_id');
  }
  public set manufacturerId(value: number) {
    this._manufacturerId = value;
  }
  public resetManufacturerId() {
    this._manufacturerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerIdInput() {
    return this._manufacturerId;
  }

  // max_weight - computed: false, optional: true, required: false
  private _maxWeight?: number; 
  public get maxWeight() {
    return this.getNumberAttribute('max_weight');
  }
  public set maxWeight(value: number) {
    this._maxWeight = value;
  }
  public resetMaxWeight() {
    this._maxWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWeightInput() {
    return this._maxWeight;
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // mounting_depth_mm - computed: false, optional: true, required: false
  private _mountingDepthMm?: number; 
  public get mountingDepthMm() {
    return this.getNumberAttribute('mounting_depth_mm');
  }
  public set mountingDepthMm(value: number) {
    this._mountingDepthMm = value;
  }
  public resetMountingDepthMm() {
    this._mountingDepthMm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountingDepthMmInput() {
    return this._mountingDepthMm;
  }

  // outer_depth - computed: false, optional: true, required: false
  private _outerDepth?: number; 
  public get outerDepth() {
    return this.getNumberAttribute('outer_depth');
  }
  public set outerDepth(value: number) {
    this._outerDepth = value;
  }
  public resetOuterDepth() {
    this._outerDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerDepthInput() {
    return this._outerDepth;
  }

  // outer_unit - computed: false, optional: true, required: false
  private _outerUnit?: string; 
  public get outerUnit() {
    return this.getStringAttribute('outer_unit');
  }
  public set outerUnit(value: string) {
    this._outerUnit = value;
  }
  public resetOuterUnit() {
    this._outerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerUnitInput() {
    return this._outerUnit;
  }

  // outer_width - computed: false, optional: true, required: false
  private _outerWidth?: number; 
  public get outerWidth() {
    return this.getNumberAttribute('outer_width');
  }
  public set outerWidth(value: number) {
    this._outerWidth = value;
  }
  public resetOuterWidth() {
    this._outerWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerWidthInput() {
    return this._outerWidth;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // starting_unit - computed: false, optional: false, required: true
  private _startingUnit?: number; 
  public get startingUnit() {
    return this.getNumberAttribute('starting_unit');
  }
  public set startingUnit(value: number) {
    this._startingUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingUnitInput() {
    return this._startingUnit;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // u_height - computed: false, optional: false, required: true
  private _uHeight?: number; 
  public get uHeight() {
    return this.getNumberAttribute('u_height');
  }
  public set uHeight(value: number) {
    this._uHeight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uHeightInput() {
    return this._uHeight;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // weight_unit - computed: false, optional: true, required: false
  private _weightUnit?: string; 
  public get weightUnit() {
    return this.getStringAttribute('weight_unit');
  }
  public set weightUnit(value: string) {
    this._weightUnit = value;
  }
  public resetWeightUnit() {
    this._weightUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightUnitInput() {
    return this._weightUnit;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      description: cdktf.stringToTerraform(this._description),
      form_factor: cdktf.stringToTerraform(this._formFactor),
      id: cdktf.stringToTerraform(this._id),
      manufacturer_id: cdktf.numberToTerraform(this._manufacturerId),
      max_weight: cdktf.numberToTerraform(this._maxWeight),
      model: cdktf.stringToTerraform(this._model),
      mounting_depth_mm: cdktf.numberToTerraform(this._mountingDepthMm),
      outer_depth: cdktf.numberToTerraform(this._outerDepth),
      outer_unit: cdktf.stringToTerraform(this._outerUnit),
      outer_width: cdktf.numberToTerraform(this._outerWidth),
      slug: cdktf.stringToTerraform(this._slug),
      starting_unit: cdktf.numberToTerraform(this._startingUnit),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      u_height: cdktf.numberToTerraform(this._uHeight),
      weight: cdktf.numberToTerraform(this._weight),
      weight_unit: cdktf.stringToTerraform(this._weightUnit),
      width: cdktf.numberToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      form_factor: {
        value: cdktf.stringToHclTerraform(this._formFactor),
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
      manufacturer_id: {
        value: cdktf.numberToHclTerraform(this._manufacturerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_weight: {
        value: cdktf.numberToHclTerraform(this._maxWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mounting_depth_mm: {
        value: cdktf.numberToHclTerraform(this._mountingDepthMm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outer_depth: {
        value: cdktf.numberToHclTerraform(this._outerDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outer_unit: {
        value: cdktf.stringToHclTerraform(this._outerUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outer_width: {
        value: cdktf.numberToHclTerraform(this._outerWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starting_unit: {
        value: cdktf.numberToHclTerraform(this._startingUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      u_height: {
        value: cdktf.numberToHclTerraform(this._uHeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight_unit: {
        value: cdktf.stringToHclTerraform(this._weightUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      width: {
        value: cdktf.numberToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
