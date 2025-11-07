// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesAppgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#id KubernetesAppgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify new name to rename an Application Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#name KubernetesAppgroup#name}
  */
  readonly name?: string;
  /**
  * activitycontrol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#activitycontrol KubernetesAppgroup#activitycontrol}
  */
  readonly activitycontrol?: KubernetesAppgroupActivitycontrol[] | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#cluster KubernetesAppgroup#cluster}
  */
  readonly cluster?: KubernetesAppgroupCluster[] | cdktf.IResolvable;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#content KubernetesAppgroup#content}
  */
  readonly content?: KubernetesAppgroupContent[] | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#filters KubernetesAppgroup#filters}
  */
  readonly filters?: KubernetesAppgroupFilters[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#options KubernetesAppgroup#options}
  */
  readonly options?: KubernetesAppgroupOptions[] | cdktf.IResolvable;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#plan KubernetesAppgroup#plan}
  */
  readonly plan?: KubernetesAppgroupPlan[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#tags KubernetesAppgroup#tags}
  */
  readonly tags?: KubernetesAppgroupTags[] | cdktf.IResolvable;
  /**
  * timezone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#timezone KubernetesAppgroup#timezone}
  */
  readonly timezone?: KubernetesAppgroupTimezone[] | cdktf.IResolvable;
}
export interface KubernetesAppgroupActivitycontrol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#enablebackup KubernetesAppgroup#enablebackup}
  */
  readonly enablebackup?: string;
}

export function kubernetesAppgroupActivitycontrolToTerraform(struct?: KubernetesAppgroupActivitycontrol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enablebackup: cdktf.stringToTerraform(struct!.enablebackup),
  }
}


