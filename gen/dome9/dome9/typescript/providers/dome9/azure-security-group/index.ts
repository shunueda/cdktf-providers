// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#description AzureSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#dome9_cloud_account_id AzureSecurityGroup#dome9_cloud_account_id}
  */
  readonly dome9CloudAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#dome9_security_group_name AzureSecurityGroup#dome9_security_group_name}
  */
  readonly dome9SecurityGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#id AzureSecurityGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#is_tamper_protected AzureSecurityGroup#is_tamper_protected}
  */
  readonly isTamperProtected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#region AzureSecurityGroup#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#resource_group AzureSecurityGroup#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * inbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#inbound AzureSecurityGroup#inbound}
  */
  readonly inbound?: AzureSecurityGroupInbound[] | cdktf.IResolvable;
  /**
  * outbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#outbound AzureSecurityGroup#outbound}
  */
  readonly outbound?: AzureSecurityGroupOutbound[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#tags AzureSecurityGroup#tags}
  */
  readonly tags?: AzureSecurityGroupTags[] | cdktf.IResolvable;
}
export interface AzureSecurityGroupInboundDestinationScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#data AzureSecurityGroup#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#type AzureSecurityGroup#type}
  */
  readonly type: string;
}

export function azureSecurityGroupInboundDestinationScopesToTerraform(struct?: AzureSecurityGroupInboundDestinationScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function azureSecurityGroupInboundDestinationScopesToHclTerraform(struct?: AzureSecurityGroupInboundDestinationScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSecurityGroupInboundDestinationScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureSecurityGroupInboundDestinationScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSecurityGroupInboundDestinationScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class AzureSecurityGroupInboundDestinationScopesList extends cdktf.ComplexList {
  public internalValue? : AzureSecurityGroupInboundDestinationScopes[] | cdktf.IResolvable

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
  public get(index: number): AzureSecurityGroupInboundDestinationScopesOutputReference {
    return new AzureSecurityGroupInboundDestinationScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureSecurityGroupInboundSourceScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#data AzureSecurityGroup#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#type AzureSecurityGroup#type}
  */
  readonly type: string;
}

export function azureSecurityGroupInboundSourceScopesToTerraform(struct?: AzureSecurityGroupInboundSourceScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function azureSecurityGroupInboundSourceScopesToHclTerraform(struct?: AzureSecurityGroupInboundSourceScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSecurityGroupInboundSourceScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureSecurityGroupInboundSourceScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSecurityGroupInboundSourceScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class AzureSecurityGroupInboundSourceScopesList extends cdktf.ComplexList {
  public internalValue? : AzureSecurityGroupInboundSourceScopes[] | cdktf.IResolvable

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
  public get(index: number): AzureSecurityGroupInboundSourceScopesOutputReference {
    return new AzureSecurityGroupInboundSourceScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureSecurityGroupInbound {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#access AzureSecurityGroup#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#description AzureSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#destination_port_ranges AzureSecurityGroup#destination_port_ranges}
  */
  readonly destinationPortRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#is_default AzureSecurityGroup#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#name AzureSecurityGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#priority AzureSecurityGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#protocol AzureSecurityGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#source_port_ranges AzureSecurityGroup#source_port_ranges}
  */
  readonly sourcePortRanges: string[];
  /**
  * destination_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#destination_scopes AzureSecurityGroup#destination_scopes}
  */
  readonly destinationScopes: AzureSecurityGroupInboundDestinationScopes[] | cdktf.IResolvable;
  /**
  * source_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#source_scopes AzureSecurityGroup#source_scopes}
  */
  readonly sourceScopes: AzureSecurityGroupInboundSourceScopes[] | cdktf.IResolvable;
}

export function azureSecurityGroupInboundToTerraform(struct?: AzureSecurityGroupInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    description: cdktf.stringToTerraform(struct!.description),
    destination_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPortRanges),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePortRanges),
    destination_scopes: cdktf.listMapper(azureSecurityGroupInboundDestinationScopesToTerraform, true)(struct!.destinationScopes),
    source_scopes: cdktf.listMapper(azureSecurityGroupInboundSourceScopesToTerraform, true)(struct!.sourceScopes),
  }
}


export function azureSecurityGroupInboundToHclTerraform(struct?: AzureSecurityGroupInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPortRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePortRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_scopes: {
      value: cdktf.listMapperHcl(azureSecurityGroupInboundDestinationScopesToHclTerraform, true)(struct!.destinationScopes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureSecurityGroupInboundDestinationScopesList",
    },
    source_scopes: {
      value: cdktf.listMapperHcl(azureSecurityGroupInboundSourceScopesToHclTerraform, true)(struct!.sourceScopes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureSecurityGroupInboundSourceScopesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSecurityGroupInboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureSecurityGroupInbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationPortRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRanges = this._destinationPortRanges;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourcePortRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRanges = this._sourcePortRanges;
    }
    if (this._destinationScopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationScopes = this._destinationScopes?.internalValue;
    }
    if (this._sourceScopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceScopes = this._sourceScopes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSecurityGroupInbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._description = undefined;
      this._destinationPortRanges = undefined;
      this._isDefault = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._sourcePortRanges = undefined;
      this._destinationScopes.internalValue = undefined;
      this._sourceScopes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._description = value.description;
      this._destinationPortRanges = value.destinationPortRanges;
      this._isDefault = value.isDefault;
      this._name = value.name;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._sourcePortRanges = value.sourcePortRanges;
      this._destinationScopes.internalValue = value.destinationScopes;
      this._sourceScopes.internalValue = value.sourceScopes;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
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

  // destination_port_ranges - computed: false, optional: false, required: true
  private _destinationPortRanges?: string[]; 
  public get destinationPortRanges() {
    return this.getListAttribute('destination_port_ranges');
  }
  public set destinationPortRanges(value: string[]) {
    this._destinationPortRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangesInput() {
    return this._destinationPortRanges;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_port_ranges - computed: false, optional: false, required: true
  private _sourcePortRanges?: string[]; 
  public get sourcePortRanges() {
    return this.getListAttribute('source_port_ranges');
  }
  public set sourcePortRanges(value: string[]) {
    this._sourcePortRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangesInput() {
    return this._sourcePortRanges;
  }

  // destination_scopes - computed: false, optional: false, required: true
  private _destinationScopes = new AzureSecurityGroupInboundDestinationScopesList(this, "destination_scopes", false);
  public get destinationScopes() {
    return this._destinationScopes;
  }
  public putDestinationScopes(value: AzureSecurityGroupInboundDestinationScopes[] | cdktf.IResolvable) {
    this._destinationScopes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationScopesInput() {
    return this._destinationScopes.internalValue;
  }

  // source_scopes - computed: false, optional: false, required: true
  private _sourceScopes = new AzureSecurityGroupInboundSourceScopesList(this, "source_scopes", false);
  public get sourceScopes() {
    return this._sourceScopes;
  }
  public putSourceScopes(value: AzureSecurityGroupInboundSourceScopes[] | cdktf.IResolvable) {
    this._sourceScopes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceScopesInput() {
    return this._sourceScopes.internalValue;
  }
}

export class AzureSecurityGroupInboundList extends cdktf.ComplexList {
  public internalValue? : AzureSecurityGroupInbound[] | cdktf.IResolvable

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
  public get(index: number): AzureSecurityGroupInboundOutputReference {
    return new AzureSecurityGroupInboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureSecurityGroupOutboundDestinationScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#data AzureSecurityGroup#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#type AzureSecurityGroup#type}
  */
  readonly type: string;
}

export function azureSecurityGroupOutboundDestinationScopesToTerraform(struct?: AzureSecurityGroupOutboundDestinationScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function azureSecurityGroupOutboundDestinationScopesToHclTerraform(struct?: AzureSecurityGroupOutboundDestinationScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSecurityGroupOutboundDestinationScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureSecurityGroupOutboundDestinationScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSecurityGroupOutboundDestinationScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class AzureSecurityGroupOutboundDestinationScopesList extends cdktf.ComplexList {
  public internalValue? : AzureSecurityGroupOutboundDestinationScopes[] | cdktf.IResolvable

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
  public get(index: number): AzureSecurityGroupOutboundDestinationScopesOutputReference {
    return new AzureSecurityGroupOutboundDestinationScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureSecurityGroupOutboundSourceScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#data AzureSecurityGroup#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#type AzureSecurityGroup#type}
  */
  readonly type: string;
}

export function azureSecurityGroupOutboundSourceScopesToTerraform(struct?: AzureSecurityGroupOutboundSourceScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function azureSecurityGroupOutboundSourceScopesToHclTerraform(struct?: AzureSecurityGroupOutboundSourceScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSecurityGroupOutboundSourceScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureSecurityGroupOutboundSourceScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSecurityGroupOutboundSourceScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class AzureSecurityGroupOutboundSourceScopesList extends cdktf.ComplexList {
  public internalValue? : AzureSecurityGroupOutboundSourceScopes[] | cdktf.IResolvable

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
  public get(index: number): AzureSecurityGroupOutboundSourceScopesOutputReference {
    return new AzureSecurityGroupOutboundSourceScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureSecurityGroupOutbound {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#access AzureSecurityGroup#access}
  */
  readonly access?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#description AzureSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#destination_port_ranges AzureSecurityGroup#destination_port_ranges}
  */
  readonly destinationPortRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#is_default AzureSecurityGroup#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#name AzureSecurityGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#priority AzureSecurityGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#protocol AzureSecurityGroup#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#source_port_ranges AzureSecurityGroup#source_port_ranges}
  */
  readonly sourcePortRanges: string[];
  /**
  * destination_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#destination_scopes AzureSecurityGroup#destination_scopes}
  */
  readonly destinationScopes: AzureSecurityGroupOutboundDestinationScopes[] | cdktf.IResolvable;
  /**
  * source_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#source_scopes AzureSecurityGroup#source_scopes}
  */
  readonly sourceScopes: AzureSecurityGroupOutboundSourceScopes[] | cdktf.IResolvable;
}

export function azureSecurityGroupOutboundToTerraform(struct?: AzureSecurityGroupOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    description: cdktf.stringToTerraform(struct!.description),
    destination_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPortRanges),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePortRanges),
    destination_scopes: cdktf.listMapper(azureSecurityGroupOutboundDestinationScopesToTerraform, true)(struct!.destinationScopes),
    source_scopes: cdktf.listMapper(azureSecurityGroupOutboundSourceScopesToTerraform, true)(struct!.sourceScopes),
  }
}


export function azureSecurityGroupOutboundToHclTerraform(struct?: AzureSecurityGroupOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPortRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePortRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_scopes: {
      value: cdktf.listMapperHcl(azureSecurityGroupOutboundDestinationScopesToHclTerraform, true)(struct!.destinationScopes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureSecurityGroupOutboundDestinationScopesList",
    },
    source_scopes: {
      value: cdktf.listMapperHcl(azureSecurityGroupOutboundSourceScopesToHclTerraform, true)(struct!.sourceScopes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureSecurityGroupOutboundSourceScopesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSecurityGroupOutboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureSecurityGroupOutbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationPortRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRanges = this._destinationPortRanges;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourcePortRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRanges = this._sourcePortRanges;
    }
    if (this._destinationScopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationScopes = this._destinationScopes?.internalValue;
    }
    if (this._sourceScopes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceScopes = this._sourceScopes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSecurityGroupOutbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._description = undefined;
      this._destinationPortRanges = undefined;
      this._isDefault = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._sourcePortRanges = undefined;
      this._destinationScopes.internalValue = undefined;
      this._sourceScopes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._description = value.description;
      this._destinationPortRanges = value.destinationPortRanges;
      this._isDefault = value.isDefault;
      this._name = value.name;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._sourcePortRanges = value.sourcePortRanges;
      this._destinationScopes.internalValue = value.destinationScopes;
      this._sourceScopes.internalValue = value.sourceScopes;
    }
  }

  // access - computed: false, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
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

  // destination_port_ranges - computed: false, optional: false, required: true
  private _destinationPortRanges?: string[]; 
  public get destinationPortRanges() {
    return this.getListAttribute('destination_port_ranges');
  }
  public set destinationPortRanges(value: string[]) {
    this._destinationPortRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangesInput() {
    return this._destinationPortRanges;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_port_ranges - computed: false, optional: false, required: true
  private _sourcePortRanges?: string[]; 
  public get sourcePortRanges() {
    return this.getListAttribute('source_port_ranges');
  }
  public set sourcePortRanges(value: string[]) {
    this._sourcePortRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangesInput() {
    return this._sourcePortRanges;
  }

  // destination_scopes - computed: false, optional: false, required: true
  private _destinationScopes = new AzureSecurityGroupOutboundDestinationScopesList(this, "destination_scopes", false);
  public get destinationScopes() {
    return this._destinationScopes;
  }
  public putDestinationScopes(value: AzureSecurityGroupOutboundDestinationScopes[] | cdktf.IResolvable) {
    this._destinationScopes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationScopesInput() {
    return this._destinationScopes.internalValue;
  }

  // source_scopes - computed: false, optional: false, required: true
  private _sourceScopes = new AzureSecurityGroupOutboundSourceScopesList(this, "source_scopes", false);
  public get sourceScopes() {
    return this._sourceScopes;
  }
  public putSourceScopes(value: AzureSecurityGroupOutboundSourceScopes[] | cdktf.IResolvable) {
    this._sourceScopes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceScopesInput() {
    return this._sourceScopes.internalValue;
  }
}

export class AzureSecurityGroupOutboundList extends cdktf.ComplexList {
  public internalValue? : AzureSecurityGroupOutbound[] | cdktf.IResolvable

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
  public get(index: number): AzureSecurityGroupOutboundOutputReference {
    return new AzureSecurityGroupOutboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureSecurityGroupTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#key AzureSecurityGroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#value AzureSecurityGroup#value}
  */
  readonly value: string;
}

export function azureSecurityGroupTagsToTerraform(struct?: AzureSecurityGroupTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function azureSecurityGroupTagsToHclTerraform(struct?: AzureSecurityGroupTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSecurityGroupTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureSecurityGroupTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSecurityGroupTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AzureSecurityGroupTagsList extends cdktf.ComplexList {
  public internalValue? : AzureSecurityGroupTags[] | cdktf.IResolvable

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
  public get(index: number): AzureSecurityGroupTagsOutputReference {
    return new AzureSecurityGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group dome9_azure_security_group}
*/
export class AzureSecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_azure_security_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureSecurityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureSecurityGroup to import
  * @param importFromId The id of the existing AzureSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureSecurityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_azure_security_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/azure_security_group dome9_azure_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureSecurityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AzureSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_azure_security_group',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
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
    this._dome9CloudAccountId = config.dome9CloudAccountId;
    this._dome9SecurityGroupName = config.dome9SecurityGroupName;
    this._id = config.id;
    this._isTamperProtected = config.isTamperProtected;
    this._region = config.region;
    this._resourceGroup = config.resourceGroup;
    this._inbound.internalValue = config.inbound;
    this._outbound.internalValue = config.outbound;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_account_name - computed: true, optional: false, required: false
  public get cloudAccountName() {
    return this.getStringAttribute('cloud_account_name');
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

  // dome9_cloud_account_id - computed: false, optional: false, required: true
  private _dome9CloudAccountId?: string; 
  public get dome9CloudAccountId() {
    return this.getStringAttribute('dome9_cloud_account_id');
  }
  public set dome9CloudAccountId(value: string) {
    this._dome9CloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dome9CloudAccountIdInput() {
    return this._dome9CloudAccountId;
  }

  // dome9_security_group_name - computed: false, optional: false, required: true
  private _dome9SecurityGroupName?: string; 
  public get dome9SecurityGroupName() {
    return this.getStringAttribute('dome9_security_group_name');
  }
  public set dome9SecurityGroupName(value: string) {
    this._dome9SecurityGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dome9SecurityGroupNameInput() {
    return this._dome9SecurityGroupName;
  }

  // external_security_group_id - computed: true, optional: false, required: false
  public get externalSecurityGroupId() {
    return this.getStringAttribute('external_security_group_id');
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

  // is_tamper_protected - computed: false, optional: true, required: false
  private _isTamperProtected?: boolean | cdktf.IResolvable; 
  public get isTamperProtected() {
    return this.getBooleanAttribute('is_tamper_protected');
  }
  public set isTamperProtected(value: boolean | cdktf.IResolvable) {
    this._isTamperProtected = value;
  }
  public resetIsTamperProtected() {
    this._isTamperProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTamperProtectedInput() {
    return this._isTamperProtected;
  }

  // last_updated_by_dome9 - computed: true, optional: false, required: false
  public get lastUpdatedByDome9() {
    return this.getStringAttribute('last_updated_by_dome9');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound = new AzureSecurityGroupInboundList(this, "inbound", false);
  public get inbound() {
    return this._inbound;
  }
  public putInbound(value: AzureSecurityGroupInbound[] | cdktf.IResolvable) {
    this._inbound.internalValue = value;
  }
  public resetInbound() {
    this._inbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound.internalValue;
  }

  // outbound - computed: false, optional: true, required: false
  private _outbound = new AzureSecurityGroupOutboundList(this, "outbound", false);
  public get outbound() {
    return this._outbound;
  }
  public putOutbound(value: AzureSecurityGroupOutbound[] | cdktf.IResolvable) {
    this._outbound.internalValue = value;
  }
  public resetOutbound() {
    this._outbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AzureSecurityGroupTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AzureSecurityGroupTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dome9_cloud_account_id: cdktf.stringToTerraform(this._dome9CloudAccountId),
      dome9_security_group_name: cdktf.stringToTerraform(this._dome9SecurityGroupName),
      id: cdktf.stringToTerraform(this._id),
      is_tamper_protected: cdktf.booleanToTerraform(this._isTamperProtected),
      region: cdktf.stringToTerraform(this._region),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      inbound: cdktf.listMapper(azureSecurityGroupInboundToTerraform, true)(this._inbound.internalValue),
      outbound: cdktf.listMapper(azureSecurityGroupOutboundToTerraform, true)(this._outbound.internalValue),
      tags: cdktf.listMapper(azureSecurityGroupTagsToTerraform, true)(this._tags.internalValue),
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
      dome9_cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._dome9CloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dome9_security_group_name: {
        value: cdktf.stringToHclTerraform(this._dome9SecurityGroupName),
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
      is_tamper_protected: {
        value: cdktf.booleanToHclTerraform(this._isTamperProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound: {
        value: cdktf.listMapperHcl(azureSecurityGroupInboundToHclTerraform, true)(this._inbound.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSecurityGroupInboundList",
      },
      outbound: {
        value: cdktf.listMapperHcl(azureSecurityGroupOutboundToHclTerraform, true)(this._outbound.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSecurityGroupOutboundList",
      },
      tags: {
        value: cdktf.listMapperHcl(azureSecurityGroupTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureSecurityGroupTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
