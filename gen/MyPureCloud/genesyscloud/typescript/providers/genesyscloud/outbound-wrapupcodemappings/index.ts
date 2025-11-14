// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OutboundWrapupcodemappingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default set of wrap-up flags. These will be used if there is no entry for a given wrap-up code in the mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings#default_set OutboundWrapupcodemappings#default_set}
  */
  readonly defaultSet: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings#id OutboundWrapupcodemappings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Placeholder data used internally by the provider. Defaults to `***`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings#placeholder OutboundWrapupcodemappings#placeholder}
  */
  readonly placeholder?: string;
  /**
  * mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings#mappings OutboundWrapupcodemappings#mappings}
  */
  readonly mappings?: OutboundWrapupcodemappingsMappings[] | cdktf.IResolvable;
}
export interface OutboundWrapupcodemappingsMappings {
  /**
  * The set of wrap-up flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings#flags OutboundWrapupcodemappings#flags}
  */
  readonly flags: string[];
  /**
  * The wrap-up code identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings#wrapup_code_id OutboundWrapupcodemappings#wrapup_code_id}
  */
  readonly wrapupCodeId: string;
}

export function outboundWrapupcodemappingsMappingsToTerraform(struct?: OutboundWrapupcodemappingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    wrapup_code_id: cdktf.stringToTerraform(struct!.wrapupCodeId),
  }
}


export function outboundWrapupcodemappingsMappingsToHclTerraform(struct?: OutboundWrapupcodemappingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wrapup_code_id: {
      value: cdktf.stringToHclTerraform(struct!.wrapupCodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OutboundWrapupcodemappingsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OutboundWrapupcodemappingsMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._wrapupCodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapupCodeId = this._wrapupCodeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OutboundWrapupcodemappingsMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flags = undefined;
      this._wrapupCodeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flags = value.flags;
      this._wrapupCodeId = value.wrapupCodeId;
    }
  }

  // flags - computed: false, optional: false, required: true
  private _flags?: string[]; 
  public get flags() {
    return cdktf.Fn.tolist(this.getListAttribute('flags'));
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // wrapup_code_id - computed: false, optional: false, required: true
  private _wrapupCodeId?: string; 
  public get wrapupCodeId() {
    return this.getStringAttribute('wrapup_code_id');
  }
  public set wrapupCodeId(value: string) {
    this._wrapupCodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapupCodeIdInput() {
    return this._wrapupCodeId;
  }
}

export class OutboundWrapupcodemappingsMappingsList extends cdktf.ComplexList {
  public internalValue? : OutboundWrapupcodemappingsMappings[] | cdktf.IResolvable

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
  public get(index: number): OutboundWrapupcodemappingsMappingsOutputReference {
    return new OutboundWrapupcodemappingsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings genesyscloud_outbound_wrapupcodemappings}
*/
export class OutboundWrapupcodemappings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_outbound_wrapupcodemappings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OutboundWrapupcodemappings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OutboundWrapupcodemappings to import
  * @param importFromId The id of the existing OutboundWrapupcodemappings that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OutboundWrapupcodemappings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_outbound_wrapupcodemappings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/outbound_wrapupcodemappings genesyscloud_outbound_wrapupcodemappings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OutboundWrapupcodemappingsConfig
  */
  public constructor(scope: Construct, id: string, config: OutboundWrapupcodemappingsConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_outbound_wrapupcodemappings',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultSet = config.defaultSet;
    this._id = config.id;
    this._placeholder = config.placeholder;
    this._mappings.internalValue = config.mappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_set - computed: false, optional: false, required: true
  private _defaultSet?: string[]; 
  public get defaultSet() {
    return cdktf.Fn.tolist(this.getListAttribute('default_set'));
  }
  public set defaultSet(value: string[]) {
    this._defaultSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSetInput() {
    return this._defaultSet;
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

  // placeholder - computed: false, optional: true, required: false
  private _placeholder?: string; 
  public get placeholder() {
    return this.getStringAttribute('placeholder');
  }
  public set placeholder(value: string) {
    this._placeholder = value;
  }
  public resetPlaceholder() {
    this._placeholder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderInput() {
    return this._placeholder;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new OutboundWrapupcodemappingsMappingsList(this, "mappings", true);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: OutboundWrapupcodemappingsMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultSet),
      id: cdktf.stringToTerraform(this._id),
      placeholder: cdktf.stringToTerraform(this._placeholder),
      mappings: cdktf.listMapper(outboundWrapupcodemappingsMappingsToTerraform, true)(this._mappings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultSet),
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
      placeholder: {
        value: cdktf.stringToHclTerraform(this._placeholder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappings: {
        value: cdktf.listMapperHcl(outboundWrapupcodemappingsMappingsToHclTerraform, true)(this._mappings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OutboundWrapupcodemappingsMappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
