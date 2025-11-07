// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * API Server Endpoint of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#apiserver KubernetesCluster#apiserver}
  */
  readonly apiserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Kubernetes Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name?: string;
  /**
  * Name of the Service Account to authenticate with the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#serviceaccount KubernetesCluster#serviceaccount}
  */
  readonly serviceaccount?: string;
  /**
  * Secret token to authenticate with the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#servicetoken KubernetesCluster#servicetoken}
  */
  readonly servicetoken?: string;
  /**
  * The Service Type of the Kubernetes cluster [ONPREM, AKS]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#servicetype KubernetesCluster#servicetype}
  */
  readonly servicetype?: string;
  /**
  * accessnodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#accessnodes KubernetesCluster#accessnodes}
  */
  readonly accessnodes?: KubernetesClusterAccessnodes[] | cdktf.IResolvable;
  /**
  * activitycontrol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#activitycontrol KubernetesCluster#activitycontrol}
  */
  readonly activitycontrol?: KubernetesClusterActivitycontrol[] | cdktf.IResolvable;
  /**
  * etcdprotection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#etcdprotection KubernetesCluster#etcdprotection}
  */
  readonly etcdprotection?: KubernetesClusterEtcdprotection[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#options KubernetesCluster#options}
  */
  readonly options?: KubernetesClusterOptions[] | cdktf.IResolvable;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#region KubernetesCluster#region}
  */
  readonly region?: KubernetesClusterRegion[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#tags KubernetesCluster#tags}
  */
  readonly tags?: KubernetesClusterTags[] | cdktf.IResolvable;
}
export interface KubernetesClusterAccessnodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#type KubernetesCluster#type}
  */
  readonly type?: string;
}

