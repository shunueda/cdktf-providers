// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolutionLandingZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#id SolutionLandingZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#org SolutionLandingZone#org}
  */
  readonly org?: string;
  /**
  * catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#catalog SolutionLandingZone#catalog}
  */
  readonly catalog: SolutionLandingZoneCatalog;
  /**
  * vdc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#vdc SolutionLandingZone#vdc}
  */
  readonly vdc: SolutionLandingZoneVdc[] | cdktf.IResolvable;
}
export interface SolutionLandingZoneCatalog {
  /**
  * Capability set for catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#capabilities SolutionLandingZone#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * ID of catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#id SolutionLandingZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function solutionLandingZoneCatalogToTerraform(struct?: SolutionLandingZoneCatalogOutputReference | SolutionLandingZoneCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function solutionLandingZoneCatalogToHclTerraform(struct?: SolutionLandingZoneCatalogOutputReference | SolutionLandingZoneCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolutionLandingZoneCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SolutionLandingZoneCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolutionLandingZoneCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capabilities = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capabilities = value.capabilities;
      this._id = value.id;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface SolutionLandingZoneVdcComputePolicy {
  /**
  * Set of capabilities for Compute Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#capabilities SolutionLandingZone#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * ID of Compute Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#id SolutionLandingZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Boolean value that marks if this Compute Policy should be default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#is_default SolutionLandingZone#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
}

export function solutionLandingZoneVdcComputePolicyToTerraform(struct?: SolutionLandingZoneVdcComputePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    id: cdktf.stringToTerraform(struct!.id),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
  }
}


export function solutionLandingZoneVdcComputePolicyToHclTerraform(struct?: SolutionLandingZoneVdcComputePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolutionLandingZoneVdcComputePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SolutionLandingZoneVdcComputePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolutionLandingZoneVdcComputePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._id = undefined;
      this._isDefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._id = value.id;
      this._isDefault = value.isDefault;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SolutionLandingZoneVdcComputePolicyList extends cdktf.ComplexList {
  public internalValue? : SolutionLandingZoneVdcComputePolicy[] | cdktf.IResolvable

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
  public get(index: number): SolutionLandingZoneVdcComputePolicyOutputReference {
    return new SolutionLandingZoneVdcComputePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SolutionLandingZoneVdcOrgVdcNetwork {
  /**
  * Set of capabilities for Org VDC Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#capabilities SolutionLandingZone#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * ID of Org VDC Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#id SolutionLandingZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Boolean value that marks if this Org VDC Network should be default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#is_default SolutionLandingZone#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
}

export function solutionLandingZoneVdcOrgVdcNetworkToTerraform(struct?: SolutionLandingZoneVdcOrgVdcNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    id: cdktf.stringToTerraform(struct!.id),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
  }
}


export function solutionLandingZoneVdcOrgVdcNetworkToHclTerraform(struct?: SolutionLandingZoneVdcOrgVdcNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolutionLandingZoneVdcOrgVdcNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SolutionLandingZoneVdcOrgVdcNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolutionLandingZoneVdcOrgVdcNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._id = undefined;
      this._isDefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._id = value.id;
      this._isDefault = value.isDefault;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SolutionLandingZoneVdcOrgVdcNetworkList extends cdktf.ComplexList {
  public internalValue? : SolutionLandingZoneVdcOrgVdcNetwork[] | cdktf.IResolvable

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
  public get(index: number): SolutionLandingZoneVdcOrgVdcNetworkOutputReference {
    return new SolutionLandingZoneVdcOrgVdcNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SolutionLandingZoneVdcStoragePolicy {
  /**
  * Set of capabilities for Storage Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#capabilities SolutionLandingZone#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * ID of Storage Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#id SolutionLandingZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Boolean value that marks if this Storage Policy should be default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#is_default SolutionLandingZone#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
}

export function solutionLandingZoneVdcStoragePolicyToTerraform(struct?: SolutionLandingZoneVdcStoragePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    id: cdktf.stringToTerraform(struct!.id),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
  }
}


export function solutionLandingZoneVdcStoragePolicyToHclTerraform(struct?: SolutionLandingZoneVdcStoragePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolutionLandingZoneVdcStoragePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SolutionLandingZoneVdcStoragePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolutionLandingZoneVdcStoragePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._id = undefined;
      this._isDefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._id = value.id;
      this._isDefault = value.isDefault;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SolutionLandingZoneVdcStoragePolicyList extends cdktf.ComplexList {
  public internalValue? : SolutionLandingZoneVdcStoragePolicy[] | cdktf.IResolvable

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
  public get(index: number): SolutionLandingZoneVdcStoragePolicyOutputReference {
    return new SolutionLandingZoneVdcStoragePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SolutionLandingZoneVdc {
  /**
  * Capability set for VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#capabilities SolutionLandingZone#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * ID of VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#id SolutionLandingZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Defines if the entity should be considered as default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#is_default SolutionLandingZone#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * compute_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#compute_policy SolutionLandingZone#compute_policy}
  */
  readonly computePolicy: SolutionLandingZoneVdcComputePolicy[] | cdktf.IResolvable;
  /**
  * org_vdc_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#org_vdc_network SolutionLandingZone#org_vdc_network}
  */
  readonly orgVdcNetwork: SolutionLandingZoneVdcOrgVdcNetwork[] | cdktf.IResolvable;
  /**
  * storage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#storage_policy SolutionLandingZone#storage_policy}
  */
  readonly storagePolicy: SolutionLandingZoneVdcStoragePolicy[] | cdktf.IResolvable;
}

