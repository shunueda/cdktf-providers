// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#dome9_security_group_id CloudSecurityGroupRule#dome9_security_group_id}
  */
  readonly dome9SecurityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#id CloudSecurityGroupRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#services CloudSecurityGroupRule#services}
  */
  readonly services?: CloudSecurityGroupRuleServices[] | cdktf.IResolvable;
}
export interface CloudSecurityGroupRuleServicesInboundScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#data CloudSecurityGroupRule#data}
  */
  readonly data: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#type CloudSecurityGroupRule#type}
  */
  readonly type: string;
}

export function cloudSecurityGroupRuleServicesInboundScopeToTerraform(struct?: CloudSecurityGroupRuleServicesInboundScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudSecurityGroupRuleServicesInboundScopeToHclTerraform(struct?: CloudSecurityGroupRuleServicesInboundScope | cdktf.IResolvable): any {
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

export class CloudSecurityGroupRuleServicesInboundScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudSecurityGroupRuleServicesInboundScope | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudSecurityGroupRuleServicesInboundScope | cdktf.IResolvable | undefined) {
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

export class CloudSecurityGroupRuleServicesInboundScopeList extends cdktf.ComplexList {
  public internalValue? : CloudSecurityGroupRuleServicesInboundScope[] | cdktf.IResolvable

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
  public get(index: number): CloudSecurityGroupRuleServicesInboundScopeOutputReference {
    return new CloudSecurityGroupRuleServicesInboundScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudSecurityGroupRuleServicesInbound {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#description CloudSecurityGroupRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#name CloudSecurityGroupRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#open_for_all CloudSecurityGroupRule#open_for_all}
  */
  readonly openForAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#port CloudSecurityGroupRule#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#protocol_type CloudSecurityGroupRule#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#scope CloudSecurityGroupRule#scope}
  */
  readonly scope?: CloudSecurityGroupRuleServicesInboundScope[] | cdktf.IResolvable;
}

export function cloudSecurityGroupRuleServicesInboundToTerraform(struct?: CloudSecurityGroupRuleServicesInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    open_for_all: cdktf.booleanToTerraform(struct!.openForAll),
    port: cdktf.stringToTerraform(struct!.port),
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    scope: cdktf.listMapper(cloudSecurityGroupRuleServicesInboundScopeToTerraform, true)(struct!.scope),
  }
}


export function cloudSecurityGroupRuleServicesInboundToHclTerraform(struct?: CloudSecurityGroupRuleServicesInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_for_all: {
      value: cdktf.booleanToHclTerraform(struct!.openForAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(cloudSecurityGroupRuleServicesInboundScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "set",
      storageClassType: "CloudSecurityGroupRuleServicesInboundScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSecurityGroupRuleServicesInboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudSecurityGroupRuleServicesInbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._openForAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.openForAll = this._openForAll;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSecurityGroupRuleServicesInbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._openForAll = undefined;
      this._port = undefined;
      this._protocolType = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._openForAll = value.openForAll;
      this._port = value.port;
      this._protocolType = value.protocolType;
      this._scope.internalValue = value.scope;
    }
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // open_for_all - computed: false, optional: true, required: false
  private _openForAll?: boolean | cdktf.IResolvable; 
  public get openForAll() {
    return this.getBooleanAttribute('open_for_all');
  }
  public set openForAll(value: boolean | cdktf.IResolvable) {
    this._openForAll = value;
  }
  public resetOpenForAll() {
    this._openForAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openForAllInput() {
    return this._openForAll;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new CloudSecurityGroupRuleServicesInboundScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }
  public putScope(value: CloudSecurityGroupRuleServicesInboundScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class CloudSecurityGroupRuleServicesInboundList extends cdktf.ComplexList {
  public internalValue? : CloudSecurityGroupRuleServicesInbound[] | cdktf.IResolvable

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
  public get(index: number): CloudSecurityGroupRuleServicesInboundOutputReference {
    return new CloudSecurityGroupRuleServicesInboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudSecurityGroupRuleServicesOutboundScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#data CloudSecurityGroupRule#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#type CloudSecurityGroupRule#type}
  */
  readonly type?: string;
}

export function cloudSecurityGroupRuleServicesOutboundScopeToTerraform(struct?: CloudSecurityGroupRuleServicesOutboundScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudSecurityGroupRuleServicesOutboundScopeToHclTerraform(struct?: CloudSecurityGroupRuleServicesOutboundScope | cdktf.IResolvable): any {
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

export class CloudSecurityGroupRuleServicesOutboundScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudSecurityGroupRuleServicesOutboundScope | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudSecurityGroupRuleServicesOutboundScope | cdktf.IResolvable | undefined) {
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

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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
}

export class CloudSecurityGroupRuleServicesOutboundScopeList extends cdktf.ComplexList {
  public internalValue? : CloudSecurityGroupRuleServicesOutboundScope[] | cdktf.IResolvable

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
  public get(index: number): CloudSecurityGroupRuleServicesOutboundScopeOutputReference {
    return new CloudSecurityGroupRuleServicesOutboundScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudSecurityGroupRuleServicesOutbound {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#description CloudSecurityGroupRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#name CloudSecurityGroupRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#open_for_all CloudSecurityGroupRule#open_for_all}
  */
  readonly openForAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#port CloudSecurityGroupRule#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#protocol_type CloudSecurityGroupRule#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#scope CloudSecurityGroupRule#scope}
  */
  readonly scope?: CloudSecurityGroupRuleServicesOutboundScope[] | cdktf.IResolvable;
}

export function cloudSecurityGroupRuleServicesOutboundToTerraform(struct?: CloudSecurityGroupRuleServicesOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    open_for_all: cdktf.booleanToTerraform(struct!.openForAll),
    port: cdktf.stringToTerraform(struct!.port),
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
    scope: cdktf.listMapper(cloudSecurityGroupRuleServicesOutboundScopeToTerraform, true)(struct!.scope),
  }
}


export function cloudSecurityGroupRuleServicesOutboundToHclTerraform(struct?: CloudSecurityGroupRuleServicesOutbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_for_all: {
      value: cdktf.booleanToHclTerraform(struct!.openForAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(cloudSecurityGroupRuleServicesOutboundScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "set",
      storageClassType: "CloudSecurityGroupRuleServicesOutboundScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSecurityGroupRuleServicesOutboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudSecurityGroupRuleServicesOutbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._openForAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.openForAll = this._openForAll;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSecurityGroupRuleServicesOutbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._openForAll = undefined;
      this._port = undefined;
      this._protocolType = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._openForAll = value.openForAll;
      this._port = value.port;
      this._protocolType = value.protocolType;
      this._scope.internalValue = value.scope;
    }
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // open_for_all - computed: false, optional: true, required: false
  private _openForAll?: boolean | cdktf.IResolvable; 
  public get openForAll() {
    return this.getBooleanAttribute('open_for_all');
  }
  public set openForAll(value: boolean | cdktf.IResolvable) {
    this._openForAll = value;
  }
  public resetOpenForAll() {
    this._openForAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openForAllInput() {
    return this._openForAll;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new CloudSecurityGroupRuleServicesOutboundScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }
  public putScope(value: CloudSecurityGroupRuleServicesOutboundScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class CloudSecurityGroupRuleServicesOutboundList extends cdktf.ComplexList {
  public internalValue? : CloudSecurityGroupRuleServicesOutbound[] | cdktf.IResolvable

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
  public get(index: number): CloudSecurityGroupRuleServicesOutboundOutputReference {
    return new CloudSecurityGroupRuleServicesOutboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudSecurityGroupRuleServices {
  /**
  * inbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#inbound CloudSecurityGroupRule#inbound}
  */
  readonly inbound?: CloudSecurityGroupRuleServicesInbound[] | cdktf.IResolvable;
  /**
  * outbound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#outbound CloudSecurityGroupRule#outbound}
  */
  readonly outbound?: CloudSecurityGroupRuleServicesOutbound[] | cdktf.IResolvable;
}

export function cloudSecurityGroupRuleServicesToTerraform(struct?: CloudSecurityGroupRuleServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound: cdktf.listMapper(cloudSecurityGroupRuleServicesInboundToTerraform, true)(struct!.inbound),
    outbound: cdktf.listMapper(cloudSecurityGroupRuleServicesOutboundToTerraform, true)(struct!.outbound),
  }
}


export function cloudSecurityGroupRuleServicesToHclTerraform(struct?: CloudSecurityGroupRuleServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound: {
      value: cdktf.listMapperHcl(cloudSecurityGroupRuleServicesInboundToHclTerraform, true)(struct!.inbound),
      isBlock: true,
      type: "set",
      storageClassType: "CloudSecurityGroupRuleServicesInboundList",
    },
    outbound: {
      value: cdktf.listMapperHcl(cloudSecurityGroupRuleServicesOutboundToHclTerraform, true)(struct!.outbound),
      isBlock: true,
      type: "set",
      storageClassType: "CloudSecurityGroupRuleServicesOutboundList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSecurityGroupRuleServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudSecurityGroupRuleServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound?.internalValue;
    }
    if (this._outbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbound = this._outbound?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSecurityGroupRuleServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inbound.internalValue = undefined;
      this._outbound.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inbound.internalValue = value.inbound;
      this._outbound.internalValue = value.outbound;
    }
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound = new CloudSecurityGroupRuleServicesInboundList(this, "inbound", true);
  public get inbound() {
    return this._inbound;
  }
  public putInbound(value: CloudSecurityGroupRuleServicesInbound[] | cdktf.IResolvable) {
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
  private _outbound = new CloudSecurityGroupRuleServicesOutboundList(this, "outbound", true);
  public get outbound() {
    return this._outbound;
  }
  public putOutbound(value: CloudSecurityGroupRuleServicesOutbound[] | cdktf.IResolvable) {
    this._outbound.internalValue = value;
  }
  public resetOutbound() {
    this._outbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound.internalValue;
  }
}

export class CloudSecurityGroupRuleServicesList extends cdktf.ComplexList {
  public internalValue? : CloudSecurityGroupRuleServices[] | cdktf.IResolvable

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
  public get(index: number): CloudSecurityGroupRuleServicesOutputReference {
    return new CloudSecurityGroupRuleServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule dome9_cloud_security_group_rule}
*/
export class CloudSecurityGroupRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_cloud_security_group_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudSecurityGroupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudSecurityGroupRule to import
  * @param importFromId The id of the existing CloudSecurityGroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudSecurityGroupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_cloud_security_group_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/cloud_security_group_rule dome9_cloud_security_group_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSecurityGroupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudSecurityGroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_cloud_security_group_rule',
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
    this._dome9SecurityGroupId = config.dome9SecurityGroupId;
    this._id = config.id;
    this._services.internalValue = config.services;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dome9_security_group_id - computed: false, optional: false, required: true
  private _dome9SecurityGroupId?: string; 
  public get dome9SecurityGroupId() {
    return this.getStringAttribute('dome9_security_group_id');
  }
  public set dome9SecurityGroupId(value: string) {
    this._dome9SecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dome9SecurityGroupIdInput() {
    return this._dome9SecurityGroupId;
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

  // services - computed: false, optional: true, required: false
  private _services = new CloudSecurityGroupRuleServicesList(this, "services", true);
  public get services() {
    return this._services;
  }
  public putServices(value: CloudSecurityGroupRuleServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dome9_security_group_id: cdktf.stringToTerraform(this._dome9SecurityGroupId),
      id: cdktf.stringToTerraform(this._id),
      services: cdktf.listMapper(cloudSecurityGroupRuleServicesToTerraform, true)(this._services.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dome9_security_group_id: {
        value: cdktf.stringToHclTerraform(this._dome9SecurityGroupId),
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
      services: {
        value: cdktf.listMapperHcl(cloudSecurityGroupRuleServicesToHclTerraform, true)(this._services.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudSecurityGroupRuleServicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
