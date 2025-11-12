// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#asset_tag Rack#asset_tag}
  */
  readonly assetTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#comments Rack#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#custom_fields Rack#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * If rack units are descending. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#desc_units Rack#desc_units}
  */
  readonly descUnits?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#description Rack#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#facility_id Rack#facility_id}
  */
  readonly facilityId?: string;
  /**
  * Valid values are `2-post-frame`, `4-post-frame`, `4-post-cabinet`, `wall-frame`, `wall-frame-vertical`, `wall-cabinet` and `wall-cabinet-vertical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#form_factor Rack#form_factor}
  */
  readonly formFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#id Rack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#location_id Rack#location_id}
  */
  readonly locationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#max_weight Rack#max_weight}
  */
  readonly maxWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#mounting_depth Rack#mounting_depth}
  */
  readonly mountingDepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#name Rack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#outer_depth Rack#outer_depth}
  */
  readonly outerDepth?: number;
  /**
  * Valid values are `mm` and `in`. Required when `outer_width` and `outer_depth` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#outer_unit Rack#outer_unit}
  */
  readonly outerUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#outer_width Rack#outer_width}
  */
  readonly outerWidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#role_id Rack#role_id}
  */
  readonly roleId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#serial Rack#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#site_id Rack#site_id}
  */
  readonly siteId: number;
  /**
  * Valid values are `reserved`, `available`, `planned`, `active` and `deprecated`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#status Rack#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#tags Rack#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#tenant_id Rack#tenant_id}
  */
  readonly tenantId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#u_height Rack#u_height}
  */
  readonly uHeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#weight Rack#weight}
  */
  readonly weight?: number;
  /**
  * Valid values are `kg`, `g`, `lb` and `oz`. Required when `weight` and `max_weight` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#weight_unit Rack#weight_unit}
  */
  readonly weightUnit?: string;
  /**
  * Valid values are `10`, `19`, `21` and `23`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#width Rack#width}
  */
  readonly width?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack netbox_rack}
*/
export class Rack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_rack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rack to import
  * @param importFromId The id of the existing Rack that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_rack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/rack netbox_rack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RackConfig
  */
  public constructor(scope: Construct, id: string, config: RackConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_rack',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetTag = config.assetTag;
    this._comments = config.comments;
    this._customFields = config.customFields;
    this._descUnits = config.descUnits;
    this._description = config.description;
    this._facilityId = config.facilityId;
    this._formFactor = config.formFactor;
    this._id = config.id;
    this._locationId = config.locationId;
    this._maxWeight = config.maxWeight;
    this._mountingDepth = config.mountingDepth;
    this._name = config.name;
    this._outerDepth = config.outerDepth;
    this._outerUnit = config.outerUnit;
    this._outerWidth = config.outerWidth;
    this._roleId = config.roleId;
    this._serial = config.serial;
    this._siteId = config.siteId;
    this._status = config.status;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._uHeight = config.uHeight;
    this._weight = config.weight;
    this._weightUnit = config.weightUnit;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_tag - computed: false, optional: true, required: false
  private _assetTag?: string; 
  public get assetTag() {
    return this.getStringAttribute('asset_tag');
  }
  public set assetTag(value: string) {
    this._assetTag = value;
  }
  public resetAssetTag() {
    this._assetTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTagInput() {
    return this._assetTag;
  }

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

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
  }

  // desc_units - computed: false, optional: true, required: false
  private _descUnits?: boolean | cdktf.IResolvable; 
  public get descUnits() {
    return this.getBooleanAttribute('desc_units');
  }
  public set descUnits(value: boolean | cdktf.IResolvable) {
    this._descUnits = value;
  }
  public resetDescUnits() {
    this._descUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descUnitsInput() {
    return this._descUnits;
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

  // facility_id - computed: false, optional: true, required: false
  private _facilityId?: string; 
  public get facilityId() {
    return this.getStringAttribute('facility_id');
  }
  public set facilityId(value: string) {
    this._facilityId = value;
  }
  public resetFacilityId() {
    this._facilityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityIdInput() {
    return this._facilityId;
  }

  // form_factor - computed: false, optional: true, required: false
  private _formFactor?: string; 
  public get formFactor() {
    return this.getStringAttribute('form_factor');
  }
  public set formFactor(value: string) {
    this._formFactor = value;
  }
  public resetFormFactor() {
    this._formFactor = undefined;
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

  // location_id - computed: false, optional: true, required: false
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // mounting_depth - computed: false, optional: true, required: false
  private _mountingDepth?: number; 
  public get mountingDepth() {
    return this.getNumberAttribute('mounting_depth');
  }
  public set mountingDepth(value: number) {
    this._mountingDepth = value;
  }
  public resetMountingDepth() {
    this._mountingDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountingDepthInput() {
    return this._mountingDepth;
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

  // role_id - computed: false, optional: true, required: false
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: number; 
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }
  public set tenantId(value: number) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // u_height - computed: false, optional: true, required: false
  private _uHeight?: number; 
  public get uHeight() {
    return this.getNumberAttribute('u_height');
  }
  public set uHeight(value: number) {
    this._uHeight = value;
  }
  public resetUHeight() {
    this._uHeight = undefined;
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

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
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
      asset_tag: cdktf.stringToTerraform(this._assetTag),
      comments: cdktf.stringToTerraform(this._comments),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      desc_units: cdktf.booleanToTerraform(this._descUnits),
      description: cdktf.stringToTerraform(this._description),
      facility_id: cdktf.stringToTerraform(this._facilityId),
      form_factor: cdktf.stringToTerraform(this._formFactor),
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.numberToTerraform(this._locationId),
      max_weight: cdktf.numberToTerraform(this._maxWeight),
      mounting_depth: cdktf.numberToTerraform(this._mountingDepth),
      name: cdktf.stringToTerraform(this._name),
      outer_depth: cdktf.numberToTerraform(this._outerDepth),
      outer_unit: cdktf.stringToTerraform(this._outerUnit),
      outer_width: cdktf.numberToTerraform(this._outerWidth),
      role_id: cdktf.numberToTerraform(this._roleId),
      serial: cdktf.stringToTerraform(this._serial),
      site_id: cdktf.numberToTerraform(this._siteId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.numberToTerraform(this._tenantId),
      u_height: cdktf.numberToTerraform(this._uHeight),
      weight: cdktf.numberToTerraform(this._weight),
      weight_unit: cdktf.stringToTerraform(this._weightUnit),
      width: cdktf.numberToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_tag: {
        value: cdktf.stringToHclTerraform(this._assetTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      desc_units: {
        value: cdktf.booleanToHclTerraform(this._descUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facility_id: {
        value: cdktf.stringToHclTerraform(this._facilityId),
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
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
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
      mounting_depth: {
        value: cdktf.numberToHclTerraform(this._mountingDepth),
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
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.numberToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
