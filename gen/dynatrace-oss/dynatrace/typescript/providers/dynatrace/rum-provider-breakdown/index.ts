// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RumProviderBreakdownConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify an URL for the provider's brand icon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#icon_url RumProviderBreakdown#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#id RumProviderBreakdown#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#insert_after RumProviderBreakdown#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Send the patterns of this provider to Dynatrace to help us improve 3rd-party detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#report_public_improvement RumProviderBreakdown#report_public_improvement}
  */
  readonly reportPublicImprovement: boolean | cdktf.IResolvable;
  /**
  * Resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#resource_name RumProviderBreakdown#resource_name}
  */
  readonly resourceName: string;
  /**
  * Possible Values: `FirstParty`, `ThirdParty`, `Cdn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#resource_type RumProviderBreakdown#resource_type}
  */
  readonly resourceType: string;
  /**
  * domain_name_pattern_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#domain_name_pattern_list RumProviderBreakdown#domain_name_pattern_list}
  */
  readonly domainNamePatternList: RumProviderBreakdownDomainNamePatternListStruct;
}
export interface RumProviderBreakdownDomainNamePatternListDomainNamePattern {
  /**
  * Use a ends-with pattern for this content provider's domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#pattern RumProviderBreakdown#pattern}
  */
  readonly pattern: string;
}

export function rumProviderBreakdownDomainNamePatternListDomainNamePatternToTerraform(struct?: RumProviderBreakdownDomainNamePatternListDomainNamePattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function rumProviderBreakdownDomainNamePatternListDomainNamePatternToHclTerraform(struct?: RumProviderBreakdownDomainNamePatternListDomainNamePattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RumProviderBreakdownDomainNamePatternListDomainNamePatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RumProviderBreakdownDomainNamePatternListDomainNamePattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RumProviderBreakdownDomainNamePatternListDomainNamePattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class RumProviderBreakdownDomainNamePatternListDomainNamePatternList extends cdktf.ComplexList {
  public internalValue? : RumProviderBreakdownDomainNamePatternListDomainNamePattern[] | cdktf.IResolvable

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
  public get(index: number): RumProviderBreakdownDomainNamePatternListDomainNamePatternOutputReference {
    return new RumProviderBreakdownDomainNamePatternListDomainNamePatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RumProviderBreakdownDomainNamePatternListStruct {
  /**
  * domain_name_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#domain_name_pattern RumProviderBreakdown#domain_name_pattern}
  */
  readonly domainNamePattern: RumProviderBreakdownDomainNamePatternListDomainNamePattern[] | cdktf.IResolvable;
}

export function rumProviderBreakdownDomainNamePatternListStructToTerraform(struct?: RumProviderBreakdownDomainNamePatternListStructOutputReference | RumProviderBreakdownDomainNamePatternListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name_pattern: cdktf.listMapper(rumProviderBreakdownDomainNamePatternListDomainNamePatternToTerraform, true)(struct!.domainNamePattern),
  }
}


export function rumProviderBreakdownDomainNamePatternListStructToHclTerraform(struct?: RumProviderBreakdownDomainNamePatternListStructOutputReference | RumProviderBreakdownDomainNamePatternListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name_pattern: {
      value: cdktf.listMapperHcl(rumProviderBreakdownDomainNamePatternListDomainNamePatternToHclTerraform, true)(struct!.domainNamePattern),
      isBlock: true,
      type: "set",
      storageClassType: "RumProviderBreakdownDomainNamePatternListDomainNamePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RumProviderBreakdownDomainNamePatternListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RumProviderBreakdownDomainNamePatternListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainNamePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNamePattern = this._domainNamePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RumProviderBreakdownDomainNamePatternListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainNamePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainNamePattern.internalValue = value.domainNamePattern;
    }
  }

  // domain_name_pattern - computed: false, optional: false, required: true
  private _domainNamePattern = new RumProviderBreakdownDomainNamePatternListDomainNamePatternList(this, "domain_name_pattern", true);
  public get domainNamePattern() {
    return this._domainNamePattern;
  }
  public putDomainNamePattern(value: RumProviderBreakdownDomainNamePatternListDomainNamePattern[] | cdktf.IResolvable) {
    this._domainNamePattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamePatternInput() {
    return this._domainNamePattern.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown dynatrace_rum_provider_breakdown}
*/
export class RumProviderBreakdown extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_rum_provider_breakdown";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RumProviderBreakdown resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumProviderBreakdown to import
  * @param importFromId The id of the existing RumProviderBreakdown that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumProviderBreakdown to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_rum_provider_breakdown", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/rum_provider_breakdown dynatrace_rum_provider_breakdown} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumProviderBreakdownConfig
  */
  public constructor(scope: Construct, id: string, config: RumProviderBreakdownConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_rum_provider_breakdown',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._iconUrl = config.iconUrl;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._reportPublicImprovement = config.reportPublicImprovement;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._domainNamePatternList.internalValue = config.domainNamePatternList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icon_url - computed: false, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // report_public_improvement - computed: false, optional: false, required: true
  private _reportPublicImprovement?: boolean | cdktf.IResolvable; 
  public get reportPublicImprovement() {
    return this.getBooleanAttribute('report_public_improvement');
  }
  public set reportPublicImprovement(value: boolean | cdktf.IResolvable) {
    this._reportPublicImprovement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportPublicImprovementInput() {
    return this._reportPublicImprovement;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // domain_name_pattern_list - computed: false, optional: false, required: true
  private _domainNamePatternList = new RumProviderBreakdownDomainNamePatternListStructOutputReference(this, "domain_name_pattern_list");
  public get domainNamePatternList() {
    return this._domainNamePatternList;
  }
  public putDomainNamePatternList(value: RumProviderBreakdownDomainNamePatternListStruct) {
    this._domainNamePatternList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamePatternListInput() {
    return this._domainNamePatternList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icon_url: cdktf.stringToTerraform(this._iconUrl),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      report_public_improvement: cdktf.booleanToTerraform(this._reportPublicImprovement),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      domain_name_pattern_list: rumProviderBreakdownDomainNamePatternListStructToTerraform(this._domainNamePatternList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icon_url: {
        value: cdktf.stringToHclTerraform(this._iconUrl),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_public_improvement: {
        value: cdktf.booleanToHclTerraform(this._reportPublicImprovement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name_pattern_list: {
        value: rumProviderBreakdownDomainNamePatternListStructToHclTerraform(this._domainNamePatternList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RumProviderBreakdownDomainNamePatternListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
