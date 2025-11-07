// https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#metadata Role#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#elasticsearch Role#elasticsearch}
  */
  readonly elasticsearch?: RoleElasticsearch[] | cdktf.IResolvable;
  /**
  * kibana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#kibana Role#kibana}
  */
  readonly kibana?: RoleKibana[] | cdktf.IResolvable;
}
export interface RoleElasticsearchIndices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#field_security Role#field_security}
  */
  readonly fieldSecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#names Role#names}
  */
  readonly names: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#privileges Role#privileges}
  */
  readonly privileges: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#query Role#query}
  */
  readonly query?: string;
}

export function roleElasticsearchIndicesToTerraform(struct?: RoleElasticsearchIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_security: cdktf.stringToTerraform(struct!.fieldSecurity),
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
    privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privileges),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function roleElasticsearchIndicesToHclTerraform(struct?: RoleElasticsearchIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_security: {
      value: cdktf.stringToHclTerraform(struct!.fieldSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    privileges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privileges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleElasticsearchIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleElasticsearchIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSecurity = this._fieldSecurity;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._privileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleElasticsearchIndices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldSecurity = undefined;
      this._names = undefined;
      this._privileges = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldSecurity = value.fieldSecurity;
      this._names = value.names;
      this._privileges = value.privileges;
      this._query = value.query;
    }
  }

  // field_security - computed: false, optional: true, required: false
  private _fieldSecurity?: string; 
  public get fieldSecurity() {
    return this.getStringAttribute('field_security');
  }
  public set fieldSecurity(value: string) {
    this._fieldSecurity = value;
  }
  public resetFieldSecurity() {
    this._fieldSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSecurityInput() {
    return this._fieldSecurity;
  }

  // names - computed: false, optional: false, required: true
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class RoleElasticsearchIndicesList extends cdktf.ComplexList {
  public internalValue? : RoleElasticsearchIndices[] | cdktf.IResolvable

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
  public get(index: number): RoleElasticsearchIndicesOutputReference {
    return new RoleElasticsearchIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#cluster Role#cluster}
  */
  readonly cluster?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#run_as Role#run_as}
  */
  readonly runAs?: string[];
  /**
  * indices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#indices Role#indices}
  */
  readonly indices?: RoleElasticsearchIndices[] | cdktf.IResolvable;
}

export function roleElasticsearchToTerraform(struct?: RoleElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cluster),
    run_as: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runAs),
    indices: cdktf.listMapper(roleElasticsearchIndicesToTerraform, true)(struct!.indices),
  }
}


export function roleElasticsearchToHclTerraform(struct?: RoleElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cluster),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    run_as: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runAs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    indices: {
      value: cdktf.listMapperHcl(roleElasticsearchIndicesToHclTerraform, true)(struct!.indices),
      isBlock: true,
      type: "set",
      storageClassType: "RoleElasticsearchIndicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._runAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAs = this._runAs;
    }
    if (this._indices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indices = this._indices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._runAs = undefined;
      this._indices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._runAs = value.runAs;
      this._indices.internalValue = value.indices;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string[]; 
  public get cluster() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster'));
  }
  public set cluster(value: string[]) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // run_as - computed: false, optional: true, required: false
  private _runAs?: string[]; 
  public get runAs() {
    return cdktf.Fn.tolist(this.getListAttribute('run_as'));
  }
  public set runAs(value: string[]) {
    this._runAs = value;
  }
  public resetRunAs() {
    this._runAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs;
  }

  // indices - computed: false, optional: true, required: false
  private _indices = new RoleElasticsearchIndicesList(this, "indices", true);
  public get indices() {
    return this._indices;
  }
  public putIndices(value: RoleElasticsearchIndices[] | cdktf.IResolvable) {
    this._indices.internalValue = value;
  }
  public resetIndices() {
    this._indices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices.internalValue;
  }
}