export function solutionLandingZoneVdcToTerraform(struct?: SolutionLandingZoneVdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.capabilities),
    id: cdktf.stringToTerraform(struct!.id),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    compute_policy: cdktf.listMapper(solutionLandingZoneVdcComputePolicyToTerraform, true)(struct!.computePolicy),
    org_vdc_network: cdktf.listMapper(solutionLandingZoneVdcOrgVdcNetworkToTerraform, true)(struct!.orgVdcNetwork),
    storage_policy: cdktf.listMapper(solutionLandingZoneVdcStoragePolicyToTerraform, true)(struct!.storagePolicy),
  }
}


export function solutionLandingZoneVdcToHclTerraform(struct?: SolutionLandingZoneVdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compute_policy: {
      value: cdktf.listMapperHcl(solutionLandingZoneVdcComputePolicyToHclTerraform, true)(struct!.computePolicy),
      isBlock: true,
      type: "set",
      storageClassType: "SolutionLandingZoneVdcComputePolicyList",
    },
    org_vdc_network: {
      value: cdktf.listMapperHcl(solutionLandingZoneVdcOrgVdcNetworkToHclTerraform, true)(struct!.orgVdcNetwork),
      isBlock: true,
      type: "set",
      storageClassType: "SolutionLandingZoneVdcOrgVdcNetworkList",
    },
    storage_policy: {
      value: cdktf.listMapperHcl(solutionLandingZoneVdcStoragePolicyToHclTerraform, true)(struct!.storagePolicy),
      isBlock: true,
      type: "set",
      storageClassType: "SolutionLandingZoneVdcStoragePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SolutionLandingZoneVdcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SolutionLandingZoneVdc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._computePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computePolicy = this._computePolicy?.internalValue;
    }
    if (this._orgVdcNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgVdcNetwork = this._orgVdcNetwork?.internalValue;
    }
    if (this._storagePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicy = this._storagePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SolutionLandingZoneVdc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilities = undefined;
      this._id = undefined;
      this._isDefault = undefined;
      this._computePolicy.internalValue = undefined;
      this._orgVdcNetwork.internalValue = undefined;
      this._storagePolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilities = value.capabilities;
      this._id = value.id;
      this._isDefault = value.isDefault;
      this._computePolicy.internalValue = value.computePolicy;
      this._orgVdcNetwork.internalValue = value.orgVdcNetwork;
      this._storagePolicy.internalValue = value.storagePolicy;
    }
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('capabilities'));
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_default - computed: false, optional: false, required: true
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // compute_policy - computed: false, optional: false, required: true
  private _computePolicy = new SolutionLandingZoneVdcComputePolicyList(this, "compute_policy", true);
  public get computePolicy() {
    return this._computePolicy;
  }
  public putComputePolicy(value: SolutionLandingZoneVdcComputePolicy[] | cdktf.IResolvable) {
    this._computePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computePolicyInput() {
    return this._computePolicy.internalValue;
  }

  // org_vdc_network - computed: false, optional: false, required: true
  private _orgVdcNetwork = new SolutionLandingZoneVdcOrgVdcNetworkList(this, "org_vdc_network", true);
  public get orgVdcNetwork() {
    return this._orgVdcNetwork;
  }
  public putOrgVdcNetwork(value: SolutionLandingZoneVdcOrgVdcNetwork[] | cdktf.IResolvable) {
    this._orgVdcNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgVdcNetworkInput() {
    return this._orgVdcNetwork.internalValue;
  }

  // storage_policy - computed: false, optional: false, required: true
  private _storagePolicy = new SolutionLandingZoneVdcStoragePolicyList(this, "storage_policy", true);
  public get storagePolicy() {
    return this._storagePolicy;
  }
  public putStoragePolicy(value: SolutionLandingZoneVdcStoragePolicy[] | cdktf.IResolvable) {
    this._storagePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyInput() {
    return this._storagePolicy.internalValue;
  }
}

export class SolutionLandingZoneVdcList extends cdktf.ComplexList {
  public internalValue? : SolutionLandingZoneVdc[] | cdktf.IResolvable

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
  public get(index: number): SolutionLandingZoneVdcOutputReference {
    return new SolutionLandingZoneVdcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone vcd_solution_landing_zone}
*/
export class SolutionLandingZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_solution_landing_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolutionLandingZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolutionLandingZone to import
  * @param importFromId The id of the existing SolutionLandingZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolutionLandingZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_solution_landing_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/solution_landing_zone vcd_solution_landing_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolutionLandingZoneConfig
  */
  public constructor(scope: Construct, id: string, config: SolutionLandingZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_solution_landing_zone',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._org = config.org;
    this._catalog.internalValue = config.catalog;
    this._vdc.internalValue = config.vdc;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog = new SolutionLandingZoneCatalogOutputReference(this, "catalog");
  public get catalog() {
    return this._catalog;
  }
  public putCatalog(value: SolutionLandingZoneCatalog) {
    this._catalog.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog.internalValue;
  }

  // vdc - computed: false, optional: false, required: true
  private _vdc = new SolutionLandingZoneVdcList(this, "vdc", true);
  public get vdc() {
    return this._vdc;
  }
  public putVdc(value: SolutionLandingZoneVdc[] | cdktf.IResolvable) {
    this._vdc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org: cdktf.stringToTerraform(this._org),
      catalog: solutionLandingZoneCatalogToTerraform(this._catalog.internalValue),
      vdc: cdktf.listMapper(solutionLandingZoneVdcToTerraform, true)(this._vdc.internalValue),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog: {
        value: solutionLandingZoneCatalogToHclTerraform(this._catalog.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SolutionLandingZoneCatalogList",
      },
      vdc: {
        value: cdktf.listMapperHcl(solutionLandingZoneVdcToHclTerraform, true)(this._vdc.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SolutionLandingZoneVdcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