export function kubernetesClusterAccessnodesToTerraform(struct?: KubernetesClusterAccessnodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kubernetesClusterAccessnodesToHclTerraform(struct?: KubernetesClusterAccessnodes | cdktf.IResolvable): any {
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

export class KubernetesClusterAccessnodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterAccessnodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterAccessnodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

export class KubernetesClusterAccessnodesList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterAccessnodes[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterAccessnodesOutputReference {
    return new KubernetesClusterAccessnodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterActivitycontrol {
  /**
  * Enable or disable backup for cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#enablebackup KubernetesCluster#enablebackup}
  */
  readonly enablebackup?: string;
  /**
  * Enabling backup after a delay. Provide UTC Time in Unix format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#enablebackupafteradelay KubernetesCluster#enablebackupafteradelay}
  */
  readonly enablebackupafteradelay?: number;
  /**
  * Enable or disable restore for cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#enablerestore KubernetesCluster#enablerestore}
  */
  readonly enablerestore?: string;
  /**
  * Enabling restore after a delay. Provide UTC Time in Unix format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#enablerestoreafteradelay KubernetesCluster#enablerestoreafteradelay}
  */
  readonly enablerestoreafteradelay?: number;
}

export function kubernetesClusterActivitycontrolToTerraform(struct?: KubernetesClusterActivitycontrol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enablebackup: cdktf.stringToTerraform(struct!.enablebackup),
    enablebackupafteradelay: cdktf.numberToTerraform(struct!.enablebackupafteradelay),
    enablerestore: cdktf.stringToTerraform(struct!.enablerestore),
    enablerestoreafteradelay: cdktf.numberToTerraform(struct!.enablerestoreafteradelay),
  }
}


export function kubernetesClusterActivitycontrolToHclTerraform(struct?: KubernetesClusterActivitycontrol | cdktf.IResolvable): any {
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
    enablebackupafteradelay: {
      value: cdktf.numberToHclTerraform(struct!.enablebackupafteradelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enablerestore: {
      value: cdktf.stringToHclTerraform(struct!.enablerestore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enablerestoreafteradelay: {
      value: cdktf.numberToHclTerraform(struct!.enablerestoreafteradelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterActivitycontrolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterActivitycontrol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablebackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablebackup = this._enablebackup;
    }
    if (this._enablebackupafteradelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablebackupafteradelay = this._enablebackupafteradelay;
    }
    if (this._enablerestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablerestore = this._enablerestore;
    }
    if (this._enablerestoreafteradelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablerestoreafteradelay = this._enablerestoreafteradelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterActivitycontrol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablebackup = undefined;
      this._enablebackupafteradelay = undefined;
      this._enablerestore = undefined;
      this._enablerestoreafteradelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablebackup = value.enablebackup;
      this._enablebackupafteradelay = value.enablebackupafteradelay;
      this._enablerestore = value.enablerestore;
      this._enablerestoreafteradelay = value.enablerestoreafteradelay;
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

  // enablebackupafteradelay - computed: true, optional: true, required: false
  private _enablebackupafteradelay?: number; 
  public get enablebackupafteradelay() {
    return this.getNumberAttribute('enablebackupafteradelay');
  }
  public set enablebackupafteradelay(value: number) {
    this._enablebackupafteradelay = value;
  }
  public resetEnablebackupafteradelay() {
    this._enablebackupafteradelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablebackupafteradelayInput() {
    return this._enablebackupafteradelay;
  }

  // enablerestore - computed: true, optional: true, required: false
  private _enablerestore?: string; 
  public get enablerestore() {
    return this.getStringAttribute('enablerestore');
  }
  public set enablerestore(value: string) {
    this._enablerestore = value;
  }
  public resetEnablerestore() {
    this._enablerestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablerestoreInput() {
    return this._enablerestore;
  }

  // enablerestoreafteradelay - computed: true, optional: true, required: false
  private _enablerestoreafteradelay?: number; 
  public get enablerestoreafteradelay() {
    return this.getNumberAttribute('enablerestoreafteradelay');
  }
  public set enablerestoreafteradelay(value: number) {
    this._enablerestoreafteradelay = value;
  }
  public resetEnablerestoreafteradelay() {
    this._enablerestoreafteradelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablerestoreafteradelayInput() {
    return this._enablerestoreafteradelay;
  }
}

export class KubernetesClusterActivitycontrolList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterActivitycontrol[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterActivitycontrolOutputReference {
    return new KubernetesClusterActivitycontrolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterEtcdprotectionPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name?: string;
}

export function kubernetesClusterEtcdprotectionPlanToTerraform(struct?: KubernetesClusterEtcdprotectionPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kubernetesClusterEtcdprotectionPlanToHclTerraform(struct?: KubernetesClusterEtcdprotectionPlan | cdktf.IResolvable): any {
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

export class KubernetesClusterEtcdprotectionPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterEtcdprotectionPlan | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterEtcdprotectionPlan | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterEtcdprotectionPlanList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterEtcdprotectionPlan[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterEtcdprotectionPlanOutputReference {
    return new KubernetesClusterEtcdprotectionPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterEtcdprotection {
  /**
  * Denote if etcd protection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}
  */
  readonly enabled?: string;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#plan KubernetesCluster#plan}
  */
  readonly plan?: KubernetesClusterEtcdprotectionPlan[] | cdktf.IResolvable;
}

export function kubernetesClusterEtcdprotectionToTerraform(struct?: KubernetesClusterEtcdprotection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    plan: cdktf.listMapper(kubernetesClusterEtcdprotectionPlanToTerraform, true)(struct!.plan),
  }
}


export function kubernetesClusterEtcdprotectionToHclTerraform(struct?: KubernetesClusterEtcdprotection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan: {
      value: cdktf.listMapperHcl(kubernetesClusterEtcdprotectionPlanToHclTerraform, true)(struct!.plan),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterEtcdprotectionPlanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterEtcdprotectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterEtcdprotection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._plan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterEtcdprotection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._plan.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._plan.internalValue = value.plan;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new KubernetesClusterEtcdprotectionPlanList(this, "plan", false);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: KubernetesClusterEtcdprotectionPlan[] | cdktf.IResolvable) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }
}

export class KubernetesClusterEtcdprotectionList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterEtcdprotection[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterEtcdprotectionOutputReference {
    return new KubernetesClusterEtcdprotectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterOptionsImageregistry {
  /**
  * Specify image pull secret to authenticate with the image repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#imagepullsecret KubernetesCluster#imagepullsecret}
  */
  readonly imagepullsecret?: string;
  /**
  * Specify image registry URL for internal image repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#registryurl KubernetesCluster#registryurl}
  */
  readonly registryurl?: string;
}

export function kubernetesClusterOptionsImageregistryToTerraform(struct?: KubernetesClusterOptionsImageregistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagepullsecret: cdktf.stringToTerraform(struct!.imagepullsecret),
    registryurl: cdktf.stringToTerraform(struct!.registryurl),
  }
}


export function kubernetesClusterOptionsImageregistryToHclTerraform(struct?: KubernetesClusterOptionsImageregistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagepullsecret: {
      value: cdktf.stringToHclTerraform(struct!.imagepullsecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registryurl: {
      value: cdktf.stringToHclTerraform(struct!.registryurl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterOptionsImageregistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterOptionsImageregistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagepullsecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagepullsecret = this._imagepullsecret;
    }
    if (this._registryurl !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryurl = this._registryurl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterOptionsImageregistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imagepullsecret = undefined;
      this._registryurl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imagepullsecret = value.imagepullsecret;
      this._registryurl = value.registryurl;
    }
  }

  // imagepullsecret - computed: true, optional: true, required: false
  private _imagepullsecret?: string; 
  public get imagepullsecret() {
    return this.getStringAttribute('imagepullsecret');
  }
  public set imagepullsecret(value: string) {
    this._imagepullsecret = value;
  }
  public resetImagepullsecret() {
    this._imagepullsecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagepullsecretInput() {
    return this._imagepullsecret;
  }

  // registryurl - computed: true, optional: true, required: false
  private _registryurl?: string; 
  public get registryurl() {
    return this.getStringAttribute('registryurl');
  }
  public set registryurl(value: string) {
    this._registryurl = value;
  }
  public resetRegistryurl() {
    this._registryurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryurlInput() {
    return this._registryurl;
  }
}

export class KubernetesClusterOptionsImageregistryList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterOptionsImageregistry[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterOptionsImageregistryOutputReference {
    return new KubernetesClusterOptionsImageregistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterOptions {
  /**
  * imageregistry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#imageregistry KubernetesCluster#imageregistry}
  */
  readonly imageregistry?: KubernetesClusterOptionsImageregistry[] | cdktf.IResolvable;
}

export function kubernetesClusterOptionsToTerraform(struct?: KubernetesClusterOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imageregistry: cdktf.listMapper(kubernetesClusterOptionsImageregistryToTerraform, true)(struct!.imageregistry),
  }
}


export function kubernetesClusterOptionsToHclTerraform(struct?: KubernetesClusterOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imageregistry: {
      value: cdktf.listMapperHcl(kubernetesClusterOptionsImageregistryToHclTerraform, true)(struct!.imageregistry),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterOptionsImageregistryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageregistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageregistry = this._imageregistry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageregistry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageregistry.internalValue = value.imageregistry;
    }
  }

  // imageregistry - computed: false, optional: true, required: false
  private _imageregistry = new KubernetesClusterOptionsImageregistryList(this, "imageregistry", false);
  public get imageregistry() {
    return this._imageregistry;
  }
  public putImageregistry(value: KubernetesClusterOptionsImageregistry[] | cdktf.IResolvable) {
    this._imageregistry.internalValue = value;
  }
  public resetImageregistry() {
    this._imageregistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageregistryInput() {
    return this._imageregistry.internalValue;
  }
}

export class KubernetesClusterOptionsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterOptions[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterOptionsOutputReference {
    return new KubernetesClusterOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name?: string;
}

export function kubernetesClusterRegionToTerraform(struct?: KubernetesClusterRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function kubernetesClusterRegionToHclTerraform(struct?: KubernetesClusterRegion | cdktf.IResolvable): any {
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

export class KubernetesClusterRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterRegion | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterRegion | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterRegionList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterRegion[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterRegionOutputReference {
    return new KubernetesClusterRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#value KubernetesCluster#value}
  */
  readonly value?: string;
}

export function kubernetesClusterTagsToTerraform(struct?: KubernetesClusterTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kubernetesClusterTagsToHclTerraform(struct?: KubernetesClusterTags | cdktf.IResolvable): any {
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

export class KubernetesClusterTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterTags | cdktf.IResolvable | undefined) {
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

export class KubernetesClusterTagsList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterTags[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterTagsOutputReference {
    return new KubernetesClusterTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster commvault_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/kubernetes_cluster commvault_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'commvault_kubernetes_cluster',
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
    this._apiserver = config.apiserver;
    this._id = config.id;
    this._name = config.name;
    this._serviceaccount = config.serviceaccount;
    this._servicetoken = config.servicetoken;
    this._servicetype = config.servicetype;
    this._accessnodes.internalValue = config.accessnodes;
    this._activitycontrol.internalValue = config.activitycontrol;
    this._etcdprotection.internalValue = config.etcdprotection;
    this._options.internalValue = config.options;
    this._region.internalValue = config.region;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apiserver - computed: true, optional: true, required: false
  private _apiserver?: string; 
  public get apiserver() {
    return this.getStringAttribute('apiserver');
  }
  public set apiserver(value: string) {
    this._apiserver = value;
  }
  public resetApiserver() {
    this._apiserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverInput() {
    return this._apiserver;
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

  // serviceaccount - computed: true, optional: true, required: false
  private _serviceaccount?: string; 
  public get serviceaccount() {
    return this.getStringAttribute('serviceaccount');
  }
  public set serviceaccount(value: string) {
    this._serviceaccount = value;
  }
  public resetServiceaccount() {
    this._serviceaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceaccountInput() {
    return this._serviceaccount;
  }

  // servicetoken - computed: true, optional: true, required: false
  private _servicetoken?: string; 
  public get servicetoken() {
    return this.getStringAttribute('servicetoken');
  }
  public set servicetoken(value: string) {
    this._servicetoken = value;
  }
  public resetServicetoken() {
    this._servicetoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicetokenInput() {
    return this._servicetoken;
  }

  // servicetype - computed: true, optional: true, required: false
  private _servicetype?: string; 
  public get servicetype() {
    return this.getStringAttribute('servicetype');
  }
  public set servicetype(value: string) {
    this._servicetype = value;
  }
  public resetServicetype() {
    this._servicetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicetypeInput() {
    return this._servicetype;
  }

  // accessnodes - computed: false, optional: true, required: false
  private _accessnodes = new KubernetesClusterAccessnodesList(this, "accessnodes", true);
  public get accessnodes() {
    return this._accessnodes;
  }
  public putAccessnodes(value: KubernetesClusterAccessnodes[] | cdktf.IResolvable) {
    this._accessnodes.internalValue = value;
  }
  public resetAccessnodes() {
    this._accessnodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessnodesInput() {
    return this._accessnodes.internalValue;
  }

  // activitycontrol - computed: false, optional: true, required: false
  private _activitycontrol = new KubernetesClusterActivitycontrolList(this, "activitycontrol", false);
  public get activitycontrol() {
    return this._activitycontrol;
  }
  public putActivitycontrol(value: KubernetesClusterActivitycontrol[] | cdktf.IResolvable) {
    this._activitycontrol.internalValue = value;
  }
  public resetActivitycontrol() {
    this._activitycontrol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activitycontrolInput() {
    return this._activitycontrol.internalValue;
  }

  // etcdprotection - computed: false, optional: true, required: false
  private _etcdprotection = new KubernetesClusterEtcdprotectionList(this, "etcdprotection", false);
  public get etcdprotection() {
    return this._etcdprotection;
  }
  public putEtcdprotection(value: KubernetesClusterEtcdprotection[] | cdktf.IResolvable) {
    this._etcdprotection.internalValue = value;
  }
  public resetEtcdprotection() {
    this._etcdprotection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdprotectionInput() {
    return this._etcdprotection.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new KubernetesClusterOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: KubernetesClusterOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // region - computed: false, optional: true, required: false
  private _region = new KubernetesClusterRegionList(this, "region", false);
  public get region() {
    return this._region;
  }
  public putRegion(value: KubernetesClusterRegion[] | cdktf.IResolvable) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new KubernetesClusterTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: KubernetesClusterTags[] | cdktf.IResolvable) {
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
      apiserver: cdktf.stringToTerraform(this._apiserver),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      serviceaccount: cdktf.stringToTerraform(this._serviceaccount),
      servicetoken: cdktf.stringToTerraform(this._servicetoken),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      accessnodes: cdktf.listMapper(kubernetesClusterAccessnodesToTerraform, true)(this._accessnodes.internalValue),
      activitycontrol: cdktf.listMapper(kubernetesClusterActivitycontrolToTerraform, true)(this._activitycontrol.internalValue),
      etcdprotection: cdktf.listMapper(kubernetesClusterEtcdprotectionToTerraform, true)(this._etcdprotection.internalValue),
      options: cdktf.listMapper(kubernetesClusterOptionsToTerraform, true)(this._options.internalValue),
      region: cdktf.listMapper(kubernetesClusterRegionToTerraform, true)(this._region.internalValue),
      tags: cdktf.listMapper(kubernetesClusterTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apiserver: {
        value: cdktf.stringToHclTerraform(this._apiserver),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serviceaccount: {
        value: cdktf.stringToHclTerraform(this._serviceaccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicetoken: {
        value: cdktf.stringToHclTerraform(this._servicetoken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicetype: {
        value: cdktf.stringToHclTerraform(this._servicetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accessnodes: {
        value: cdktf.listMapperHcl(kubernetesClusterAccessnodesToHclTerraform, true)(this._accessnodes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesClusterAccessnodesList",
      },
      activitycontrol: {
        value: cdktf.listMapperHcl(kubernetesClusterActivitycontrolToHclTerraform, true)(this._activitycontrol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterActivitycontrolList",
      },
      etcdprotection: {
        value: cdktf.listMapperHcl(kubernetesClusterEtcdprotectionToHclTerraform, true)(this._etcdprotection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterEtcdprotectionList",
      },
      options: {
        value: cdktf.listMapperHcl(kubernetesClusterOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterOptionsList",
      },
      region: {
        value: cdktf.listMapperHcl(kubernetesClusterRegionToHclTerraform, true)(this._region.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterRegionList",
      },
      tags: {
        value: cdktf.listMapperHcl(kubernetesClusterTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KubernetesClusterTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
