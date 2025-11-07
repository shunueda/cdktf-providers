// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnRadiusProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#id Cgnv6LsnRadiusProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LSN RADIUS Profile Index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#lid_profile_index Cgnv6LsnRadiusProfile#lid_profile_index}
  */
  readonly lidProfileIndex: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#user_tag Cgnv6LsnRadiusProfile#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#uuid Cgnv6LsnRadiusProfile#uuid}
  */
  readonly uuid?: string;
  /**
  * radius block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#radius Cgnv6LsnRadiusProfile#radius}
  */
  readonly radius?: Cgnv6LsnRadiusProfileRadius[] | cdktf.IResolvable;
}
export interface Cgnv6LsnRadiusProfileRadius {
  /**
  * 'custom1': Configure RADIUS Attribute Custom 1; 'custom2': Configure RADIUS Attribute Custom 2; 'custom3': Configure RADIUS Attribute Custom 3; 'custom4': Configure RADIUS Attribute Custom 4; 'custom5': Configure RADIUS Attribute Custom 5; 'custom6': Configure RADIUS Attribute Custom 6; 'imei': Configure RADIUS Attribute IMEI; 'imsi': Configure RADIUS Attribute IMSI; 'msisdn': Configure RADIUS Attribute MSISDN; 'default': Configure default;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#attribute Cgnv6LsnRadiusProfile#attribute}
  */
  readonly attribute?: string;
  /**
  * LSN Limit ID (LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#default_lsn_lid Cgnv6LsnRadiusProfile#default_lsn_lid}
  */
  readonly defaultLsnLid?: number;
  /**
  * Value of the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#exact_value Cgnv6LsnRadiusProfile#exact_value}
  */
  readonly exactValue?: string;
  /**
  * LSN Limit ID (LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#exact_value_lsn_lid Cgnv6LsnRadiusProfile#exact_value_lsn_lid}
  */
  readonly exactValueLsnLid?: number;
  /**
  * Value of the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#starts_with Cgnv6LsnRadiusProfile#starts_with}
  */
  readonly startsWith?: string;
  /**
  * LSN Limit ID (LID index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#starts_with_lsn_lid Cgnv6LsnRadiusProfile#starts_with_lsn_lid}
  */
  readonly startsWithLsnLid?: number;
}

export function cgnv6LsnRadiusProfileRadiusToTerraform(struct?: Cgnv6LsnRadiusProfileRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    default_lsn_lid: cdktf.numberToTerraform(struct!.defaultLsnLid),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    exact_value_lsn_lid: cdktf.numberToTerraform(struct!.exactValueLsnLid),
    starts_with: cdktf.stringToTerraform(struct!.startsWith),
    starts_with_lsn_lid: cdktf.numberToTerraform(struct!.startsWithLsnLid),
  }
}


export function cgnv6LsnRadiusProfileRadiusToHclTerraform(struct?: Cgnv6LsnRadiusProfileRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.defaultLsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_value_lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.exactValueLsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starts_with: {
      value: cdktf.stringToHclTerraform(struct!.startsWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starts_with_lsn_lid: {
      value: cdktf.numberToHclTerraform(struct!.startsWithLsnLid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnRadiusProfileRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Cgnv6LsnRadiusProfileRadius | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._defaultLsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLsnLid = this._defaultLsnLid;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._exactValueLsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValueLsnLid = this._exactValueLsnLid;
    }
    if (this._startsWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWith = this._startsWith;
    }
    if (this._startsWithLsnLid !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsWithLsnLid = this._startsWithLsnLid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnRadiusProfileRadius | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._defaultLsnLid = undefined;
      this._exactValue = undefined;
      this._exactValueLsnLid = undefined;
      this._startsWith = undefined;
      this._startsWithLsnLid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._defaultLsnLid = value.defaultLsnLid;
      this._exactValue = value.exactValue;
      this._exactValueLsnLid = value.exactValueLsnLid;
      this._startsWith = value.startsWith;
      this._startsWithLsnLid = value.startsWithLsnLid;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // default_lsn_lid - computed: false, optional: true, required: false
  private _defaultLsnLid?: number; 
  public get defaultLsnLid() {
    return this.getNumberAttribute('default_lsn_lid');
  }
  public set defaultLsnLid(value: number) {
    this._defaultLsnLid = value;
  }
  public resetDefaultLsnLid() {
    this._defaultLsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLsnLidInput() {
    return this._defaultLsnLid;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // exact_value_lsn_lid - computed: false, optional: true, required: false
  private _exactValueLsnLid?: number; 
  public get exactValueLsnLid() {
    return this.getNumberAttribute('exact_value_lsn_lid');
  }
  public set exactValueLsnLid(value: number) {
    this._exactValueLsnLid = value;
  }
  public resetExactValueLsnLid() {
    this._exactValueLsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueLsnLidInput() {
    return this._exactValueLsnLid;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }

  // starts_with_lsn_lid - computed: false, optional: true, required: false
  private _startsWithLsnLid?: number; 
  public get startsWithLsnLid() {
    return this.getNumberAttribute('starts_with_lsn_lid');
  }
  public set startsWithLsnLid(value: number) {
    this._startsWithLsnLid = value;
  }
  public resetStartsWithLsnLid() {
    this._startsWithLsnLid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithLsnLidInput() {
    return this._startsWithLsnLid;
  }
}

export class Cgnv6LsnRadiusProfileRadiusList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnRadiusProfileRadius[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Cgnv6LsnRadiusProfileRadiusOutputReference {
    return new Cgnv6LsnRadiusProfileRadiusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile thunder_cgnv6_lsn_radius_profile}
*/
export class Cgnv6LsnRadiusProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_radius_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnRadiusProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnRadiusProfile to import
  * @param importFromId The id of the existing Cgnv6LsnRadiusProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnRadiusProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_radius_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lsn_radius_profile thunder_cgnv6_lsn_radius_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnRadiusProfileConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnRadiusProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_radius_profile',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._lidProfileIndex = config.lidProfileIndex;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._radius.internalValue = config.radius;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // lid_profile_index - computed: false, optional: false, required: true
  private _lidProfileIndex?: number; 
  public get lidProfileIndex() {
    return this.getNumberAttribute('lid_profile_index');
  }
  public set lidProfileIndex(value: number) {
    this._lidProfileIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lidProfileIndexInput() {
    return this._lidProfileIndex;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // radius - computed: false, optional: true, required: false
  private _radius = new Cgnv6LsnRadiusProfileRadiusList(this, "radius", false);
  public get radius() {
    return this._radius;
  }
  public putRadius(value: Cgnv6LsnRadiusProfileRadius[] | cdktf.IResolvable) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lid_profile_index: cdktf.numberToTerraform(this._lidProfileIndex),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      radius: cdktf.listMapper(cgnv6LsnRadiusProfileRadiusToTerraform, true)(this._radius.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lid_profile_index: {
        value: cdktf.numberToHclTerraform(this._lidProfileIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius: {
        value: cdktf.listMapperHcl(cgnv6LsnRadiusProfileRadiusToHclTerraform, true)(this._radius.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnRadiusProfileRadiusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
