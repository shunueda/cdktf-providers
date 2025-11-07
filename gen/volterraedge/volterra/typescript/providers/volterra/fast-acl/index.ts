// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FastAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#annotations FastAcl#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#description FastAcl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#disable FastAcl#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#id FastAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#labels FastAcl#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#namespace FastAcl#namespace}
  */
  readonly namespace: string;
  /**
  * protocol_policer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#protocol_policer FastAcl#protocol_policer}
  */
  readonly protocolPolicer?: FastAclProtocolPolicer;
  /**
  * re_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#re_acl FastAcl#re_acl}
  */
  readonly reAcl?: FastAclReAcl;
  /**
  * site_acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#site_acl FastAcl#site_acl}
  */
  readonly siteAcl?: FastAclSiteAcl;
}
export interface FastAclProtocolPolicer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#namespace FastAcl#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#tenant FastAcl#tenant}
  */
  readonly tenant?: string;
}

export function fastAclProtocolPolicerToTerraform(struct?: FastAclProtocolPolicerOutputReference | FastAclProtocolPolicer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fastAclProtocolPolicerToHclTerraform(struct?: FastAclProtocolPolicerOutputReference | FastAclProtocolPolicer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclProtocolPolicerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclProtocolPolicer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclProtocolPolicer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface FastAclReAclFastAclRulesActionPolicerActionRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#namespace FastAcl#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#tenant FastAcl#tenant}
  */
  readonly tenant?: string;
}

export function fastAclReAclFastAclRulesActionPolicerActionRefToTerraform(struct?: FastAclReAclFastAclRulesActionPolicerActionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fastAclReAclFastAclRulesActionPolicerActionRefToHclTerraform(struct?: FastAclReAclFastAclRulesActionPolicerActionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesActionPolicerActionRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclReAclFastAclRulesActionPolicerActionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesActionPolicerActionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FastAclReAclFastAclRulesActionPolicerActionRefList extends cdktf.ComplexList {
  public internalValue? : FastAclReAclFastAclRulesActionPolicerActionRef[] | cdktf.IResolvable

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
  public get(index: number): FastAclReAclFastAclRulesActionPolicerActionRefOutputReference {
    return new FastAclReAclFastAclRulesActionPolicerActionRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclReAclFastAclRulesActionPolicerAction {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ref FastAcl#ref}
  */
  readonly ref?: FastAclReAclFastAclRulesActionPolicerActionRef[] | cdktf.IResolvable;
}

export function fastAclReAclFastAclRulesActionPolicerActionToTerraform(struct?: FastAclReAclFastAclRulesActionPolicerActionOutputReference | FastAclReAclFastAclRulesActionPolicerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(fastAclReAclFastAclRulesActionPolicerActionRefToTerraform, true)(struct!.ref),
  }
}


export function fastAclReAclFastAclRulesActionPolicerActionToHclTerraform(struct?: FastAclReAclFastAclRulesActionPolicerActionOutputReference | FastAclReAclFastAclRulesActionPolicerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(fastAclReAclFastAclRulesActionPolicerActionRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesActionPolicerActionRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesActionPolicerActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclReAclFastAclRulesActionPolicerAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesActionPolicerAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new FastAclReAclFastAclRulesActionPolicerActionRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: FastAclReAclFastAclRulesActionPolicerActionRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface FastAclReAclFastAclRulesActionProtocolPolicerActionRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#namespace FastAcl#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#tenant FastAcl#tenant}
  */
  readonly tenant?: string;
}

export function fastAclReAclFastAclRulesActionProtocolPolicerActionRefToTerraform(struct?: FastAclReAclFastAclRulesActionProtocolPolicerActionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fastAclReAclFastAclRulesActionProtocolPolicerActionRefToHclTerraform(struct?: FastAclReAclFastAclRulesActionProtocolPolicerActionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesActionProtocolPolicerActionRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclReAclFastAclRulesActionProtocolPolicerActionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesActionProtocolPolicerActionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FastAclReAclFastAclRulesActionProtocolPolicerActionRefList extends cdktf.ComplexList {
  public internalValue? : FastAclReAclFastAclRulesActionProtocolPolicerActionRef[] | cdktf.IResolvable

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
  public get(index: number): FastAclReAclFastAclRulesActionProtocolPolicerActionRefOutputReference {
    return new FastAclReAclFastAclRulesActionProtocolPolicerActionRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclReAclFastAclRulesActionProtocolPolicerAction {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ref FastAcl#ref}
  */
  readonly ref?: FastAclReAclFastAclRulesActionProtocolPolicerActionRef[] | cdktf.IResolvable;
}

export function fastAclReAclFastAclRulesActionProtocolPolicerActionToTerraform(struct?: FastAclReAclFastAclRulesActionProtocolPolicerActionOutputReference | FastAclReAclFastAclRulesActionProtocolPolicerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(fastAclReAclFastAclRulesActionProtocolPolicerActionRefToTerraform, true)(struct!.ref),
  }
}


export function fastAclReAclFastAclRulesActionProtocolPolicerActionToHclTerraform(struct?: FastAclReAclFastAclRulesActionProtocolPolicerActionOutputReference | FastAclReAclFastAclRulesActionProtocolPolicerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(fastAclReAclFastAclRulesActionProtocolPolicerActionRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesActionProtocolPolicerActionRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesActionProtocolPolicerActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclReAclFastAclRulesActionProtocolPolicerAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesActionProtocolPolicerAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new FastAclReAclFastAclRulesActionProtocolPolicerActionRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: FastAclReAclFastAclRulesActionProtocolPolicerActionRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface FastAclReAclFastAclRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#simple_action FastAcl#simple_action}
  */
  readonly simpleAction?: string;
  /**
  * policer_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#policer_action FastAcl#policer_action}
  */
  readonly policerAction?: FastAclReAclFastAclRulesActionPolicerAction;
  /**
  * protocol_policer_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#protocol_policer_action FastAcl#protocol_policer_action}
  */
  readonly protocolPolicerAction?: FastAclReAclFastAclRulesActionProtocolPolicerAction;
}

export function fastAclReAclFastAclRulesActionToTerraform(struct?: FastAclReAclFastAclRulesActionOutputReference | FastAclReAclFastAclRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_action: cdktf.stringToTerraform(struct!.simpleAction),
    policer_action: fastAclReAclFastAclRulesActionPolicerActionToTerraform(struct!.policerAction),
    protocol_policer_action: fastAclReAclFastAclRulesActionProtocolPolicerActionToTerraform(struct!.protocolPolicerAction),
  }
}


export function fastAclReAclFastAclRulesActionToHclTerraform(struct?: FastAclReAclFastAclRulesActionOutputReference | FastAclReAclFastAclRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_action: {
      value: cdktf.stringToHclTerraform(struct!.simpleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policer_action: {
      value: fastAclReAclFastAclRulesActionPolicerActionToHclTerraform(struct!.policerAction),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesActionPolicerActionList",
    },
    protocol_policer_action: {
      value: fastAclReAclFastAclRulesActionProtocolPolicerActionToHclTerraform(struct!.protocolPolicerAction),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesActionProtocolPolicerActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclReAclFastAclRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleAction = this._simpleAction;
    }
    if (this._policerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policerAction = this._policerAction?.internalValue;
    }
    if (this._protocolPolicerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPolicerAction = this._protocolPolicerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._simpleAction = undefined;
      this._policerAction.internalValue = undefined;
      this._protocolPolicerAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._simpleAction = value.simpleAction;
      this._policerAction.internalValue = value.policerAction;
      this._protocolPolicerAction.internalValue = value.protocolPolicerAction;
    }
  }

  // simple_action - computed: false, optional: true, required: false
  private _simpleAction?: string; 
  public get simpleAction() {
    return this.getStringAttribute('simple_action');
  }
  public set simpleAction(value: string) {
    this._simpleAction = value;
  }
  public resetSimpleAction() {
    this._simpleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleActionInput() {
    return this._simpleAction;
  }

  // policer_action - computed: false, optional: true, required: false
  private _policerAction = new FastAclReAclFastAclRulesActionPolicerActionOutputReference(this, "policer_action");
  public get policerAction() {
    return this._policerAction;
  }
  public putPolicerAction(value: FastAclReAclFastAclRulesActionPolicerAction) {
    this._policerAction.internalValue = value;
  }
  public resetPolicerAction() {
    this._policerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerActionInput() {
    return this._policerAction.internalValue;
  }

  // protocol_policer_action - computed: false, optional: true, required: false
  private _protocolPolicerAction = new FastAclReAclFastAclRulesActionProtocolPolicerActionOutputReference(this, "protocol_policer_action");
  public get protocolPolicerAction() {
    return this._protocolPolicerAction;
  }
  public putProtocolPolicerAction(value: FastAclReAclFastAclRulesActionProtocolPolicerAction) {
    this._protocolPolicerAction.internalValue = value;
  }
  public resetProtocolPolicerAction() {
    this._protocolPolicerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPolicerActionInput() {
    return this._protocolPolicerAction.internalValue;
  }
}
export interface FastAclReAclFastAclRulesIpPrefixSetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#namespace FastAcl#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#tenant FastAcl#tenant}
  */
  readonly tenant?: string;
}

export function fastAclReAclFastAclRulesIpPrefixSetRefToTerraform(struct?: FastAclReAclFastAclRulesIpPrefixSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fastAclReAclFastAclRulesIpPrefixSetRefToHclTerraform(struct?: FastAclReAclFastAclRulesIpPrefixSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesIpPrefixSetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclReAclFastAclRulesIpPrefixSetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesIpPrefixSetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FastAclReAclFastAclRulesIpPrefixSetRefList extends cdktf.ComplexList {
  public internalValue? : FastAclReAclFastAclRulesIpPrefixSetRef[] | cdktf.IResolvable

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
  public get(index: number): FastAclReAclFastAclRulesIpPrefixSetRefOutputReference {
    return new FastAclReAclFastAclRulesIpPrefixSetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclReAclFastAclRulesIpPrefixSet {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ref FastAcl#ref}
  */
  readonly ref?: FastAclReAclFastAclRulesIpPrefixSetRef[] | cdktf.IResolvable;
}

export function fastAclReAclFastAclRulesIpPrefixSetToTerraform(struct?: FastAclReAclFastAclRulesIpPrefixSetOutputReference | FastAclReAclFastAclRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(fastAclReAclFastAclRulesIpPrefixSetRefToTerraform, true)(struct!.ref),
  }
}


export function fastAclReAclFastAclRulesIpPrefixSetToHclTerraform(struct?: FastAclReAclFastAclRulesIpPrefixSetOutputReference | FastAclReAclFastAclRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(fastAclReAclFastAclRulesIpPrefixSetRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesIpPrefixSetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclReAclFastAclRulesIpPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesIpPrefixSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new FastAclReAclFastAclRulesIpPrefixSetRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: FastAclReAclFastAclRulesIpPrefixSetRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface FastAclReAclFastAclRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#description FastAcl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name: string;
}

export function fastAclReAclFastAclRulesMetadataToTerraform(struct?: FastAclReAclFastAclRulesMetadataOutputReference | FastAclReAclFastAclRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fastAclReAclFastAclRulesMetadataToHclTerraform(struct?: FastAclReAclFastAclRulesMetadataOutputReference | FastAclReAclFastAclRulesMetadata): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclReAclFastAclRulesMetadata | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
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
}
export interface FastAclReAclFastAclRulesPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#all FastAcl#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#dns FastAcl#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#user_defined FastAcl#user_defined}
  */
  readonly userDefined?: number;
}

export function fastAclReAclFastAclRulesPortToTerraform(struct?: FastAclReAclFastAclRulesPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    dns: cdktf.booleanToTerraform(struct!.dns),
    user_defined: cdktf.numberToTerraform(struct!.userDefined),
  }
}


export function fastAclReAclFastAclRulesPortToHclTerraform(struct?: FastAclReAclFastAclRulesPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns: {
      value: cdktf.booleanToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_defined: {
      value: cdktf.numberToHclTerraform(struct!.userDefined),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclReAclFastAclRulesPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._userDefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefined = this._userDefined;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._dns = undefined;
      this._userDefined = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._dns = value.dns;
      this._userDefined = value.userDefined;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // user_defined - computed: false, optional: true, required: false
  private _userDefined?: number; 
  public get userDefined() {
    return this.getNumberAttribute('user_defined');
  }
  public set userDefined(value: number) {
    this._userDefined = value;
  }
  public resetUserDefined() {
    this._userDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedInput() {
    return this._userDefined;
  }
}

export class FastAclReAclFastAclRulesPortList extends cdktf.ComplexList {
  public internalValue? : FastAclReAclFastAclRulesPort[] | cdktf.IResolvable

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
  public get(index: number): FastAclReAclFastAclRulesPortOutputReference {
    return new FastAclReAclFastAclRulesPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclReAclFastAclRulesPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ipv6_prefix FastAcl#ipv6_prefix}
  */
  readonly ipv6Prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#prefix FastAcl#prefix}
  */
  readonly prefix?: string[];
}

export function fastAclReAclFastAclRulesPrefixToTerraform(struct?: FastAclReAclFastAclRulesPrefixOutputReference | FastAclReAclFastAclRulesPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefix),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function fastAclReAclFastAclRulesPrefixToHclTerraform(struct?: FastAclReAclFastAclRulesPrefixOutputReference | FastAclReAclFastAclRulesPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclReAclFastAclRulesPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRulesPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefix = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefix = value.ipv6Prefix;
      this._prefix = value.prefix;
    }
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string[]; 
  public get ipv6Prefix() {
    return this.getListAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string[]) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface FastAclReAclFastAclRules {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#action FastAcl#action}
  */
  readonly action: FastAclReAclFastAclRulesAction;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ip_prefix_set FastAcl#ip_prefix_set}
  */
  readonly ipPrefixSet?: FastAclReAclFastAclRulesIpPrefixSet;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#metadata FastAcl#metadata}
  */
  readonly metadata: FastAclReAclFastAclRulesMetadata;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#port FastAcl#port}
  */
  readonly port?: FastAclReAclFastAclRulesPort[] | cdktf.IResolvable;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#prefix FastAcl#prefix}
  */
  readonly prefix?: FastAclReAclFastAclRulesPrefix;
}

export function fastAclReAclFastAclRulesToTerraform(struct?: FastAclReAclFastAclRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: fastAclReAclFastAclRulesActionToTerraform(struct!.action),
    ip_prefix_set: fastAclReAclFastAclRulesIpPrefixSetToTerraform(struct!.ipPrefixSet),
    metadata: fastAclReAclFastAclRulesMetadataToTerraform(struct!.metadata),
    port: cdktf.listMapper(fastAclReAclFastAclRulesPortToTerraform, true)(struct!.port),
    prefix: fastAclReAclFastAclRulesPrefixToTerraform(struct!.prefix),
  }
}


export function fastAclReAclFastAclRulesToHclTerraform(struct?: FastAclReAclFastAclRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: fastAclReAclFastAclRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesActionList",
    },
    ip_prefix_set: {
      value: fastAclReAclFastAclRulesIpPrefixSetToHclTerraform(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesIpPrefixSetList",
    },
    metadata: {
      value: fastAclReAclFastAclRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesMetadataList",
    },
    port: {
      value: cdktf.listMapperHcl(fastAclReAclFastAclRulesPortToHclTerraform, true)(struct!.port),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesPortList",
    },
    prefix: {
      value: fastAclReAclFastAclRulesPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesPrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclFastAclRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclReAclFastAclRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._ipPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixSet = this._ipPrefixSet?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclFastAclRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._ipPrefixSet.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._port.internalValue = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._ipPrefixSet.internalValue = value.ipPrefixSet;
      this._metadata.internalValue = value.metadata;
      this._port.internalValue = value.port;
      this._prefix.internalValue = value.prefix;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new FastAclReAclFastAclRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: FastAclReAclFastAclRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // ip_prefix_set - computed: false, optional: true, required: false
  private _ipPrefixSet = new FastAclReAclFastAclRulesIpPrefixSetOutputReference(this, "ip_prefix_set");
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: FastAclReAclFastAclRulesIpPrefixSet) {
    this._ipPrefixSet.internalValue = value;
  }
  public resetIpPrefixSet() {
    this._ipPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixSetInput() {
    return this._ipPrefixSet.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new FastAclReAclFastAclRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: FastAclReAclFastAclRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new FastAclReAclFastAclRulesPortList(this, "port", false);
  public get port() {
    return this._port;
  }
  public putPort(value: FastAclReAclFastAclRulesPort[] | cdktf.IResolvable) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new FastAclReAclFastAclRulesPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: FastAclReAclFastAclRulesPrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}

export class FastAclReAclFastAclRulesList extends cdktf.ComplexList {
  public internalValue? : FastAclReAclFastAclRules[] | cdktf.IResolvable

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
  public get(index: number): FastAclReAclFastAclRulesOutputReference {
    return new FastAclReAclFastAclRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclReAclSelectedTenantVipPublicIpRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#namespace FastAcl#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#tenant FastAcl#tenant}
  */
  readonly tenant?: string;
}

export function fastAclReAclSelectedTenantVipPublicIpRefsToTerraform(struct?: FastAclReAclSelectedTenantVipPublicIpRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fastAclReAclSelectedTenantVipPublicIpRefsToHclTerraform(struct?: FastAclReAclSelectedTenantVipPublicIpRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclSelectedTenantVipPublicIpRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclReAclSelectedTenantVipPublicIpRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclSelectedTenantVipPublicIpRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FastAclReAclSelectedTenantVipPublicIpRefsList extends cdktf.ComplexList {
  public internalValue? : FastAclReAclSelectedTenantVipPublicIpRefs[] | cdktf.IResolvable

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
  public get(index: number): FastAclReAclSelectedTenantVipPublicIpRefsOutputReference {
    return new FastAclReAclSelectedTenantVipPublicIpRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclReAclSelectedTenantVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#default_tenant_vip FastAcl#default_tenant_vip}
  */
  readonly defaultTenantVip?: boolean | cdktf.IResolvable;
  /**
  * public_ip_refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#public_ip_refs FastAcl#public_ip_refs}
  */
  readonly publicIpRefs: FastAclReAclSelectedTenantVipPublicIpRefs[] | cdktf.IResolvable;
}

export function fastAclReAclSelectedTenantVipToTerraform(struct?: FastAclReAclSelectedTenantVipOutputReference | FastAclReAclSelectedTenantVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_tenant_vip: cdktf.booleanToTerraform(struct!.defaultTenantVip),
    public_ip_refs: cdktf.listMapper(fastAclReAclSelectedTenantVipPublicIpRefsToTerraform, true)(struct!.publicIpRefs),
  }
}


export function fastAclReAclSelectedTenantVipToHclTerraform(struct?: FastAclReAclSelectedTenantVipOutputReference | FastAclReAclSelectedTenantVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_tenant_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultTenantVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_ip_refs: {
      value: cdktf.listMapperHcl(fastAclReAclSelectedTenantVipPublicIpRefsToHclTerraform, true)(struct!.publicIpRefs),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclSelectedTenantVipPublicIpRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclSelectedTenantVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclReAclSelectedTenantVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTenantVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTenantVip = this._defaultTenantVip;
    }
    if (this._publicIpRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpRefs = this._publicIpRefs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAclSelectedTenantVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTenantVip = undefined;
      this._publicIpRefs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTenantVip = value.defaultTenantVip;
      this._publicIpRefs.internalValue = value.publicIpRefs;
    }
  }

  // default_tenant_vip - computed: false, optional: true, required: false
  private _defaultTenantVip?: boolean | cdktf.IResolvable; 
  public get defaultTenantVip() {
    return this.getBooleanAttribute('default_tenant_vip');
  }
  public set defaultTenantVip(value: boolean | cdktf.IResolvable) {
    this._defaultTenantVip = value;
  }
  public resetDefaultTenantVip() {
    this._defaultTenantVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTenantVipInput() {
    return this._defaultTenantVip;
  }

  // public_ip_refs - computed: false, optional: false, required: true
  private _publicIpRefs = new FastAclReAclSelectedTenantVipPublicIpRefsList(this, "public_ip_refs", false);
  public get publicIpRefs() {
    return this._publicIpRefs;
  }
  public putPublicIpRefs(value: FastAclReAclSelectedTenantVipPublicIpRefs[] | cdktf.IResolvable) {
    this._publicIpRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpRefsInput() {
    return this._publicIpRefs.internalValue;
  }
}
export interface FastAclReAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#all_public_vips FastAcl#all_public_vips}
  */
  readonly allPublicVips?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#default_tenant_vip FastAcl#default_tenant_vip}
  */
  readonly defaultTenantVip?: boolean | cdktf.IResolvable;
  /**
  * fast_acl_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#fast_acl_rules FastAcl#fast_acl_rules}
  */
  readonly fastAclRules?: FastAclReAclFastAclRules[] | cdktf.IResolvable;
  /**
  * selected_tenant_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#selected_tenant_vip FastAcl#selected_tenant_vip}
  */
  readonly selectedTenantVip?: FastAclReAclSelectedTenantVip;
}

export function fastAclReAclToTerraform(struct?: FastAclReAclOutputReference | FastAclReAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_public_vips: cdktf.booleanToTerraform(struct!.allPublicVips),
    default_tenant_vip: cdktf.booleanToTerraform(struct!.defaultTenantVip),
    fast_acl_rules: cdktf.listMapper(fastAclReAclFastAclRulesToTerraform, true)(struct!.fastAclRules),
    selected_tenant_vip: fastAclReAclSelectedTenantVipToTerraform(struct!.selectedTenantVip),
  }
}


export function fastAclReAclToHclTerraform(struct?: FastAclReAclOutputReference | FastAclReAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_public_vips: {
      value: cdktf.booleanToHclTerraform(struct!.allPublicVips),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_tenant_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultTenantVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fast_acl_rules: {
      value: cdktf.listMapperHcl(fastAclReAclFastAclRulesToHclTerraform, true)(struct!.fastAclRules),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclFastAclRulesList",
    },
    selected_tenant_vip: {
      value: fastAclReAclSelectedTenantVipToHclTerraform(struct!.selectedTenantVip),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclReAclSelectedTenantVipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclReAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclReAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allPublicVips !== undefined) {
      hasAnyValues = true;
      internalValueResult.allPublicVips = this._allPublicVips;
    }
    if (this._defaultTenantVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTenantVip = this._defaultTenantVip;
    }
    if (this._fastAclRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastAclRules = this._fastAclRules?.internalValue;
    }
    if (this._selectedTenantVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedTenantVip = this._selectedTenantVip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclReAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allPublicVips = undefined;
      this._defaultTenantVip = undefined;
      this._fastAclRules.internalValue = undefined;
      this._selectedTenantVip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allPublicVips = value.allPublicVips;
      this._defaultTenantVip = value.defaultTenantVip;
      this._fastAclRules.internalValue = value.fastAclRules;
      this._selectedTenantVip.internalValue = value.selectedTenantVip;
    }
  }

  // all_public_vips - computed: false, optional: true, required: false
  private _allPublicVips?: boolean | cdktf.IResolvable; 
  public get allPublicVips() {
    return this.getBooleanAttribute('all_public_vips');
  }
  public set allPublicVips(value: boolean | cdktf.IResolvable) {
    this._allPublicVips = value;
  }
  public resetAllPublicVips() {
    this._allPublicVips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPublicVipsInput() {
    return this._allPublicVips;
  }

  // default_tenant_vip - computed: false, optional: true, required: false
  private _defaultTenantVip?: boolean | cdktf.IResolvable; 
  public get defaultTenantVip() {
    return this.getBooleanAttribute('default_tenant_vip');
  }
  public set defaultTenantVip(value: boolean | cdktf.IResolvable) {
    this._defaultTenantVip = value;
  }
  public resetDefaultTenantVip() {
    this._defaultTenantVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTenantVipInput() {
    return this._defaultTenantVip;
  }

  // fast_acl_rules - computed: false, optional: true, required: false
  private _fastAclRules = new FastAclReAclFastAclRulesList(this, "fast_acl_rules", false);
  public get fastAclRules() {
    return this._fastAclRules;
  }
  public putFastAclRules(value: FastAclReAclFastAclRules[] | cdktf.IResolvable) {
    this._fastAclRules.internalValue = value;
  }
  public resetFastAclRules() {
    this._fastAclRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastAclRulesInput() {
    return this._fastAclRules.internalValue;
  }

  // selected_tenant_vip - computed: false, optional: true, required: false
  private _selectedTenantVip = new FastAclReAclSelectedTenantVipOutputReference(this, "selected_tenant_vip");
  public get selectedTenantVip() {
    return this._selectedTenantVip;
  }
  public putSelectedTenantVip(value: FastAclReAclSelectedTenantVip) {
    this._selectedTenantVip.internalValue = value;
  }
  public resetSelectedTenantVip() {
    this._selectedTenantVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedTenantVipInput() {
    return this._selectedTenantVip.internalValue;
  }
}
export interface FastAclSiteAclFastAclRulesActionPolicerActionRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#namespace FastAcl#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#tenant FastAcl#tenant}
  */
  readonly tenant?: string;
}

export function fastAclSiteAclFastAclRulesActionPolicerActionRefToTerraform(struct?: FastAclSiteAclFastAclRulesActionPolicerActionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fastAclSiteAclFastAclRulesActionPolicerActionRefToHclTerraform(struct?: FastAclSiteAclFastAclRulesActionPolicerActionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesActionPolicerActionRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclSiteAclFastAclRulesActionPolicerActionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesActionPolicerActionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FastAclSiteAclFastAclRulesActionPolicerActionRefList extends cdktf.ComplexList {
  public internalValue? : FastAclSiteAclFastAclRulesActionPolicerActionRef[] | cdktf.IResolvable

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
  public get(index: number): FastAclSiteAclFastAclRulesActionPolicerActionRefOutputReference {
    return new FastAclSiteAclFastAclRulesActionPolicerActionRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclSiteAclFastAclRulesActionPolicerAction {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ref FastAcl#ref}
  */
  readonly ref?: FastAclSiteAclFastAclRulesActionPolicerActionRef[] | cdktf.IResolvable;
}

export function fastAclSiteAclFastAclRulesActionPolicerActionToTerraform(struct?: FastAclSiteAclFastAclRulesActionPolicerActionOutputReference | FastAclSiteAclFastAclRulesActionPolicerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(fastAclSiteAclFastAclRulesActionPolicerActionRefToTerraform, true)(struct!.ref),
  }
}


export function fastAclSiteAclFastAclRulesActionPolicerActionToHclTerraform(struct?: FastAclSiteAclFastAclRulesActionPolicerActionOutputReference | FastAclSiteAclFastAclRulesActionPolicerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(fastAclSiteAclFastAclRulesActionPolicerActionRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesActionPolicerActionRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesActionPolicerActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclSiteAclFastAclRulesActionPolicerAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesActionPolicerAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new FastAclSiteAclFastAclRulesActionPolicerActionRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: FastAclSiteAclFastAclRulesActionPolicerActionRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface FastAclSiteAclFastAclRulesActionProtocolPolicerActionRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#namespace FastAcl#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#tenant FastAcl#tenant}
  */
  readonly tenant?: string;
}

export function fastAclSiteAclFastAclRulesActionProtocolPolicerActionRefToTerraform(struct?: FastAclSiteAclFastAclRulesActionProtocolPolicerActionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fastAclSiteAclFastAclRulesActionProtocolPolicerActionRefToHclTerraform(struct?: FastAclSiteAclFastAclRulesActionProtocolPolicerActionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesActionProtocolPolicerActionRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclSiteAclFastAclRulesActionProtocolPolicerActionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesActionProtocolPolicerActionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FastAclSiteAclFastAclRulesActionProtocolPolicerActionRefList extends cdktf.ComplexList {
  public internalValue? : FastAclSiteAclFastAclRulesActionProtocolPolicerActionRef[] | cdktf.IResolvable

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
  public get(index: number): FastAclSiteAclFastAclRulesActionProtocolPolicerActionRefOutputReference {
    return new FastAclSiteAclFastAclRulesActionProtocolPolicerActionRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclSiteAclFastAclRulesActionProtocolPolicerAction {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ref FastAcl#ref}
  */
  readonly ref?: FastAclSiteAclFastAclRulesActionProtocolPolicerActionRef[] | cdktf.IResolvable;
}

export function fastAclSiteAclFastAclRulesActionProtocolPolicerActionToTerraform(struct?: FastAclSiteAclFastAclRulesActionProtocolPolicerActionOutputReference | FastAclSiteAclFastAclRulesActionProtocolPolicerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(fastAclSiteAclFastAclRulesActionProtocolPolicerActionRefToTerraform, true)(struct!.ref),
  }
}


export function fastAclSiteAclFastAclRulesActionProtocolPolicerActionToHclTerraform(struct?: FastAclSiteAclFastAclRulesActionProtocolPolicerActionOutputReference | FastAclSiteAclFastAclRulesActionProtocolPolicerAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(fastAclSiteAclFastAclRulesActionProtocolPolicerActionRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesActionProtocolPolicerActionRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesActionProtocolPolicerActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclSiteAclFastAclRulesActionProtocolPolicerAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesActionProtocolPolicerAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new FastAclSiteAclFastAclRulesActionProtocolPolicerActionRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: FastAclSiteAclFastAclRulesActionProtocolPolicerActionRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface FastAclSiteAclFastAclRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#simple_action FastAcl#simple_action}
  */
  readonly simpleAction?: string;
  /**
  * policer_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#policer_action FastAcl#policer_action}
  */
  readonly policerAction?: FastAclSiteAclFastAclRulesActionPolicerAction;
  /**
  * protocol_policer_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#protocol_policer_action FastAcl#protocol_policer_action}
  */
  readonly protocolPolicerAction?: FastAclSiteAclFastAclRulesActionProtocolPolicerAction;
}

export function fastAclSiteAclFastAclRulesActionToTerraform(struct?: FastAclSiteAclFastAclRulesActionOutputReference | FastAclSiteAclFastAclRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_action: cdktf.stringToTerraform(struct!.simpleAction),
    policer_action: fastAclSiteAclFastAclRulesActionPolicerActionToTerraform(struct!.policerAction),
    protocol_policer_action: fastAclSiteAclFastAclRulesActionProtocolPolicerActionToTerraform(struct!.protocolPolicerAction),
  }
}


export function fastAclSiteAclFastAclRulesActionToHclTerraform(struct?: FastAclSiteAclFastAclRulesActionOutputReference | FastAclSiteAclFastAclRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_action: {
      value: cdktf.stringToHclTerraform(struct!.simpleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policer_action: {
      value: fastAclSiteAclFastAclRulesActionPolicerActionToHclTerraform(struct!.policerAction),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesActionPolicerActionList",
    },
    protocol_policer_action: {
      value: fastAclSiteAclFastAclRulesActionProtocolPolicerActionToHclTerraform(struct!.protocolPolicerAction),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesActionProtocolPolicerActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclSiteAclFastAclRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleAction = this._simpleAction;
    }
    if (this._policerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policerAction = this._policerAction?.internalValue;
    }
    if (this._protocolPolicerAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPolicerAction = this._protocolPolicerAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._simpleAction = undefined;
      this._policerAction.internalValue = undefined;
      this._protocolPolicerAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._simpleAction = value.simpleAction;
      this._policerAction.internalValue = value.policerAction;
      this._protocolPolicerAction.internalValue = value.protocolPolicerAction;
    }
  }

  // simple_action - computed: false, optional: true, required: false
  private _simpleAction?: string; 
  public get simpleAction() {
    return this.getStringAttribute('simple_action');
  }
  public set simpleAction(value: string) {
    this._simpleAction = value;
  }
  public resetSimpleAction() {
    this._simpleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleActionInput() {
    return this._simpleAction;
  }

  // policer_action - computed: false, optional: true, required: false
  private _policerAction = new FastAclSiteAclFastAclRulesActionPolicerActionOutputReference(this, "policer_action");
  public get policerAction() {
    return this._policerAction;
  }
  public putPolicerAction(value: FastAclSiteAclFastAclRulesActionPolicerAction) {
    this._policerAction.internalValue = value;
  }
  public resetPolicerAction() {
    this._policerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerActionInput() {
    return this._policerAction.internalValue;
  }

  // protocol_policer_action - computed: false, optional: true, required: false
  private _protocolPolicerAction = new FastAclSiteAclFastAclRulesActionProtocolPolicerActionOutputReference(this, "protocol_policer_action");
  public get protocolPolicerAction() {
    return this._protocolPolicerAction;
  }
  public putProtocolPolicerAction(value: FastAclSiteAclFastAclRulesActionProtocolPolicerAction) {
    this._protocolPolicerAction.internalValue = value;
  }
  public resetProtocolPolicerAction() {
    this._protocolPolicerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPolicerActionInput() {
    return this._protocolPolicerAction.internalValue;
  }
}
export interface FastAclSiteAclFastAclRulesIpPrefixSetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#namespace FastAcl#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#tenant FastAcl#tenant}
  */
  readonly tenant?: string;
}

export function fastAclSiteAclFastAclRulesIpPrefixSetRefToTerraform(struct?: FastAclSiteAclFastAclRulesIpPrefixSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function fastAclSiteAclFastAclRulesIpPrefixSetRefToHclTerraform(struct?: FastAclSiteAclFastAclRulesIpPrefixSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesIpPrefixSetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclSiteAclFastAclRulesIpPrefixSetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesIpPrefixSetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class FastAclSiteAclFastAclRulesIpPrefixSetRefList extends cdktf.ComplexList {
  public internalValue? : FastAclSiteAclFastAclRulesIpPrefixSetRef[] | cdktf.IResolvable

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
  public get(index: number): FastAclSiteAclFastAclRulesIpPrefixSetRefOutputReference {
    return new FastAclSiteAclFastAclRulesIpPrefixSetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclSiteAclFastAclRulesIpPrefixSet {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ref FastAcl#ref}
  */
  readonly ref?: FastAclSiteAclFastAclRulesIpPrefixSetRef[] | cdktf.IResolvable;
}

export function fastAclSiteAclFastAclRulesIpPrefixSetToTerraform(struct?: FastAclSiteAclFastAclRulesIpPrefixSetOutputReference | FastAclSiteAclFastAclRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(fastAclSiteAclFastAclRulesIpPrefixSetRefToTerraform, true)(struct!.ref),
  }
}


export function fastAclSiteAclFastAclRulesIpPrefixSetToHclTerraform(struct?: FastAclSiteAclFastAclRulesIpPrefixSetOutputReference | FastAclSiteAclFastAclRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(fastAclSiteAclFastAclRulesIpPrefixSetRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesIpPrefixSetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclSiteAclFastAclRulesIpPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesIpPrefixSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new FastAclSiteAclFastAclRulesIpPrefixSetRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: FastAclSiteAclFastAclRulesIpPrefixSetRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface FastAclSiteAclFastAclRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#description FastAcl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#name FastAcl#name}
  */
  readonly name: string;
}

export function fastAclSiteAclFastAclRulesMetadataToTerraform(struct?: FastAclSiteAclFastAclRulesMetadataOutputReference | FastAclSiteAclFastAclRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fastAclSiteAclFastAclRulesMetadataToHclTerraform(struct?: FastAclSiteAclFastAclRulesMetadataOutputReference | FastAclSiteAclFastAclRulesMetadata): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclSiteAclFastAclRulesMetadata | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
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
}
export interface FastAclSiteAclFastAclRulesPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#all FastAcl#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#dns FastAcl#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#user_defined FastAcl#user_defined}
  */
  readonly userDefined?: number;
}

export function fastAclSiteAclFastAclRulesPortToTerraform(struct?: FastAclSiteAclFastAclRulesPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    dns: cdktf.booleanToTerraform(struct!.dns),
    user_defined: cdktf.numberToTerraform(struct!.userDefined),
  }
}


export function fastAclSiteAclFastAclRulesPortToHclTerraform(struct?: FastAclSiteAclFastAclRulesPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns: {
      value: cdktf.booleanToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_defined: {
      value: cdktf.numberToHclTerraform(struct!.userDefined),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclSiteAclFastAclRulesPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._userDefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefined = this._userDefined;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._dns = undefined;
      this._userDefined = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._dns = value.dns;
      this._userDefined = value.userDefined;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // user_defined - computed: false, optional: true, required: false
  private _userDefined?: number; 
  public get userDefined() {
    return this.getNumberAttribute('user_defined');
  }
  public set userDefined(value: number) {
    this._userDefined = value;
  }
  public resetUserDefined() {
    this._userDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedInput() {
    return this._userDefined;
  }
}

export class FastAclSiteAclFastAclRulesPortList extends cdktf.ComplexList {
  public internalValue? : FastAclSiteAclFastAclRulesPort[] | cdktf.IResolvable

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
  public get(index: number): FastAclSiteAclFastAclRulesPortOutputReference {
    return new FastAclSiteAclFastAclRulesPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclSiteAclFastAclRulesPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ipv6_prefix FastAcl#ipv6_prefix}
  */
  readonly ipv6Prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#prefix FastAcl#prefix}
  */
  readonly prefix?: string[];
}

export function fastAclSiteAclFastAclRulesPrefixToTerraform(struct?: FastAclSiteAclFastAclRulesPrefixOutputReference | FastAclSiteAclFastAclRulesPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefix),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function fastAclSiteAclFastAclRulesPrefixToHclTerraform(struct?: FastAclSiteAclFastAclRulesPrefixOutputReference | FastAclSiteAclFastAclRulesPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclSiteAclFastAclRulesPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRulesPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefix = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefix = value.ipv6Prefix;
      this._prefix = value.prefix;
    }
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string[]; 
  public get ipv6Prefix() {
    return this.getListAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string[]) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface FastAclSiteAclFastAclRules {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#action FastAcl#action}
  */
  readonly action: FastAclSiteAclFastAclRulesAction;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#ip_prefix_set FastAcl#ip_prefix_set}
  */
  readonly ipPrefixSet?: FastAclSiteAclFastAclRulesIpPrefixSet;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#metadata FastAcl#metadata}
  */
  readonly metadata: FastAclSiteAclFastAclRulesMetadata;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#port FastAcl#port}
  */
  readonly port?: FastAclSiteAclFastAclRulesPort[] | cdktf.IResolvable;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#prefix FastAcl#prefix}
  */
  readonly prefix?: FastAclSiteAclFastAclRulesPrefix;
}

export function fastAclSiteAclFastAclRulesToTerraform(struct?: FastAclSiteAclFastAclRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: fastAclSiteAclFastAclRulesActionToTerraform(struct!.action),
    ip_prefix_set: fastAclSiteAclFastAclRulesIpPrefixSetToTerraform(struct!.ipPrefixSet),
    metadata: fastAclSiteAclFastAclRulesMetadataToTerraform(struct!.metadata),
    port: cdktf.listMapper(fastAclSiteAclFastAclRulesPortToTerraform, true)(struct!.port),
    prefix: fastAclSiteAclFastAclRulesPrefixToTerraform(struct!.prefix),
  }
}


export function fastAclSiteAclFastAclRulesToHclTerraform(struct?: FastAclSiteAclFastAclRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: fastAclSiteAclFastAclRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesActionList",
    },
    ip_prefix_set: {
      value: fastAclSiteAclFastAclRulesIpPrefixSetToHclTerraform(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesIpPrefixSetList",
    },
    metadata: {
      value: fastAclSiteAclFastAclRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesMetadataList",
    },
    port: {
      value: cdktf.listMapperHcl(fastAclSiteAclFastAclRulesPortToHclTerraform, true)(struct!.port),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesPortList",
    },
    prefix: {
      value: fastAclSiteAclFastAclRulesPrefixToHclTerraform(struct!.prefix),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesPrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclFastAclRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastAclSiteAclFastAclRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._ipPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixSet = this._ipPrefixSet?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAclFastAclRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._ipPrefixSet.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._port.internalValue = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._ipPrefixSet.internalValue = value.ipPrefixSet;
      this._metadata.internalValue = value.metadata;
      this._port.internalValue = value.port;
      this._prefix.internalValue = value.prefix;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new FastAclSiteAclFastAclRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: FastAclSiteAclFastAclRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // ip_prefix_set - computed: false, optional: true, required: false
  private _ipPrefixSet = new FastAclSiteAclFastAclRulesIpPrefixSetOutputReference(this, "ip_prefix_set");
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: FastAclSiteAclFastAclRulesIpPrefixSet) {
    this._ipPrefixSet.internalValue = value;
  }
  public resetIpPrefixSet() {
    this._ipPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixSetInput() {
    return this._ipPrefixSet.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new FastAclSiteAclFastAclRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: FastAclSiteAclFastAclRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new FastAclSiteAclFastAclRulesPortList(this, "port", false);
  public get port() {
    return this._port;
  }
  public putPort(value: FastAclSiteAclFastAclRulesPort[] | cdktf.IResolvable) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new FastAclSiteAclFastAclRulesPrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: FastAclSiteAclFastAclRulesPrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}

export class FastAclSiteAclFastAclRulesList extends cdktf.ComplexList {
  public internalValue? : FastAclSiteAclFastAclRules[] | cdktf.IResolvable

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
  public get(index: number): FastAclSiteAclFastAclRulesOutputReference {
    return new FastAclSiteAclFastAclRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastAclSiteAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#all_services FastAcl#all_services}
  */
  readonly allServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#inside_network FastAcl#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#interface_services FastAcl#interface_services}
  */
  readonly interfaceServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#outside_network FastAcl#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#vip_services FastAcl#vip_services}
  */
  readonly vipServices?: boolean | cdktf.IResolvable;
  /**
  * fast_acl_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#fast_acl_rules FastAcl#fast_acl_rules}
  */
  readonly fastAclRules?: FastAclSiteAclFastAclRules[] | cdktf.IResolvable;
}

export function fastAclSiteAclToTerraform(struct?: FastAclSiteAclOutputReference | FastAclSiteAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_services: cdktf.booleanToTerraform(struct!.allServices),
    inside_network: cdktf.booleanToTerraform(struct!.insideNetwork),
    interface_services: cdktf.booleanToTerraform(struct!.interfaceServices),
    outside_network: cdktf.booleanToTerraform(struct!.outsideNetwork),
    vip_services: cdktf.booleanToTerraform(struct!.vipServices),
    fast_acl_rules: cdktf.listMapper(fastAclSiteAclFastAclRulesToTerraform, true)(struct!.fastAclRules),
  }
}


export function fastAclSiteAclToHclTerraform(struct?: FastAclSiteAclOutputReference | FastAclSiteAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_services: {
      value: cdktf.booleanToHclTerraform(struct!.allServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.insideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_services: {
      value: cdktf.booleanToHclTerraform(struct!.interfaceServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_network: {
      value: cdktf.booleanToHclTerraform(struct!.outsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vip_services: {
      value: cdktf.booleanToHclTerraform(struct!.vipServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fast_acl_rules: {
      value: cdktf.listMapperHcl(fastAclSiteAclFastAclRulesToHclTerraform, true)(struct!.fastAclRules),
      isBlock: true,
      type: "list",
      storageClassType: "FastAclSiteAclFastAclRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastAclSiteAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastAclSiteAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allServices = this._allServices;
    }
    if (this._insideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork;
    }
    if (this._interfaceServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceServices = this._interfaceServices;
    }
    if (this._outsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNetwork = this._outsideNetwork;
    }
    if (this._vipServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServices = this._vipServices;
    }
    if (this._fastAclRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastAclRules = this._fastAclRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastAclSiteAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allServices = undefined;
      this._insideNetwork = undefined;
      this._interfaceServices = undefined;
      this._outsideNetwork = undefined;
      this._vipServices = undefined;
      this._fastAclRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allServices = value.allServices;
      this._insideNetwork = value.insideNetwork;
      this._interfaceServices = value.interfaceServices;
      this._outsideNetwork = value.outsideNetwork;
      this._vipServices = value.vipServices;
      this._fastAclRules.internalValue = value.fastAclRules;
    }
  }

  // all_services - computed: false, optional: true, required: false
  private _allServices?: boolean | cdktf.IResolvable; 
  public get allServices() {
    return this.getBooleanAttribute('all_services');
  }
  public set allServices(value: boolean | cdktf.IResolvable) {
    this._allServices = value;
  }
  public resetAllServices() {
    this._allServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allServicesInput() {
    return this._allServices;
  }

  // inside_network - computed: false, optional: true, required: false
  private _insideNetwork?: boolean | cdktf.IResolvable; 
  public get insideNetwork() {
    return this.getBooleanAttribute('inside_network');
  }
  public set insideNetwork(value: boolean | cdktf.IResolvable) {
    this._insideNetwork = value;
  }
  public resetInsideNetwork() {
    this._insideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetworkInput() {
    return this._insideNetwork;
  }

  // interface_services - computed: false, optional: true, required: false
  private _interfaceServices?: boolean | cdktf.IResolvable; 
  public get interfaceServices() {
    return this.getBooleanAttribute('interface_services');
  }
  public set interfaceServices(value: boolean | cdktf.IResolvable) {
    this._interfaceServices = value;
  }
  public resetInterfaceServices() {
    this._interfaceServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceServicesInput() {
    return this._interfaceServices;
  }

  // outside_network - computed: false, optional: true, required: false
  private _outsideNetwork?: boolean | cdktf.IResolvable; 
  public get outsideNetwork() {
    return this.getBooleanAttribute('outside_network');
  }
  public set outsideNetwork(value: boolean | cdktf.IResolvable) {
    this._outsideNetwork = value;
  }
  public resetOutsideNetwork() {
    this._outsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNetworkInput() {
    return this._outsideNetwork;
  }

  // vip_services - computed: false, optional: true, required: false
  private _vipServices?: boolean | cdktf.IResolvable; 
  public get vipServices() {
    return this.getBooleanAttribute('vip_services');
  }
  public set vipServices(value: boolean | cdktf.IResolvable) {
    this._vipServices = value;
  }
  public resetVipServices() {
    this._vipServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServicesInput() {
    return this._vipServices;
  }

  // fast_acl_rules - computed: false, optional: true, required: false
  private _fastAclRules = new FastAclSiteAclFastAclRulesList(this, "fast_acl_rules", false);
  public get fastAclRules() {
    return this._fastAclRules;
  }
  public putFastAclRules(value: FastAclSiteAclFastAclRules[] | cdktf.IResolvable) {
    this._fastAclRules.internalValue = value;
  }
  public resetFastAclRules() {
    this._fastAclRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastAclRulesInput() {
    return this._fastAclRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl volterra_fast_acl}
*/
export class FastAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_fast_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FastAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FastAcl to import
  * @param importFromId The id of the existing FastAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FastAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_fast_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/fast_acl volterra_fast_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FastAclConfig
  */
  public constructor(scope: Construct, id: string, config: FastAclConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_fast_acl',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._protocolPolicer.internalValue = config.protocolPolicer;
    this._reAcl.internalValue = config.reAcl;
    this._siteAcl.internalValue = config.siteAcl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // protocol_policer - computed: false, optional: true, required: false
  private _protocolPolicer = new FastAclProtocolPolicerOutputReference(this, "protocol_policer");
  public get protocolPolicer() {
    return this._protocolPolicer;
  }
  public putProtocolPolicer(value: FastAclProtocolPolicer) {
    this._protocolPolicer.internalValue = value;
  }
  public resetProtocolPolicer() {
    this._protocolPolicer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPolicerInput() {
    return this._protocolPolicer.internalValue;
  }

  // re_acl - computed: false, optional: true, required: false
  private _reAcl = new FastAclReAclOutputReference(this, "re_acl");
  public get reAcl() {
    return this._reAcl;
  }
  public putReAcl(value: FastAclReAcl) {
    this._reAcl.internalValue = value;
  }
  public resetReAcl() {
    this._reAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reAclInput() {
    return this._reAcl.internalValue;
  }

  // site_acl - computed: false, optional: true, required: false
  private _siteAcl = new FastAclSiteAclOutputReference(this, "site_acl");
  public get siteAcl() {
    return this._siteAcl;
  }
  public putSiteAcl(value: FastAclSiteAcl) {
    this._siteAcl.internalValue = value;
  }
  public resetSiteAcl() {
    this._siteAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAclInput() {
    return this._siteAcl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      protocol_policer: fastAclProtocolPolicerToTerraform(this._protocolPolicer.internalValue),
      re_acl: fastAclReAclToTerraform(this._reAcl.internalValue),
      site_acl: fastAclSiteAclToTerraform(this._siteAcl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_policer: {
        value: fastAclProtocolPolicerToHclTerraform(this._protocolPolicer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastAclProtocolPolicerList",
      },
      re_acl: {
        value: fastAclReAclToHclTerraform(this._reAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastAclReAclList",
      },
      site_acl: {
        value: fastAclSiteAclToHclTerraform(this._siteAcl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastAclSiteAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