export class RoleElasticsearchList extends cdktf.ComplexList {
  public internalValue? : RoleElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): RoleElasticsearchOutputReference {
    return new RoleElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleKibanaFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#permissions Role#permissions}
  */
  readonly permissions: string[];
}

export function roleKibanaFeaturesToTerraform(struct?: RoleKibanaFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function roleKibanaFeaturesToHclTerraform(struct?: RoleKibanaFeatures | cdktf.IResolvable): any {
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
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleKibanaFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleKibanaFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleKibanaFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._permissions = value.permissions;
    }
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}

export class RoleKibanaFeaturesList extends cdktf.ComplexList {
  public internalValue? : RoleKibanaFeatures[] | cdktf.IResolvable

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
  public get(index: number): RoleKibanaFeaturesOutputReference {
    return new RoleKibanaFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleKibana {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#base Role#base}
  */
  readonly base?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#spaces Role#spaces}
  */
  readonly spaces: string[];
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#features Role#features}
  */
  readonly features?: RoleKibanaFeatures[] | cdktf.IResolvable;
}

export function roleKibanaToTerraform(struct?: RoleKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.base),
    spaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.spaces),
    features: cdktf.listMapper(roleKibanaFeaturesToTerraform, true)(struct!.features),
  }
}


export function roleKibanaToHclTerraform(struct?: RoleKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.base),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.spaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    features: {
      value: cdktf.listMapperHcl(roleKibanaFeaturesToHclTerraform, true)(struct!.features),
      isBlock: true,
      type: "set",
      storageClassType: "RoleKibanaFeaturesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleKibanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleKibana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._spaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaces = this._spaces;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleKibana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._spaces = undefined;
      this._features.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._spaces = value.spaces;
      this._features.internalValue = value.features;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: string[]; 
  public get base() {
    return cdktf.Fn.tolist(this.getListAttribute('base'));
  }
  public set base(value: string[]) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // spaces - computed: false, optional: false, required: true
  private _spaces?: string[]; 
  public get spaces() {
    return cdktf.Fn.tolist(this.getListAttribute('spaces'));
  }
  public set spaces(value: string[]) {
    this._spaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spacesInput() {
    return this._spaces;
  }

  // features - computed: false, optional: true, required: false
  private _features = new RoleKibanaFeaturesList(this, "features", true);
  public get features() {
    return this._features;
  }
  public putFeatures(value: RoleKibanaFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }
}

export class RoleKibanaList extends cdktf.ComplexList {
  public internalValue? : RoleKibana[] | cdktf.IResolvable

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
  public get(index: number): RoleKibanaOutputReference {
    return new RoleKibanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role kibana_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kibana_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kibana_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ggsood/kibana/1.0.5/docs/resources/role kibana_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'kibana_role',
      terraformGeneratorMetadata: {
        providerName: 'kibana',
        providerVersion: '1.0.5'
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
    this._metadata = config.metadata;
    this._name = config.name;
    this._elasticsearch.internalValue = config.elasticsearch;
    this._kibana.internalValue = config.kibana;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new RoleElasticsearchList(this, "elasticsearch", true);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: RoleElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // kibana - computed: false, optional: true, required: false
  private _kibana = new RoleKibanaList(this, "kibana", true);
  public get kibana() {
    return this._kibana;
  }
  public putKibana(value: RoleKibana[] | cdktf.IResolvable) {
    this._kibana.internalValue = value;
  }
  public resetKibana() {
    this._kibana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaInput() {
    return this._kibana.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      elasticsearch: cdktf.listMapper(roleElasticsearchToTerraform, true)(this._elasticsearch.internalValue),
      kibana: cdktf.listMapper(roleKibanaToTerraform, true)(this._kibana.internalValue),
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
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch: {
        value: cdktf.listMapperHcl(roleElasticsearchToHclTerraform, true)(this._elasticsearch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleElasticsearchList",
      },
      kibana: {
        value: cdktf.listMapperHcl(roleKibanaToHclTerraform, true)(this._kibana.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleKibanaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
