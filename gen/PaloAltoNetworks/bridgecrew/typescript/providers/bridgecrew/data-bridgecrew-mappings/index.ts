// https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBridgecrewMappingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings#id DataBridgecrewMappings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * guidelines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings#guidelines DataBridgecrewMappings#guidelines}
  */
  readonly guidelines?: DataBridgecrewMappingsGuidelines[] | cdktf.IResolvable;
  /**
  * idmappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings#idmappings DataBridgecrewMappings#idmappings}
  */
  readonly idmappings?: DataBridgecrewMappingsIdmappings[] | cdktf.IResolvable;
}
export interface DataBridgecrewMappingsGuidelines {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings#check DataBridgecrewMappings#check}
  */
  readonly check: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings#guideline DataBridgecrewMappings#guideline}
  */
  readonly guideline: string;
}

export function dataBridgecrewMappingsGuidelinesToTerraform(struct?: DataBridgecrewMappingsGuidelines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktf.stringToTerraform(struct!.check),
    guideline: cdktf.stringToTerraform(struct!.guideline),
  }
}


export function dataBridgecrewMappingsGuidelinesToHclTerraform(struct?: DataBridgecrewMappingsGuidelines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktf.stringToHclTerraform(struct!.check),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guideline: {
      value: cdktf.stringToHclTerraform(struct!.guideline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBridgecrewMappingsGuidelinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewMappingsGuidelines | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._guideline !== undefined) {
      hasAnyValues = true;
      internalValueResult.guideline = this._guideline;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewMappingsGuidelines | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._check = undefined;
      this._guideline = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._check = value.check;
      this._guideline = value.guideline;
    }
  }

  // check - computed: false, optional: false, required: true
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // guideline - computed: false, optional: false, required: true
  private _guideline?: string; 
  public get guideline() {
    return this.getStringAttribute('guideline');
  }
  public set guideline(value: string) {
    this._guideline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guidelineInput() {
    return this._guideline;
  }
}

export class DataBridgecrewMappingsGuidelinesList extends cdktf.ComplexList {
  public internalValue? : DataBridgecrewMappingsGuidelines[] | cdktf.IResolvable

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
  public get(index: number): DataBridgecrewMappingsGuidelinesOutputReference {
    return new DataBridgecrewMappingsGuidelinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBridgecrewMappingsIdmappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings#bcid DataBridgecrewMappings#bcid}
  */
  readonly bcid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings#checkovid DataBridgecrewMappings#checkovid}
  */
  readonly checkovid: string;
}

export function dataBridgecrewMappingsIdmappingsToTerraform(struct?: DataBridgecrewMappingsIdmappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bcid: cdktf.stringToTerraform(struct!.bcid),
    checkovid: cdktf.stringToTerraform(struct!.checkovid),
  }
}


export function dataBridgecrewMappingsIdmappingsToHclTerraform(struct?: DataBridgecrewMappingsIdmappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bcid: {
      value: cdktf.stringToHclTerraform(struct!.bcid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checkovid: {
      value: cdktf.stringToHclTerraform(struct!.checkovid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBridgecrewMappingsIdmappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBridgecrewMappingsIdmappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bcid !== undefined) {
      hasAnyValues = true;
      internalValueResult.bcid = this._bcid;
    }
    if (this._checkovid !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkovid = this._checkovid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBridgecrewMappingsIdmappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bcid = undefined;
      this._checkovid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bcid = value.bcid;
      this._checkovid = value.checkovid;
    }
  }

  // bcid - computed: false, optional: false, required: true
  private _bcid?: string; 
  public get bcid() {
    return this.getStringAttribute('bcid');
  }
  public set bcid(value: string) {
    this._bcid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bcidInput() {
    return this._bcid;
  }

  // checkovid - computed: false, optional: false, required: true
  private _checkovid?: string; 
  public get checkovid() {
    return this.getStringAttribute('checkovid');
  }
  public set checkovid(value: string) {
    this._checkovid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkovidInput() {
    return this._checkovid;
  }
}

export class DataBridgecrewMappingsIdmappingsList extends cdktf.ComplexList {
  public internalValue? : DataBridgecrewMappingsIdmappings[] | cdktf.IResolvable

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
  public get(index: number): DataBridgecrewMappingsIdmappingsOutputReference {
    return new DataBridgecrewMappingsIdmappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings bridgecrew_mappings}
*/
export class DataBridgecrewMappings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bridgecrew_mappings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBridgecrewMappings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBridgecrewMappings to import
  * @param importFromId The id of the existing DataBridgecrewMappings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBridgecrewMappings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bridgecrew_mappings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/bridgecrew/0.3.7/docs/data-sources/mappings bridgecrew_mappings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBridgecrewMappingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBridgecrewMappingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bridgecrew_mappings',
      terraformGeneratorMetadata: {
        providerName: 'bridgecrew',
        providerVersion: '0.3.7',
        providerVersionConstraint: '0.3.7'
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
    this._guidelines.internalValue = config.guidelines;
    this._idmappings.internalValue = config.idmappings;
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

  // guidelines - computed: false, optional: true, required: false
  private _guidelines = new DataBridgecrewMappingsGuidelinesList(this, "guidelines", false);
  public get guidelines() {
    return this._guidelines;
  }
  public putGuidelines(value: DataBridgecrewMappingsGuidelines[] | cdktf.IResolvable) {
    this._guidelines.internalValue = value;
  }
  public resetGuidelines() {
    this._guidelines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidelinesInput() {
    return this._guidelines.internalValue;
  }

  // idmappings - computed: false, optional: true, required: false
  private _idmappings = new DataBridgecrewMappingsIdmappingsList(this, "idmappings", false);
  public get idmappings() {
    return this._idmappings;
  }
  public putIdmappings(value: DataBridgecrewMappingsIdmappings[] | cdktf.IResolvable) {
    this._idmappings.internalValue = value;
  }
  public resetIdmappings() {
    this._idmappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idmappingsInput() {
    return this._idmappings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      guidelines: cdktf.listMapper(dataBridgecrewMappingsGuidelinesToTerraform, true)(this._guidelines.internalValue),
      idmappings: cdktf.listMapper(dataBridgecrewMappingsIdmappingsToTerraform, true)(this._idmappings.internalValue),
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
      guidelines: {
        value: cdktf.listMapperHcl(dataBridgecrewMappingsGuidelinesToHclTerraform, true)(this._guidelines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataBridgecrewMappingsGuidelinesList",
      },
      idmappings: {
        value: cdktf.listMapperHcl(dataBridgecrewMappingsIdmappingsToHclTerraform, true)(this._idmappings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataBridgecrewMappingsIdmappingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