export function kubernetesAppgroupActivitycontrolToHclTerraform(struct?: KubernetesAppgroupActivitycontrol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enablebackup: {
      value: cdktf.stringToHclTerraform(struct!.enablebackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAppgroupActivitycontrolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupActivitycontrol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablebackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablebackup = this._enablebackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupActivitycontrol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablebackup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablebackup = value.enablebackup;
    }
  }

  // enablebackup - computed: true, optional: true, required: false
  private _enablebackup?: string; 
  public get enablebackup() {
    return this.getStringAttribute('enablebackup');
  }
  public set enablebackup(value: string) {
    this._enablebackup = value;
  }
  public resetEnablebackup() {
    this._enablebackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablebackupInput() {
    return this._enablebackup;
  }
}

export class KubernetesAppgroupActivitycontrolList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupActivitycontrol[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupActivitycontrolOutputReference {
    return new KubernetesAppgroupActivitycontrolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#id KubernetesAppgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#name KubernetesAppgroup#name}
  */
  readonly name?: string;
}

export function kubernetesAppgroupClusterToTerraform(struct?: KubernetesAppgroupCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kubernetesAppgroupClusterToHclTerraform(struct?: KubernetesAppgroupCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class KubernetesAppgroupClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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
}

export class KubernetesAppgroupClusterList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupCluster[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupClusterOutputReference {
    return new KubernetesAppgroupClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupContentApplications {
  /**
  * GUID value of the Kubernetes Application to be associated as content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#guid KubernetesAppgroup#guid}
  */
  readonly guid: string;
  /**
  * Name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#name KubernetesAppgroup#name}
  */
  readonly name?: string;
  /**
  * Type of the Kubernetes application [NAMESPACE, APPLICATION, PVC, LABELS]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#type KubernetesAppgroup#type}
  */
  readonly type: string;
}

export function kubernetesAppgroupContentApplicationsToTerraform(struct?: KubernetesAppgroupContentApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guid: cdktf.stringToTerraform(struct!.guid),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kubernetesAppgroupContentApplicationsToHclTerraform(struct?: KubernetesAppgroupContentApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guid: {
      value: cdktf.stringToHclTerraform(struct!.guid),
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

export class KubernetesAppgroupContentApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupContentApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupContentApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guid = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guid = value.guid;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // guid - computed: false, optional: false, required: true
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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

export class KubernetesAppgroupContentApplicationsList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupContentApplications[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupContentApplicationsOutputReference {
    return new KubernetesAppgroupContentApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupContentLabelselectors {
  /**
  * Selector level of the label selector [Application, Volumes, Namespace]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#selectorlevel KubernetesAppgroup#selectorlevel}
  */
  readonly selectorlevel: string;
  /**
  * Value of the label selector in key=value format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#selectorvalue KubernetesAppgroup#selectorvalue}
  */
  readonly selectorvalue: string;
}

export function kubernetesAppgroupContentLabelselectorsToTerraform(struct?: KubernetesAppgroupContentLabelselectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selectorlevel: cdktf.stringToTerraform(struct!.selectorlevel),
    selectorvalue: cdktf.stringToTerraform(struct!.selectorvalue),
  }
}


export function kubernetesAppgroupContentLabelselectorsToHclTerraform(struct?: KubernetesAppgroupContentLabelselectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selectorlevel: {
      value: cdktf.stringToHclTerraform(struct!.selectorlevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectorvalue: {
      value: cdktf.stringToHclTerraform(struct!.selectorvalue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAppgroupContentLabelselectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupContentLabelselectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectorlevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorlevel = this._selectorlevel;
    }
    if (this._selectorvalue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorvalue = this._selectorvalue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupContentLabelselectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectorlevel = undefined;
      this._selectorvalue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectorlevel = value.selectorlevel;
      this._selectorvalue = value.selectorvalue;
    }
  }

  // selectorlevel - computed: false, optional: false, required: true
  private _selectorlevel?: string; 
  public get selectorlevel() {
    return this.getStringAttribute('selectorlevel');
  }
  public set selectorlevel(value: string) {
    this._selectorlevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorlevelInput() {
    return this._selectorlevel;
  }

  // selectorvalue - computed: false, optional: false, required: true
  private _selectorvalue?: string; 
  public get selectorvalue() {
    return this.getStringAttribute('selectorvalue');
  }
  public set selectorvalue(value: string) {
    this._selectorvalue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorvalueInput() {
    return this._selectorvalue;
  }
}

export class KubernetesAppgroupContentLabelselectorsList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupContentLabelselectors[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupContentLabelselectorsOutputReference {
    return new KubernetesAppgroupContentLabelselectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupContent {
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#applications KubernetesAppgroup#applications}
  */
  readonly applications?: KubernetesAppgroupContentApplications[] | cdktf.IResolvable;
  /**
  * labelselectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#labelselectors KubernetesAppgroup#labelselectors}
  */
  readonly labelselectors?: KubernetesAppgroupContentLabelselectors[] | cdktf.IResolvable;
}

export function kubernetesAppgroupContentToTerraform(struct?: KubernetesAppgroupContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(kubernetesAppgroupContentApplicationsToTerraform, true)(struct!.applications),
    labelselectors: cdktf.listMapper(kubernetesAppgroupContentLabelselectorsToTerraform, true)(struct!.labelselectors),
  }
}


export function kubernetesAppgroupContentToHclTerraform(struct?: KubernetesAppgroupContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(kubernetesAppgroupContentApplicationsToHclTerraform, true)(struct!.applications),
      isBlock: true,
      type: "set",
      storageClassType: "KubernetesAppgroupContentApplicationsList",
    },
    labelselectors: {
      value: cdktf.listMapperHcl(kubernetesAppgroupContentLabelselectorsToHclTerraform, true)(struct!.labelselectors),
      isBlock: true,
      type: "set",
      storageClassType: "KubernetesAppgroupContentLabelselectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAppgroupContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications?.internalValue;
    }
    if (this._labelselectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelselectors = this._labelselectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications.internalValue = undefined;
      this._labelselectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications.internalValue = value.applications;
      this._labelselectors.internalValue = value.labelselectors;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications = new KubernetesAppgroupContentApplicationsList(this, "applications", true);
  public get applications() {
    return this._applications;
  }
  public putApplications(value: KubernetesAppgroupContentApplications[] | cdktf.IResolvable) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // labelselectors - computed: false, optional: true, required: false
  private _labelselectors = new KubernetesAppgroupContentLabelselectorsList(this, "labelselectors", true);
  public get labelselectors() {
    return this._labelselectors;
  }
  public putLabelselectors(value: KubernetesAppgroupContentLabelselectors[] | cdktf.IResolvable) {
    this._labelselectors.internalValue = value;
  }
  public resetLabelselectors() {
    this._labelselectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelselectorsInput() {
    return this._labelselectors.internalValue;
  }
}

export class KubernetesAppgroupContentList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupContent[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupContentOutputReference {
    return new KubernetesAppgroupContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupFiltersApplications {
  /**
  * GUID value of the Kubernetes Application to be associated as content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#guid KubernetesAppgroup#guid}
  */
  readonly guid: string;
  /**
  * Name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#name KubernetesAppgroup#name}
  */
  readonly name?: string;
  /**
  * Type of the Kubernetes application [NAMESPACE, APPLICATION, PVC, LABELS]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#type KubernetesAppgroup#type}
  */
  readonly type: string;
}

export function kubernetesAppgroupFiltersApplicationsToTerraform(struct?: KubernetesAppgroupFiltersApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guid: cdktf.stringToTerraform(struct!.guid),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kubernetesAppgroupFiltersApplicationsToHclTerraform(struct?: KubernetesAppgroupFiltersApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guid: {
      value: cdktf.stringToHclTerraform(struct!.guid),
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

export class KubernetesAppgroupFiltersApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupFiltersApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupFiltersApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guid = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guid = value.guid;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // guid - computed: false, optional: false, required: true
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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

export class KubernetesAppgroupFiltersApplicationsList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupFiltersApplications[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupFiltersApplicationsOutputReference {
    return new KubernetesAppgroupFiltersApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupFiltersLabelselectors {
  /**
  * Selector level of the label selector [Application, Volumes, Namespace]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#selectorlevel KubernetesAppgroup#selectorlevel}
  */
  readonly selectorlevel: string;
  /**
  * Value of the label selector in key=value format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#selectorvalue KubernetesAppgroup#selectorvalue}
  */
  readonly selectorvalue: string;
}

export function kubernetesAppgroupFiltersLabelselectorsToTerraform(struct?: KubernetesAppgroupFiltersLabelselectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selectorlevel: cdktf.stringToTerraform(struct!.selectorlevel),
    selectorvalue: cdktf.stringToTerraform(struct!.selectorvalue),
  }
}


export function kubernetesAppgroupFiltersLabelselectorsToHclTerraform(struct?: KubernetesAppgroupFiltersLabelselectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selectorlevel: {
      value: cdktf.stringToHclTerraform(struct!.selectorlevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectorvalue: {
      value: cdktf.stringToHclTerraform(struct!.selectorvalue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAppgroupFiltersLabelselectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupFiltersLabelselectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectorlevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorlevel = this._selectorlevel;
    }
    if (this._selectorvalue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorvalue = this._selectorvalue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupFiltersLabelselectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectorlevel = undefined;
      this._selectorvalue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectorlevel = value.selectorlevel;
      this._selectorvalue = value.selectorvalue;
    }
  }

  // selectorlevel - computed: false, optional: false, required: true
  private _selectorlevel?: string; 
  public get selectorlevel() {
    return this.getStringAttribute('selectorlevel');
  }
  public set selectorlevel(value: string) {
    this._selectorlevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorlevelInput() {
    return this._selectorlevel;
  }

  // selectorvalue - computed: false, optional: false, required: true
  private _selectorvalue?: string; 
  public get selectorvalue() {
    return this.getStringAttribute('selectorvalue');
  }
  public set selectorvalue(value: string) {
    this._selectorvalue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorvalueInput() {
    return this._selectorvalue;
  }
}

export class KubernetesAppgroupFiltersLabelselectorsList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupFiltersLabelselectors[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupFiltersLabelselectorsOutputReference {
    return new KubernetesAppgroupFiltersLabelselectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupFilters {
  /**
  * Specify whether to skip backup of stateless applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#skipstatelessapps KubernetesAppgroup#skipstatelessapps}
  */
  readonly skipstatelessapps?: string;
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#applications KubernetesAppgroup#applications}
  */
  readonly applications?: KubernetesAppgroupFiltersApplications[] | cdktf.IResolvable;
  /**
  * labelselectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#labelselectors KubernetesAppgroup#labelselectors}
  */
  readonly labelselectors?: KubernetesAppgroupFiltersLabelselectors[] | cdktf.IResolvable;
}

export function kubernetesAppgroupFiltersToTerraform(struct?: KubernetesAppgroupFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skipstatelessapps: cdktf.stringToTerraform(struct!.skipstatelessapps),
    applications: cdktf.listMapper(kubernetesAppgroupFiltersApplicationsToTerraform, true)(struct!.applications),
    labelselectors: cdktf.listMapper(kubernetesAppgroupFiltersLabelselectorsToTerraform, true)(struct!.labelselectors),
  }
}


export function kubernetesAppgroupFiltersToHclTerraform(struct?: KubernetesAppgroupFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skipstatelessapps: {
      value: cdktf.stringToHclTerraform(struct!.skipstatelessapps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applications: {
      value: cdktf.listMapperHcl(kubernetesAppgroupFiltersApplicationsToHclTerraform, true)(struct!.applications),
      isBlock: true,
      type: "set",
      storageClassType: "KubernetesAppgroupFiltersApplicationsList",
    },
    labelselectors: {
      value: cdktf.listMapperHcl(kubernetesAppgroupFiltersLabelselectorsToHclTerraform, true)(struct!.labelselectors),
      isBlock: true,
      type: "set",
      storageClassType: "KubernetesAppgroupFiltersLabelselectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAppgroupFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipstatelessapps !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipstatelessapps = this._skipstatelessapps;
    }
    if (this._applications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications?.internalValue;
    }
    if (this._labelselectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelselectors = this._labelselectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skipstatelessapps = undefined;
      this._applications.internalValue = undefined;
      this._labelselectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skipstatelessapps = value.skipstatelessapps;
      this._applications.internalValue = value.applications;
      this._labelselectors.internalValue = value.labelselectors;
    }
  }

  // skipstatelessapps - computed: true, optional: true, required: false
  private _skipstatelessapps?: string; 
  public get skipstatelessapps() {
    return this.getStringAttribute('skipstatelessapps');
  }
  public set skipstatelessapps(value: string) {
    this._skipstatelessapps = value;
  }
  public resetSkipstatelessapps() {
    this._skipstatelessapps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipstatelessappsInput() {
    return this._skipstatelessapps;
  }

  // applications - computed: false, optional: true, required: false
  private _applications = new KubernetesAppgroupFiltersApplicationsList(this, "applications", true);
  public get applications() {
    return this._applications;
  }
  public putApplications(value: KubernetesAppgroupFiltersApplications[] | cdktf.IResolvable) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // labelselectors - computed: false, optional: true, required: false
  private _labelselectors = new KubernetesAppgroupFiltersLabelselectorsList(this, "labelselectors", true);
  public get labelselectors() {
    return this._labelselectors;
  }
  public putLabelselectors(value: KubernetesAppgroupFiltersLabelselectors[] | cdktf.IResolvable) {
    this._labelselectors.internalValue = value;
  }
  public resetLabelselectors() {
    this._labelselectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelselectorsInput() {
    return this._labelselectors.internalValue;
  }
}

export class KubernetesAppgroupFiltersList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupFilters[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupFiltersOutputReference {
    return new KubernetesAppgroupFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupOptionsWorkerresources {
  /**
  * Define limits.cpu to set on the worker Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#cpulimits KubernetesAppgroup#cpulimits}
  */
  readonly cpulimits?: string;
  /**
  * Define requests.cpu to set on the worker Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#cpurequests KubernetesAppgroup#cpurequests}
  */
  readonly cpurequests?: string;
  /**
  * Define limits.memory to set on the worker Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#memorylimits KubernetesAppgroup#memorylimits}
  */
  readonly memorylimits?: string;
  /**
  * Define requests.memory to set on the worker Pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#memoryrequests KubernetesAppgroup#memoryrequests}
  */
  readonly memoryrequests?: string;
}

export function kubernetesAppgroupOptionsWorkerresourcesToTerraform(struct?: KubernetesAppgroupOptionsWorkerresources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpulimits: cdktf.stringToTerraform(struct!.cpulimits),
    cpurequests: cdktf.stringToTerraform(struct!.cpurequests),
    memorylimits: cdktf.stringToTerraform(struct!.memorylimits),
    memoryrequests: cdktf.stringToTerraform(struct!.memoryrequests),
  }
}


export function kubernetesAppgroupOptionsWorkerresourcesToHclTerraform(struct?: KubernetesAppgroupOptionsWorkerresources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpulimits: {
      value: cdktf.stringToHclTerraform(struct!.cpulimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpurequests: {
      value: cdktf.stringToHclTerraform(struct!.cpurequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memorylimits: {
      value: cdktf.stringToHclTerraform(struct!.memorylimits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memoryrequests: {
      value: cdktf.stringToHclTerraform(struct!.memoryrequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAppgroupOptionsWorkerresourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupOptionsWorkerresources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpulimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpulimits = this._cpulimits;
    }
    if (this._cpurequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpurequests = this._cpurequests;
    }
    if (this._memorylimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorylimits = this._memorylimits;
    }
    if (this._memoryrequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryrequests = this._memoryrequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupOptionsWorkerresources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpulimits = undefined;
      this._cpurequests = undefined;
      this._memorylimits = undefined;
      this._memoryrequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpulimits = value.cpulimits;
      this._cpurequests = value.cpurequests;
      this._memorylimits = value.memorylimits;
      this._memoryrequests = value.memoryrequests;
    }
  }

  // cpulimits - computed: true, optional: true, required: false
  private _cpulimits?: string; 
  public get cpulimits() {
    return this.getStringAttribute('cpulimits');
  }
  public set cpulimits(value: string) {
    this._cpulimits = value;
  }
  public resetCpulimits() {
    this._cpulimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpulimitsInput() {
    return this._cpulimits;
  }

  // cpurequests - computed: true, optional: true, required: false
  private _cpurequests?: string; 
  public get cpurequests() {
    return this.getStringAttribute('cpurequests');
  }
  public set cpurequests(value: string) {
    this._cpurequests = value;
  }
  public resetCpurequests() {
    this._cpurequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpurequestsInput() {
    return this._cpurequests;
  }

  // memorylimits - computed: true, optional: true, required: false
  private _memorylimits?: string; 
  public get memorylimits() {
    return this.getStringAttribute('memorylimits');
  }
  public set memorylimits(value: string) {
    this._memorylimits = value;
  }
  public resetMemorylimits() {
    this._memorylimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorylimitsInput() {
    return this._memorylimits;
  }

  // memoryrequests - computed: true, optional: true, required: false
  private _memoryrequests?: string; 
  public get memoryrequests() {
    return this.getStringAttribute('memoryrequests');
  }
  public set memoryrequests(value: string) {
    this._memoryrequests = value;
  }
  public resetMemoryrequests() {
    this._memoryrequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryrequestsInput() {
    return this._memoryrequests;
  }
}

export class KubernetesAppgroupOptionsWorkerresourcesList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupOptionsWorkerresources[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupOptionsWorkerresourcesOutputReference {
    return new KubernetesAppgroupOptionsWorkerresourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupOptions {
  /**
  * Define number of parallel data readers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#backupstreams KubernetesAppgroup#backupstreams}
  */
  readonly backupstreams?: number;
  /**
  * Define setting to enable scheduling worker Pods to CV Namespace for CSI-Snapshot enabled backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#cvnamespacescheduling KubernetesAppgroup#cvnamespacescheduling}
  */
  readonly cvnamespacescheduling?: string;
  /**
  * Define the backup job start time in epochs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#jobstarttime KubernetesAppgroup#jobstarttime}
  */
  readonly jobstarttime?: number;
  /**
  * Define setting to enable fallback to live volume backup in case of snap failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#snapfallbacktolivevolumebackup KubernetesAppgroup#snapfallbacktolivevolumebackup}
  */
  readonly snapfallbacktolivevolumebackup?: string;
  /**
  * workerresources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#workerresources KubernetesAppgroup#workerresources}
  */
  readonly workerresources?: KubernetesAppgroupOptionsWorkerresources[] | cdktf.IResolvable;
}

export function kubernetesAppgroupOptionsToTerraform(struct?: KubernetesAppgroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backupstreams: cdktf.numberToTerraform(struct!.backupstreams),
    cvnamespacescheduling: cdktf.stringToTerraform(struct!.cvnamespacescheduling),
    jobstarttime: cdktf.numberToTerraform(struct!.jobstarttime),
    snapfallbacktolivevolumebackup: cdktf.stringToTerraform(struct!.snapfallbacktolivevolumebackup),
    workerresources: cdktf.listMapper(kubernetesAppgroupOptionsWorkerresourcesToTerraform, true)(struct!.workerresources),
  }
}


export function kubernetesAppgroupOptionsToHclTerraform(struct?: KubernetesAppgroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backupstreams: {
      value: cdktf.numberToHclTerraform(struct!.backupstreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cvnamespacescheduling: {
      value: cdktf.stringToHclTerraform(struct!.cvnamespacescheduling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jobstarttime: {
      value: cdktf.numberToHclTerraform(struct!.jobstarttime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapfallbacktolivevolumebackup: {
      value: cdktf.stringToHclTerraform(struct!.snapfallbacktolivevolumebackup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workerresources: {
      value: cdktf.listMapperHcl(kubernetesAppgroupOptionsWorkerresourcesToHclTerraform, true)(struct!.workerresources),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesAppgroupOptionsWorkerresourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAppgroupOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupstreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupstreams = this._backupstreams;
    }
    if (this._cvnamespacescheduling !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvnamespacescheduling = this._cvnamespacescheduling;
    }
    if (this._jobstarttime !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobstarttime = this._jobstarttime;
    }
    if (this._snapfallbacktolivevolumebackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapfallbacktolivevolumebackup = this._snapfallbacktolivevolumebackup;
    }
    if (this._workerresources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerresources = this._workerresources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupstreams = undefined;
      this._cvnamespacescheduling = undefined;
      this._jobstarttime = undefined;
      this._snapfallbacktolivevolumebackup = undefined;
      this._workerresources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupstreams = value.backupstreams;
      this._cvnamespacescheduling = value.cvnamespacescheduling;
      this._jobstarttime = value.jobstarttime;
      this._snapfallbacktolivevolumebackup = value.snapfallbacktolivevolumebackup;
      this._workerresources.internalValue = value.workerresources;
    }
  }

  // backupstreams - computed: true, optional: true, required: false
  private _backupstreams?: number; 
  public get backupstreams() {
    return this.getNumberAttribute('backupstreams');
  }
  public set backupstreams(value: number) {
    this._backupstreams = value;
  }
  public resetBackupstreams() {
    this._backupstreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupstreamsInput() {
    return this._backupstreams;
  }

  // cvnamespacescheduling - computed: true, optional: true, required: false
  private _cvnamespacescheduling?: string; 
  public get cvnamespacescheduling() {
    return this.getStringAttribute('cvnamespacescheduling');
  }
  public set cvnamespacescheduling(value: string) {
    this._cvnamespacescheduling = value;
  }
  public resetCvnamespacescheduling() {
    this._cvnamespacescheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvnamespaceschedulingInput() {
    return this._cvnamespacescheduling;
  }

  // jobstarttime - computed: true, optional: true, required: false
  private _jobstarttime?: number; 
  public get jobstarttime() {
    return this.getNumberAttribute('jobstarttime');
  }
  public set jobstarttime(value: number) {
    this._jobstarttime = value;
  }
  public resetJobstarttime() {
    this._jobstarttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobstarttimeInput() {
    return this._jobstarttime;
  }

  // snapfallbacktolivevolumebackup - computed: true, optional: true, required: false
  private _snapfallbacktolivevolumebackup?: string; 
  public get snapfallbacktolivevolumebackup() {
    return this.getStringAttribute('snapfallbacktolivevolumebackup');
  }
  public set snapfallbacktolivevolumebackup(value: string) {
    this._snapfallbacktolivevolumebackup = value;
  }
  public resetSnapfallbacktolivevolumebackup() {
    this._snapfallbacktolivevolumebackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapfallbacktolivevolumebackupInput() {
    return this._snapfallbacktolivevolumebackup;
  }

  // workerresources - computed: false, optional: true, required: false
  private _workerresources = new KubernetesAppgroupOptionsWorkerresourcesList(this, "workerresources", false);
  public get workerresources() {
    return this._workerresources;
  }
  public putWorkerresources(value: KubernetesAppgroupOptionsWorkerresources[] | cdktf.IResolvable) {
    this._workerresources.internalValue = value;
  }
  public resetWorkerresources() {
    this._workerresources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerresourcesInput() {
    return this._workerresources.internalValue;
  }
}

export class KubernetesAppgroupOptionsList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupOptions[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupOptionsOutputReference {
    return new KubernetesAppgroupOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#id KubernetesAppgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#name KubernetesAppgroup#name}
  */
  readonly name?: string;
}

export function kubernetesAppgroupPlanToTerraform(struct?: KubernetesAppgroupPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kubernetesAppgroupPlanToHclTerraform(struct?: KubernetesAppgroupPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class KubernetesAppgroupPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupPlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupPlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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
}

export class KubernetesAppgroupPlanList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupPlan[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupPlanOutputReference {
    return new KubernetesAppgroupPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#name KubernetesAppgroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#value KubernetesAppgroup#value}
  */
  readonly value?: string;
}

export function kubernetesAppgroupTagsToTerraform(struct?: KubernetesAppgroupTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesAppgroupTagsToHclTerraform(struct?: KubernetesAppgroupTags | cdktf.IResolvable): any {
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

export class KubernetesAppgroupTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class KubernetesAppgroupTagsList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupTags[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupTagsOutputReference {
    return new KubernetesAppgroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAppgroupTimezone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#id KubernetesAppgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#name KubernetesAppgroup#name}
  */
  readonly name?: string;
}

export function kubernetesAppgroupTimezoneToTerraform(struct?: KubernetesAppgroupTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kubernetesAppgroupTimezoneToHclTerraform(struct?: KubernetesAppgroupTimezone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class KubernetesAppgroupTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesAppgroupTimezone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAppgroupTimezone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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
}

export class KubernetesAppgroupTimezoneList extends cdktf.ComplexList {
  public internalValue? : KubernetesAppgroupTimezone[] | cdktf.IResolvable

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
  public get(index: number): KubernetesAppgroupTimezoneOutputReference {
    return new KubernetesAppgroupTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup commvault_kubernetes_appgroup}
*/
export class KubernetesAppgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_kubernetes_appgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesAppgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesAppgroup to import
  * @param importFromId The id of the existing KubernetesAppgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesAppgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_kubernetes_appgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_appgroup commvault_kubernetes_appgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesAppgroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KubernetesAppgroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'commvault_kubernetes_appgroup',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
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
    this._name = config.name;
    this._activitycontrol.internalValue = config.activitycontrol;
    this._cluster.internalValue = config.cluster;
    this._content.internalValue = config.content;
    this._filters.internalValue = config.filters;
    this._options.internalValue = config.options;
    this._plan.internalValue = config.plan;
    this._tags.internalValue = config.tags;
    this._timezone.internalValue = config.timezone;
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

  // name - computed: true, optional: true, required: false
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

  // activitycontrol - computed: false, optional: true, required: false
  private _activitycontrol = new KubernetesAppgroupActivitycontrolList(this, "activitycontrol", false);
  public get activitycontrol() {
    return this._activitycontrol;
  }
  public putActivitycontrol(value: KubernetesAppgroupActivitycontrol[] | cdktf.IResolvable) {
    this._activitycontrol.internalValue = value;
  }
  public resetActivitycontrol() {
    this._activitycontrol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitycontrolInput() {
    return this._activitycontrol.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new KubernetesAppgroupClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: KubernetesAppgroupCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // content - computed: false, optional: true, required: false
  private _content = new KubernetesAppgroupContentList(this, "content", false);
  public get content() {
    return this._content;
  }
  public putContent(value: KubernetesAppgroupContent[] | cdktf.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new KubernetesAppgroupFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: KubernetesAppgroupFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new KubernetesAppgroupOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: KubernetesAppgroupOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new KubernetesAppgroupPlanList(this, "plan", false);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: KubernetesAppgroupPlan[] | cdktf.IResolvable) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new KubernetesAppgroupTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: KubernetesAppgroupTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone = new KubernetesAppgroupTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }
  public putTimezone(value: KubernetesAppgroupTimezone[] | cdktf.IResolvable) {
    this._timezone.internalValue = value;
  }
  public resetTimezone() {
    this._timezone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      activitycontrol: cdktf.listMapper(kubernetesAppgroupActivitycontrolToTerraform, true)(this._activitycontrol.internalValue),
      cluster: cdktf.listMapper(kubernetesAppgroupClusterToTerraform, true)(this._cluster.internalValue),
      content: cdktf.listMapper(kubernetesAppgroupContentToTerraform, true)(this._content.internalValue),
      filters: cdktf.listMapper(kubernetesAppgroupFiltersToTerraform, true)(this._filters.internalValue),
      options: cdktf.listMapper(kubernetesAppgroupOptionsToTerraform, true)(this._options.internalValue),
      plan: cdktf.listMapper(kubernetesAppgroupPlanToTerraform, true)(this._plan.internalValue),
      tags: cdktf.listMapper(kubernetesAppgroupTagsToTerraform, true)(this._tags.internalValue),
      timezone: cdktf.listMapper(kubernetesAppgroupTimezoneToTerraform, true)(this._timezone.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      activitycontrol: {
        value: cdktf.listMapperHcl(kubernetesAppgroupActivitycontrolToHclTerraform, true)(this._activitycontrol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAppgroupActivitycontrolList",
      },
      cluster: {
        value: cdktf.listMapperHcl(kubernetesAppgroupClusterToHclTerraform, true)(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAppgroupClusterList",
      },
      content: {
        value: cdktf.listMapperHcl(kubernetesAppgroupContentToHclTerraform, true)(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAppgroupContentList",
      },
      filters: {
        value: cdktf.listMapperHcl(kubernetesAppgroupFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAppgroupFiltersList",
      },
      options: {
        value: cdktf.listMapperHcl(kubernetesAppgroupOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAppgroupOptionsList",
      },
      plan: {
        value: cdktf.listMapperHcl(kubernetesAppgroupPlanToHclTerraform, true)(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAppgroupPlanList",
      },
      tags: {
        value: cdktf.listMapperHcl(kubernetesAppgroupTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesAppgroupTagsList",
      },
      timezone: {
        value: cdktf.listMapperHcl(kubernetesAppgroupTimezoneToHclTerraform, true)(this._timezone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAppgroupTimezoneList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
