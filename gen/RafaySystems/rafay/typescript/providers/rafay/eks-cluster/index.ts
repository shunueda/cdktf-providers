// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cluster EksCluster#cluster}
  */
  readonly cluster: EksClusterCluster;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cluster_config EksCluster#cluster_config}
  */
  readonly clusterConfig: EksClusterClusterConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#timeouts EksCluster#timeouts}
  */
  readonly timeouts?: EksClusterTimeouts;
}
export interface EksClusterClusterMetadata {
  /**
  * The labels for the cluster in Rafay console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#labels EksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the EKS cluster in Rafay console. This must be unique in your organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name: string;
  /**
  * The name of the Rafay project the cluster will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#project EksCluster#project}
  */
  readonly project: string;
}

export function eksClusterClusterMetadataToTerraform(struct?: EksClusterClusterMetadataOutputReference | EksClusterClusterMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function eksClusterClusterMetadataToHclTerraform(struct?: EksClusterClusterMetadataOutputReference | EksClusterClusterMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterClusterMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._name = value.name;
      this._project = value.project;
    }
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpec {
  /**
  * The security groups associated with secondary ENIs for AWS EC2 nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#security_groups EksCluster#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * The subnet associated with secondary ENIs for AWS EC2 nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#subnet EksCluster#subnet}
  */
  readonly subnet?: string;
}

export function eksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpecToTerraform(struct?: EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpecOutputReference | EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function eksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpecToHclTerraform(struct?: EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpecOutputReference | EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroups = undefined;
      this._subnet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._subnet = value.subnet;
    }
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}
export interface EksClusterClusterSpecCniParamsCustomCniCrdSpec {
  /**
  * The name of the Availability Zone (AZ). The availability zone specified here should be a part of the region specified for the EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name: string;
  /**
  * cni_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cni_spec EksCluster#cni_spec}
  */
  readonly cniSpec?: EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpec;
}

export function eksClusterClusterSpecCniParamsCustomCniCrdSpecToTerraform(struct?: EksClusterClusterSpecCniParamsCustomCniCrdSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    cni_spec: eksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpecToTerraform(struct!.cniSpec),
  }
}


export function eksClusterClusterSpecCniParamsCustomCniCrdSpecToHclTerraform(struct?: EksClusterClusterSpecCniParamsCustomCniCrdSpec | cdktf.IResolvable): any {
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
    cni_spec: {
      value: eksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpecToHclTerraform(struct!.cniSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterSpecCniParamsCustomCniCrdSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterSpecCniParamsCustomCniCrdSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._cniSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniSpec = this._cniSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpecCniParamsCustomCniCrdSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._cniSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._cniSpec.internalValue = value.cniSpec;
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

  // cni_spec - computed: false, optional: true, required: false
  private _cniSpec = new EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpecOutputReference(this, "cni_spec");
  public get cniSpec() {
    return this._cniSpec;
  }
  public putCniSpec(value: EksClusterClusterSpecCniParamsCustomCniCrdSpecCniSpec) {
    this._cniSpec.internalValue = value;
  }
  public resetCniSpec() {
    this._cniSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniSpecInput() {
    return this._cniSpec.internalValue;
  }
}

export class EksClusterClusterSpecCniParamsCustomCniCrdSpecList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterSpecCniParamsCustomCniCrdSpec[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterSpecCniParamsCustomCniCrdSpecOutputReference {
    return new EksClusterClusterSpecCniParamsCustomCniCrdSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterSpecCniParams {
  /**
  * Secondary IPv4 CIDR block for the VPC. This should be specified if you choose to auto-create VPC and subnets while creating the EKS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#custom_cni_cidr EksCluster#custom_cni_cidr}
  */
  readonly customCniCidr?: string;
  /**
  * custom_cni_crd_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#custom_cni_crd_spec EksCluster#custom_cni_crd_spec}
  */
  readonly customCniCrdSpec?: EksClusterClusterSpecCniParamsCustomCniCrdSpec[] | cdktf.IResolvable;
}

export function eksClusterClusterSpecCniParamsToTerraform(struct?: EksClusterClusterSpecCniParamsOutputReference | EksClusterClusterSpecCniParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_cni_cidr: cdktf.stringToTerraform(struct!.customCniCidr),
    custom_cni_crd_spec: cdktf.listMapper(eksClusterClusterSpecCniParamsCustomCniCrdSpecToTerraform, true)(struct!.customCniCrdSpec),
  }
}


export function eksClusterClusterSpecCniParamsToHclTerraform(struct?: EksClusterClusterSpecCniParamsOutputReference | EksClusterClusterSpecCniParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_cni_cidr: {
      value: cdktf.stringToHclTerraform(struct!.customCniCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_cni_crd_spec: {
      value: cdktf.listMapperHcl(eksClusterClusterSpecCniParamsCustomCniCrdSpecToHclTerraform, true)(struct!.customCniCrdSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecCniParamsCustomCniCrdSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterSpecCniParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterClusterSpecCniParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCniCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCniCidr = this._customCniCidr;
    }
    if (this._customCniCrdSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCniCrdSpec = this._customCniCrdSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpecCniParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customCniCidr = undefined;
      this._customCniCrdSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customCniCidr = value.customCniCidr;
      this._customCniCrdSpec.internalValue = value.customCniCrdSpec;
    }
  }

  // custom_cni_cidr - computed: false, optional: true, required: false
  private _customCniCidr?: string; 
  public get customCniCidr() {
    return this.getStringAttribute('custom_cni_cidr');
  }
  public set customCniCidr(value: string) {
    this._customCniCidr = value;
  }
  public resetCustomCniCidr() {
    this._customCniCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCniCidrInput() {
    return this._customCniCidr;
  }

  // custom_cni_crd_spec - computed: false, optional: true, required: false
  private _customCniCrdSpec = new EksClusterClusterSpecCniParamsCustomCniCrdSpecList(this, "custom_cni_crd_spec", false);
  public get customCniCrdSpec() {
    return this._customCniCrdSpec;
  }
  public putCustomCniCrdSpec(value: EksClusterClusterSpecCniParamsCustomCniCrdSpec[] | cdktf.IResolvable) {
    this._customCniCrdSpec.internalValue = value;
  }
  public resetCustomCniCrdSpec() {
    this._customCniCrdSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCniCrdSpecInput() {
    return this._customCniCrdSpec.internalValue;
  }
}
export interface EksClusterClusterSpecSharingProjects {
  /**
  * The name of the project to share the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name: string;
}

export function eksClusterClusterSpecSharingProjectsToTerraform(struct?: EksClusterClusterSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function eksClusterClusterSpecSharingProjectsToHclTerraform(struct?: EksClusterClusterSpecSharingProjects | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterSpecSharingProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpecSharingProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class EksClusterClusterSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterSpecSharingProjectsOutputReference {
    return new EksClusterClusterSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterSpecSharing {
  /**
  * Enable sharing for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enabled EksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#projects EksCluster#projects}
  */
  readonly projects?: EksClusterClusterSpecSharingProjects[] | cdktf.IResolvable;
}

export function eksClusterClusterSpecSharingToTerraform(struct?: EksClusterClusterSpecSharingOutputReference | EksClusterClusterSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(eksClusterClusterSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function eksClusterClusterSpecSharingToHclTerraform(struct?: EksClusterClusterSpecSharingOutputReference | EksClusterClusterSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    projects: {
      value: cdktf.listMapperHcl(eksClusterClusterSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterClusterSpecSharing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpecSharing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._projects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._projects.internalValue = value.projects;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // projects - computed: false, optional: true, required: false
  private _projects = new EksClusterClusterSpecSharingProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: EksClusterClusterSpecSharingProjects[] | cdktf.IResolvable) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }
}
export interface EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations {
  /**
  * indicates the taint effect to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#effect EksCluster#effect}
  */
  readonly effect?: string;
  /**
  * the taint key that the toleration applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#key EksCluster#key}
  */
  readonly key?: string;
  /**
  * represents a key's relationship to the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#operator EksCluster#operator}
  */
  readonly operator?: string;
  /**
  * represents the period of time the toleration tolerates the taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#toleration_seconds EksCluster#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * the taint value the toleration matches to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#value EksCluster#value}
  */
  readonly value?: string;
}

export function eksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToTerraform(struct?: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToHclTerraform(struct?: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsOutputReference {
    return new EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverride {
  /**
  * enables node selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#node_selection_enabled EksCluster#node_selection_enabled}
  */
  readonly nodeSelectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tolerations EksCluster#tolerations}
  */
  readonly tolerations?: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations[] | cdktf.IResolvable;
}

export function eksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideToTerraform(struct?: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selection_enabled: cdktf.booleanToTerraform(struct!.nodeSelectionEnabled),
    tolerations: cdktf.listMapper(eksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function eksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideToHclTerraform(struct?: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.nodeSelectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tolerations: {
      value: cdktf.listMapperHcl(eksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectionEnabled = this._nodeSelectionEnabled;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectionEnabled = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectionEnabled = value.nodeSelectionEnabled;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selection_enabled - computed: false, optional: true, required: false
  private _nodeSelectionEnabled?: boolean | cdktf.IResolvable; 
  public get nodeSelectionEnabled() {
    return this.getBooleanAttribute('node_selection_enabled');
  }
  public set nodeSelectionEnabled(value: boolean | cdktf.IResolvable) {
    this._nodeSelectionEnabled = value;
  }
  public resetNodeSelectionEnabled() {
    this._nodeSelectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectionEnabledInput() {
    return this._nodeSelectionEnabled;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}

export class EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverride[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideOutputReference {
    return new EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterSpecSystemComponentsPlacementTolerations {
  /**
  * indicates the taint effect to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#effect EksCluster#effect}
  */
  readonly effect?: string;
  /**
  * the taint key that the toleration applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#key EksCluster#key}
  */
  readonly key?: string;
  /**
  * represents a key's relationship to the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#operator EksCluster#operator}
  */
  readonly operator?: string;
  /**
  * represents the period of time the toleration tolerates the taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#toleration_seconds EksCluster#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * the taint value the toleration matches to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#value EksCluster#value}
  */
  readonly value?: string;
}

export function eksClusterClusterSpecSystemComponentsPlacementTolerationsToTerraform(struct?: EksClusterClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eksClusterClusterSpecSystemComponentsPlacementTolerationsToHclTerraform(struct?: EksClusterClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class EksClusterClusterSpecSystemComponentsPlacementTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpecSystemComponentsPlacementTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class EksClusterClusterSpecSystemComponentsPlacementTolerationsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterSpecSystemComponentsPlacementTolerationsOutputReference {
    return new EksClusterClusterSpecSystemComponentsPlacementTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterSpecSystemComponentsPlacement {
  /**
  * Key-Value pairs insuring pods to be scheduled on desired nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#node_selector EksCluster#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * daemonset_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#daemonset_override EksCluster#daemonset_override}
  */
  readonly daemonsetOverride?: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverride[] | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tolerations EksCluster#tolerations}
  */
  readonly tolerations?: EksClusterClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable;
}

export function eksClusterClusterSpecSystemComponentsPlacementToTerraform(struct?: EksClusterClusterSpecSystemComponentsPlacementOutputReference | EksClusterClusterSpecSystemComponentsPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    daemonset_override: cdktf.listMapper(eksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideToTerraform, true)(struct!.daemonsetOverride),
    tolerations: cdktf.listMapper(eksClusterClusterSpecSystemComponentsPlacementTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function eksClusterClusterSpecSystemComponentsPlacementToHclTerraform(struct?: EksClusterClusterSpecSystemComponentsPlacementOutputReference | EksClusterClusterSpecSystemComponentsPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    daemonset_override: {
      value: cdktf.listMapperHcl(eksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideToHclTerraform, true)(struct!.daemonsetOverride),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(eksClusterClusterSpecSystemComponentsPlacementTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecSystemComponentsPlacementTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterSpecSystemComponentsPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterClusterSpecSystemComponentsPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._daemonsetOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonsetOverride = this._daemonsetOverride?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpecSystemComponentsPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelector = undefined;
      this._daemonsetOverride.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelector = value.nodeSelector;
      this._daemonsetOverride.internalValue = value.daemonsetOverride;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // daemonset_override - computed: false, optional: true, required: false
  private _daemonsetOverride = new EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverrideList(this, "daemonset_override", false);
  public get daemonsetOverride() {
    return this._daemonsetOverride;
  }
  public putDaemonsetOverride(value: EksClusterClusterSpecSystemComponentsPlacementDaemonsetOverride[] | cdktf.IResolvable) {
    this._daemonsetOverride.internalValue = value;
  }
  public resetDaemonsetOverride() {
    this._daemonsetOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonsetOverrideInput() {
    return this._daemonsetOverride.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new EksClusterClusterSpecSystemComponentsPlacementTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: EksClusterClusterSpecSystemComponentsPlacementTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface EksClusterClusterSpec {
  /**
  * The blueprint associated with the cluster. A blueprint defines the configuration and policy. Use blueprints to help standardize cluster configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#blueprint EksCluster#blueprint}
  */
  readonly blueprint?: string;
  /**
  * The blueprint version associated with the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#blueprint_version EksCluster#blueprint_version}
  */
  readonly blueprintVersion?: string;
  /**
  * The cloud credentials provider used to create and manage the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cloud_provider EksCluster#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * The container network interface (CNI) provider used to specify different network connectivity options for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cni_provider EksCluster#cni_provider}
  */
  readonly cniProvider?: string;
  /**
  * Role ARN of the linked account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cross_account_role_arn EksCluster#cross_account_role_arn}
  */
  readonly crossAccountRoleArn?: string;
  /**
  * The proxy configuration for the cluster. Use this if the infrastructure uses an outbound proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#proxy_config EksCluster#proxy_config}
  */
  readonly proxyConfig?: { [key: string]: string };
  /**
  * The cluster type. Supported value is `eks`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#type EksCluster#type}
  */
  readonly type?: string;
  /**
  * cni_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cni_params EksCluster#cni_params}
  */
  readonly cniParams?: EksClusterClusterSpecCniParams;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#sharing EksCluster#sharing}
  */
  readonly sharing?: EksClusterClusterSpecSharing;
  /**
  * system_components_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#system_components_placement EksCluster#system_components_placement}
  */
  readonly systemComponentsPlacement?: EksClusterClusterSpecSystemComponentsPlacement;
}

export function eksClusterClusterSpecToTerraform(struct?: EksClusterClusterSpecOutputReference | EksClusterClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint: cdktf.stringToTerraform(struct!.blueprint),
    blueprint_version: cdktf.stringToTerraform(struct!.blueprintVersion),
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    cni_provider: cdktf.stringToTerraform(struct!.cniProvider),
    cross_account_role_arn: cdktf.stringToTerraform(struct!.crossAccountRoleArn),
    proxy_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.proxyConfig),
    type: cdktf.stringToTerraform(struct!.type),
    cni_params: eksClusterClusterSpecCniParamsToTerraform(struct!.cniParams),
    sharing: eksClusterClusterSpecSharingToTerraform(struct!.sharing),
    system_components_placement: eksClusterClusterSpecSystemComponentsPlacementToTerraform(struct!.systemComponentsPlacement),
  }
}


export function eksClusterClusterSpecToHclTerraform(struct?: EksClusterClusterSpecOutputReference | EksClusterClusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint: {
      value: cdktf.stringToHclTerraform(struct!.blueprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blueprint_version: {
      value: cdktf.stringToHclTerraform(struct!.blueprintVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cni_provider: {
      value: cdktf.stringToHclTerraform(struct!.cniProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_account_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.crossAccountRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.proxyConfig),
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
    cni_params: {
      value: eksClusterClusterSpecCniParamsToHclTerraform(struct!.cniParams),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecCniParamsList",
    },
    sharing: {
      value: eksClusterClusterSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecSharingList",
    },
    system_components_placement: {
      value: eksClusterClusterSpecSystemComponentsPlacementToHclTerraform(struct!.systemComponentsPlacement),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecSystemComponentsPlacementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterClusterSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint;
    }
    if (this._blueprintVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintVersion = this._blueprintVersion;
    }
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._cniProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniProvider = this._cniProvider;
    }
    if (this._crossAccountRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccountRoleArn = this._crossAccountRoleArn;
    }
    if (this._proxyConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfig = this._proxyConfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cniParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniParams = this._cniParams?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    if (this._systemComponentsPlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemComponentsPlacement = this._systemComponentsPlacement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blueprint = undefined;
      this._blueprintVersion = undefined;
      this._cloudProvider = undefined;
      this._cniProvider = undefined;
      this._crossAccountRoleArn = undefined;
      this._proxyConfig = undefined;
      this._type = undefined;
      this._cniParams.internalValue = undefined;
      this._sharing.internalValue = undefined;
      this._systemComponentsPlacement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blueprint = value.blueprint;
      this._blueprintVersion = value.blueprintVersion;
      this._cloudProvider = value.cloudProvider;
      this._cniProvider = value.cniProvider;
      this._crossAccountRoleArn = value.crossAccountRoleArn;
      this._proxyConfig = value.proxyConfig;
      this._type = value.type;
      this._cniParams.internalValue = value.cniParams;
      this._sharing.internalValue = value.sharing;
      this._systemComponentsPlacement.internalValue = value.systemComponentsPlacement;
    }
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  public resetBlueprint() {
    this._blueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // blueprint_version - computed: false, optional: true, required: false
  private _blueprintVersion?: string; 
  public get blueprintVersion() {
    return this.getStringAttribute('blueprint_version');
  }
  public set blueprintVersion(value: string) {
    this._blueprintVersion = value;
  }
  public resetBlueprintVersion() {
    this._blueprintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintVersionInput() {
    return this._blueprintVersion;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cni_provider - computed: false, optional: true, required: false
  private _cniProvider?: string; 
  public get cniProvider() {
    return this.getStringAttribute('cni_provider');
  }
  public set cniProvider(value: string) {
    this._cniProvider = value;
  }
  public resetCniProvider() {
    this._cniProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniProviderInput() {
    return this._cniProvider;
  }

  // cross_account_role_arn - computed: false, optional: true, required: false
  private _crossAccountRoleArn?: string; 
  public get crossAccountRoleArn() {
    return this.getStringAttribute('cross_account_role_arn');
  }
  public set crossAccountRoleArn(value: string) {
    this._crossAccountRoleArn = value;
  }
  public resetCrossAccountRoleArn() {
    this._crossAccountRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleArnInput() {
    return this._crossAccountRoleArn;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig?: { [key: string]: string }; 
  public get proxyConfig() {
    return this.getStringMapAttribute('proxy_config');
  }
  public set proxyConfig(value: { [key: string]: string }) {
    this._proxyConfig = value;
  }
  public resetProxyConfig() {
    this._proxyConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig;
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

  // cni_params - computed: false, optional: true, required: false
  private _cniParams = new EksClusterClusterSpecCniParamsOutputReference(this, "cni_params");
  public get cniParams() {
    return this._cniParams;
  }
  public putCniParams(value: EksClusterClusterSpecCniParams) {
    this._cniParams.internalValue = value;
  }
  public resetCniParams() {
    this._cniParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniParamsInput() {
    return this._cniParams.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new EksClusterClusterSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: EksClusterClusterSpecSharing) {
    this._sharing.internalValue = value;
  }
  public resetSharing() {
    this._sharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing.internalValue;
  }

  // system_components_placement - computed: false, optional: true, required: false
  private _systemComponentsPlacement = new EksClusterClusterSpecSystemComponentsPlacementOutputReference(this, "system_components_placement");
  public get systemComponentsPlacement() {
    return this._systemComponentsPlacement;
  }
  public putSystemComponentsPlacement(value: EksClusterClusterSpecSystemComponentsPlacement) {
    this._systemComponentsPlacement.internalValue = value;
  }
  public resetSystemComponentsPlacement() {
    this._systemComponentsPlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemComponentsPlacementInput() {
    return this._systemComponentsPlacement.internalValue;
  }
}
export interface EksClusterCluster {
  /**
  * The type of resource. Supported value is `Cluster`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#kind EksCluster#kind}
  */
  readonly kind?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#metadata EksCluster#metadata}
  */
  readonly metadata: EksClusterClusterMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#spec EksCluster#spec}
  */
  readonly spec: EksClusterClusterSpec;
}

export function eksClusterClusterToTerraform(struct?: EksClusterClusterOutputReference | EksClusterCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    metadata: eksClusterClusterMetadataToTerraform(struct!.metadata),
    spec: eksClusterClusterSpecToTerraform(struct!.spec),
  }
}


export function eksClusterClusterToHclTerraform(struct?: EksClusterClusterOutputReference | EksClusterCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: eksClusterClusterMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterMetadataList",
    },
    spec: {
      value: eksClusterClusterSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new EksClusterClusterMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: EksClusterClusterMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new EksClusterClusterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: EksClusterClusterSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScope {
  /**
  * Scope access to namespace(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#namespaces EksCluster#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * namespace or cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#type EksCluster#type}
  */
  readonly type?: string;
}

export function eksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeToTerraform(struct?: EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeToHclTerraform(struct?: EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._type = value.type;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
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

export class EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScope[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeOutputReference {
    return new EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAccessConfigAccessEntriesAccessPolicies {
  /**
  * the ARN of the policy to attach to the access entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#policy_arn EksCluster#policy_arn}
  */
  readonly policyArn?: string;
  /**
  * access_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#access_scope EksCluster#access_scope}
  */
  readonly accessScope?: EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScope[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesToTerraform(struct?: EksClusterClusterConfigAccessConfigAccessEntriesAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_arn: cdktf.stringToTerraform(struct!.policyArn),
    access_scope: cdktf.listMapper(eksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeToTerraform, true)(struct!.accessScope),
  }
}


export function eksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesToHclTerraform(struct?: EksClusterClusterConfigAccessConfigAccessEntriesAccessPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_arn: {
      value: cdktf.stringToHclTerraform(struct!.policyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_scope: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeToHclTerraform, true)(struct!.accessScope),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAccessConfigAccessEntriesAccessPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyArn = this._policyArn;
    }
    if (this._accessScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessScope = this._accessScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAccessConfigAccessEntriesAccessPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyArn = undefined;
      this._accessScope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyArn = value.policyArn;
      this._accessScope.internalValue = value.accessScope;
    }
  }

  // policy_arn - computed: false, optional: true, required: false
  private _policyArn?: string; 
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  public resetPolicyArn() {
    this._policyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn;
  }

  // access_scope - computed: false, optional: true, required: false
  private _accessScope = new EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScopeList(this, "access_scope", false);
  public get accessScope() {
    return this._accessScope;
  }
  public putAccessScope(value: EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesAccessScope[] | cdktf.IResolvable) {
    this._accessScope.internalValue = value;
  }
  public resetAccessScope() {
    this._accessScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessScopeInput() {
    return this._accessScope.internalValue;
  }
}

export class EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAccessConfigAccessEntriesAccessPolicies[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesOutputReference {
    return new EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAccessConfigAccessEntries {
  /**
  * set of Kubernetes groups to map to the principal ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#kubernetes_groups EksCluster#kubernetes_groups}
  */
  readonly kubernetesGroups?: string[];
  /**
  * username to map to the principal ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#kubernetes_username EksCluster#kubernetes_username}
  */
  readonly kubernetesUsername?: string;
  /**
  * the IAM principal that you want to grant access to Kubernetes objects on your cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#principal_arn EksCluster#principal_arn}
  */
  readonly principalArn?: string;
  /**
  * applied to the access entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * EC2_LINUX, EC2_WINDOWS, FARGATE_LINUX or STANDARD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#type EksCluster#type}
  */
  readonly type?: string;
  /**
  * access_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#access_policies EksCluster#access_policies}
  */
  readonly accessPolicies?: EksClusterClusterConfigAccessConfigAccessEntriesAccessPolicies[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigAccessConfigAccessEntriesToTerraform(struct?: EksClusterClusterConfigAccessConfigAccessEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubernetesGroups),
    kubernetes_username: cdktf.stringToTerraform(struct!.kubernetesUsername),
    principal_arn: cdktf.stringToTerraform(struct!.principalArn),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    access_policies: cdktf.listMapper(eksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesToTerraform, true)(struct!.accessPolicies),
  }
}


export function eksClusterClusterConfigAccessConfigAccessEntriesToHclTerraform(struct?: EksClusterClusterConfigAccessConfigAccessEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubernetesGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kubernetes_username: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_arn: {
      value: cdktf.stringToHclTerraform(struct!.principalArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
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
    access_policies: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesToHclTerraform, true)(struct!.accessPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAccessConfigAccessEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAccessConfigAccessEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesGroups = this._kubernetesGroups;
    }
    if (this._kubernetesUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesUsername = this._kubernetesUsername;
    }
    if (this._principalArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalArn = this._principalArn;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._accessPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicies = this._accessPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAccessConfigAccessEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubernetesGroups = undefined;
      this._kubernetesUsername = undefined;
      this._principalArn = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._accessPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubernetesGroups = value.kubernetesGroups;
      this._kubernetesUsername = value.kubernetesUsername;
      this._principalArn = value.principalArn;
      this._tags = value.tags;
      this._type = value.type;
      this._accessPolicies.internalValue = value.accessPolicies;
    }
  }

  // kubernetes_groups - computed: false, optional: true, required: false
  private _kubernetesGroups?: string[]; 
  public get kubernetesGroups() {
    return this.getListAttribute('kubernetes_groups');
  }
  public set kubernetesGroups(value: string[]) {
    this._kubernetesGroups = value;
  }
  public resetKubernetesGroups() {
    this._kubernetesGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesGroupsInput() {
    return this._kubernetesGroups;
  }

  // kubernetes_username - computed: false, optional: true, required: false
  private _kubernetesUsername?: string; 
  public get kubernetesUsername() {
    return this.getStringAttribute('kubernetes_username');
  }
  public set kubernetesUsername(value: string) {
    this._kubernetesUsername = value;
  }
  public resetKubernetesUsername() {
    this._kubernetesUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUsernameInput() {
    return this._kubernetesUsername;
  }

  // principal_arn - computed: false, optional: true, required: false
  private _principalArn?: string; 
  public get principalArn() {
    return this.getStringAttribute('principal_arn');
  }
  public set principalArn(value: string) {
    this._principalArn = value;
  }
  public resetPrincipalArn() {
    this._principalArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalArnInput() {
    return this._principalArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // access_policies - computed: false, optional: true, required: false
  private _accessPolicies = new EksClusterClusterConfigAccessConfigAccessEntriesAccessPoliciesList(this, "access_policies", false);
  public get accessPolicies() {
    return this._accessPolicies;
  }
  public putAccessPolicies(value: EksClusterClusterConfigAccessConfigAccessEntriesAccessPolicies[] | cdktf.IResolvable) {
    this._accessPolicies.internalValue = value;
  }
  public resetAccessPolicies() {
    this._accessPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies.internalValue;
  }
}

export class EksClusterClusterConfigAccessConfigAccessEntriesList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAccessConfigAccessEntries[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAccessConfigAccessEntriesOutputReference {
    return new EksClusterClusterConfigAccessConfigAccessEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAccessConfig {
  /**
  * configure which source the cluster will use for authenticated IAM principals. API or API_AND_CONFIG_MAP (default) or CONFIG_MAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#authentication_mode EksCluster#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * choose whether the IAM principal creating the cluster has Kubernetes cluster administrator access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#bootstrap_cluster_creator_admin_permissions EksCluster#bootstrap_cluster_creator_admin_permissions}
  */
  readonly bootstrapClusterCreatorAdminPermissions?: boolean | cdktf.IResolvable;
  /**
  * access_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#access_entries EksCluster#access_entries}
  */
  readonly accessEntries?: EksClusterClusterConfigAccessConfigAccessEntries[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigAccessConfigToTerraform(struct?: EksClusterClusterConfigAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_mode: cdktf.stringToTerraform(struct!.authenticationMode),
    bootstrap_cluster_creator_admin_permissions: cdktf.booleanToTerraform(struct!.bootstrapClusterCreatorAdminPermissions),
    access_entries: cdktf.listMapper(eksClusterClusterConfigAccessConfigAccessEntriesToTerraform, true)(struct!.accessEntries),
  }
}


export function eksClusterClusterConfigAccessConfigToHclTerraform(struct?: EksClusterClusterConfigAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_mode: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_cluster_creator_admin_permissions: {
      value: cdktf.booleanToHclTerraform(struct!.bootstrapClusterCreatorAdminPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_entries: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAccessConfigAccessEntriesToHclTerraform, true)(struct!.accessEntries),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAccessConfigAccessEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMode = this._authenticationMode;
    }
    if (this._bootstrapClusterCreatorAdminPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapClusterCreatorAdminPermissions = this._bootstrapClusterCreatorAdminPermissions;
    }
    if (this._accessEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessEntries = this._accessEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMode = undefined;
      this._bootstrapClusterCreatorAdminPermissions = undefined;
      this._accessEntries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationMode = value.authenticationMode;
      this._bootstrapClusterCreatorAdminPermissions = value.bootstrapClusterCreatorAdminPermissions;
      this._accessEntries.internalValue = value.accessEntries;
    }
  }

  // authentication_mode - computed: false, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // bootstrap_cluster_creator_admin_permissions - computed: false, optional: true, required: false
  private _bootstrapClusterCreatorAdminPermissions?: boolean | cdktf.IResolvable; 
  public get bootstrapClusterCreatorAdminPermissions() {
    return this.getBooleanAttribute('bootstrap_cluster_creator_admin_permissions');
  }
  public set bootstrapClusterCreatorAdminPermissions(value: boolean | cdktf.IResolvable) {
    this._bootstrapClusterCreatorAdminPermissions = value;
  }
  public resetBootstrapClusterCreatorAdminPermissions() {
    this._bootstrapClusterCreatorAdminPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapClusterCreatorAdminPermissionsInput() {
    return this._bootstrapClusterCreatorAdminPermissions;
  }

  // access_entries - computed: false, optional: true, required: false
  private _accessEntries = new EksClusterClusterConfigAccessConfigAccessEntriesList(this, "access_entries", false);
  public get accessEntries() {
    return this._accessEntries;
  }
  public putAccessEntries(value: EksClusterClusterConfigAccessConfigAccessEntries[] | cdktf.IResolvable) {
    this._accessEntries.internalValue = value;
  }
  public resetAccessEntries() {
    this._accessEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEntriesInput() {
    return this._accessEntries.internalValue;
  }
}

export class EksClusterClusterConfigAccessConfigList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAccessConfig[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAccessConfigOutputReference {
    return new EksClusterClusterConfigAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAddonsAttachPolicyStatement {
  /**
  * Attach policy action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#action EksCluster#action}
  */
  readonly action?: string[];
  /**
  * Attach policy Statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#condition EksCluster#condition}
  */
  readonly condition?: string;
  /**
  * Attach policy effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#effect EksCluster#effect}
  */
  readonly effect?: string;
  /**
  * Attach policy NotAction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#not_action EksCluster#not_action}
  */
  readonly notAction?: string[];
  /**
  * Attach policy NotPrincipal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#not_principal EksCluster#not_principal}
  */
  readonly notPrincipal?: string;
  /**
  * Attach policy NotResource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#not_resource EksCluster#not_resource}
  */
  readonly notResource?: string[];
  /**
  * Attach policy principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#principal EksCluster#principal}
  */
  readonly principal?: string;
  /**
  * Attach policy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#resource EksCluster#resource}
  */
  readonly resource?: string;
  /**
  * Sid of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#sid EksCluster#sid}
  */
  readonly sid?: string;
}

export function eksClusterClusterConfigAddonsAttachPolicyStatementToTerraform(struct?: EksClusterClusterConfigAddonsAttachPolicyStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action),
    condition: cdktf.stringToTerraform(struct!.condition),
    effect: cdktf.stringToTerraform(struct!.effect),
    not_action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notAction),
    not_principal: cdktf.stringToTerraform(struct!.notPrincipal),
    not_resource: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notResource),
    principal: cdktf.stringToTerraform(struct!.principal),
    resource: cdktf.stringToTerraform(struct!.resource),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function eksClusterClusterConfigAddonsAttachPolicyStatementToHclTerraform(struct?: EksClusterClusterConfigAddonsAttachPolicyStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notAction),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_principal: {
      value: cdktf.stringToHclTerraform(struct!.notPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_resource: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notResource),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAddonsAttachPolicyStatementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAddonsAttachPolicyStatement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._notAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAction = this._notAction;
    }
    if (this._notPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrincipal = this._notPrincipal;
    }
    if (this._notResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.notResource = this._notResource;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAddonsAttachPolicyStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._condition = undefined;
      this._effect = undefined;
      this._notAction = undefined;
      this._notPrincipal = undefined;
      this._notResource = undefined;
      this._principal = undefined;
      this._resource = undefined;
      this._sid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._condition = value.condition;
      this._effect = value.effect;
      this._notAction = value.notAction;
      this._notPrincipal = value.notPrincipal;
      this._notResource = value.notResource;
      this._principal = value.principal;
      this._resource = value.resource;
      this._sid = value.sid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string[]; 
  public get action() {
    return this.getListAttribute('action');
  }
  public set action(value: string[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // not_action - computed: false, optional: true, required: false
  private _notAction?: string[]; 
  public get notAction() {
    return this.getListAttribute('not_action');
  }
  public set notAction(value: string[]) {
    this._notAction = value;
  }
  public resetNotAction() {
    this._notAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notActionInput() {
    return this._notAction;
  }

  // not_principal - computed: false, optional: true, required: false
  private _notPrincipal?: string; 
  public get notPrincipal() {
    return this.getStringAttribute('not_principal');
  }
  public set notPrincipal(value: string) {
    this._notPrincipal = value;
  }
  public resetNotPrincipal() {
    this._notPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrincipalInput() {
    return this._notPrincipal;
  }

  // not_resource - computed: false, optional: true, required: false
  private _notResource?: string[]; 
  public get notResource() {
    return this.getListAttribute('not_resource');
  }
  public set notResource(value: string[]) {
    this._notResource = value;
  }
  public resetNotResource() {
    this._notResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notResourceInput() {
    return this._notResource;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

export class EksClusterClusterConfigAddonsAttachPolicyStatementList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAddonsAttachPolicyStatement[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAddonsAttachPolicyStatementOutputReference {
    return new EksClusterClusterConfigAddonsAttachPolicyStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAddonsAttachPolicy {
  /**
  * Attach policy id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Attach policy version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#statement EksCluster#statement}
  */
  readonly statement?: EksClusterClusterConfigAddonsAttachPolicyStatement[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigAddonsAttachPolicyToTerraform(struct?: EksClusterClusterConfigAddonsAttachPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.stringToTerraform(struct!.version),
    statement: cdktf.listMapper(eksClusterClusterConfigAddonsAttachPolicyStatementToTerraform, true)(struct!.statement),
  }
}


export function eksClusterClusterConfigAddonsAttachPolicyToHclTerraform(struct?: EksClusterClusterConfigAddonsAttachPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statement: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAddonsAttachPolicyStatementToHclTerraform, true)(struct!.statement),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAddonsAttachPolicyStatementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAddonsAttachPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAddonsAttachPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._statement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAddonsAttachPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._version = undefined;
      this._statement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._version = value.version;
      this._statement.internalValue = value.statement;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // statement - computed: false, optional: true, required: false
  private _statement = new EksClusterClusterConfigAddonsAttachPolicyStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: EksClusterClusterConfigAddonsAttachPolicyStatement[] | cdktf.IResolvable) {
    this._statement.internalValue = value;
  }
  public resetStatement() {
    this._statement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }
}

export class EksClusterClusterConfigAddonsAttachPolicyList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAddonsAttachPolicy[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAddonsAttachPolicyOutputReference {
    return new EksClusterClusterConfigAddonsAttachPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPolicies {
  /**
  * service account annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#auto_scaler EksCluster#auto_scaler}
  */
  readonly autoScaler?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the aws-load-balancer-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#aws_load_balancer_controller EksCluster#aws_load_balancer_controller}
  */
  readonly awsLoadBalancerController?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cert_manager EksCluster#cert_manager}
  */
  readonly certManager?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ebs_csi_controller EksCluster#ebs_csi_controller}
  */
  readonly ebsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the ebs-csi-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#efs_csi_controller EksCluster#efs_csi_controller}
  */
  readonly efsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds external-dns policies for Amazon Route 53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#external_dns EksCluster#external_dns}
  */
  readonly externalDns?: boolean | cdktf.IResolvable;
  /**
  * allows for full ECR (Elastic Container Registry) access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#image_builder EksCluster#image_builder}
  */
  readonly imageBuilder?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesToTerraform(struct?: EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaler: cdktf.booleanToTerraform(struct!.autoScaler),
    aws_load_balancer_controller: cdktf.booleanToTerraform(struct!.awsLoadBalancerController),
    cert_manager: cdktf.booleanToTerraform(struct!.certManager),
    ebs_csi_controller: cdktf.booleanToTerraform(struct!.ebsCsiController),
    efs_csi_controller: cdktf.booleanToTerraform(struct!.efsCsiController),
    external_dns: cdktf.booleanToTerraform(struct!.externalDns),
    image_builder: cdktf.booleanToTerraform(struct!.imageBuilder),
  }
}


export function eksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesToHclTerraform(struct?: EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaler: {
      value: cdktf.booleanToHclTerraform(struct!.autoScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_load_balancer_controller: {
      value: cdktf.booleanToHclTerraform(struct!.awsLoadBalancerController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cert_manager: {
      value: cdktf.booleanToHclTerraform(struct!.certManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs_csi_controller: {
      value: cdktf.booleanToHclTerraform(struct!.ebsCsiController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    efs_csi_controller: {
      value: cdktf.booleanToHclTerraform(struct!.efsCsiController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_dns: {
      value: cdktf.booleanToHclTerraform(struct!.externalDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_builder: {
      value: cdktf.booleanToHclTerraform(struct!.imageBuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaler = this._autoScaler;
    }
    if (this._awsLoadBalancerController !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsLoadBalancerController = this._awsLoadBalancerController;
    }
    if (this._certManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.certManager = this._certManager;
    }
    if (this._ebsCsiController !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsCsiController = this._ebsCsiController;
    }
    if (this._efsCsiController !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsCsiController = this._efsCsiController;
    }
    if (this._externalDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDns = this._externalDns;
    }
    if (this._imageBuilder !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageBuilder = this._imageBuilder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScaler = undefined;
      this._awsLoadBalancerController = undefined;
      this._certManager = undefined;
      this._ebsCsiController = undefined;
      this._efsCsiController = undefined;
      this._externalDns = undefined;
      this._imageBuilder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScaler = value.autoScaler;
      this._awsLoadBalancerController = value.awsLoadBalancerController;
      this._certManager = value.certManager;
      this._ebsCsiController = value.ebsCsiController;
      this._efsCsiController = value.efsCsiController;
      this._externalDns = value.externalDns;
      this._imageBuilder = value.imageBuilder;
    }
  }

  // auto_scaler - computed: false, optional: true, required: false
  private _autoScaler?: boolean | cdktf.IResolvable; 
  public get autoScaler() {
    return this.getBooleanAttribute('auto_scaler');
  }
  public set autoScaler(value: boolean | cdktf.IResolvable) {
    this._autoScaler = value;
  }
  public resetAutoScaler() {
    this._autoScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerInput() {
    return this._autoScaler;
  }

  // aws_load_balancer_controller - computed: false, optional: true, required: false
  private _awsLoadBalancerController?: boolean | cdktf.IResolvable; 
  public get awsLoadBalancerController() {
    return this.getBooleanAttribute('aws_load_balancer_controller');
  }
  public set awsLoadBalancerController(value: boolean | cdktf.IResolvable) {
    this._awsLoadBalancerController = value;
  }
  public resetAwsLoadBalancerController() {
    this._awsLoadBalancerController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLoadBalancerControllerInput() {
    return this._awsLoadBalancerController;
  }

  // cert_manager - computed: false, optional: true, required: false
  private _certManager?: boolean | cdktf.IResolvable; 
  public get certManager() {
    return this.getBooleanAttribute('cert_manager');
  }
  public set certManager(value: boolean | cdktf.IResolvable) {
    this._certManager = value;
  }
  public resetCertManager() {
    this._certManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certManagerInput() {
    return this._certManager;
  }

  // ebs_csi_controller - computed: false, optional: true, required: false
  private _ebsCsiController?: boolean | cdktf.IResolvable; 
  public get ebsCsiController() {
    return this.getBooleanAttribute('ebs_csi_controller');
  }
  public set ebsCsiController(value: boolean | cdktf.IResolvable) {
    this._ebsCsiController = value;
  }
  public resetEbsCsiController() {
    this._ebsCsiController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsCsiControllerInput() {
    return this._ebsCsiController;
  }

  // efs_csi_controller - computed: false, optional: true, required: false
  private _efsCsiController?: boolean | cdktf.IResolvable; 
  public get efsCsiController() {
    return this.getBooleanAttribute('efs_csi_controller');
  }
  public set efsCsiController(value: boolean | cdktf.IResolvable) {
    this._efsCsiController = value;
  }
  public resetEfsCsiController() {
    this._efsCsiController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsCsiControllerInput() {
    return this._efsCsiController;
  }

  // external_dns - computed: false, optional: true, required: false
  private _externalDns?: boolean | cdktf.IResolvable; 
  public get externalDns() {
    return this.getBooleanAttribute('external_dns');
  }
  public set externalDns(value: boolean | cdktf.IResolvable) {
    this._externalDns = value;
  }
  public resetExternalDns() {
    this._externalDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDnsInput() {
    return this._externalDns;
  }

  // image_builder - computed: false, optional: true, required: false
  private _imageBuilder?: boolean | cdktf.IResolvable; 
  public get imageBuilder() {
    return this.getBooleanAttribute('image_builder');
  }
  public set imageBuilder(value: boolean | cdktf.IResolvable) {
    this._imageBuilder = value;
  }
  public resetImageBuilder() {
    this._imageBuilder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBuilderInput() {
    return this._imageBuilder;
  }
}

export class EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPolicies[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesOutputReference {
    return new EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAddonsPodIdentityAssociations {
  /**
  * enable flag to create service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#create_service_account EksCluster#create_service_account}
  */
  readonly createServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * namespace of service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#namespace EksCluster#namespace}
  */
  readonly namespace: string;
  /**
  * permission boundary ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#permission_boundary_arn EksCluster#permission_boundary_arn}
  */
  readonly permissionBoundaryArn?: string;
  /**
  * permission policy document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#permission_policy EksCluster#permission_policy}
  */
  readonly permissionPolicy?: string;
  /**
  * permission policy ARNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#permission_policy_arns EksCluster#permission_policy_arns}
  */
  readonly permissionPolicyArns?: string[];
  /**
  * role ARN of AWS role to associate with service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#role_arn EksCluster#role_arn}
  */
  readonly roleArn?: string;
  /**
  * aws role name to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#role_name EksCluster#role_name}
  */
  readonly roleName?: string;
  /**
  * name of service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#service_account_name EksCluster#service_account_name}
  */
  readonly serviceAccountName: string;
  /**
  * AWS tags for the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * well_known_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#well_known_policies EksCluster#well_known_policies}
  */
  readonly wellKnownPolicies?: EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPolicies[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigAddonsPodIdentityAssociationsToTerraform(struct?: EksClusterClusterConfigAddonsPodIdentityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_service_account: cdktf.booleanToTerraform(struct!.createServiceAccount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    permission_boundary_arn: cdktf.stringToTerraform(struct!.permissionBoundaryArn),
    permission_policy: cdktf.stringToTerraform(struct!.permissionPolicy),
    permission_policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionPolicyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_name: cdktf.stringToTerraform(struct!.roleName),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    well_known_policies: cdktf.listMapper(eksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesToTerraform, true)(struct!.wellKnownPolicies),
  }
}


export function eksClusterClusterConfigAddonsPodIdentityAssociationsToHclTerraform(struct?: EksClusterClusterConfigAddonsPodIdentityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.createServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_boundary_arn: {
      value: cdktf.stringToHclTerraform(struct!.permissionBoundaryArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_policy: {
      value: cdktf.stringToHclTerraform(struct!.permissionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionPolicyArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    well_known_policies: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesToHclTerraform, true)(struct!.wellKnownPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAddonsPodIdentityAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAddonsPodIdentityAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.createServiceAccount = this._createServiceAccount;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._permissionBoundaryArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionBoundaryArn = this._permissionBoundaryArn;
    }
    if (this._permissionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicy = this._permissionPolicy;
    }
    if (this._permissionPolicyArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicyArns = this._permissionPolicyArns;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._wellKnownPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnownPolicies = this._wellKnownPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAddonsPodIdentityAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createServiceAccount = undefined;
      this._namespace = undefined;
      this._permissionBoundaryArn = undefined;
      this._permissionPolicy = undefined;
      this._permissionPolicyArns = undefined;
      this._roleArn = undefined;
      this._roleName = undefined;
      this._serviceAccountName = undefined;
      this._tags = undefined;
      this._wellKnownPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createServiceAccount = value.createServiceAccount;
      this._namespace = value.namespace;
      this._permissionBoundaryArn = value.permissionBoundaryArn;
      this._permissionPolicy = value.permissionPolicy;
      this._permissionPolicyArns = value.permissionPolicyArns;
      this._roleArn = value.roleArn;
      this._roleName = value.roleName;
      this._serviceAccountName = value.serviceAccountName;
      this._tags = value.tags;
      this._wellKnownPolicies.internalValue = value.wellKnownPolicies;
    }
  }

  // create_service_account - computed: false, optional: true, required: false
  private _createServiceAccount?: boolean | cdktf.IResolvable; 
  public get createServiceAccount() {
    return this.getBooleanAttribute('create_service_account');
  }
  public set createServiceAccount(value: boolean | cdktf.IResolvable) {
    this._createServiceAccount = value;
  }
  public resetCreateServiceAccount() {
    this._createServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createServiceAccountInput() {
    return this._createServiceAccount;
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

  // permission_boundary_arn - computed: false, optional: true, required: false
  private _permissionBoundaryArn?: string; 
  public get permissionBoundaryArn() {
    return this.getStringAttribute('permission_boundary_arn');
  }
  public set permissionBoundaryArn(value: string) {
    this._permissionBoundaryArn = value;
  }
  public resetPermissionBoundaryArn() {
    this._permissionBoundaryArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionBoundaryArnInput() {
    return this._permissionBoundaryArn;
  }

  // permission_policy - computed: false, optional: true, required: false
  private _permissionPolicy?: string; 
  public get permissionPolicy() {
    return this.getStringAttribute('permission_policy');
  }
  public set permissionPolicy(value: string) {
    this._permissionPolicy = value;
  }
  public resetPermissionPolicy() {
    this._permissionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyInput() {
    return this._permissionPolicy;
  }

  // permission_policy_arns - computed: false, optional: true, required: false
  private _permissionPolicyArns?: string[]; 
  public get permissionPolicyArns() {
    return this.getListAttribute('permission_policy_arns');
  }
  public set permissionPolicyArns(value: string[]) {
    this._permissionPolicyArns = value;
  }
  public resetPermissionPolicyArns() {
    this._permissionPolicyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyArnsInput() {
    return this._permissionPolicyArns;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // service_account_name - computed: false, optional: false, required: true
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // well_known_policies - computed: false, optional: true, required: false
  private _wellKnownPolicies = new EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPoliciesList(this, "well_known_policies", false);
  public get wellKnownPolicies() {
    return this._wellKnownPolicies;
  }
  public putWellKnownPolicies(value: EksClusterClusterConfigAddonsPodIdentityAssociationsWellKnownPolicies[] | cdktf.IResolvable) {
    this._wellKnownPolicies.internalValue = value;
  }
  public resetWellKnownPolicies() {
    this._wellKnownPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownPoliciesInput() {
    return this._wellKnownPolicies.internalValue;
  }
}

export class EksClusterClusterConfigAddonsPodIdentityAssociationsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAddonsPodIdentityAssociations[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAddonsPodIdentityAssociationsOutputReference {
    return new EksClusterClusterConfigAddonsPodIdentityAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAddonsWellKnownPolicies {
  /**
  * service account annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#auto_scaler EksCluster#auto_scaler}
  */
  readonly autoScaler?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the aws-load-balancer-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#aws_load_balancer_controller EksCluster#aws_load_balancer_controller}
  */
  readonly awsLoadBalancerController?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cert_manager EksCluster#cert_manager}
  */
  readonly certManager?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ebs_csi_controller EksCluster#ebs_csi_controller}
  */
  readonly ebsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the ebs-csi-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#efs_csi_controller EksCluster#efs_csi_controller}
  */
  readonly efsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds external-dns policies for Amazon Route 53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#external_dns EksCluster#external_dns}
  */
  readonly externalDns?: boolean | cdktf.IResolvable;
  /**
  * allows for full ECR (Elastic Container Registry) access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#image_builder EksCluster#image_builder}
  */
  readonly imageBuilder?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigAddonsWellKnownPoliciesToTerraform(struct?: EksClusterClusterConfigAddonsWellKnownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaler: cdktf.booleanToTerraform(struct!.autoScaler),
    aws_load_balancer_controller: cdktf.booleanToTerraform(struct!.awsLoadBalancerController),
    cert_manager: cdktf.booleanToTerraform(struct!.certManager),
    ebs_csi_controller: cdktf.booleanToTerraform(struct!.ebsCsiController),
    efs_csi_controller: cdktf.booleanToTerraform(struct!.efsCsiController),
    external_dns: cdktf.booleanToTerraform(struct!.externalDns),
    image_builder: cdktf.booleanToTerraform(struct!.imageBuilder),
  }
}


export function eksClusterClusterConfigAddonsWellKnownPoliciesToHclTerraform(struct?: EksClusterClusterConfigAddonsWellKnownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaler: {
      value: cdktf.booleanToHclTerraform(struct!.autoScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_load_balancer_controller: {
      value: cdktf.booleanToHclTerraform(struct!.awsLoadBalancerController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cert_manager: {
      value: cdktf.booleanToHclTerraform(struct!.certManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs_csi_controller: {
      value: cdktf.booleanToHclTerraform(struct!.ebsCsiController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    efs_csi_controller: {
      value: cdktf.booleanToHclTerraform(struct!.efsCsiController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_dns: {
      value: cdktf.booleanToHclTerraform(struct!.externalDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_builder: {
      value: cdktf.booleanToHclTerraform(struct!.imageBuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAddonsWellKnownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAddonsWellKnownPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaler = this._autoScaler;
    }
    if (this._awsLoadBalancerController !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsLoadBalancerController = this._awsLoadBalancerController;
    }
    if (this._certManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.certManager = this._certManager;
    }
    if (this._ebsCsiController !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsCsiController = this._ebsCsiController;
    }
    if (this._efsCsiController !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsCsiController = this._efsCsiController;
    }
    if (this._externalDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDns = this._externalDns;
    }
    if (this._imageBuilder !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageBuilder = this._imageBuilder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAddonsWellKnownPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScaler = undefined;
      this._awsLoadBalancerController = undefined;
      this._certManager = undefined;
      this._ebsCsiController = undefined;
      this._efsCsiController = undefined;
      this._externalDns = undefined;
      this._imageBuilder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScaler = value.autoScaler;
      this._awsLoadBalancerController = value.awsLoadBalancerController;
      this._certManager = value.certManager;
      this._ebsCsiController = value.ebsCsiController;
      this._efsCsiController = value.efsCsiController;
      this._externalDns = value.externalDns;
      this._imageBuilder = value.imageBuilder;
    }
  }

  // auto_scaler - computed: false, optional: true, required: false
  private _autoScaler?: boolean | cdktf.IResolvable; 
  public get autoScaler() {
    return this.getBooleanAttribute('auto_scaler');
  }
  public set autoScaler(value: boolean | cdktf.IResolvable) {
    this._autoScaler = value;
  }
  public resetAutoScaler() {
    this._autoScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerInput() {
    return this._autoScaler;
  }

  // aws_load_balancer_controller - computed: false, optional: true, required: false
  private _awsLoadBalancerController?: boolean | cdktf.IResolvable; 
  public get awsLoadBalancerController() {
    return this.getBooleanAttribute('aws_load_balancer_controller');
  }
  public set awsLoadBalancerController(value: boolean | cdktf.IResolvable) {
    this._awsLoadBalancerController = value;
  }
  public resetAwsLoadBalancerController() {
    this._awsLoadBalancerController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLoadBalancerControllerInput() {
    return this._awsLoadBalancerController;
  }

  // cert_manager - computed: false, optional: true, required: false
  private _certManager?: boolean | cdktf.IResolvable; 
  public get certManager() {
    return this.getBooleanAttribute('cert_manager');
  }
  public set certManager(value: boolean | cdktf.IResolvable) {
    this._certManager = value;
  }
  public resetCertManager() {
    this._certManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certManagerInput() {
    return this._certManager;
  }

  // ebs_csi_controller - computed: false, optional: true, required: false
  private _ebsCsiController?: boolean | cdktf.IResolvable; 
  public get ebsCsiController() {
    return this.getBooleanAttribute('ebs_csi_controller');
  }
  public set ebsCsiController(value: boolean | cdktf.IResolvable) {
    this._ebsCsiController = value;
  }
  public resetEbsCsiController() {
    this._ebsCsiController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsCsiControllerInput() {
    return this._ebsCsiController;
  }

  // efs_csi_controller - computed: false, optional: true, required: false
  private _efsCsiController?: boolean | cdktf.IResolvable; 
  public get efsCsiController() {
    return this.getBooleanAttribute('efs_csi_controller');
  }
  public set efsCsiController(value: boolean | cdktf.IResolvable) {
    this._efsCsiController = value;
  }
  public resetEfsCsiController() {
    this._efsCsiController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsCsiControllerInput() {
    return this._efsCsiController;
  }

  // external_dns - computed: false, optional: true, required: false
  private _externalDns?: boolean | cdktf.IResolvable; 
  public get externalDns() {
    return this.getBooleanAttribute('external_dns');
  }
  public set externalDns(value: boolean | cdktf.IResolvable) {
    this._externalDns = value;
  }
  public resetExternalDns() {
    this._externalDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDnsInput() {
    return this._externalDns;
  }

  // image_builder - computed: false, optional: true, required: false
  private _imageBuilder?: boolean | cdktf.IResolvable; 
  public get imageBuilder() {
    return this.getBooleanAttribute('image_builder');
  }
  public set imageBuilder(value: boolean | cdktf.IResolvable) {
    this._imageBuilder = value;
  }
  public resetImageBuilder() {
    this._imageBuilder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBuilderInput() {
    return this._imageBuilder;
  }
}

export class EksClusterClusterConfigAddonsWellKnownPoliciesList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAddonsWellKnownPolicies[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAddonsWellKnownPoliciesOutputReference {
    return new EksClusterClusterConfigAddonsWellKnownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAddons {
  /**
  * list of ARNs of the IAM policies to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy_arns EksCluster#attach_policy_arns}
  */
  readonly attachPolicyArns?: string[];
  /**
  * holds a policy document to attach to this addon in json string format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy_v2 EksCluster#attach_policy_v2}
  */
  readonly attachPolicyV2?: string;
  /**
  * configuration values for the addon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#configuration_values EksCluster#configuration_values}
  */
  readonly configurationValues?: string;
  /**
  * EKS addon name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name: string;
  /**
  * ARN of the permissions boundary to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#permissions_boundary EksCluster#permissions_boundary}
  */
  readonly permissionsBoundary?: string;
  /**
  * service account role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#service_account_role_arn EksCluster#service_account_role_arn}
  */
  readonly serviceAccountRoleArn?: string;
  /**
  * The metadata to apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Flag to create pod identity association by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#use_default_pod_identity_associations EksCluster#use_default_pod_identity_associations}
  */
  readonly useDefaultPodIdentityAssociations?: boolean | cdktf.IResolvable;
  /**
  * EKS addon version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * attach_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy EksCluster#attach_policy}
  */
  readonly attachPolicy?: EksClusterClusterConfigAddonsAttachPolicy[] | cdktf.IResolvable;
  /**
  * pod_identity_associations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#pod_identity_associations EksCluster#pod_identity_associations}
  */
  readonly podIdentityAssociations?: EksClusterClusterConfigAddonsPodIdentityAssociations[] | cdktf.IResolvable;
  /**
  * well_known_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#well_known_policies EksCluster#well_known_policies}
  */
  readonly wellKnownPolicies?: EksClusterClusterConfigAddonsWellKnownPolicies[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigAddonsToTerraform(struct?: EksClusterClusterConfigAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attachPolicyArns),
    attach_policy_v2: cdktf.stringToTerraform(struct!.attachPolicyV2),
    configuration_values: cdktf.stringToTerraform(struct!.configurationValues),
    name: cdktf.stringToTerraform(struct!.name),
    permissions_boundary: cdktf.stringToTerraform(struct!.permissionsBoundary),
    service_account_role_arn: cdktf.stringToTerraform(struct!.serviceAccountRoleArn),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    use_default_pod_identity_associations: cdktf.booleanToTerraform(struct!.useDefaultPodIdentityAssociations),
    version: cdktf.stringToTerraform(struct!.version),
    attach_policy: cdktf.listMapper(eksClusterClusterConfigAddonsAttachPolicyToTerraform, true)(struct!.attachPolicy),
    pod_identity_associations: cdktf.listMapper(eksClusterClusterConfigAddonsPodIdentityAssociationsToTerraform, true)(struct!.podIdentityAssociations),
    well_known_policies: cdktf.listMapper(eksClusterClusterConfigAddonsWellKnownPoliciesToTerraform, true)(struct!.wellKnownPolicies),
  }
}


export function eksClusterClusterConfigAddonsToHclTerraform(struct?: EksClusterClusterConfigAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attachPolicyArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attach_policy_v2: {
      value: cdktf.stringToHclTerraform(struct!.attachPolicyV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_values: {
      value: cdktf.stringToHclTerraform(struct!.configurationValues),
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
    permissions_boundary: {
      value: cdktf.stringToHclTerraform(struct!.permissionsBoundary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    use_default_pod_identity_associations: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultPodIdentityAssociations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attach_policy: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAddonsAttachPolicyToHclTerraform, true)(struct!.attachPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAddonsAttachPolicyList",
    },
    pod_identity_associations: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAddonsPodIdentityAssociationsToHclTerraform, true)(struct!.podIdentityAssociations),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAddonsPodIdentityAssociationsList",
    },
    well_known_policies: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAddonsWellKnownPoliciesToHclTerraform, true)(struct!.wellKnownPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAddonsWellKnownPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAddons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachPolicyArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicyArns = this._attachPolicyArns;
    }
    if (this._attachPolicyV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicyV2 = this._attachPolicyV2;
    }
    if (this._configurationValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationValues = this._configurationValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permissionsBoundary !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionsBoundary = this._permissionsBoundary;
    }
    if (this._serviceAccountRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountRoleArn = this._serviceAccountRoleArn;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._useDefaultPodIdentityAssociations !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultPodIdentityAssociations = this._useDefaultPodIdentityAssociations;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._attachPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicy = this._attachPolicy?.internalValue;
    }
    if (this._podIdentityAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentityAssociations = this._podIdentityAssociations?.internalValue;
    }
    if (this._wellKnownPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnownPolicies = this._wellKnownPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAddons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachPolicyArns = undefined;
      this._attachPolicyV2 = undefined;
      this._configurationValues = undefined;
      this._name = undefined;
      this._permissionsBoundary = undefined;
      this._serviceAccountRoleArn = undefined;
      this._tags = undefined;
      this._useDefaultPodIdentityAssociations = undefined;
      this._version = undefined;
      this._attachPolicy.internalValue = undefined;
      this._podIdentityAssociations.internalValue = undefined;
      this._wellKnownPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachPolicyArns = value.attachPolicyArns;
      this._attachPolicyV2 = value.attachPolicyV2;
      this._configurationValues = value.configurationValues;
      this._name = value.name;
      this._permissionsBoundary = value.permissionsBoundary;
      this._serviceAccountRoleArn = value.serviceAccountRoleArn;
      this._tags = value.tags;
      this._useDefaultPodIdentityAssociations = value.useDefaultPodIdentityAssociations;
      this._version = value.version;
      this._attachPolicy.internalValue = value.attachPolicy;
      this._podIdentityAssociations.internalValue = value.podIdentityAssociations;
      this._wellKnownPolicies.internalValue = value.wellKnownPolicies;
    }
  }

  // attach_policy_arns - computed: false, optional: true, required: false
  private _attachPolicyArns?: string[]; 
  public get attachPolicyArns() {
    return this.getListAttribute('attach_policy_arns');
  }
  public set attachPolicyArns(value: string[]) {
    this._attachPolicyArns = value;
  }
  public resetAttachPolicyArns() {
    this._attachPolicyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyArnsInput() {
    return this._attachPolicyArns;
  }

  // attach_policy_v2 - computed: false, optional: true, required: false
  private _attachPolicyV2?: string; 
  public get attachPolicyV2() {
    return this.getStringAttribute('attach_policy_v2');
  }
  public set attachPolicyV2(value: string) {
    this._attachPolicyV2 = value;
  }
  public resetAttachPolicyV2() {
    this._attachPolicyV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyV2Input() {
    return this._attachPolicyV2;
  }

  // configuration_values - computed: false, optional: true, required: false
  private _configurationValues?: string; 
  public get configurationValues() {
    return this.getStringAttribute('configuration_values');
  }
  public set configurationValues(value: string) {
    this._configurationValues = value;
  }
  public resetConfigurationValues() {
    this._configurationValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationValuesInput() {
    return this._configurationValues;
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

  // permissions_boundary - computed: false, optional: true, required: false
  private _permissionsBoundary?: string; 
  public get permissionsBoundary() {
    return this.getStringAttribute('permissions_boundary');
  }
  public set permissionsBoundary(value: string) {
    this._permissionsBoundary = value;
  }
  public resetPermissionsBoundary() {
    this._permissionsBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryInput() {
    return this._permissionsBoundary;
  }

  // service_account_role_arn - computed: false, optional: true, required: false
  private _serviceAccountRoleArn?: string; 
  public get serviceAccountRoleArn() {
    return this.getStringAttribute('service_account_role_arn');
  }
  public set serviceAccountRoleArn(value: string) {
    this._serviceAccountRoleArn = value;
  }
  public resetServiceAccountRoleArn() {
    this._serviceAccountRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountRoleArnInput() {
    return this._serviceAccountRoleArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_default_pod_identity_associations - computed: false, optional: true, required: false
  private _useDefaultPodIdentityAssociations?: boolean | cdktf.IResolvable; 
  public get useDefaultPodIdentityAssociations() {
    return this.getBooleanAttribute('use_default_pod_identity_associations');
  }
  public set useDefaultPodIdentityAssociations(value: boolean | cdktf.IResolvable) {
    this._useDefaultPodIdentityAssociations = value;
  }
  public resetUseDefaultPodIdentityAssociations() {
    this._useDefaultPodIdentityAssociations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultPodIdentityAssociationsInput() {
    return this._useDefaultPodIdentityAssociations;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // attach_policy - computed: false, optional: true, required: false
  private _attachPolicy = new EksClusterClusterConfigAddonsAttachPolicyList(this, "attach_policy", false);
  public get attachPolicy() {
    return this._attachPolicy;
  }
  public putAttachPolicy(value: EksClusterClusterConfigAddonsAttachPolicy[] | cdktf.IResolvable) {
    this._attachPolicy.internalValue = value;
  }
  public resetAttachPolicy() {
    this._attachPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyInput() {
    return this._attachPolicy.internalValue;
  }

  // pod_identity_associations - computed: false, optional: true, required: false
  private _podIdentityAssociations = new EksClusterClusterConfigAddonsPodIdentityAssociationsList(this, "pod_identity_associations", false);
  public get podIdentityAssociations() {
    return this._podIdentityAssociations;
  }
  public putPodIdentityAssociations(value: EksClusterClusterConfigAddonsPodIdentityAssociations[] | cdktf.IResolvable) {
    this._podIdentityAssociations.internalValue = value;
  }
  public resetPodIdentityAssociations() {
    this._podIdentityAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityAssociationsInput() {
    return this._podIdentityAssociations.internalValue;
  }

  // well_known_policies - computed: false, optional: true, required: false
  private _wellKnownPolicies = new EksClusterClusterConfigAddonsWellKnownPoliciesList(this, "well_known_policies", false);
  public get wellKnownPolicies() {
    return this._wellKnownPolicies;
  }
  public putWellKnownPolicies(value: EksClusterClusterConfigAddonsWellKnownPolicies[] | cdktf.IResolvable) {
    this._wellKnownPolicies.internalValue = value;
  }
  public resetWellKnownPolicies() {
    this._wellKnownPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownPoliciesInput() {
    return this._wellKnownPolicies.internalValue;
  }
}

export class EksClusterClusterConfigAddonsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAddons[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAddonsOutputReference {
    return new EksClusterClusterConfigAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAddonsConfig {
  /**
  * Flag to create pod identity by default for managed addons
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#auto_apply_pod_identity_associations EksCluster#auto_apply_pod_identity_associations}
  */
  readonly autoApplyPodIdentityAssociations?: boolean | cdktf.IResolvable;
  /**
  * flag to enable or disable ebs csi driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#disable_ebs_csi_driver EksCluster#disable_ebs_csi_driver}
  */
  readonly disableEbsCsiDriver?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigAddonsConfigToTerraform(struct?: EksClusterClusterConfigAddonsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_apply_pod_identity_associations: cdktf.booleanToTerraform(struct!.autoApplyPodIdentityAssociations),
    disable_ebs_csi_driver: cdktf.booleanToTerraform(struct!.disableEbsCsiDriver),
  }
}


export function eksClusterClusterConfigAddonsConfigToHclTerraform(struct?: EksClusterClusterConfigAddonsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_apply_pod_identity_associations: {
      value: cdktf.booleanToHclTerraform(struct!.autoApplyPodIdentityAssociations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_ebs_csi_driver: {
      value: cdktf.booleanToHclTerraform(struct!.disableEbsCsiDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAddonsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAddonsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoApplyPodIdentityAssociations !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApplyPodIdentityAssociations = this._autoApplyPodIdentityAssociations;
    }
    if (this._disableEbsCsiDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableEbsCsiDriver = this._disableEbsCsiDriver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAddonsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoApplyPodIdentityAssociations = undefined;
      this._disableEbsCsiDriver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoApplyPodIdentityAssociations = value.autoApplyPodIdentityAssociations;
      this._disableEbsCsiDriver = value.disableEbsCsiDriver;
    }
  }

  // auto_apply_pod_identity_associations - computed: false, optional: true, required: false
  private _autoApplyPodIdentityAssociations?: boolean | cdktf.IResolvable; 
  public get autoApplyPodIdentityAssociations() {
    return this.getBooleanAttribute('auto_apply_pod_identity_associations');
  }
  public set autoApplyPodIdentityAssociations(value: boolean | cdktf.IResolvable) {
    this._autoApplyPodIdentityAssociations = value;
  }
  public resetAutoApplyPodIdentityAssociations() {
    this._autoApplyPodIdentityAssociations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApplyPodIdentityAssociationsInput() {
    return this._autoApplyPodIdentityAssociations;
  }

  // disable_ebs_csi_driver - computed: false, optional: true, required: false
  private _disableEbsCsiDriver?: boolean | cdktf.IResolvable; 
  public get disableEbsCsiDriver() {
    return this.getBooleanAttribute('disable_ebs_csi_driver');
  }
  public set disableEbsCsiDriver(value: boolean | cdktf.IResolvable) {
    this._disableEbsCsiDriver = value;
  }
  public resetDisableEbsCsiDriver() {
    this._disableEbsCsiDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableEbsCsiDriverInput() {
    return this._disableEbsCsiDriver;
  }
}

export class EksClusterClusterConfigAddonsConfigList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAddonsConfig[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAddonsConfigOutputReference {
    return new EksClusterClusterConfigAddonsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigAutoModeConfig {
  /**
  * Enable auto mode in EKS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enabled EksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of default nodepools (general-purpose,system)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#node_pools EksCluster#node_pools}
  */
  readonly nodePools?: string[];
  /**
  * RoleARN of the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#node_role_arn EksCluster#node_role_arn}
  */
  readonly nodeRoleArn?: string;
}

export function eksClusterClusterConfigAutoModeConfigToTerraform(struct?: EksClusterClusterConfigAutoModeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    node_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodePools),
    node_role_arn: cdktf.stringToTerraform(struct!.nodeRoleArn),
  }
}


export function eksClusterClusterConfigAutoModeConfigToHclTerraform(struct?: EksClusterClusterConfigAutoModeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.nodeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigAutoModeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigAutoModeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._nodePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePools = this._nodePools;
    }
    if (this._nodeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoleArn = this._nodeRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigAutoModeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._nodePools = undefined;
      this._nodeRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._nodePools = value.nodePools;
      this._nodeRoleArn = value.nodeRoleArn;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools?: string[]; 
  public get nodePools() {
    return this.getListAttribute('node_pools');
  }
  public set nodePools(value: string[]) {
    this._nodePools = value;
  }
  public resetNodePools() {
    this._nodePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools;
  }

  // node_role_arn - computed: false, optional: true, required: false
  private _nodeRoleArn?: string; 
  public get nodeRoleArn() {
    return this.getStringAttribute('node_role_arn');
  }
  public set nodeRoleArn(value: string) {
    this._nodeRoleArn = value;
  }
  public resetNodeRoleArn() {
    this._nodeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRoleArnInput() {
    return this._nodeRoleArn;
  }
}

export class EksClusterClusterConfigAutoModeConfigList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigAutoModeConfig[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigAutoModeConfigOutputReference {
    return new EksClusterClusterConfigAutoModeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigCloudWatchClusterLogging {
  /**
  * Types of logging to enable. Valid entries are: 'api', 'audit', 'authenticator', 'controllerManager', 'scheduler', 'all', '*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enable_types EksCluster#enable_types}
  */
  readonly enableTypes?: string[];
  /**
  * The number of days you want to retain log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#log_retention_in_days EksCluster#log_retention_in_days}
  */
  readonly logRetentionInDays?: number;
}

export function eksClusterClusterConfigCloudWatchClusterLoggingToTerraform(struct?: EksClusterClusterConfigCloudWatchClusterLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableTypes),
    log_retention_in_days: cdktf.numberToTerraform(struct!.logRetentionInDays),
  }
}


export function eksClusterClusterConfigCloudWatchClusterLoggingToHclTerraform(struct?: EksClusterClusterConfigCloudWatchClusterLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_retention_in_days: {
      value: cdktf.numberToHclTerraform(struct!.logRetentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigCloudWatchClusterLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigCloudWatchClusterLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTypes = this._enableTypes;
    }
    if (this._logRetentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionInDays = this._logRetentionInDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigCloudWatchClusterLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableTypes = undefined;
      this._logRetentionInDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableTypes = value.enableTypes;
      this._logRetentionInDays = value.logRetentionInDays;
    }
  }

  // enable_types - computed: false, optional: true, required: false
  private _enableTypes?: string[]; 
  public get enableTypes() {
    return this.getListAttribute('enable_types');
  }
  public set enableTypes(value: string[]) {
    this._enableTypes = value;
  }
  public resetEnableTypes() {
    this._enableTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTypesInput() {
    return this._enableTypes;
  }

  // log_retention_in_days - computed: false, optional: true, required: false
  private _logRetentionInDays?: number; 
  public get logRetentionInDays() {
    return this.getNumberAttribute('log_retention_in_days');
  }
  public set logRetentionInDays(value: number) {
    this._logRetentionInDays = value;
  }
  public resetLogRetentionInDays() {
    this._logRetentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionInDaysInput() {
    return this._logRetentionInDays;
  }
}

export class EksClusterClusterConfigCloudWatchClusterLoggingList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigCloudWatchClusterLogging[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigCloudWatchClusterLoggingOutputReference {
    return new EksClusterClusterConfigCloudWatchClusterLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigCloudWatch {
  /**
  * cluster_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cluster_logging EksCluster#cluster_logging}
  */
  readonly clusterLogging?: EksClusterClusterConfigCloudWatchClusterLogging[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigCloudWatchToTerraform(struct?: EksClusterClusterConfigCloudWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_logging: cdktf.listMapper(eksClusterClusterConfigCloudWatchClusterLoggingToTerraform, true)(struct!.clusterLogging),
  }
}


export function eksClusterClusterConfigCloudWatchToHclTerraform(struct?: EksClusterClusterConfigCloudWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_logging: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigCloudWatchClusterLoggingToHclTerraform, true)(struct!.clusterLogging),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigCloudWatchClusterLoggingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigCloudWatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigCloudWatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterLogging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLogging = this._clusterLogging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigCloudWatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterLogging.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterLogging.internalValue = value.clusterLogging;
    }
  }

  // cluster_logging - computed: false, optional: true, required: false
  private _clusterLogging = new EksClusterClusterConfigCloudWatchClusterLoggingList(this, "cluster_logging", false);
  public get clusterLogging() {
    return this._clusterLogging;
  }
  public putClusterLogging(value: EksClusterClusterConfigCloudWatchClusterLogging[] | cdktf.IResolvable) {
    this._clusterLogging.internalValue = value;
  }
  public resetClusterLogging() {
    this._clusterLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLoggingInput() {
    return this._clusterLogging.internalValue;
  }
}

export class EksClusterClusterConfigCloudWatchList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigCloudWatch[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigCloudWatchOutputReference {
    return new EksClusterClusterConfigCloudWatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigFargateProfilesSelectors {
  /**
  * Kubernetes label selectors to use to select workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#labels EksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Kubernetes namespace from which to select workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#namespace EksCluster#namespace}
  */
  readonly namespace?: string;
}

export function eksClusterClusterConfigFargateProfilesSelectorsToTerraform(struct?: EksClusterClusterConfigFargateProfilesSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function eksClusterClusterConfigFargateProfilesSelectorsToHclTerraform(struct?: EksClusterClusterConfigFargateProfilesSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigFargateProfilesSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigFargateProfilesSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigFargateProfilesSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._namespace = value.namespace;
    }
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
}

export class EksClusterClusterConfigFargateProfilesSelectorsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigFargateProfilesSelectors[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigFargateProfilesSelectorsOutputReference {
    return new EksClusterClusterConfigFargateProfilesSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigFargateProfiles {
  /**
  * name of the fargate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name?: string;
  /**
  * IAM role's ARN to use to run pods onto Fargate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#pod_execution_role_arn EksCluster#pod_execution_role_arn}
  */
  readonly podExecutionRoleArn?: string;
  /**
  * The current status of the Fargate profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#status EksCluster#status}
  */
  readonly status?: string;
  /**
  * define the rules to select workload to schedule onto Fargate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#subnets EksCluster#subnets}
  */
  readonly subnets?: string[];
  /**
  * Used to tag the AWS resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#selectors EksCluster#selectors}
  */
  readonly selectors?: EksClusterClusterConfigFargateProfilesSelectors[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigFargateProfilesToTerraform(struct?: EksClusterClusterConfigFargateProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pod_execution_role_arn: cdktf.stringToTerraform(struct!.podExecutionRoleArn),
    status: cdktf.stringToTerraform(struct!.status),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    selectors: cdktf.listMapper(eksClusterClusterConfigFargateProfilesSelectorsToTerraform, true)(struct!.selectors),
  }
}


export function eksClusterClusterConfigFargateProfilesToHclTerraform(struct?: EksClusterClusterConfigFargateProfiles | cdktf.IResolvable): any {
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
    pod_execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.podExecutionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    selectors: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigFargateProfilesSelectorsToHclTerraform, true)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigFargateProfilesSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigFargateProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigFargateProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._podExecutionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.podExecutionRoleArn = this._podExecutionRoleArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigFargateProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._podExecutionRoleArn = undefined;
      this._status = undefined;
      this._subnets = undefined;
      this._tags = undefined;
      this._selectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._podExecutionRoleArn = value.podExecutionRoleArn;
      this._status = value.status;
      this._subnets = value.subnets;
      this._tags = value.tags;
      this._selectors.internalValue = value.selectors;
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

  // pod_execution_role_arn - computed: false, optional: true, required: false
  private _podExecutionRoleArn?: string; 
  public get podExecutionRoleArn() {
    return this.getStringAttribute('pod_execution_role_arn');
  }
  public set podExecutionRoleArn(value: string) {
    this._podExecutionRoleArn = value;
  }
  public resetPodExecutionRoleArn() {
    this._podExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podExecutionRoleArnInput() {
    return this._podExecutionRoleArn;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new EksClusterClusterConfigFargateProfilesSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: EksClusterClusterConfigFargateProfilesSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }
}

export class EksClusterClusterConfigFargateProfilesList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigFargateProfiles[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigFargateProfilesOutputReference {
    return new EksClusterClusterConfigFargateProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPolicies {
  /**
  * service account annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#auto_scaler EksCluster#auto_scaler}
  */
  readonly autoScaler?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the aws-load-balancer-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#aws_load_balancer_controller EksCluster#aws_load_balancer_controller}
  */
  readonly awsLoadBalancerController?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cert_manager EksCluster#cert_manager}
  */
  readonly certManager?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ebs_csi_controller EksCluster#ebs_csi_controller}
  */
  readonly ebsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the ebs-csi-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#efs_csi_controller EksCluster#efs_csi_controller}
  */
  readonly efsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds external-dns policies for Amazon Route 53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#external_dns EksCluster#external_dns}
  */
  readonly externalDns?: boolean | cdktf.IResolvable;
  /**
  * allows for full ECR (Elastic Container Registry) access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#image_builder EksCluster#image_builder}
  */
  readonly imageBuilder?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesToTerraform(struct?: EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaler: cdktf.booleanToTerraform(struct!.autoScaler),
    aws_load_balancer_controller: cdktf.booleanToTerraform(struct!.awsLoadBalancerController),
    cert_manager: cdktf.booleanToTerraform(struct!.certManager),
    ebs_csi_controller: cdktf.booleanToTerraform(struct!.ebsCsiController),
    efs_csi_controller: cdktf.booleanToTerraform(struct!.efsCsiController),
    external_dns: cdktf.booleanToTerraform(struct!.externalDns),
    image_builder: cdktf.booleanToTerraform(struct!.imageBuilder),
  }
}


export function eksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesToHclTerraform(struct?: EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaler: {
      value: cdktf.booleanToHclTerraform(struct!.autoScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_load_balancer_controller: {
      value: cdktf.booleanToHclTerraform(struct!.awsLoadBalancerController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cert_manager: {
      value: cdktf.booleanToHclTerraform(struct!.certManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs_csi_controller: {
      value: cdktf.booleanToHclTerraform(struct!.ebsCsiController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    efs_csi_controller: {
      value: cdktf.booleanToHclTerraform(struct!.efsCsiController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_dns: {
      value: cdktf.booleanToHclTerraform(struct!.externalDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_builder: {
      value: cdktf.booleanToHclTerraform(struct!.imageBuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaler = this._autoScaler;
    }
    if (this._awsLoadBalancerController !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsLoadBalancerController = this._awsLoadBalancerController;
    }
    if (this._certManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.certManager = this._certManager;
    }
    if (this._ebsCsiController !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsCsiController = this._ebsCsiController;
    }
    if (this._efsCsiController !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsCsiController = this._efsCsiController;
    }
    if (this._externalDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDns = this._externalDns;
    }
    if (this._imageBuilder !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageBuilder = this._imageBuilder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScaler = undefined;
      this._awsLoadBalancerController = undefined;
      this._certManager = undefined;
      this._ebsCsiController = undefined;
      this._efsCsiController = undefined;
      this._externalDns = undefined;
      this._imageBuilder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScaler = value.autoScaler;
      this._awsLoadBalancerController = value.awsLoadBalancerController;
      this._certManager = value.certManager;
      this._ebsCsiController = value.ebsCsiController;
      this._efsCsiController = value.efsCsiController;
      this._externalDns = value.externalDns;
      this._imageBuilder = value.imageBuilder;
    }
  }

  // auto_scaler - computed: false, optional: true, required: false
  private _autoScaler?: boolean | cdktf.IResolvable; 
  public get autoScaler() {
    return this.getBooleanAttribute('auto_scaler');
  }
  public set autoScaler(value: boolean | cdktf.IResolvable) {
    this._autoScaler = value;
  }
  public resetAutoScaler() {
    this._autoScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerInput() {
    return this._autoScaler;
  }

  // aws_load_balancer_controller - computed: false, optional: true, required: false
  private _awsLoadBalancerController?: boolean | cdktf.IResolvable; 
  public get awsLoadBalancerController() {
    return this.getBooleanAttribute('aws_load_balancer_controller');
  }
  public set awsLoadBalancerController(value: boolean | cdktf.IResolvable) {
    this._awsLoadBalancerController = value;
  }
  public resetAwsLoadBalancerController() {
    this._awsLoadBalancerController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLoadBalancerControllerInput() {
    return this._awsLoadBalancerController;
  }

  // cert_manager - computed: false, optional: true, required: false
  private _certManager?: boolean | cdktf.IResolvable; 
  public get certManager() {
    return this.getBooleanAttribute('cert_manager');
  }
  public set certManager(value: boolean | cdktf.IResolvable) {
    this._certManager = value;
  }
  public resetCertManager() {
    this._certManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certManagerInput() {
    return this._certManager;
  }

  // ebs_csi_controller - computed: false, optional: true, required: false
  private _ebsCsiController?: boolean | cdktf.IResolvable; 
  public get ebsCsiController() {
    return this.getBooleanAttribute('ebs_csi_controller');
  }
  public set ebsCsiController(value: boolean | cdktf.IResolvable) {
    this._ebsCsiController = value;
  }
  public resetEbsCsiController() {
    this._ebsCsiController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsCsiControllerInput() {
    return this._ebsCsiController;
  }

  // efs_csi_controller - computed: false, optional: true, required: false
  private _efsCsiController?: boolean | cdktf.IResolvable; 
  public get efsCsiController() {
    return this.getBooleanAttribute('efs_csi_controller');
  }
  public set efsCsiController(value: boolean | cdktf.IResolvable) {
    this._efsCsiController = value;
  }
  public resetEfsCsiController() {
    this._efsCsiController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsCsiControllerInput() {
    return this._efsCsiController;
  }

  // external_dns - computed: false, optional: true, required: false
  private _externalDns?: boolean | cdktf.IResolvable; 
  public get externalDns() {
    return this.getBooleanAttribute('external_dns');
  }
  public set externalDns(value: boolean | cdktf.IResolvable) {
    this._externalDns = value;
  }
  public resetExternalDns() {
    this._externalDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDnsInput() {
    return this._externalDns;
  }

  // image_builder - computed: false, optional: true, required: false
  private _imageBuilder?: boolean | cdktf.IResolvable; 
  public get imageBuilder() {
    return this.getBooleanAttribute('image_builder');
  }
  public set imageBuilder(value: boolean | cdktf.IResolvable) {
    this._imageBuilder = value;
  }
  public resetImageBuilder() {
    this._imageBuilder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBuilderInput() {
    return this._imageBuilder;
  }
}

export class EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPolicies[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesOutputReference {
    return new EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIamPodIdentityAssociations {
  /**
  * enable flag to create service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#create_service_account EksCluster#create_service_account}
  */
  readonly createServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * namespace of service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#namespace EksCluster#namespace}
  */
  readonly namespace: string;
  /**
  * permission boundary ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#permission_boundary_arn EksCluster#permission_boundary_arn}
  */
  readonly permissionBoundaryArn?: string;
  /**
  * permission policy document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#permission_policy EksCluster#permission_policy}
  */
  readonly permissionPolicy?: string;
  /**
  * permission policy ARNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#permission_policy_arns EksCluster#permission_policy_arns}
  */
  readonly permissionPolicyArns?: string[];
  /**
  * role ARN of AWS role to associate with service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#role_arn EksCluster#role_arn}
  */
  readonly roleArn?: string;
  /**
  * aws role name to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#role_name EksCluster#role_name}
  */
  readonly roleName?: string;
  /**
  * name of service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#service_account_name EksCluster#service_account_name}
  */
  readonly serviceAccountName: string;
  /**
  * AWS tags for the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * well_known_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#well_known_policies EksCluster#well_known_policies}
  */
  readonly wellKnownPolicies?: EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPolicies[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigIamPodIdentityAssociationsToTerraform(struct?: EksClusterClusterConfigIamPodIdentityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_service_account: cdktf.booleanToTerraform(struct!.createServiceAccount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    permission_boundary_arn: cdktf.stringToTerraform(struct!.permissionBoundaryArn),
    permission_policy: cdktf.stringToTerraform(struct!.permissionPolicy),
    permission_policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissionPolicyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_name: cdktf.stringToTerraform(struct!.roleName),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    well_known_policies: cdktf.listMapper(eksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesToTerraform, true)(struct!.wellKnownPolicies),
  }
}


export function eksClusterClusterConfigIamPodIdentityAssociationsToHclTerraform(struct?: EksClusterClusterConfigIamPodIdentityAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.createServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_boundary_arn: {
      value: cdktf.stringToHclTerraform(struct!.permissionBoundaryArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_policy: {
      value: cdktf.stringToHclTerraform(struct!.permissionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissionPolicyArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    well_known_policies: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesToHclTerraform, true)(struct!.wellKnownPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigIamPodIdentityAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIamPodIdentityAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.createServiceAccount = this._createServiceAccount;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._permissionBoundaryArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionBoundaryArn = this._permissionBoundaryArn;
    }
    if (this._permissionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicy = this._permissionPolicy;
    }
    if (this._permissionPolicyArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionPolicyArns = this._permissionPolicyArns;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._wellKnownPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnownPolicies = this._wellKnownPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIamPodIdentityAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createServiceAccount = undefined;
      this._namespace = undefined;
      this._permissionBoundaryArn = undefined;
      this._permissionPolicy = undefined;
      this._permissionPolicyArns = undefined;
      this._roleArn = undefined;
      this._roleName = undefined;
      this._serviceAccountName = undefined;
      this._tags = undefined;
      this._wellKnownPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createServiceAccount = value.createServiceAccount;
      this._namespace = value.namespace;
      this._permissionBoundaryArn = value.permissionBoundaryArn;
      this._permissionPolicy = value.permissionPolicy;
      this._permissionPolicyArns = value.permissionPolicyArns;
      this._roleArn = value.roleArn;
      this._roleName = value.roleName;
      this._serviceAccountName = value.serviceAccountName;
      this._tags = value.tags;
      this._wellKnownPolicies.internalValue = value.wellKnownPolicies;
    }
  }

  // create_service_account - computed: false, optional: true, required: false
  private _createServiceAccount?: boolean | cdktf.IResolvable; 
  public get createServiceAccount() {
    return this.getBooleanAttribute('create_service_account');
  }
  public set createServiceAccount(value: boolean | cdktf.IResolvable) {
    this._createServiceAccount = value;
  }
  public resetCreateServiceAccount() {
    this._createServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createServiceAccountInput() {
    return this._createServiceAccount;
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

  // permission_boundary_arn - computed: false, optional: true, required: false
  private _permissionBoundaryArn?: string; 
  public get permissionBoundaryArn() {
    return this.getStringAttribute('permission_boundary_arn');
  }
  public set permissionBoundaryArn(value: string) {
    this._permissionBoundaryArn = value;
  }
  public resetPermissionBoundaryArn() {
    this._permissionBoundaryArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionBoundaryArnInput() {
    return this._permissionBoundaryArn;
  }

  // permission_policy - computed: false, optional: true, required: false
  private _permissionPolicy?: string; 
  public get permissionPolicy() {
    return this.getStringAttribute('permission_policy');
  }
  public set permissionPolicy(value: string) {
    this._permissionPolicy = value;
  }
  public resetPermissionPolicy() {
    this._permissionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyInput() {
    return this._permissionPolicy;
  }

  // permission_policy_arns - computed: false, optional: true, required: false
  private _permissionPolicyArns?: string[]; 
  public get permissionPolicyArns() {
    return this.getListAttribute('permission_policy_arns');
  }
  public set permissionPolicyArns(value: string[]) {
    this._permissionPolicyArns = value;
  }
  public resetPermissionPolicyArns() {
    this._permissionPolicyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPolicyArnsInput() {
    return this._permissionPolicyArns;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // service_account_name - computed: false, optional: false, required: true
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // well_known_policies - computed: false, optional: true, required: false
  private _wellKnownPolicies = new EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPoliciesList(this, "well_known_policies", false);
  public get wellKnownPolicies() {
    return this._wellKnownPolicies;
  }
  public putWellKnownPolicies(value: EksClusterClusterConfigIamPodIdentityAssociationsWellKnownPolicies[] | cdktf.IResolvable) {
    this._wellKnownPolicies.internalValue = value;
  }
  public resetWellKnownPolicies() {
    this._wellKnownPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownPoliciesInput() {
    return this._wellKnownPolicies.internalValue;
  }
}

export class EksClusterClusterConfigIamPodIdentityAssociationsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIamPodIdentityAssociations[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIamPodIdentityAssociationsOutputReference {
    return new EksClusterClusterConfigIamPodIdentityAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIamServiceAccountsMetadata {
  /**
  * CIDR range from where ClusterIPs are assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#annotations EksCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * CIDR range from where ClusterIPs are assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#labels EksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name?: string;
  /**
  * service account namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#namespace EksCluster#namespace}
  */
  readonly namespace?: string;
}

export function eksClusterClusterConfigIamServiceAccountsMetadataToTerraform(struct?: EksClusterClusterConfigIamServiceAccountsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function eksClusterClusterConfigIamServiceAccountsMetadataToHclTerraform(struct?: EksClusterClusterConfigIamServiceAccountsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigIamServiceAccountsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIamServiceAccountsMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIamServiceAccountsMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

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
}

export class EksClusterClusterConfigIamServiceAccountsMetadataList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIamServiceAccountsMetadata[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIamServiceAccountsMetadataOutputReference {
    return new EksClusterClusterConfigIamServiceAccountsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIamServiceAccountsStatus {
  /**
  * role ARN associated with the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#role_arn EksCluster#role_arn}
  */
  readonly roleArn?: string;
}

export function eksClusterClusterConfigIamServiceAccountsStatusToTerraform(struct?: EksClusterClusterConfigIamServiceAccountsStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function eksClusterClusterConfigIamServiceAccountsStatusToHclTerraform(struct?: EksClusterClusterConfigIamServiceAccountsStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigIamServiceAccountsStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIamServiceAccountsStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIamServiceAccountsStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class EksClusterClusterConfigIamServiceAccountsStatusList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIamServiceAccountsStatus[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIamServiceAccountsStatusOutputReference {
    return new EksClusterClusterConfigIamServiceAccountsStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIamServiceAccountsWellKnownPolicies {
  /**
  * service account annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#auto_scaler EksCluster#auto_scaler}
  */
  readonly autoScaler?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the aws-load-balancer-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#aws_load_balancer_controller EksCluster#aws_load_balancer_controller}
  */
  readonly awsLoadBalancerController?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cert_manager EksCluster#cert_manager}
  */
  readonly certManager?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ebs_csi_controller EksCluster#ebs_csi_controller}
  */
  readonly ebsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the ebs-csi-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#efs_csi_controller EksCluster#efs_csi_controller}
  */
  readonly efsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds external-dns policies for Amazon Route 53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#external_dns EksCluster#external_dns}
  */
  readonly externalDns?: boolean | cdktf.IResolvable;
  /**
  * allows for full ECR (Elastic Container Registry) access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#image_builder EksCluster#image_builder}
  */
  readonly imageBuilder?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigIamServiceAccountsWellKnownPoliciesToTerraform(struct?: EksClusterClusterConfigIamServiceAccountsWellKnownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scaler: cdktf.booleanToTerraform(struct!.autoScaler),
    aws_load_balancer_controller: cdktf.booleanToTerraform(struct!.awsLoadBalancerController),
    cert_manager: cdktf.booleanToTerraform(struct!.certManager),
    ebs_csi_controller: cdktf.booleanToTerraform(struct!.ebsCsiController),
    efs_csi_controller: cdktf.booleanToTerraform(struct!.efsCsiController),
    external_dns: cdktf.booleanToTerraform(struct!.externalDns),
    image_builder: cdktf.booleanToTerraform(struct!.imageBuilder),
  }
}


export function eksClusterClusterConfigIamServiceAccountsWellKnownPoliciesToHclTerraform(struct?: EksClusterClusterConfigIamServiceAccountsWellKnownPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scaler: {
      value: cdktf.booleanToHclTerraform(struct!.autoScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_load_balancer_controller: {
      value: cdktf.booleanToHclTerraform(struct!.awsLoadBalancerController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cert_manager: {
      value: cdktf.booleanToHclTerraform(struct!.certManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs_csi_controller: {
      value: cdktf.booleanToHclTerraform(struct!.ebsCsiController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    efs_csi_controller: {
      value: cdktf.booleanToHclTerraform(struct!.efsCsiController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_dns: {
      value: cdktf.booleanToHclTerraform(struct!.externalDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_builder: {
      value: cdktf.booleanToHclTerraform(struct!.imageBuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigIamServiceAccountsWellKnownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIamServiceAccountsWellKnownPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaler = this._autoScaler;
    }
    if (this._awsLoadBalancerController !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsLoadBalancerController = this._awsLoadBalancerController;
    }
    if (this._certManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.certManager = this._certManager;
    }
    if (this._ebsCsiController !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsCsiController = this._ebsCsiController;
    }
    if (this._efsCsiController !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsCsiController = this._efsCsiController;
    }
    if (this._externalDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDns = this._externalDns;
    }
    if (this._imageBuilder !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageBuilder = this._imageBuilder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIamServiceAccountsWellKnownPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoScaler = undefined;
      this._awsLoadBalancerController = undefined;
      this._certManager = undefined;
      this._ebsCsiController = undefined;
      this._efsCsiController = undefined;
      this._externalDns = undefined;
      this._imageBuilder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoScaler = value.autoScaler;
      this._awsLoadBalancerController = value.awsLoadBalancerController;
      this._certManager = value.certManager;
      this._ebsCsiController = value.ebsCsiController;
      this._efsCsiController = value.efsCsiController;
      this._externalDns = value.externalDns;
      this._imageBuilder = value.imageBuilder;
    }
  }

  // auto_scaler - computed: false, optional: true, required: false
  private _autoScaler?: boolean | cdktf.IResolvable; 
  public get autoScaler() {
    return this.getBooleanAttribute('auto_scaler');
  }
  public set autoScaler(value: boolean | cdktf.IResolvable) {
    this._autoScaler = value;
  }
  public resetAutoScaler() {
    this._autoScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerInput() {
    return this._autoScaler;
  }

  // aws_load_balancer_controller - computed: false, optional: true, required: false
  private _awsLoadBalancerController?: boolean | cdktf.IResolvable; 
  public get awsLoadBalancerController() {
    return this.getBooleanAttribute('aws_load_balancer_controller');
  }
  public set awsLoadBalancerController(value: boolean | cdktf.IResolvable) {
    this._awsLoadBalancerController = value;
  }
  public resetAwsLoadBalancerController() {
    this._awsLoadBalancerController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLoadBalancerControllerInput() {
    return this._awsLoadBalancerController;
  }

  // cert_manager - computed: false, optional: true, required: false
  private _certManager?: boolean | cdktf.IResolvable; 
  public get certManager() {
    return this.getBooleanAttribute('cert_manager');
  }
  public set certManager(value: boolean | cdktf.IResolvable) {
    this._certManager = value;
  }
  public resetCertManager() {
    this._certManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certManagerInput() {
    return this._certManager;
  }

  // ebs_csi_controller - computed: false, optional: true, required: false
  private _ebsCsiController?: boolean | cdktf.IResolvable; 
  public get ebsCsiController() {
    return this.getBooleanAttribute('ebs_csi_controller');
  }
  public set ebsCsiController(value: boolean | cdktf.IResolvable) {
    this._ebsCsiController = value;
  }
  public resetEbsCsiController() {
    this._ebsCsiController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsCsiControllerInput() {
    return this._ebsCsiController;
  }

  // efs_csi_controller - computed: false, optional: true, required: false
  private _efsCsiController?: boolean | cdktf.IResolvable; 
  public get efsCsiController() {
    return this.getBooleanAttribute('efs_csi_controller');
  }
  public set efsCsiController(value: boolean | cdktf.IResolvable) {
    this._efsCsiController = value;
  }
  public resetEfsCsiController() {
    this._efsCsiController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsCsiControllerInput() {
    return this._efsCsiController;
  }

  // external_dns - computed: false, optional: true, required: false
  private _externalDns?: boolean | cdktf.IResolvable; 
  public get externalDns() {
    return this.getBooleanAttribute('external_dns');
  }
  public set externalDns(value: boolean | cdktf.IResolvable) {
    this._externalDns = value;
  }
  public resetExternalDns() {
    this._externalDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDnsInput() {
    return this._externalDns;
  }

  // image_builder - computed: false, optional: true, required: false
  private _imageBuilder?: boolean | cdktf.IResolvable; 
  public get imageBuilder() {
    return this.getBooleanAttribute('image_builder');
  }
  public set imageBuilder(value: boolean | cdktf.IResolvable) {
    this._imageBuilder = value;
  }
  public resetImageBuilder() {
    this._imageBuilder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBuilderInput() {
    return this._imageBuilder;
  }
}

export class EksClusterClusterConfigIamServiceAccountsWellKnownPoliciesList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIamServiceAccountsWellKnownPolicies[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIamServiceAccountsWellKnownPoliciesOutputReference {
    return new EksClusterClusterConfigIamServiceAccountsWellKnownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIamServiceAccounts {
  /**
  * holds a policy document to attach to this service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy EksCluster#attach_policy}
  */
  readonly attachPolicy?: string;
  /**
  * CIDR range from where ClusterIPs are assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy_arns EksCluster#attach_policy_arns}
  */
  readonly attachPolicyArns?: string[];
  /**
  * ARN of the role to attach to the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_role_arn EksCluster#attach_role_arn}
  */
  readonly attachRoleArn?: string;
  /**
  * ARN of the permissions boundary to associate with the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#permissions_boundary EksCluster#permissions_boundary}
  */
  readonly permissionsBoundary?: string;
  /**
  * Specific role name instead of the Cloudformation-generated role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#role_name EksCluster#role_name}
  */
  readonly roleName?: string;
  /**
  * Specify if only the IAM Service Account role should be created without creating/annotating the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#role_only EksCluster#role_only}
  */
  readonly roleOnly?: boolean | cdktf.IResolvable;
  /**
  * AWS tags for the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#metadata EksCluster#metadata}
  */
  readonly metadata?: EksClusterClusterConfigIamServiceAccountsMetadata[] | cdktf.IResolvable;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#status EksCluster#status}
  */
  readonly status?: EksClusterClusterConfigIamServiceAccountsStatus[] | cdktf.IResolvable;
  /**
  * well_known_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#well_known_policies EksCluster#well_known_policies}
  */
  readonly wellKnownPolicies?: EksClusterClusterConfigIamServiceAccountsWellKnownPolicies[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigIamServiceAccountsToTerraform(struct?: EksClusterClusterConfigIamServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_policy: cdktf.stringToTerraform(struct!.attachPolicy),
    attach_policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attachPolicyArns),
    attach_role_arn: cdktf.stringToTerraform(struct!.attachRoleArn),
    permissions_boundary: cdktf.stringToTerraform(struct!.permissionsBoundary),
    role_name: cdktf.stringToTerraform(struct!.roleName),
    role_only: cdktf.booleanToTerraform(struct!.roleOnly),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    metadata: cdktf.listMapper(eksClusterClusterConfigIamServiceAccountsMetadataToTerraform, true)(struct!.metadata),
    status: cdktf.listMapper(eksClusterClusterConfigIamServiceAccountsStatusToTerraform, true)(struct!.status),
    well_known_policies: cdktf.listMapper(eksClusterClusterConfigIamServiceAccountsWellKnownPoliciesToTerraform, true)(struct!.wellKnownPolicies),
  }
}


export function eksClusterClusterConfigIamServiceAccountsToHclTerraform(struct?: EksClusterClusterConfigIamServiceAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_policy: {
      value: cdktf.stringToHclTerraform(struct!.attachPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attach_policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attachPolicyArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attach_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.attachRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions_boundary: {
      value: cdktf.stringToHclTerraform(struct!.permissionsBoundary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_only: {
      value: cdktf.booleanToHclTerraform(struct!.roleOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metadata: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIamServiceAccountsMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIamServiceAccountsMetadataList",
    },
    status: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIamServiceAccountsStatusToHclTerraform, true)(struct!.status),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIamServiceAccountsStatusList",
    },
    well_known_policies: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIamServiceAccountsWellKnownPoliciesToHclTerraform, true)(struct!.wellKnownPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIamServiceAccountsWellKnownPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigIamServiceAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIamServiceAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicy = this._attachPolicy;
    }
    if (this._attachPolicyArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicyArns = this._attachPolicyArns;
    }
    if (this._attachRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachRoleArn = this._attachRoleArn;
    }
    if (this._permissionsBoundary !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionsBoundary = this._permissionsBoundary;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._roleOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleOnly = this._roleOnly;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    if (this._wellKnownPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnownPolicies = this._wellKnownPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIamServiceAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachPolicy = undefined;
      this._attachPolicyArns = undefined;
      this._attachRoleArn = undefined;
      this._permissionsBoundary = undefined;
      this._roleName = undefined;
      this._roleOnly = undefined;
      this._tags = undefined;
      this._metadata.internalValue = undefined;
      this._status.internalValue = undefined;
      this._wellKnownPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachPolicy = value.attachPolicy;
      this._attachPolicyArns = value.attachPolicyArns;
      this._attachRoleArn = value.attachRoleArn;
      this._permissionsBoundary = value.permissionsBoundary;
      this._roleName = value.roleName;
      this._roleOnly = value.roleOnly;
      this._tags = value.tags;
      this._metadata.internalValue = value.metadata;
      this._status.internalValue = value.status;
      this._wellKnownPolicies.internalValue = value.wellKnownPolicies;
    }
  }

  // attach_policy - computed: false, optional: true, required: false
  private _attachPolicy?: string; 
  public get attachPolicy() {
    return this.getStringAttribute('attach_policy');
  }
  public set attachPolicy(value: string) {
    this._attachPolicy = value;
  }
  public resetAttachPolicy() {
    this._attachPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyInput() {
    return this._attachPolicy;
  }

  // attach_policy_arns - computed: false, optional: true, required: false
  private _attachPolicyArns?: string[]; 
  public get attachPolicyArns() {
    return this.getListAttribute('attach_policy_arns');
  }
  public set attachPolicyArns(value: string[]) {
    this._attachPolicyArns = value;
  }
  public resetAttachPolicyArns() {
    this._attachPolicyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyArnsInput() {
    return this._attachPolicyArns;
  }

  // attach_role_arn - computed: false, optional: true, required: false
  private _attachRoleArn?: string; 
  public get attachRoleArn() {
    return this.getStringAttribute('attach_role_arn');
  }
  public set attachRoleArn(value: string) {
    this._attachRoleArn = value;
  }
  public resetAttachRoleArn() {
    this._attachRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachRoleArnInput() {
    return this._attachRoleArn;
  }

  // permissions_boundary - computed: false, optional: true, required: false
  private _permissionsBoundary?: string; 
  public get permissionsBoundary() {
    return this.getStringAttribute('permissions_boundary');
  }
  public set permissionsBoundary(value: string) {
    this._permissionsBoundary = value;
  }
  public resetPermissionsBoundary() {
    this._permissionsBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsBoundaryInput() {
    return this._permissionsBoundary;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_only - computed: false, optional: true, required: false
  private _roleOnly?: boolean | cdktf.IResolvable; 
  public get roleOnly() {
    return this.getBooleanAttribute('role_only');
  }
  public set roleOnly(value: boolean | cdktf.IResolvable) {
    this._roleOnly = value;
  }
  public resetRoleOnly() {
    this._roleOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleOnlyInput() {
    return this._roleOnly;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new EksClusterClusterConfigIamServiceAccountsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: EksClusterClusterConfigIamServiceAccountsMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new EksClusterClusterConfigIamServiceAccountsStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
  public putStatus(value: EksClusterClusterConfigIamServiceAccountsStatus[] | cdktf.IResolvable) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // well_known_policies - computed: false, optional: true, required: false
  private _wellKnownPolicies = new EksClusterClusterConfigIamServiceAccountsWellKnownPoliciesList(this, "well_known_policies", false);
  public get wellKnownPolicies() {
    return this._wellKnownPolicies;
  }
  public putWellKnownPolicies(value: EksClusterClusterConfigIamServiceAccountsWellKnownPolicies[] | cdktf.IResolvable) {
    this._wellKnownPolicies.internalValue = value;
  }
  public resetWellKnownPolicies() {
    this._wellKnownPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownPoliciesInput() {
    return this._wellKnownPolicies.internalValue;
  }
}

export class EksClusterClusterConfigIamServiceAccountsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIamServiceAccounts[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIamServiceAccountsOutputReference {
    return new EksClusterClusterConfigIamServiceAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIam {
  /**
  * role used by pods to access AWS APIs. This role is added to the Kubernetes RBAC for authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#fargate_pod_execution_role_arn EksCluster#fargate_pod_execution_role_arn}
  */
  readonly fargatePodExecutionRoleArn?: string;
  /**
  * permissions boundary for the fargate pod execution role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#fargate_pod_execution_role_permissions_boundary EksCluster#fargate_pod_execution_role_permissions_boundary}
  */
  readonly fargatePodExecutionRolePermissionsBoundary?: string;
  /**
  * service role ARN of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#service_role_arn EksCluster#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * permissions boundary for all identity-based entities created by the vendor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#service_role_permission_boundary EksCluster#service_role_permission_boundary}
  */
  readonly serviceRolePermissionBoundary?: string;
  /**
  * attaches the IAM policy necessary to run the VPC controller in the control plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#vpc_resource_controller_policy EksCluster#vpc_resource_controller_policy}
  */
  readonly vpcResourceControllerPolicy?: boolean | cdktf.IResolvable;
  /**
  * enables the IAM OIDC provider as well as IRSA for the Amazon CNI plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#with_oidc EksCluster#with_oidc}
  */
  readonly withOidc?: boolean | cdktf.IResolvable;
  /**
  * pod_identity_associations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#pod_identity_associations EksCluster#pod_identity_associations}
  */
  readonly podIdentityAssociations?: EksClusterClusterConfigIamPodIdentityAssociations[] | cdktf.IResolvable;
  /**
  * service_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#service_accounts EksCluster#service_accounts}
  */
  readonly serviceAccounts?: EksClusterClusterConfigIamServiceAccounts[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigIamToTerraform(struct?: EksClusterClusterConfigIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fargate_pod_execution_role_arn: cdktf.stringToTerraform(struct!.fargatePodExecutionRoleArn),
    fargate_pod_execution_role_permissions_boundary: cdktf.stringToTerraform(struct!.fargatePodExecutionRolePermissionsBoundary),
    service_role_arn: cdktf.stringToTerraform(struct!.serviceRoleArn),
    service_role_permission_boundary: cdktf.stringToTerraform(struct!.serviceRolePermissionBoundary),
    vpc_resource_controller_policy: cdktf.booleanToTerraform(struct!.vpcResourceControllerPolicy),
    with_oidc: cdktf.booleanToTerraform(struct!.withOidc),
    pod_identity_associations: cdktf.listMapper(eksClusterClusterConfigIamPodIdentityAssociationsToTerraform, true)(struct!.podIdentityAssociations),
    service_accounts: cdktf.listMapper(eksClusterClusterConfigIamServiceAccountsToTerraform, true)(struct!.serviceAccounts),
  }
}


export function eksClusterClusterConfigIamToHclTerraform(struct?: EksClusterClusterConfigIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fargate_pod_execution_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.fargatePodExecutionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fargate_pod_execution_role_permissions_boundary: {
      value: cdktf.stringToHclTerraform(struct!.fargatePodExecutionRolePermissionsBoundary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.serviceRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_role_permission_boundary: {
      value: cdktf.stringToHclTerraform(struct!.serviceRolePermissionBoundary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_resource_controller_policy: {
      value: cdktf.booleanToHclTerraform(struct!.vpcResourceControllerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    with_oidc: {
      value: cdktf.booleanToHclTerraform(struct!.withOidc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_identity_associations: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIamPodIdentityAssociationsToHclTerraform, true)(struct!.podIdentityAssociations),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIamPodIdentityAssociationsList",
    },
    service_accounts: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIamServiceAccountsToHclTerraform, true)(struct!.serviceAccounts),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIamServiceAccountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigIamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fargatePodExecutionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fargatePodExecutionRoleArn = this._fargatePodExecutionRoleArn;
    }
    if (this._fargatePodExecutionRolePermissionsBoundary !== undefined) {
      hasAnyValues = true;
      internalValueResult.fargatePodExecutionRolePermissionsBoundary = this._fargatePodExecutionRolePermissionsBoundary;
    }
    if (this._serviceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRoleArn = this._serviceRoleArn;
    }
    if (this._serviceRolePermissionBoundary !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRolePermissionBoundary = this._serviceRolePermissionBoundary;
    }
    if (this._vpcResourceControllerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcResourceControllerPolicy = this._vpcResourceControllerPolicy;
    }
    if (this._withOidc !== undefined) {
      hasAnyValues = true;
      internalValueResult.withOidc = this._withOidc;
    }
    if (this._podIdentityAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIdentityAssociations = this._podIdentityAssociations?.internalValue;
    }
    if (this._serviceAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fargatePodExecutionRoleArn = undefined;
      this._fargatePodExecutionRolePermissionsBoundary = undefined;
      this._serviceRoleArn = undefined;
      this._serviceRolePermissionBoundary = undefined;
      this._vpcResourceControllerPolicy = undefined;
      this._withOidc = undefined;
      this._podIdentityAssociations.internalValue = undefined;
      this._serviceAccounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fargatePodExecutionRoleArn = value.fargatePodExecutionRoleArn;
      this._fargatePodExecutionRolePermissionsBoundary = value.fargatePodExecutionRolePermissionsBoundary;
      this._serviceRoleArn = value.serviceRoleArn;
      this._serviceRolePermissionBoundary = value.serviceRolePermissionBoundary;
      this._vpcResourceControllerPolicy = value.vpcResourceControllerPolicy;
      this._withOidc = value.withOidc;
      this._podIdentityAssociations.internalValue = value.podIdentityAssociations;
      this._serviceAccounts.internalValue = value.serviceAccounts;
    }
  }

  // fargate_pod_execution_role_arn - computed: false, optional: true, required: false
  private _fargatePodExecutionRoleArn?: string; 
  public get fargatePodExecutionRoleArn() {
    return this.getStringAttribute('fargate_pod_execution_role_arn');
  }
  public set fargatePodExecutionRoleArn(value: string) {
    this._fargatePodExecutionRoleArn = value;
  }
  public resetFargatePodExecutionRoleArn() {
    this._fargatePodExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fargatePodExecutionRoleArnInput() {
    return this._fargatePodExecutionRoleArn;
  }

  // fargate_pod_execution_role_permissions_boundary - computed: false, optional: true, required: false
  private _fargatePodExecutionRolePermissionsBoundary?: string; 
  public get fargatePodExecutionRolePermissionsBoundary() {
    return this.getStringAttribute('fargate_pod_execution_role_permissions_boundary');
  }
  public set fargatePodExecutionRolePermissionsBoundary(value: string) {
    this._fargatePodExecutionRolePermissionsBoundary = value;
  }
  public resetFargatePodExecutionRolePermissionsBoundary() {
    this._fargatePodExecutionRolePermissionsBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fargatePodExecutionRolePermissionsBoundaryInput() {
    return this._fargatePodExecutionRolePermissionsBoundary;
  }

  // service_role_arn - computed: false, optional: true, required: false
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
  }

  // service_role_permission_boundary - computed: false, optional: true, required: false
  private _serviceRolePermissionBoundary?: string; 
  public get serviceRolePermissionBoundary() {
    return this.getStringAttribute('service_role_permission_boundary');
  }
  public set serviceRolePermissionBoundary(value: string) {
    this._serviceRolePermissionBoundary = value;
  }
  public resetServiceRolePermissionBoundary() {
    this._serviceRolePermissionBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRolePermissionBoundaryInput() {
    return this._serviceRolePermissionBoundary;
  }

  // vpc_resource_controller_policy - computed: false, optional: true, required: false
  private _vpcResourceControllerPolicy?: boolean | cdktf.IResolvable; 
  public get vpcResourceControllerPolicy() {
    return this.getBooleanAttribute('vpc_resource_controller_policy');
  }
  public set vpcResourceControllerPolicy(value: boolean | cdktf.IResolvable) {
    this._vpcResourceControllerPolicy = value;
  }
  public resetVpcResourceControllerPolicy() {
    this._vpcResourceControllerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcResourceControllerPolicyInput() {
    return this._vpcResourceControllerPolicy;
  }

  // with_oidc - computed: false, optional: true, required: false
  private _withOidc?: boolean | cdktf.IResolvable; 
  public get withOidc() {
    return this.getBooleanAttribute('with_oidc');
  }
  public set withOidc(value: boolean | cdktf.IResolvable) {
    this._withOidc = value;
  }
  public resetWithOidc() {
    this._withOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withOidcInput() {
    return this._withOidc;
  }

  // pod_identity_associations - computed: false, optional: true, required: false
  private _podIdentityAssociations = new EksClusterClusterConfigIamPodIdentityAssociationsList(this, "pod_identity_associations", false);
  public get podIdentityAssociations() {
    return this._podIdentityAssociations;
  }
  public putPodIdentityAssociations(value: EksClusterClusterConfigIamPodIdentityAssociations[] | cdktf.IResolvable) {
    this._podIdentityAssociations.internalValue = value;
  }
  public resetPodIdentityAssociations() {
    this._podIdentityAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIdentityAssociationsInput() {
    return this._podIdentityAssociations.internalValue;
  }

  // service_accounts - computed: false, optional: true, required: false
  private _serviceAccounts = new EksClusterClusterConfigIamServiceAccountsList(this, "service_accounts", false);
  public get serviceAccounts() {
    return this._serviceAccounts;
  }
  public putServiceAccounts(value: EksClusterClusterConfigIamServiceAccounts[] | cdktf.IResolvable) {
    this._serviceAccounts.internalValue = value;
  }
  public resetServiceAccounts() {
    this._serviceAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts.internalValue;
  }
}

export class EksClusterClusterConfigIamList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIam[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIamOutputReference {
    return new EksClusterClusterConfigIamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIdentityMappingsArns {
  /**
  * ARN of user/role to be mapped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#arn EksCluster#arn}
  */
  readonly arn?: string;
  /**
  * List of kubernetes groups to be mapped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#group EksCluster#group}
  */
  readonly group?: string[];
  /**
  * The username to be used by kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#username EksCluster#username}
  */
  readonly username?: string;
}

export function eksClusterClusterConfigIdentityMappingsArnsToTerraform(struct?: EksClusterClusterConfigIdentityMappingsArns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function eksClusterClusterConfigIdentityMappingsArnsToHclTerraform(struct?: EksClusterClusterConfigIdentityMappingsArns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigIdentityMappingsArnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIdentityMappingsArns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIdentityMappingsArns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._group = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._group = value.group;
      this._username = value.username;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return this.getListAttribute('group');
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class EksClusterClusterConfigIdentityMappingsArnsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIdentityMappingsArns[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIdentityMappingsArnsOutputReference {
    return new EksClusterClusterConfigIdentityMappingsArnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIdentityMappings {
  /**
  * List of IAM accounts to map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#accounts EksCluster#accounts}
  */
  readonly accounts?: string[];
  /**
  * arns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#arns EksCluster#arns}
  */
  readonly arns?: EksClusterClusterConfigIdentityMappingsArns[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigIdentityMappingsToTerraform(struct?: EksClusterClusterConfigIdentityMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accounts),
    arns: cdktf.listMapper(eksClusterClusterConfigIdentityMappingsArnsToTerraform, true)(struct!.arns),
  }
}


export function eksClusterClusterConfigIdentityMappingsToHclTerraform(struct?: EksClusterClusterConfigIdentityMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    arns: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIdentityMappingsArnsToHclTerraform, true)(struct!.arns),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIdentityMappingsArnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigIdentityMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIdentityMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._arns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arns = this._arns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIdentityMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accounts = undefined;
      this._arns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accounts = value.accounts;
      this._arns.internalValue = value.arns;
    }
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return this.getListAttribute('accounts');
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
  }

  // arns - computed: false, optional: true, required: false
  private _arns = new EksClusterClusterConfigIdentityMappingsArnsList(this, "arns", false);
  public get arns() {
    return this._arns;
  }
  public putArns(value: EksClusterClusterConfigIdentityMappingsArns[] | cdktf.IResolvable) {
    this._arns.internalValue = value;
  }
  public resetArns() {
    this._arns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnsInput() {
    return this._arns.internalValue;
  }
}

export class EksClusterClusterConfigIdentityMappingsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIdentityMappings[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIdentityMappingsOutputReference {
    return new EksClusterClusterConfigIdentityMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigIdentityProviders {
  /**
  * Valid variants are: 'oidc': OIDC identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#type EksCluster#type}
  */
  readonly type?: string;
}

export function eksClusterClusterConfigIdentityProvidersToTerraform(struct?: EksClusterClusterConfigIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eksClusterClusterConfigIdentityProvidersToHclTerraform(struct?: EksClusterClusterConfigIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class EksClusterClusterConfigIdentityProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigIdentityProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigIdentityProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class EksClusterClusterConfigIdentityProvidersList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigIdentityProviders[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigIdentityProvidersOutputReference {
    return new EksClusterClusterConfigIdentityProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigKubernetesNetworkConfig {
  /**
  * Valid variants are: 'IPv4' defines an IP family of v4 to be used when creating a new VPC and cluster., 'IPv6' defines an IP family of v6 to be used when creating a new VPC and cluster..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ip_family EksCluster#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * CIDR range from where ClusterIPs are assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#service_ipv4_cidr EksCluster#service_ipv4_cidr}
  */
  readonly serviceIpv4Cidr?: string;
}

export function eksClusterClusterConfigKubernetesNetworkConfigToTerraform(struct?: EksClusterClusterConfigKubernetesNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    service_ipv4_cidr: cdktf.stringToTerraform(struct!.serviceIpv4Cidr),
  }
}


export function eksClusterClusterConfigKubernetesNetworkConfigToHclTerraform(struct?: EksClusterClusterConfigKubernetesNetworkConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_family: {
      value: cdktf.stringToHclTerraform(struct!.ipFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ipv4_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceIpv4Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigKubernetesNetworkConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._serviceIpv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIpv4Cidr = this._serviceIpv4Cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigKubernetesNetworkConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipFamily = undefined;
      this._serviceIpv4Cidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipFamily = value.ipFamily;
      this._serviceIpv4Cidr = value.serviceIpv4Cidr;
    }
  }

  // ip_family - computed: false, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // service_ipv4_cidr - computed: false, optional: true, required: false
  private _serviceIpv4Cidr?: string; 
  public get serviceIpv4Cidr() {
    return this.getStringAttribute('service_ipv4_cidr');
  }
  public set serviceIpv4Cidr(value: string) {
    this._serviceIpv4Cidr = value;
  }
  public resetServiceIpv4Cidr() {
    this._serviceIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv4CidrInput() {
    return this._serviceIpv4Cidr;
  }
}

export class EksClusterClusterConfigKubernetesNetworkConfigList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigKubernetesNetworkConfig[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigKubernetesNetworkConfigOutputReference {
    return new EksClusterClusterConfigKubernetesNetworkConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsBottleRocket {
  /**
  * Enable admin container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enable_admin_container EksCluster#enable_admin_container}
  */
  readonly enableAdminContainer?: boolean | cdktf.IResolvable;
  /**
  * contains any bottlerocket settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#settings EksCluster#settings}
  */
  readonly settings?: string;
}

export function eksClusterClusterConfigManagedNodegroupsBottleRocketToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsBottleRocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_admin_container: cdktf.booleanToTerraform(struct!.enableAdminContainer),
    settings: cdktf.stringToTerraform(struct!.settings),
  }
}


export function eksClusterClusterConfigManagedNodegroupsBottleRocketToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsBottleRocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_admin_container: {
      value: cdktf.booleanToHclTerraform(struct!.enableAdminContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: cdktf.stringToHclTerraform(struct!.settings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsBottleRocketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsBottleRocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAdminContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAdminContainer = this._enableAdminContainer;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsBottleRocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAdminContainer = undefined;
      this._settings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAdminContainer = value.enableAdminContainer;
      this._settings = value.settings;
    }
  }

  // enable_admin_container - computed: false, optional: true, required: false
  private _enableAdminContainer?: boolean | cdktf.IResolvable; 
  public get enableAdminContainer() {
    return this.getBooleanAttribute('enable_admin_container');
  }
  public set enableAdminContainer(value: boolean | cdktf.IResolvable) {
    this._enableAdminContainer = value;
  }
  public resetEnableAdminContainer() {
    this._enableAdminContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdminContainerInput() {
    return this._enableAdminContainer;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }
}

export class EksClusterClusterConfigManagedNodegroupsBottleRocketList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsBottleRocket[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsBottleRocketOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsBottleRocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatement {
  /**
  * Attach policy action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#action EksCluster#action}
  */
  readonly action?: string[];
  /**
  * Attach policy Statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#condition EksCluster#condition}
  */
  readonly condition?: string;
  /**
  * Attach policy effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#effect EksCluster#effect}
  */
  readonly effect?: string;
  /**
  * Attach policy NotAction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#not_action EksCluster#not_action}
  */
  readonly notAction?: string[];
  /**
  * Attach policy NotPrincipal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#not_principal EksCluster#not_principal}
  */
  readonly notPrincipal?: string;
  /**
  * Attach policy NotResource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#not_resource EksCluster#not_resource}
  */
  readonly notResource?: string[];
  /**
  * Attach policy principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#principal EksCluster#principal}
  */
  readonly principal?: string;
  /**
  * Attach policy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#resource EksCluster#resource}
  */
  readonly resource?: string;
  /**
  * Sid of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#sid EksCluster#sid}
  */
  readonly sid?: string;
}

export function eksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action),
    condition: cdktf.stringToTerraform(struct!.condition),
    effect: cdktf.stringToTerraform(struct!.effect),
    not_action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notAction),
    not_principal: cdktf.stringToTerraform(struct!.notPrincipal),
    not_resource: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notResource),
    principal: cdktf.stringToTerraform(struct!.principal),
    resource: cdktf.stringToTerraform(struct!.resource),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function eksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notAction),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_principal: {
      value: cdktf.stringToHclTerraform(struct!.notPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_resource: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notResource),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._notAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAction = this._notAction;
    }
    if (this._notPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrincipal = this._notPrincipal;
    }
    if (this._notResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.notResource = this._notResource;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._condition = undefined;
      this._effect = undefined;
      this._notAction = undefined;
      this._notPrincipal = undefined;
      this._notResource = undefined;
      this._principal = undefined;
      this._resource = undefined;
      this._sid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._condition = value.condition;
      this._effect = value.effect;
      this._notAction = value.notAction;
      this._notPrincipal = value.notPrincipal;
      this._notResource = value.notResource;
      this._principal = value.principal;
      this._resource = value.resource;
      this._sid = value.sid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string[]; 
  public get action() {
    return this.getListAttribute('action');
  }
  public set action(value: string[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // not_action - computed: false, optional: true, required: false
  private _notAction?: string[]; 
  public get notAction() {
    return this.getListAttribute('not_action');
  }
  public set notAction(value: string[]) {
    this._notAction = value;
  }
  public resetNotAction() {
    this._notAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notActionInput() {
    return this._notAction;
  }

  // not_principal - computed: false, optional: true, required: false
  private _notPrincipal?: string; 
  public get notPrincipal() {
    return this.getStringAttribute('not_principal');
  }
  public set notPrincipal(value: string) {
    this._notPrincipal = value;
  }
  public resetNotPrincipal() {
    this._notPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrincipalInput() {
    return this._notPrincipal;
  }

  // not_resource - computed: false, optional: true, required: false
  private _notResource?: string[]; 
  public get notResource() {
    return this.getListAttribute('not_resource');
  }
  public set notResource(value: string[]) {
    this._notResource = value;
  }
  public resetNotResource() {
    this._notResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notResourceInput() {
    return this._notResource;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

export class EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatement[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsIamAttachPolicy {
  /**
  * Attach policy id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Attach policy version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#statement EksCluster#statement}
  */
  readonly statement?: EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatement[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigManagedNodegroupsIamAttachPolicyToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsIamAttachPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.stringToTerraform(struct!.version),
    statement: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementToTerraform, true)(struct!.statement),
  }
}


export function eksClusterClusterConfigManagedNodegroupsIamAttachPolicyToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsIamAttachPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statement: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementToHclTerraform, true)(struct!.statement),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsIamAttachPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsIamAttachPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._statement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsIamAttachPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._version = undefined;
      this._statement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._version = value.version;
      this._statement.internalValue = value.statement;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // statement - computed: false, optional: true, required: false
  private _statement = new EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: EksClusterClusterConfigManagedNodegroupsIamAttachPolicyStatement[] | cdktf.IResolvable) {
    this._statement.internalValue = value;
  }
  public resetStatement() {
    this._statement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }
}

export class EksClusterClusterConfigManagedNodegroupsIamAttachPolicyList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsIamAttachPolicy[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsIamAttachPolicyOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsIamAttachPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPolicies {
  /**
  * enables access to ALB Ingress controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#alb_ingress EksCluster#alb_ingress}
  */
  readonly albIngress?: boolean | cdktf.IResolvable;
  /**
  * enables full access to AppMesh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#app_mesh EksCluster#app_mesh}
  */
  readonly appMesh?: boolean | cdktf.IResolvable;
  /**
  * enables full access to AppMesh Preview
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#app_mesh_review EksCluster#app_mesh_review}
  */
  readonly appMeshReview?: boolean | cdktf.IResolvable;
  /**
  * enables IAM policy for cluster-autoscaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#auto_scaler EksCluster#auto_scaler}
  */
  readonly autoScaler?: boolean | cdktf.IResolvable;
  /**
  * enables the ability to add records to Route 53 in order to solve the DNS01 challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cert_manager EksCluster#cert_manager}
  */
  readonly certManager?: boolean | cdktf.IResolvable;
  /**
  * enables access to cloud watch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cloud_watch EksCluster#cloud_watch}
  */
  readonly cloudWatch?: boolean | cdktf.IResolvable;
  /**
  * enables the new EBS CSI (Elastic Block Store Container Storage Interface) driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ebs EksCluster#ebs}
  */
  readonly ebs?: boolean | cdktf.IResolvable;
  /**
  * enables full access to EFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#efs EksCluster#efs}
  */
  readonly efs?: boolean | cdktf.IResolvable;
  /**
  * adds the external-dns project policies for Amazon Route 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#external_dns EksCluster#external_dns}
  */
  readonly externalDns?: boolean | cdktf.IResolvable;
  /**
  * enables full access to FSX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#fsx EksCluster#fsx}
  */
  readonly fsx?: boolean | cdktf.IResolvable;
  /**
  * allows for full ECR (Elastic Container Registry) access. This is useful for building, for example, a CI server that needs to push images to ECR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#image_builder EksCluster#image_builder}
  */
  readonly imageBuilder?: boolean | cdktf.IResolvable;
  /**
  * enables access to XRay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#xray EksCluster#xray}
  */
  readonly xray?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alb_ingress: cdktf.booleanToTerraform(struct!.albIngress),
    app_mesh: cdktf.booleanToTerraform(struct!.appMesh),
    app_mesh_review: cdktf.booleanToTerraform(struct!.appMeshReview),
    auto_scaler: cdktf.booleanToTerraform(struct!.autoScaler),
    cert_manager: cdktf.booleanToTerraform(struct!.certManager),
    cloud_watch: cdktf.booleanToTerraform(struct!.cloudWatch),
    ebs: cdktf.booleanToTerraform(struct!.ebs),
    efs: cdktf.booleanToTerraform(struct!.efs),
    external_dns: cdktf.booleanToTerraform(struct!.externalDns),
    fsx: cdktf.booleanToTerraform(struct!.fsx),
    image_builder: cdktf.booleanToTerraform(struct!.imageBuilder),
    xray: cdktf.booleanToTerraform(struct!.xray),
  }
}


export function eksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alb_ingress: {
      value: cdktf.booleanToHclTerraform(struct!.albIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_mesh: {
      value: cdktf.booleanToHclTerraform(struct!.appMesh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_mesh_review: {
      value: cdktf.booleanToHclTerraform(struct!.appMeshReview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_scaler: {
      value: cdktf.booleanToHclTerraform(struct!.autoScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cert_manager: {
      value: cdktf.booleanToHclTerraform(struct!.certManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_watch: {
      value: cdktf.booleanToHclTerraform(struct!.cloudWatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs: {
      value: cdktf.booleanToHclTerraform(struct!.ebs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    efs: {
      value: cdktf.booleanToHclTerraform(struct!.efs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_dns: {
      value: cdktf.booleanToHclTerraform(struct!.externalDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fsx: {
      value: cdktf.booleanToHclTerraform(struct!.fsx),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_builder: {
      value: cdktf.booleanToHclTerraform(struct!.imageBuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xray: {
      value: cdktf.booleanToHclTerraform(struct!.xray),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._albIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.albIngress = this._albIngress;
    }
    if (this._appMesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.appMesh = this._appMesh;
    }
    if (this._appMeshReview !== undefined) {
      hasAnyValues = true;
      internalValueResult.appMeshReview = this._appMeshReview;
    }
    if (this._autoScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaler = this._autoScaler;
    }
    if (this._certManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.certManager = this._certManager;
    }
    if (this._cloudWatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatch = this._cloudWatch;
    }
    if (this._ebs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs;
    }
    if (this._efs !== undefined) {
      hasAnyValues = true;
      internalValueResult.efs = this._efs;
    }
    if (this._externalDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDns = this._externalDns;
    }
    if (this._fsx !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsx = this._fsx;
    }
    if (this._imageBuilder !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageBuilder = this._imageBuilder;
    }
    if (this._xray !== undefined) {
      hasAnyValues = true;
      internalValueResult.xray = this._xray;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._albIngress = undefined;
      this._appMesh = undefined;
      this._appMeshReview = undefined;
      this._autoScaler = undefined;
      this._certManager = undefined;
      this._cloudWatch = undefined;
      this._ebs = undefined;
      this._efs = undefined;
      this._externalDns = undefined;
      this._fsx = undefined;
      this._imageBuilder = undefined;
      this._xray = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._albIngress = value.albIngress;
      this._appMesh = value.appMesh;
      this._appMeshReview = value.appMeshReview;
      this._autoScaler = value.autoScaler;
      this._certManager = value.certManager;
      this._cloudWatch = value.cloudWatch;
      this._ebs = value.ebs;
      this._efs = value.efs;
      this._externalDns = value.externalDns;
      this._fsx = value.fsx;
      this._imageBuilder = value.imageBuilder;
      this._xray = value.xray;
    }
  }

  // alb_ingress - computed: false, optional: true, required: false
  private _albIngress?: boolean | cdktf.IResolvable; 
  public get albIngress() {
    return this.getBooleanAttribute('alb_ingress');
  }
  public set albIngress(value: boolean | cdktf.IResolvable) {
    this._albIngress = value;
  }
  public resetAlbIngress() {
    this._albIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albIngressInput() {
    return this._albIngress;
  }

  // app_mesh - computed: false, optional: true, required: false
  private _appMesh?: boolean | cdktf.IResolvable; 
  public get appMesh() {
    return this.getBooleanAttribute('app_mesh');
  }
  public set appMesh(value: boolean | cdktf.IResolvable) {
    this._appMesh = value;
  }
  public resetAppMesh() {
    this._appMesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appMeshInput() {
    return this._appMesh;
  }

  // app_mesh_review - computed: false, optional: true, required: false
  private _appMeshReview?: boolean | cdktf.IResolvable; 
  public get appMeshReview() {
    return this.getBooleanAttribute('app_mesh_review');
  }
  public set appMeshReview(value: boolean | cdktf.IResolvable) {
    this._appMeshReview = value;
  }
  public resetAppMeshReview() {
    this._appMeshReview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appMeshReviewInput() {
    return this._appMeshReview;
  }

  // auto_scaler - computed: false, optional: true, required: false
  private _autoScaler?: boolean | cdktf.IResolvable; 
  public get autoScaler() {
    return this.getBooleanAttribute('auto_scaler');
  }
  public set autoScaler(value: boolean | cdktf.IResolvable) {
    this._autoScaler = value;
  }
  public resetAutoScaler() {
    this._autoScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerInput() {
    return this._autoScaler;
  }

  // cert_manager - computed: false, optional: true, required: false
  private _certManager?: boolean | cdktf.IResolvable; 
  public get certManager() {
    return this.getBooleanAttribute('cert_manager');
  }
  public set certManager(value: boolean | cdktf.IResolvable) {
    this._certManager = value;
  }
  public resetCertManager() {
    this._certManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certManagerInput() {
    return this._certManager;
  }

  // cloud_watch - computed: false, optional: true, required: false
  private _cloudWatch?: boolean | cdktf.IResolvable; 
  public get cloudWatch() {
    return this.getBooleanAttribute('cloud_watch');
  }
  public set cloudWatch(value: boolean | cdktf.IResolvable) {
    this._cloudWatch = value;
  }
  public resetCloudWatch() {
    this._cloudWatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchInput() {
    return this._cloudWatch;
  }

  // ebs - computed: false, optional: true, required: false
  private _ebs?: boolean | cdktf.IResolvable; 
  public get ebs() {
    return this.getBooleanAttribute('ebs');
  }
  public set ebs(value: boolean | cdktf.IResolvable) {
    this._ebs = value;
  }
  public resetEbs() {
    this._ebs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs;
  }

  // efs - computed: false, optional: true, required: false
  private _efs?: boolean | cdktf.IResolvable; 
  public get efs() {
    return this.getBooleanAttribute('efs');
  }
  public set efs(value: boolean | cdktf.IResolvable) {
    this._efs = value;
  }
  public resetEfs() {
    this._efs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsInput() {
    return this._efs;
  }

  // external_dns - computed: false, optional: true, required: false
  private _externalDns?: boolean | cdktf.IResolvable; 
  public get externalDns() {
    return this.getBooleanAttribute('external_dns');
  }
  public set externalDns(value: boolean | cdktf.IResolvable) {
    this._externalDns = value;
  }
  public resetExternalDns() {
    this._externalDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDnsInput() {
    return this._externalDns;
  }

  // fsx - computed: false, optional: true, required: false
  private _fsx?: boolean | cdktf.IResolvable; 
  public get fsx() {
    return this.getBooleanAttribute('fsx');
  }
  public set fsx(value: boolean | cdktf.IResolvable) {
    this._fsx = value;
  }
  public resetFsx() {
    this._fsx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxInput() {
    return this._fsx;
  }

  // image_builder - computed: false, optional: true, required: false
  private _imageBuilder?: boolean | cdktf.IResolvable; 
  public get imageBuilder() {
    return this.getBooleanAttribute('image_builder');
  }
  public set imageBuilder(value: boolean | cdktf.IResolvable) {
    this._imageBuilder = value;
  }
  public resetImageBuilder() {
    this._imageBuilder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBuilderInput() {
    return this._imageBuilder;
  }

  // xray - computed: false, optional: true, required: false
  private _xray?: boolean | cdktf.IResolvable; 
  public get xray() {
    return this.getBooleanAttribute('xray');
  }
  public set xray(value: boolean | cdktf.IResolvable) {
    this._xray = value;
  }
  public resetXray() {
    this._xray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayInput() {
    return this._xray;
  }
}

export class EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPolicies[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsIam {
  /**
  * attach polciy ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy_arns EksCluster#attach_policy_arns}
  */
  readonly attachPolicyArns?: string[];
  /**
  * attach policy in json string format 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy_v2 EksCluster#attach_policy_v2}
  */
  readonly attachPolicyV2?: string;
  /**
  * instance profile ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_profile_arn EksCluster#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * instance role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_role_arn EksCluster#instance_role_arn}
  */
  readonly instanceRoleArn?: string;
  /**
  * instance role Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_role_name EksCluster#instance_role_name}
  */
  readonly instanceRoleName?: string;
  /**
  * instance role permissions boundary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_role_permission_boundary EksCluster#instance_role_permission_boundary}
  */
  readonly instanceRolePermissionBoundary?: string;
  /**
  * attach_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy EksCluster#attach_policy}
  */
  readonly attachPolicy?: EksClusterClusterConfigManagedNodegroupsIamAttachPolicy[] | cdktf.IResolvable;
  /**
  * iam_node_group_with_addon_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#iam_node_group_with_addon_policies EksCluster#iam_node_group_with_addon_policies}
  */
  readonly iamNodeGroupWithAddonPolicies?: EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPolicies[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigManagedNodegroupsIamToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attachPolicyArns),
    attach_policy_v2: cdktf.stringToTerraform(struct!.attachPolicyV2),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    instance_role_arn: cdktf.stringToTerraform(struct!.instanceRoleArn),
    instance_role_name: cdktf.stringToTerraform(struct!.instanceRoleName),
    instance_role_permission_boundary: cdktf.stringToTerraform(struct!.instanceRolePermissionBoundary),
    attach_policy: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsIamAttachPolicyToTerraform, true)(struct!.attachPolicy),
    iam_node_group_with_addon_policies: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesToTerraform, true)(struct!.iamNodeGroupWithAddonPolicies),
  }
}


export function eksClusterClusterConfigManagedNodegroupsIamToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attachPolicyArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attach_policy_v2: {
      value: cdktf.stringToHclTerraform(struct!.attachPolicyV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role_permission_boundary: {
      value: cdktf.stringToHclTerraform(struct!.instanceRolePermissionBoundary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attach_policy: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsIamAttachPolicyToHclTerraform, true)(struct!.attachPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsIamAttachPolicyList",
    },
    iam_node_group_with_addon_policies: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesToHclTerraform, true)(struct!.iamNodeGroupWithAddonPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsIamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsIam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachPolicyArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicyArns = this._attachPolicyArns;
    }
    if (this._attachPolicyV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicyV2 = this._attachPolicyV2;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._instanceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRoleArn = this._instanceRoleArn;
    }
    if (this._instanceRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRoleName = this._instanceRoleName;
    }
    if (this._instanceRolePermissionBoundary !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRolePermissionBoundary = this._instanceRolePermissionBoundary;
    }
    if (this._attachPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicy = this._attachPolicy?.internalValue;
    }
    if (this._iamNodeGroupWithAddonPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamNodeGroupWithAddonPolicies = this._iamNodeGroupWithAddonPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsIam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachPolicyArns = undefined;
      this._attachPolicyV2 = undefined;
      this._instanceProfileArn = undefined;
      this._instanceRoleArn = undefined;
      this._instanceRoleName = undefined;
      this._instanceRolePermissionBoundary = undefined;
      this._attachPolicy.internalValue = undefined;
      this._iamNodeGroupWithAddonPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachPolicyArns = value.attachPolicyArns;
      this._attachPolicyV2 = value.attachPolicyV2;
      this._instanceProfileArn = value.instanceProfileArn;
      this._instanceRoleArn = value.instanceRoleArn;
      this._instanceRoleName = value.instanceRoleName;
      this._instanceRolePermissionBoundary = value.instanceRolePermissionBoundary;
      this._attachPolicy.internalValue = value.attachPolicy;
      this._iamNodeGroupWithAddonPolicies.internalValue = value.iamNodeGroupWithAddonPolicies;
    }
  }

  // attach_policy_arns - computed: false, optional: true, required: false
  private _attachPolicyArns?: string[]; 
  public get attachPolicyArns() {
    return this.getListAttribute('attach_policy_arns');
  }
  public set attachPolicyArns(value: string[]) {
    this._attachPolicyArns = value;
  }
  public resetAttachPolicyArns() {
    this._attachPolicyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyArnsInput() {
    return this._attachPolicyArns;
  }

  // attach_policy_v2 - computed: false, optional: true, required: false
  private _attachPolicyV2?: string; 
  public get attachPolicyV2() {
    return this.getStringAttribute('attach_policy_v2');
  }
  public set attachPolicyV2(value: string) {
    this._attachPolicyV2 = value;
  }
  public resetAttachPolicyV2() {
    this._attachPolicyV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyV2Input() {
    return this._attachPolicyV2;
  }

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // instance_role_arn - computed: false, optional: true, required: false
  private _instanceRoleArn?: string; 
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }
  public set instanceRoleArn(value: string) {
    this._instanceRoleArn = value;
  }
  public resetInstanceRoleArn() {
    this._instanceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleArnInput() {
    return this._instanceRoleArn;
  }

  // instance_role_name - computed: false, optional: true, required: false
  private _instanceRoleName?: string; 
  public get instanceRoleName() {
    return this.getStringAttribute('instance_role_name');
  }
  public set instanceRoleName(value: string) {
    this._instanceRoleName = value;
  }
  public resetInstanceRoleName() {
    this._instanceRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleNameInput() {
    return this._instanceRoleName;
  }

  // instance_role_permission_boundary - computed: false, optional: true, required: false
  private _instanceRolePermissionBoundary?: string; 
  public get instanceRolePermissionBoundary() {
    return this.getStringAttribute('instance_role_permission_boundary');
  }
  public set instanceRolePermissionBoundary(value: string) {
    this._instanceRolePermissionBoundary = value;
  }
  public resetInstanceRolePermissionBoundary() {
    this._instanceRolePermissionBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRolePermissionBoundaryInput() {
    return this._instanceRolePermissionBoundary;
  }

  // attach_policy - computed: false, optional: true, required: false
  private _attachPolicy = new EksClusterClusterConfigManagedNodegroupsIamAttachPolicyList(this, "attach_policy", false);
  public get attachPolicy() {
    return this._attachPolicy;
  }
  public putAttachPolicy(value: EksClusterClusterConfigManagedNodegroupsIamAttachPolicy[] | cdktf.IResolvable) {
    this._attachPolicy.internalValue = value;
  }
  public resetAttachPolicy() {
    this._attachPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyInput() {
    return this._attachPolicy.internalValue;
  }

  // iam_node_group_with_addon_policies - computed: false, optional: true, required: false
  private _iamNodeGroupWithAddonPolicies = new EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPoliciesList(this, "iam_node_group_with_addon_policies", false);
  public get iamNodeGroupWithAddonPolicies() {
    return this._iamNodeGroupWithAddonPolicies;
  }
  public putIamNodeGroupWithAddonPolicies(value: EksClusterClusterConfigManagedNodegroupsIamIamNodeGroupWithAddonPolicies[] | cdktf.IResolvable) {
    this._iamNodeGroupWithAddonPolicies.internalValue = value;
  }
  public resetIamNodeGroupWithAddonPolicies() {
    this._iamNodeGroupWithAddonPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamNodeGroupWithAddonPoliciesInput() {
    return this._iamNodeGroupWithAddonPolicies.internalValue;
  }
}

export class EksClusterClusterConfigManagedNodegroupsIamList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsIam[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsIamOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsIamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsInstanceSelector {
  /**
  * CPU Architecture of the EC2 instance type. Valid variants are: 'x86_64' 'amd64' 'arm64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cpu_architecture EksCluster#cpu_architecture}
  */
  readonly cpuArchitecture?: string;
  /**
  * specifies the number of GPUs. It can be set to 0 to select non-GPU instance types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#gpus EksCluster#gpus}
  */
  readonly gpus?: number;
  /**
  * specifies the memory The unit defaults to GiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#memory EksCluster#memory}
  */
  readonly memory?: string;
  /**
  * specifies the number of vCPUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#vcpus EksCluster#vcpus}
  */
  readonly vcpus?: number;
}

export function eksClusterClusterConfigManagedNodegroupsInstanceSelectorToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_architecture: cdktf.stringToTerraform(struct!.cpuArchitecture),
    gpus: cdktf.numberToTerraform(struct!.gpus),
    memory: cdktf.stringToTerraform(struct!.memory),
    vcpus: cdktf.numberToTerraform(struct!.vcpus),
  }
}


export function eksClusterClusterConfigManagedNodegroupsInstanceSelectorToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_architecture: {
      value: cdktf.stringToHclTerraform(struct!.cpuArchitecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpus: {
      value: cdktf.numberToHclTerraform(struct!.gpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpus: {
      value: cdktf.numberToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsInstanceSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsInstanceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuArchitecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuArchitecture = this._cpuArchitecture;
    }
    if (this._gpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsInstanceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuArchitecture = undefined;
      this._gpus = undefined;
      this._memory = undefined;
      this._vcpus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuArchitecture = value.cpuArchitecture;
      this._gpus = value.gpus;
      this._memory = value.memory;
      this._vcpus = value.vcpus;
    }
  }

  // cpu_architecture - computed: false, optional: true, required: false
  private _cpuArchitecture?: string; 
  public get cpuArchitecture() {
    return this.getStringAttribute('cpu_architecture');
  }
  public set cpuArchitecture(value: string) {
    this._cpuArchitecture = value;
  }
  public resetCpuArchitecture() {
    this._cpuArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuArchitectureInput() {
    return this._cpuArchitecture;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: number; 
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }
  public set gpus(value: number) {
    this._gpus = value;
  }
  public resetGpus() {
    this._gpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // vcpus - computed: false, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }
}

export class EksClusterClusterConfigManagedNodegroupsInstanceSelectorList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsInstanceSelector[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsInstanceSelectorOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsInstanceSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsLaunchTemplate {
  /**
  * key of taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * value of taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
}

export function eksClusterClusterConfigManagedNodegroupsLaunchTemplateToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsLaunchTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function eksClusterClusterConfigManagedNodegroupsLaunchTemplateToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsLaunchTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsLaunchTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsLaunchTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsLaunchTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class EksClusterClusterConfigManagedNodegroupsLaunchTemplateList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsLaunchTemplate[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsLaunchTemplateOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsLaunchTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsPlacement {
  /**
  * placement group name 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#group EksCluster#group}
  */
  readonly group?: string;
}

export function eksClusterClusterConfigManagedNodegroupsPlacementToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
  }
}


export function eksClusterClusterConfigManagedNodegroupsPlacementToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsPlacementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}

export class EksClusterClusterConfigManagedNodegroupsPlacementList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsPlacement[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsPlacementOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsPlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsSecurityGroups {
  /**
  * attaches additional security groups to the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_ids EksCluster#attach_ids}
  */
  readonly attachIds?: string[];
  /**
  * attach a security group local to this nodegroup Not supported for managed nodegroups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#with_local EksCluster#with_local}
  */
  readonly withLocal?: boolean | cdktf.IResolvable;
  /**
  * attach the security group shared among all nodegroups in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#with_shared EksCluster#with_shared}
  */
  readonly withShared?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigManagedNodegroupsSecurityGroupsToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attachIds),
    with_local: cdktf.booleanToTerraform(struct!.withLocal),
    with_shared: cdktf.booleanToTerraform(struct!.withShared),
  }
}


export function eksClusterClusterConfigManagedNodegroupsSecurityGroupsToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attachIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    with_local: {
      value: cdktf.booleanToHclTerraform(struct!.withLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    with_shared: {
      value: cdktf.booleanToHclTerraform(struct!.withShared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachIds = this._attachIds;
    }
    if (this._withLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.withLocal = this._withLocal;
    }
    if (this._withShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.withShared = this._withShared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachIds = undefined;
      this._withLocal = undefined;
      this._withShared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachIds = value.attachIds;
      this._withLocal = value.withLocal;
      this._withShared = value.withShared;
    }
  }

  // attach_ids - computed: false, optional: true, required: false
  private _attachIds?: string[]; 
  public get attachIds() {
    return this.getListAttribute('attach_ids');
  }
  public set attachIds(value: string[]) {
    this._attachIds = value;
  }
  public resetAttachIds() {
    this._attachIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachIdsInput() {
    return this._attachIds;
  }

  // with_local - computed: false, optional: true, required: false
  private _withLocal?: boolean | cdktf.IResolvable; 
  public get withLocal() {
    return this.getBooleanAttribute('with_local');
  }
  public set withLocal(value: boolean | cdktf.IResolvable) {
    this._withLocal = value;
  }
  public resetWithLocal() {
    this._withLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withLocalInput() {
    return this._withLocal;
  }

  // with_shared - computed: false, optional: true, required: false
  private _withShared?: boolean | cdktf.IResolvable; 
  public get withShared() {
    return this.getBooleanAttribute('with_shared');
  }
  public set withShared(value: boolean | cdktf.IResolvable) {
    this._withShared = value;
  }
  public resetWithShared() {
    this._withShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSharedInput() {
    return this._withShared;
  }
}

export class EksClusterClusterConfigManagedNodegroupsSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsSecurityGroupsOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsSsh {
  /**
  * If Allow is true the SSH configuration provided is used, otherwise it is ignored. Only one of PublicKeyPath, PublicKey and PublicKeyName can be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#allow EksCluster#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Enables the ability to SSH onto nodes using SSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enable_ssm EksCluster#enable_ssm}
  */
  readonly enableSsm?: boolean | cdktf.IResolvable;
  /**
  * Public key to be added to the nodes SSH keychain. If Allow is false this value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#public_key EksCluster#public_key}
  */
  readonly publicKey?: string;
  /**
  * Public key name in EC2 to be added to the nodes SSH keychain. If Allow is false this value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#public_key_name EksCluster#public_key_name}
  */
  readonly publicKeyName?: string;
  /**
  * source securitgy group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#source_security_group_ids EksCluster#source_security_group_ids}
  */
  readonly sourceSecurityGroupIds?: string[];
}

export function eksClusterClusterConfigManagedNodegroupsSshToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    enable_ssm: cdktf.booleanToTerraform(struct!.enableSsm),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    public_key_name: cdktf.stringToTerraform(struct!.publicKeyName),
    source_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceSecurityGroupIds),
  }
}


export function eksClusterClusterConfigManagedNodegroupsSshToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ssm: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_name: {
      value: cdktf.stringToHclTerraform(struct!.publicKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceSecurityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._enableSsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsm = this._enableSsm;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._publicKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyName = this._publicKeyName;
    }
    if (this._sourceSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSecurityGroupIds = this._sourceSecurityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._enableSsm = undefined;
      this._publicKey = undefined;
      this._publicKeyName = undefined;
      this._sourceSecurityGroupIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._enableSsm = value.enableSsm;
      this._publicKey = value.publicKey;
      this._publicKeyName = value.publicKeyName;
      this._sourceSecurityGroupIds = value.sourceSecurityGroupIds;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // enable_ssm - computed: false, optional: true, required: false
  private _enableSsm?: boolean | cdktf.IResolvable; 
  public get enableSsm() {
    return this.getBooleanAttribute('enable_ssm');
  }
  public set enableSsm(value: boolean | cdktf.IResolvable) {
    this._enableSsm = value;
  }
  public resetEnableSsm() {
    this._enableSsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsmInput() {
    return this._enableSsm;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // public_key_name - computed: false, optional: true, required: false
  private _publicKeyName?: string; 
  public get publicKeyName() {
    return this.getStringAttribute('public_key_name');
  }
  public set publicKeyName(value: string) {
    this._publicKeyName = value;
  }
  public resetPublicKeyName() {
    this._publicKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyNameInput() {
    return this._publicKeyName;
  }

  // source_security_group_ids - computed: false, optional: true, required: false
  private _sourceSecurityGroupIds?: string[]; 
  public get sourceSecurityGroupIds() {
    return this.getListAttribute('source_security_group_ids');
  }
  public set sourceSecurityGroupIds(value: string[]) {
    this._sourceSecurityGroupIds = value;
  }
  public resetSourceSecurityGroupIds() {
    this._sourceSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupIdsInput() {
    return this._sourceSecurityGroupIds;
  }
}

export class EksClusterClusterConfigManagedNodegroupsSshList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsSsh[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsSshOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsTaints {
  /**
  * effect of taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#effect EksCluster#effect}
  */
  readonly effect?: string;
  /**
  * key of taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#key EksCluster#key}
  */
  readonly key?: string;
  /**
  * value of taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#value EksCluster#value}
  */
  readonly value?: string;
}

export function eksClusterClusterConfigManagedNodegroupsTaintsToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eksClusterClusterConfigManagedNodegroupsTaintsToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class EksClusterClusterConfigManagedNodegroupsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
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

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
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
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class EksClusterClusterConfigManagedNodegroupsTaintsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsTaints[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsTaintsOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroupsUpdateConfig {
  /**
  * sets the max number of nodes that can become unavailable when updating a nodegroup (specified as number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#max_unavailable EksCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * sets the max number of nodes that can become unavailable when updating a nodegroup (specified as percentage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#max_unavailable_percentage EksCluster#max_unavailable_percentage}
  */
  readonly maxUnavailablePercentage?: number;
}

export function eksClusterClusterConfigManagedNodegroupsUpdateConfigToTerraform(struct?: EksClusterClusterConfigManagedNodegroupsUpdateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    max_unavailable_percentage: cdktf.numberToTerraform(struct!.maxUnavailablePercentage),
  }
}


export function eksClusterClusterConfigManagedNodegroupsUpdateConfigToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroupsUpdateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailablePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsUpdateConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroupsUpdateConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._maxUnavailablePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailablePercentage = this._maxUnavailablePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroupsUpdateConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._maxUnavailablePercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._maxUnavailablePercentage = value.maxUnavailablePercentage;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // max_unavailable_percentage - computed: false, optional: true, required: false
  private _maxUnavailablePercentage?: number; 
  public get maxUnavailablePercentage() {
    return this.getNumberAttribute('max_unavailable_percentage');
  }
  public set maxUnavailablePercentage(value: number) {
    this._maxUnavailablePercentage = value;
  }
  public resetMaxUnavailablePercentage() {
    this._maxUnavailablePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailablePercentageInput() {
    return this._maxUnavailablePercentage;
  }
}

export class EksClusterClusterConfigManagedNodegroupsUpdateConfigList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroupsUpdateConfig[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsUpdateConfigOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsUpdateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigManagedNodegroups {
  /**
  * Specify custom AMIs, auto-ssm, auto, or static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ami EksCluster#ami}
  */
  readonly ami?: string;
  /**
  * Valid variants are: 'AmazonLinux2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ami_family EksCluster#ami_family}
  */
  readonly amiFamily?: string;
  /**
  * See relevant AWS docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#asg_suspend_processes EksCluster#asg_suspend_processes}
  */
  readonly asgSuspendProcesses?: string[];
  /**
  * Limit nodes to specific AZs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#availability_zones EksCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * desired capacity of instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#desired_capacity EksCluster#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * requires requests to the metadata service to use IMDSv2 tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#disable_imdsv1 EksCluster#disable_imdsv1}
  */
  readonly disableImdsv1?: boolean | cdktf.IResolvable;
  /**
  * blocks all IMDS requests from non host networking pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#disable_pods_imds EksCluster#disable_pods_imds}
  */
  readonly disablePodsImds?: boolean | cdktf.IResolvable;
  /**
  * enables EBS optimization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ebs_optimized EksCluster#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * creates the maximum allowed number of EFA-enabled network cards on nodes in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#efa_enabled EksCluster#efa_enabled}
  */
  readonly efaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable EC2 detailed monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enable_detailed_monitoring EksCluster#enable_detailed_monitoring}
  */
  readonly enableDetailedMonitoring?: boolean | cdktf.IResolvable;
  /**
  * for instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_name EksCluster#instance_name}
  */
  readonly instanceName?: string;
  /**
  * for instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_prefix EksCluster#instance_prefix}
  */
  readonly instancePrefix?: string;
  /**
  * type of instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_type EksCluster#instance_type}
  */
  readonly instanceType?: string;
  /**
  * specifies a list of instance types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_types EksCluster#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * labels on nodes in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#labels EksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maximum pods per node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#max_pods_per_node EksCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * maximum size of instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#max_size EksCluster#max_size}
  */
  readonly maxSize?: number;
  /**
  * minimum size of instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#min_size EksCluster#min_size}
  */
  readonly minSize?: number;
  /**
  * name of the node group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name: string;
  /**
  * Override the vendor's bootstrapping script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#override_bootstrap_command EksCluster#override_bootstrap_command}
  */
  readonly overrideBootstrapCommand?: string;
  /**
  * executed before bootstrapping instances to the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#pre_bootstrap_commands EksCluster#pre_bootstrap_commands}
  */
  readonly preBootstrapCommands?: string[];
  /**
  * Enable private networking for nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#private_networking EksCluster#private_networking}
  */
  readonly privateNetworking?: boolean | cdktf.IResolvable;
  /**
  * create a spot nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#spot EksCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * Limit nodes to specific subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#subnets EksCluster#subnets}
  */
  readonly subnets?: string[];
  /**
  * Applied to the Autoscaling Group and to the EC2 instances (unmanaged), Applied to the EKS Nodegroup resource and to the EC2 instances (managed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Kuberenetes version for the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_encrypted EksCluster#volume_encrypted}
  */
  readonly volumeEncrypted?: boolean | cdktf.IResolvable;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_iops EksCluster#volume_iops}
  */
  readonly volumeIops?: number;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_kms_key_id EksCluster#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_name EksCluster#volume_name}
  */
  readonly volumeName?: string;
  /**
  * in gigabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_size EksCluster#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_throughput EksCluster#volume_throughput}
  */
  readonly volumeThroughput?: number;
  /**
  * Valid variants are: 'gp2' is General Purpose SSD, 'gp3' is General Purpose SSD which can be optimised for high throughput (default), 'io1' is Provisioned IOPS SSD, 'sc1' is Cold HDD, 'st1' is Throughput Optimized HDD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_type EksCluster#volume_type}
  */
  readonly volumeType?: string;
  /**
  * bottle_rocket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#bottle_rocket EksCluster#bottle_rocket}
  */
  readonly bottleRocket?: EksClusterClusterConfigManagedNodegroupsBottleRocket[] | cdktf.IResolvable;
  /**
  * iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#iam EksCluster#iam}
  */
  readonly iam?: EksClusterClusterConfigManagedNodegroupsIam[] | cdktf.IResolvable;
  /**
  * instance_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_selector EksCluster#instance_selector}
  */
  readonly instanceSelector?: EksClusterClusterConfigManagedNodegroupsInstanceSelector[] | cdktf.IResolvable;
  /**
  * launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#launch_template EksCluster#launch_template}
  */
  readonly launchTemplate?: EksClusterClusterConfigManagedNodegroupsLaunchTemplate[] | cdktf.IResolvable;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#placement EksCluster#placement}
  */
  readonly placement?: EksClusterClusterConfigManagedNodegroupsPlacement[] | cdktf.IResolvable;
  /**
  * security_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#security_groups EksCluster#security_groups}
  */
  readonly securityGroups?: EksClusterClusterConfigManagedNodegroupsSecurityGroups[] | cdktf.IResolvable;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ssh EksCluster#ssh}
  */
  readonly ssh?: EksClusterClusterConfigManagedNodegroupsSsh[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#taints EksCluster#taints}
  */
  readonly taints?: EksClusterClusterConfigManagedNodegroupsTaints[] | cdktf.IResolvable;
  /**
  * update_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#update_config EksCluster#update_config}
  */
  readonly updateConfig?: EksClusterClusterConfigManagedNodegroupsUpdateConfig[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigManagedNodegroupsToTerraform(struct?: EksClusterClusterConfigManagedNodegroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami: cdktf.stringToTerraform(struct!.ami),
    ami_family: cdktf.stringToTerraform(struct!.amiFamily),
    asg_suspend_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.asgSuspendProcesses),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    desired_capacity: cdktf.numberToTerraform(struct!.desiredCapacity),
    disable_imdsv1: cdktf.booleanToTerraform(struct!.disableImdsv1),
    disable_pods_imds: cdktf.booleanToTerraform(struct!.disablePodsImds),
    ebs_optimized: cdktf.booleanToTerraform(struct!.ebsOptimized),
    efa_enabled: cdktf.booleanToTerraform(struct!.efaEnabled),
    enable_detailed_monitoring: cdktf.booleanToTerraform(struct!.enableDetailedMonitoring),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    instance_prefix: cdktf.stringToTerraform(struct!.instancePrefix),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    override_bootstrap_command: cdktf.stringToTerraform(struct!.overrideBootstrapCommand),
    pre_bootstrap_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preBootstrapCommands),
    private_networking: cdktf.booleanToTerraform(struct!.privateNetworking),
    spot: cdktf.booleanToTerraform(struct!.spot),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    version: cdktf.stringToTerraform(struct!.version),
    volume_encrypted: cdktf.booleanToTerraform(struct!.volumeEncrypted),
    volume_iops: cdktf.numberToTerraform(struct!.volumeIops),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_throughput: cdktf.numberToTerraform(struct!.volumeThroughput),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    bottle_rocket: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsBottleRocketToTerraform, true)(struct!.bottleRocket),
    iam: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsIamToTerraform, true)(struct!.iam),
    instance_selector: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsInstanceSelectorToTerraform, true)(struct!.instanceSelector),
    launch_template: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsLaunchTemplateToTerraform, true)(struct!.launchTemplate),
    placement: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsPlacementToTerraform, true)(struct!.placement),
    security_groups: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsSecurityGroupsToTerraform, true)(struct!.securityGroups),
    ssh: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsSshToTerraform, true)(struct!.ssh),
    taints: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsTaintsToTerraform, true)(struct!.taints),
    update_config: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsUpdateConfigToTerraform, true)(struct!.updateConfig),
  }
}


export function eksClusterClusterConfigManagedNodegroupsToHclTerraform(struct?: EksClusterClusterConfigManagedNodegroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami: {
      value: cdktf.stringToHclTerraform(struct!.ami),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ami_family: {
      value: cdktf.stringToHclTerraform(struct!.amiFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asg_suspend_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.asgSuspendProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    desired_capacity: {
      value: cdktf.numberToHclTerraform(struct!.desiredCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_imdsv1: {
      value: cdktf.booleanToHclTerraform(struct!.disableImdsv1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_pods_imds: {
      value: cdktf.booleanToHclTerraform(struct!.disablePodsImds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs_optimized: {
      value: cdktf.booleanToHclTerraform(struct!.ebsOptimized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    efa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.efaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_detailed_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableDetailedMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_prefix: {
      value: cdktf.stringToHclTerraform(struct!.instancePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
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
    override_bootstrap_command: {
      value: cdktf.stringToHclTerraform(struct!.overrideBootstrapCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_bootstrap_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preBootstrapCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_networking: {
      value: cdktf.booleanToHclTerraform(struct!.privateNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.volumeEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_iops: {
      value: cdktf.numberToHclTerraform(struct!.volumeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_throughput: {
      value: cdktf.numberToHclTerraform(struct!.volumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bottle_rocket: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsBottleRocketToHclTerraform, true)(struct!.bottleRocket),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsBottleRocketList",
    },
    iam: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsIamToHclTerraform, true)(struct!.iam),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsIamList",
    },
    instance_selector: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsInstanceSelectorToHclTerraform, true)(struct!.instanceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsInstanceSelectorList",
    },
    launch_template: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsLaunchTemplateToHclTerraform, true)(struct!.launchTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsLaunchTemplateList",
    },
    placement: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsPlacementToHclTerraform, true)(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsPlacementList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsSecurityGroupsToHclTerraform, true)(struct!.securityGroups),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsSecurityGroupsList",
    },
    ssh: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsSshToHclTerraform, true)(struct!.ssh),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsSshList",
    },
    taints: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsTaintsList",
    },
    update_config: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsUpdateConfigToHclTerraform, true)(struct!.updateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsUpdateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigManagedNodegroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigManagedNodegroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ami !== undefined) {
      hasAnyValues = true;
      internalValueResult.ami = this._ami;
    }
    if (this._amiFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiFamily = this._amiFamily;
    }
    if (this._asgSuspendProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.asgSuspendProcesses = this._asgSuspendProcesses;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._desiredCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredCapacity = this._desiredCapacity;
    }
    if (this._disableImdsv1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableImdsv1 = this._disableImdsv1;
    }
    if (this._disablePodsImds !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePodsImds = this._disablePodsImds;
    }
    if (this._ebsOptimized !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsOptimized = this._ebsOptimized;
    }
    if (this._efaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.efaEnabled = this._efaEnabled;
    }
    if (this._enableDetailedMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDetailedMonitoring = this._enableDetailedMonitoring;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._instancePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePrefix = this._instancePrefix;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideBootstrapCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideBootstrapCommand = this._overrideBootstrapCommand;
    }
    if (this._preBootstrapCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.preBootstrapCommands = this._preBootstrapCommands;
    }
    if (this._privateNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworking = this._privateNetworking;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._volumeEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeEncrypted = this._volumeEncrypted;
    }
    if (this._volumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeIops = this._volumeIops;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeThroughput = this._volumeThroughput;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._bottleRocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottleRocket = this._bottleRocket?.internalValue;
    }
    if (this._iam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam?.internalValue;
    }
    if (this._instanceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelector = this._instanceSelector?.internalValue;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._securityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups?.internalValue;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._updateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateConfig = this._updateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigManagedNodegroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ami = undefined;
      this._amiFamily = undefined;
      this._asgSuspendProcesses = undefined;
      this._availabilityZones = undefined;
      this._desiredCapacity = undefined;
      this._disableImdsv1 = undefined;
      this._disablePodsImds = undefined;
      this._ebsOptimized = undefined;
      this._efaEnabled = undefined;
      this._enableDetailedMonitoring = undefined;
      this._instanceName = undefined;
      this._instancePrefix = undefined;
      this._instanceType = undefined;
      this._instanceTypes = undefined;
      this._labels = undefined;
      this._maxPodsPerNode = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._overrideBootstrapCommand = undefined;
      this._preBootstrapCommands = undefined;
      this._privateNetworking = undefined;
      this._spot = undefined;
      this._subnets = undefined;
      this._tags = undefined;
      this._version = undefined;
      this._volumeEncrypted = undefined;
      this._volumeIops = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeName = undefined;
      this._volumeSize = undefined;
      this._volumeThroughput = undefined;
      this._volumeType = undefined;
      this._bottleRocket.internalValue = undefined;
      this._iam.internalValue = undefined;
      this._instanceSelector.internalValue = undefined;
      this._launchTemplate.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._securityGroups.internalValue = undefined;
      this._ssh.internalValue = undefined;
      this._taints.internalValue = undefined;
      this._updateConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ami = value.ami;
      this._amiFamily = value.amiFamily;
      this._asgSuspendProcesses = value.asgSuspendProcesses;
      this._availabilityZones = value.availabilityZones;
      this._desiredCapacity = value.desiredCapacity;
      this._disableImdsv1 = value.disableImdsv1;
      this._disablePodsImds = value.disablePodsImds;
      this._ebsOptimized = value.ebsOptimized;
      this._efaEnabled = value.efaEnabled;
      this._enableDetailedMonitoring = value.enableDetailedMonitoring;
      this._instanceName = value.instanceName;
      this._instancePrefix = value.instancePrefix;
      this._instanceType = value.instanceType;
      this._instanceTypes = value.instanceTypes;
      this._labels = value.labels;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._overrideBootstrapCommand = value.overrideBootstrapCommand;
      this._preBootstrapCommands = value.preBootstrapCommands;
      this._privateNetworking = value.privateNetworking;
      this._spot = value.spot;
      this._subnets = value.subnets;
      this._tags = value.tags;
      this._version = value.version;
      this._volumeEncrypted = value.volumeEncrypted;
      this._volumeIops = value.volumeIops;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeName = value.volumeName;
      this._volumeSize = value.volumeSize;
      this._volumeThroughput = value.volumeThroughput;
      this._volumeType = value.volumeType;
      this._bottleRocket.internalValue = value.bottleRocket;
      this._iam.internalValue = value.iam;
      this._instanceSelector.internalValue = value.instanceSelector;
      this._launchTemplate.internalValue = value.launchTemplate;
      this._placement.internalValue = value.placement;
      this._securityGroups.internalValue = value.securityGroups;
      this._ssh.internalValue = value.ssh;
      this._taints.internalValue = value.taints;
      this._updateConfig.internalValue = value.updateConfig;
    }
  }

  // ami - computed: false, optional: true, required: false
  private _ami?: string; 
  public get ami() {
    return this.getStringAttribute('ami');
  }
  public set ami(value: string) {
    this._ami = value;
  }
  public resetAmi() {
    this._ami = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiInput() {
    return this._ami;
  }

  // ami_family - computed: false, optional: true, required: false
  private _amiFamily?: string; 
  public get amiFamily() {
    return this.getStringAttribute('ami_family');
  }
  public set amiFamily(value: string) {
    this._amiFamily = value;
  }
  public resetAmiFamily() {
    this._amiFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiFamilyInput() {
    return this._amiFamily;
  }

  // asg_suspend_processes - computed: false, optional: true, required: false
  private _asgSuspendProcesses?: string[]; 
  public get asgSuspendProcesses() {
    return this.getListAttribute('asg_suspend_processes');
  }
  public set asgSuspendProcesses(value: string[]) {
    this._asgSuspendProcesses = value;
  }
  public resetAsgSuspendProcesses() {
    this._asgSuspendProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgSuspendProcessesInput() {
    return this._asgSuspendProcesses;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // disable_imdsv1 - computed: false, optional: true, required: false
  private _disableImdsv1?: boolean | cdktf.IResolvable; 
  public get disableImdsv1() {
    return this.getBooleanAttribute('disable_imdsv1');
  }
  public set disableImdsv1(value: boolean | cdktf.IResolvable) {
    this._disableImdsv1 = value;
  }
  public resetDisableImdsv1() {
    this._disableImdsv1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableImdsv1Input() {
    return this._disableImdsv1;
  }

  // disable_pods_imds - computed: false, optional: true, required: false
  private _disablePodsImds?: boolean | cdktf.IResolvable; 
  public get disablePodsImds() {
    return this.getBooleanAttribute('disable_pods_imds');
  }
  public set disablePodsImds(value: boolean | cdktf.IResolvable) {
    this._disablePodsImds = value;
  }
  public resetDisablePodsImds() {
    this._disablePodsImds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePodsImdsInput() {
    return this._disablePodsImds;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // efa_enabled - computed: false, optional: true, required: false
  private _efaEnabled?: boolean | cdktf.IResolvable; 
  public get efaEnabled() {
    return this.getBooleanAttribute('efa_enabled');
  }
  public set efaEnabled(value: boolean | cdktf.IResolvable) {
    this._efaEnabled = value;
  }
  public resetEfaEnabled() {
    this._efaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efaEnabledInput() {
    return this._efaEnabled;
  }

  // enable_detailed_monitoring - computed: false, optional: true, required: false
  private _enableDetailedMonitoring?: boolean | cdktf.IResolvable; 
  public get enableDetailedMonitoring() {
    return this.getBooleanAttribute('enable_detailed_monitoring');
  }
  public set enableDetailedMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableDetailedMonitoring = value;
  }
  public resetEnableDetailedMonitoring() {
    this._enableDetailedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailedMonitoringInput() {
    return this._enableDetailedMonitoring;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_prefix - computed: false, optional: true, required: false
  private _instancePrefix?: string; 
  public get instancePrefix() {
    return this.getStringAttribute('instance_prefix');
  }
  public set instancePrefix(value: string) {
    this._instancePrefix = value;
  }
  public resetInstancePrefix() {
    this._instancePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePrefixInput() {
    return this._instancePrefix;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
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

  // max_pods_per_node - computed: false, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // override_bootstrap_command - computed: false, optional: true, required: false
  private _overrideBootstrapCommand?: string; 
  public get overrideBootstrapCommand() {
    return this.getStringAttribute('override_bootstrap_command');
  }
  public set overrideBootstrapCommand(value: string) {
    this._overrideBootstrapCommand = value;
  }
  public resetOverrideBootstrapCommand() {
    this._overrideBootstrapCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideBootstrapCommandInput() {
    return this._overrideBootstrapCommand;
  }

  // pre_bootstrap_commands - computed: false, optional: true, required: false
  private _preBootstrapCommands?: string[]; 
  public get preBootstrapCommands() {
    return this.getListAttribute('pre_bootstrap_commands');
  }
  public set preBootstrapCommands(value: string[]) {
    this._preBootstrapCommands = value;
  }
  public resetPreBootstrapCommands() {
    this._preBootstrapCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preBootstrapCommandsInput() {
    return this._preBootstrapCommands;
  }

  // private_networking - computed: false, optional: true, required: false
  private _privateNetworking?: boolean | cdktf.IResolvable; 
  public get privateNetworking() {
    return this.getBooleanAttribute('private_networking');
  }
  public set privateNetworking(value: boolean | cdktf.IResolvable) {
    this._privateNetworking = value;
  }
  public resetPrivateNetworking() {
    this._privateNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkingInput() {
    return this._privateNetworking;
  }

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // volume_encrypted - computed: false, optional: true, required: false
  private _volumeEncrypted?: boolean | cdktf.IResolvable; 
  public get volumeEncrypted() {
    return this.getBooleanAttribute('volume_encrypted');
  }
  public set volumeEncrypted(value: boolean | cdktf.IResolvable) {
    this._volumeEncrypted = value;
  }
  public resetVolumeEncrypted() {
    this._volumeEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeEncryptedInput() {
    return this._volumeEncrypted;
  }

  // volume_iops - computed: false, optional: true, required: false
  private _volumeIops?: number; 
  public get volumeIops() {
    return this.getNumberAttribute('volume_iops');
  }
  public set volumeIops(value: number) {
    this._volumeIops = value;
  }
  public resetVolumeIops() {
    this._volumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIopsInput() {
    return this._volumeIops;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_throughput - computed: false, optional: true, required: false
  private _volumeThroughput?: number; 
  public get volumeThroughput() {
    return this.getNumberAttribute('volume_throughput');
  }
  public set volumeThroughput(value: number) {
    this._volumeThroughput = value;
  }
  public resetVolumeThroughput() {
    this._volumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeThroughputInput() {
    return this._volumeThroughput;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // bottle_rocket - computed: false, optional: true, required: false
  private _bottleRocket = new EksClusterClusterConfigManagedNodegroupsBottleRocketList(this, "bottle_rocket", false);
  public get bottleRocket() {
    return this._bottleRocket;
  }
  public putBottleRocket(value: EksClusterClusterConfigManagedNodegroupsBottleRocket[] | cdktf.IResolvable) {
    this._bottleRocket.internalValue = value;
  }
  public resetBottleRocket() {
    this._bottleRocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottleRocketInput() {
    return this._bottleRocket.internalValue;
  }

  // iam - computed: false, optional: true, required: false
  private _iam = new EksClusterClusterConfigManagedNodegroupsIamList(this, "iam", false);
  public get iam() {
    return this._iam;
  }
  public putIam(value: EksClusterClusterConfigManagedNodegroupsIam[] | cdktf.IResolvable) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }

  // instance_selector - computed: false, optional: true, required: false
  private _instanceSelector = new EksClusterClusterConfigManagedNodegroupsInstanceSelectorList(this, "instance_selector", false);
  public get instanceSelector() {
    return this._instanceSelector;
  }
  public putInstanceSelector(value: EksClusterClusterConfigManagedNodegroupsInstanceSelector[] | cdktf.IResolvable) {
    this._instanceSelector.internalValue = value;
  }
  public resetInstanceSelector() {
    this._instanceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorInput() {
    return this._instanceSelector.internalValue;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new EksClusterClusterConfigManagedNodegroupsLaunchTemplateList(this, "launch_template", false);
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: EksClusterClusterConfigManagedNodegroupsLaunchTemplate[] | cdktf.IResolvable) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new EksClusterClusterConfigManagedNodegroupsPlacementList(this, "placement", false);
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: EksClusterClusterConfigManagedNodegroupsPlacement[] | cdktf.IResolvable) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new EksClusterClusterConfigManagedNodegroupsSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: EksClusterClusterConfigManagedNodegroupsSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new EksClusterClusterConfigManagedNodegroupsSshList(this, "ssh", false);
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: EksClusterClusterConfigManagedNodegroupsSsh[] | cdktf.IResolvable) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new EksClusterClusterConfigManagedNodegroupsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: EksClusterClusterConfigManagedNodegroupsTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // update_config - computed: false, optional: true, required: false
  private _updateConfig = new EksClusterClusterConfigManagedNodegroupsUpdateConfigList(this, "update_config", false);
  public get updateConfig() {
    return this._updateConfig;
  }
  public putUpdateConfig(value: EksClusterClusterConfigManagedNodegroupsUpdateConfig[] | cdktf.IResolvable) {
    this._updateConfig.internalValue = value;
  }
  public resetUpdateConfig() {
    this._updateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateConfigInput() {
    return this._updateConfig.internalValue;
  }
}

export class EksClusterClusterConfigManagedNodegroupsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigManagedNodegroups[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigManagedNodegroupsOutputReference {
    return new EksClusterClusterConfigManagedNodegroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigMetadata {
  /**
  * arbitrary metadata ignored by the vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#annotations EksCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * EKS Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name: string;
  /**
  * the AWS region hosting this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#region EksCluster#region}
  */
  readonly region: string;
  /**
  * used to tag AWS resources created by the vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Valid variants are: '1.16', '1.17', '1.18', '1.19', '1.20' (default), '1.21'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
}

export function eksClusterClusterConfigMetadataToTerraform(struct?: EksClusterClusterConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function eksClusterClusterConfigMetadataToHclTerraform(struct?: EksClusterClusterConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._name = undefined;
      this._region = undefined;
      this._tags = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._name = value.name;
      this._region = value.region;
      this._tags = value.tags;
      this._version = value.version;
    }
  }

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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class EksClusterClusterConfigMetadataList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigMetadata[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigMetadataOutputReference {
    return new EksClusterClusterConfigMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsAsgMetricsCollection {
  /**
  * of metrics collected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#granularity EksCluster#granularity}
  */
  readonly granularity?: string;
  /**
  * specifies a list of metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#metrics EksCluster#metrics}
  */
  readonly metrics?: string[];
}

export function eksClusterClusterConfigNodeGroupsAsgMetricsCollectionToTerraform(struct?: EksClusterClusterConfigNodeGroupsAsgMetricsCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    granularity: cdktf.stringToTerraform(struct!.granularity),
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
  }
}


export function eksClusterClusterConfigNodeGroupsAsgMetricsCollectionToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsAsgMetricsCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    granularity: {
      value: cdktf.stringToHclTerraform(struct!.granularity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsAsgMetricsCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsAsgMetricsCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._granularity !== undefined) {
      hasAnyValues = true;
      internalValueResult.granularity = this._granularity;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsAsgMetricsCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._granularity = undefined;
      this._metrics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._granularity = value.granularity;
      this._metrics = value.metrics;
    }
  }

  // granularity - computed: false, optional: true, required: false
  private _granularity?: string; 
  public get granularity() {
    return this.getStringAttribute('granularity');
  }
  public set granularity(value: string) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }
}

export class EksClusterClusterConfigNodeGroupsAsgMetricsCollectionList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsAsgMetricsCollection[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsAsgMetricsCollectionOutputReference {
    return new EksClusterClusterConfigNodeGroupsAsgMetricsCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsBottleRocket {
  /**
  * Enable admin container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enable_admin_container EksCluster#enable_admin_container}
  */
  readonly enableAdminContainer?: boolean | cdktf.IResolvable;
  /**
  * contains any bottlerocket settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#settings EksCluster#settings}
  */
  readonly settings?: string;
}

export function eksClusterClusterConfigNodeGroupsBottleRocketToTerraform(struct?: EksClusterClusterConfigNodeGroupsBottleRocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_admin_container: cdktf.booleanToTerraform(struct!.enableAdminContainer),
    settings: cdktf.stringToTerraform(struct!.settings),
  }
}


export function eksClusterClusterConfigNodeGroupsBottleRocketToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsBottleRocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_admin_container: {
      value: cdktf.booleanToHclTerraform(struct!.enableAdminContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    settings: {
      value: cdktf.stringToHclTerraform(struct!.settings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsBottleRocketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsBottleRocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAdminContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAdminContainer = this._enableAdminContainer;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsBottleRocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAdminContainer = undefined;
      this._settings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAdminContainer = value.enableAdminContainer;
      this._settings = value.settings;
    }
  }

  // enable_admin_container - computed: false, optional: true, required: false
  private _enableAdminContainer?: boolean | cdktf.IResolvable; 
  public get enableAdminContainer() {
    return this.getBooleanAttribute('enable_admin_container');
  }
  public set enableAdminContainer(value: boolean | cdktf.IResolvable) {
    this._enableAdminContainer = value;
  }
  public resetEnableAdminContainer() {
    this._enableAdminContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdminContainerInput() {
    return this._enableAdminContainer;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }
}

export class EksClusterClusterConfigNodeGroupsBottleRocketList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsBottleRocket[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsBottleRocketOutputReference {
    return new EksClusterClusterConfigNodeGroupsBottleRocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsIamAttachPolicyStatement {
  /**
  * Attach policy action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#action EksCluster#action}
  */
  readonly action?: string[];
  /**
  * Attach policy Statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#condition EksCluster#condition}
  */
  readonly condition?: string;
  /**
  * Attach policy effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#effect EksCluster#effect}
  */
  readonly effect?: string;
  /**
  * Attach policy NotAction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#not_action EksCluster#not_action}
  */
  readonly notAction?: string[];
  /**
  * Attach policy NotPrincipal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#not_principal EksCluster#not_principal}
  */
  readonly notPrincipal?: string;
  /**
  * Attach policy NotResource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#not_resource EksCluster#not_resource}
  */
  readonly notResource?: string[];
  /**
  * Attach policy principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#principal EksCluster#principal}
  */
  readonly principal?: string;
  /**
  * Attach policy resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#resource EksCluster#resource}
  */
  readonly resource?: string;
  /**
  * Sid of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#sid EksCluster#sid}
  */
  readonly sid?: string;
}

export function eksClusterClusterConfigNodeGroupsIamAttachPolicyStatementToTerraform(struct?: EksClusterClusterConfigNodeGroupsIamAttachPolicyStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.action),
    condition: cdktf.stringToTerraform(struct!.condition),
    effect: cdktf.stringToTerraform(struct!.effect),
    not_action: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notAction),
    not_principal: cdktf.stringToTerraform(struct!.notPrincipal),
    not_resource: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notResource),
    principal: cdktf.stringToTerraform(struct!.principal),
    resource: cdktf.stringToTerraform(struct!.resource),
    sid: cdktf.stringToTerraform(struct!.sid),
  }
}


export function eksClusterClusterConfigNodeGroupsIamAttachPolicyStatementToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsIamAttachPolicyStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.action),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_action: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notAction),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    not_principal: {
      value: cdktf.stringToHclTerraform(struct!.notPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_resource: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notResource),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sid: {
      value: cdktf.stringToHclTerraform(struct!.sid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsIamAttachPolicyStatementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsIamAttachPolicyStatement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._notAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAction = this._notAction;
    }
    if (this._notPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.notPrincipal = this._notPrincipal;
    }
    if (this._notResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.notResource = this._notResource;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._sid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sid = this._sid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsIamAttachPolicyStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._condition = undefined;
      this._effect = undefined;
      this._notAction = undefined;
      this._notPrincipal = undefined;
      this._notResource = undefined;
      this._principal = undefined;
      this._resource = undefined;
      this._sid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._condition = value.condition;
      this._effect = value.effect;
      this._notAction = value.notAction;
      this._notPrincipal = value.notPrincipal;
      this._notResource = value.notResource;
      this._principal = value.principal;
      this._resource = value.resource;
      this._sid = value.sid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string[]; 
  public get action() {
    return this.getListAttribute('action');
  }
  public set action(value: string[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // not_action - computed: false, optional: true, required: false
  private _notAction?: string[]; 
  public get notAction() {
    return this.getListAttribute('not_action');
  }
  public set notAction(value: string[]) {
    this._notAction = value;
  }
  public resetNotAction() {
    this._notAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notActionInput() {
    return this._notAction;
  }

  // not_principal - computed: false, optional: true, required: false
  private _notPrincipal?: string; 
  public get notPrincipal() {
    return this.getStringAttribute('not_principal');
  }
  public set notPrincipal(value: string) {
    this._notPrincipal = value;
  }
  public resetNotPrincipal() {
    this._notPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notPrincipalInput() {
    return this._notPrincipal;
  }

  // not_resource - computed: false, optional: true, required: false
  private _notResource?: string[]; 
  public get notResource() {
    return this.getListAttribute('not_resource');
  }
  public set notResource(value: string[]) {
    this._notResource = value;
  }
  public resetNotResource() {
    this._notResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notResourceInput() {
    return this._notResource;
  }

  // principal - computed: false, optional: true, required: false
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  public resetPrincipal() {
    this._principal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // sid - computed: false, optional: true, required: false
  private _sid?: string; 
  public get sid() {
    return this.getStringAttribute('sid');
  }
  public set sid(value: string) {
    this._sid = value;
  }
  public resetSid() {
    this._sid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidInput() {
    return this._sid;
  }
}

export class EksClusterClusterConfigNodeGroupsIamAttachPolicyStatementList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsIamAttachPolicyStatement[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsIamAttachPolicyStatementOutputReference {
    return new EksClusterClusterConfigNodeGroupsIamAttachPolicyStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsIamAttachPolicy {
  /**
  * Attach policy id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Attach policy version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#statement EksCluster#statement}
  */
  readonly statement?: EksClusterClusterConfigNodeGroupsIamAttachPolicyStatement[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigNodeGroupsIamAttachPolicyToTerraform(struct?: EksClusterClusterConfigNodeGroupsIamAttachPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.stringToTerraform(struct!.version),
    statement: cdktf.listMapper(eksClusterClusterConfigNodeGroupsIamAttachPolicyStatementToTerraform, true)(struct!.statement),
  }
}


export function eksClusterClusterConfigNodeGroupsIamAttachPolicyToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsIamAttachPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statement: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsIamAttachPolicyStatementToHclTerraform, true)(struct!.statement),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsIamAttachPolicyStatementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsIamAttachPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsIamAttachPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._statement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsIamAttachPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._version = undefined;
      this._statement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._version = value.version;
      this._statement.internalValue = value.statement;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // statement - computed: false, optional: true, required: false
  private _statement = new EksClusterClusterConfigNodeGroupsIamAttachPolicyStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: EksClusterClusterConfigNodeGroupsIamAttachPolicyStatement[] | cdktf.IResolvable) {
    this._statement.internalValue = value;
  }
  public resetStatement() {
    this._statement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }
}

export class EksClusterClusterConfigNodeGroupsIamAttachPolicyList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsIamAttachPolicy[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsIamAttachPolicyOutputReference {
    return new EksClusterClusterConfigNodeGroupsIamAttachPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPolicies {
  /**
  * enables access to ALB Ingress controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#alb_ingress EksCluster#alb_ingress}
  */
  readonly albIngress?: boolean | cdktf.IResolvable;
  /**
  * enables full access to AppMesh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#app_mesh EksCluster#app_mesh}
  */
  readonly appMesh?: boolean | cdktf.IResolvable;
  /**
  * enables full access to AppMesh Preview
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#app_mesh_review EksCluster#app_mesh_review}
  */
  readonly appMeshReview?: boolean | cdktf.IResolvable;
  /**
  * enables IAM policy for cluster-autoscaler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#auto_scaler EksCluster#auto_scaler}
  */
  readonly autoScaler?: boolean | cdktf.IResolvable;
  /**
  * enables the ability to add records to Route 53 in order to solve the DNS01 challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cert_manager EksCluster#cert_manager}
  */
  readonly certManager?: boolean | cdktf.IResolvable;
  /**
  * enables access to cloud watch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cloud_watch EksCluster#cloud_watch}
  */
  readonly cloudWatch?: boolean | cdktf.IResolvable;
  /**
  * enables the new EBS CSI (Elastic Block Store Container Storage Interface) driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ebs EksCluster#ebs}
  */
  readonly ebs?: boolean | cdktf.IResolvable;
  /**
  * enables full access to EFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#efs EksCluster#efs}
  */
  readonly efs?: boolean | cdktf.IResolvable;
  /**
  * adds the external-dns project policies for Amazon Route 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#external_dns EksCluster#external_dns}
  */
  readonly externalDns?: boolean | cdktf.IResolvable;
  /**
  * enables full access to FSX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#fsx EksCluster#fsx}
  */
  readonly fsx?: boolean | cdktf.IResolvable;
  /**
  * allows for full ECR (Elastic Container Registry) access. This is useful for building, for example, a CI server that needs to push images to ECR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#image_builder EksCluster#image_builder}
  */
  readonly imageBuilder?: boolean | cdktf.IResolvable;
  /**
  * enables access to XRay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#xray EksCluster#xray}
  */
  readonly xray?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesToTerraform(struct?: EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alb_ingress: cdktf.booleanToTerraform(struct!.albIngress),
    app_mesh: cdktf.booleanToTerraform(struct!.appMesh),
    app_mesh_review: cdktf.booleanToTerraform(struct!.appMeshReview),
    auto_scaler: cdktf.booleanToTerraform(struct!.autoScaler),
    cert_manager: cdktf.booleanToTerraform(struct!.certManager),
    cloud_watch: cdktf.booleanToTerraform(struct!.cloudWatch),
    ebs: cdktf.booleanToTerraform(struct!.ebs),
    efs: cdktf.booleanToTerraform(struct!.efs),
    external_dns: cdktf.booleanToTerraform(struct!.externalDns),
    fsx: cdktf.booleanToTerraform(struct!.fsx),
    image_builder: cdktf.booleanToTerraform(struct!.imageBuilder),
    xray: cdktf.booleanToTerraform(struct!.xray),
  }
}


export function eksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alb_ingress: {
      value: cdktf.booleanToHclTerraform(struct!.albIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_mesh: {
      value: cdktf.booleanToHclTerraform(struct!.appMesh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_mesh_review: {
      value: cdktf.booleanToHclTerraform(struct!.appMeshReview),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_scaler: {
      value: cdktf.booleanToHclTerraform(struct!.autoScaler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cert_manager: {
      value: cdktf.booleanToHclTerraform(struct!.certManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_watch: {
      value: cdktf.booleanToHclTerraform(struct!.cloudWatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs: {
      value: cdktf.booleanToHclTerraform(struct!.ebs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    efs: {
      value: cdktf.booleanToHclTerraform(struct!.efs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_dns: {
      value: cdktf.booleanToHclTerraform(struct!.externalDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fsx: {
      value: cdktf.booleanToHclTerraform(struct!.fsx),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_builder: {
      value: cdktf.booleanToHclTerraform(struct!.imageBuilder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xray: {
      value: cdktf.booleanToHclTerraform(struct!.xray),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._albIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.albIngress = this._albIngress;
    }
    if (this._appMesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.appMesh = this._appMesh;
    }
    if (this._appMeshReview !== undefined) {
      hasAnyValues = true;
      internalValueResult.appMeshReview = this._appMeshReview;
    }
    if (this._autoScaler !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaler = this._autoScaler;
    }
    if (this._certManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.certManager = this._certManager;
    }
    if (this._cloudWatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatch = this._cloudWatch;
    }
    if (this._ebs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebs = this._ebs;
    }
    if (this._efs !== undefined) {
      hasAnyValues = true;
      internalValueResult.efs = this._efs;
    }
    if (this._externalDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDns = this._externalDns;
    }
    if (this._fsx !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsx = this._fsx;
    }
    if (this._imageBuilder !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageBuilder = this._imageBuilder;
    }
    if (this._xray !== undefined) {
      hasAnyValues = true;
      internalValueResult.xray = this._xray;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._albIngress = undefined;
      this._appMesh = undefined;
      this._appMeshReview = undefined;
      this._autoScaler = undefined;
      this._certManager = undefined;
      this._cloudWatch = undefined;
      this._ebs = undefined;
      this._efs = undefined;
      this._externalDns = undefined;
      this._fsx = undefined;
      this._imageBuilder = undefined;
      this._xray = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._albIngress = value.albIngress;
      this._appMesh = value.appMesh;
      this._appMeshReview = value.appMeshReview;
      this._autoScaler = value.autoScaler;
      this._certManager = value.certManager;
      this._cloudWatch = value.cloudWatch;
      this._ebs = value.ebs;
      this._efs = value.efs;
      this._externalDns = value.externalDns;
      this._fsx = value.fsx;
      this._imageBuilder = value.imageBuilder;
      this._xray = value.xray;
    }
  }

  // alb_ingress - computed: false, optional: true, required: false
  private _albIngress?: boolean | cdktf.IResolvable; 
  public get albIngress() {
    return this.getBooleanAttribute('alb_ingress');
  }
  public set albIngress(value: boolean | cdktf.IResolvable) {
    this._albIngress = value;
  }
  public resetAlbIngress() {
    this._albIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albIngressInput() {
    return this._albIngress;
  }

  // app_mesh - computed: false, optional: true, required: false
  private _appMesh?: boolean | cdktf.IResolvable; 
  public get appMesh() {
    return this.getBooleanAttribute('app_mesh');
  }
  public set appMesh(value: boolean | cdktf.IResolvable) {
    this._appMesh = value;
  }
  public resetAppMesh() {
    this._appMesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appMeshInput() {
    return this._appMesh;
  }

  // app_mesh_review - computed: false, optional: true, required: false
  private _appMeshReview?: boolean | cdktf.IResolvable; 
  public get appMeshReview() {
    return this.getBooleanAttribute('app_mesh_review');
  }
  public set appMeshReview(value: boolean | cdktf.IResolvable) {
    this._appMeshReview = value;
  }
  public resetAppMeshReview() {
    this._appMeshReview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appMeshReviewInput() {
    return this._appMeshReview;
  }

  // auto_scaler - computed: false, optional: true, required: false
  private _autoScaler?: boolean | cdktf.IResolvable; 
  public get autoScaler() {
    return this.getBooleanAttribute('auto_scaler');
  }
  public set autoScaler(value: boolean | cdktf.IResolvable) {
    this._autoScaler = value;
  }
  public resetAutoScaler() {
    this._autoScaler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerInput() {
    return this._autoScaler;
  }

  // cert_manager - computed: false, optional: true, required: false
  private _certManager?: boolean | cdktf.IResolvable; 
  public get certManager() {
    return this.getBooleanAttribute('cert_manager');
  }
  public set certManager(value: boolean | cdktf.IResolvable) {
    this._certManager = value;
  }
  public resetCertManager() {
    this._certManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certManagerInput() {
    return this._certManager;
  }

  // cloud_watch - computed: false, optional: true, required: false
  private _cloudWatch?: boolean | cdktf.IResolvable; 
  public get cloudWatch() {
    return this.getBooleanAttribute('cloud_watch');
  }
  public set cloudWatch(value: boolean | cdktf.IResolvable) {
    this._cloudWatch = value;
  }
  public resetCloudWatch() {
    this._cloudWatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchInput() {
    return this._cloudWatch;
  }

  // ebs - computed: false, optional: true, required: false
  private _ebs?: boolean | cdktf.IResolvable; 
  public get ebs() {
    return this.getBooleanAttribute('ebs');
  }
  public set ebs(value: boolean | cdktf.IResolvable) {
    this._ebs = value;
  }
  public resetEbs() {
    this._ebs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsInput() {
    return this._ebs;
  }

  // efs - computed: false, optional: true, required: false
  private _efs?: boolean | cdktf.IResolvable; 
  public get efs() {
    return this.getBooleanAttribute('efs');
  }
  public set efs(value: boolean | cdktf.IResolvable) {
    this._efs = value;
  }
  public resetEfs() {
    this._efs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efsInput() {
    return this._efs;
  }

  // external_dns - computed: false, optional: true, required: false
  private _externalDns?: boolean | cdktf.IResolvable; 
  public get externalDns() {
    return this.getBooleanAttribute('external_dns');
  }
  public set externalDns(value: boolean | cdktf.IResolvable) {
    this._externalDns = value;
  }
  public resetExternalDns() {
    this._externalDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDnsInput() {
    return this._externalDns;
  }

  // fsx - computed: false, optional: true, required: false
  private _fsx?: boolean | cdktf.IResolvable; 
  public get fsx() {
    return this.getBooleanAttribute('fsx');
  }
  public set fsx(value: boolean | cdktf.IResolvable) {
    this._fsx = value;
  }
  public resetFsx() {
    this._fsx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxInput() {
    return this._fsx;
  }

  // image_builder - computed: false, optional: true, required: false
  private _imageBuilder?: boolean | cdktf.IResolvable; 
  public get imageBuilder() {
    return this.getBooleanAttribute('image_builder');
  }
  public set imageBuilder(value: boolean | cdktf.IResolvable) {
    this._imageBuilder = value;
  }
  public resetImageBuilder() {
    this._imageBuilder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBuilderInput() {
    return this._imageBuilder;
  }

  // xray - computed: false, optional: true, required: false
  private _xray?: boolean | cdktf.IResolvable; 
  public get xray() {
    return this.getBooleanAttribute('xray');
  }
  public set xray(value: boolean | cdktf.IResolvable) {
    this._xray = value;
  }
  public resetXray() {
    this._xray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayInput() {
    return this._xray;
  }
}

export class EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPolicies[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesOutputReference {
    return new EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsIam {
  /**
  * attach polciy ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy_arns EksCluster#attach_policy_arns}
  */
  readonly attachPolicyArns?: string[];
  /**
  * attach policy in json string format 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy_v2 EksCluster#attach_policy_v2}
  */
  readonly attachPolicyV2?: string;
  /**
  * instance profile ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_profile_arn EksCluster#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * instance role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_role_arn EksCluster#instance_role_arn}
  */
  readonly instanceRoleArn?: string;
  /**
  * instance role Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_role_name EksCluster#instance_role_name}
  */
  readonly instanceRoleName?: string;
  /**
  * instance role permissions boundary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_role_permission_boundary EksCluster#instance_role_permission_boundary}
  */
  readonly instanceRolePermissionBoundary?: string;
  /**
  * attach_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_policy EksCluster#attach_policy}
  */
  readonly attachPolicy?: EksClusterClusterConfigNodeGroupsIamAttachPolicy[] | cdktf.IResolvable;
  /**
  * iam_node_group_with_addon_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#iam_node_group_with_addon_policies EksCluster#iam_node_group_with_addon_policies}
  */
  readonly iamNodeGroupWithAddonPolicies?: EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPolicies[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigNodeGroupsIamToTerraform(struct?: EksClusterClusterConfigNodeGroupsIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attachPolicyArns),
    attach_policy_v2: cdktf.stringToTerraform(struct!.attachPolicyV2),
    instance_profile_arn: cdktf.stringToTerraform(struct!.instanceProfileArn),
    instance_role_arn: cdktf.stringToTerraform(struct!.instanceRoleArn),
    instance_role_name: cdktf.stringToTerraform(struct!.instanceRoleName),
    instance_role_permission_boundary: cdktf.stringToTerraform(struct!.instanceRolePermissionBoundary),
    attach_policy: cdktf.listMapper(eksClusterClusterConfigNodeGroupsIamAttachPolicyToTerraform, true)(struct!.attachPolicy),
    iam_node_group_with_addon_policies: cdktf.listMapper(eksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesToTerraform, true)(struct!.iamNodeGroupWithAddonPolicies),
  }
}


export function eksClusterClusterConfigNodeGroupsIamToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsIam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_policy_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attachPolicyArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    attach_policy_v2: {
      value: cdktf.stringToHclTerraform(struct!.attachPolicyV2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_profile_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceProfileArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.instanceRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_role_permission_boundary: {
      value: cdktf.stringToHclTerraform(struct!.instanceRolePermissionBoundary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attach_policy: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsIamAttachPolicyToHclTerraform, true)(struct!.attachPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsIamAttachPolicyList",
    },
    iam_node_group_with_addon_policies: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesToHclTerraform, true)(struct!.iamNodeGroupWithAddonPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsIamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsIam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachPolicyArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicyArns = this._attachPolicyArns;
    }
    if (this._attachPolicyV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicyV2 = this._attachPolicyV2;
    }
    if (this._instanceProfileArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceProfileArn = this._instanceProfileArn;
    }
    if (this._instanceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRoleArn = this._instanceRoleArn;
    }
    if (this._instanceRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRoleName = this._instanceRoleName;
    }
    if (this._instanceRolePermissionBoundary !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRolePermissionBoundary = this._instanceRolePermissionBoundary;
    }
    if (this._attachPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachPolicy = this._attachPolicy?.internalValue;
    }
    if (this._iamNodeGroupWithAddonPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamNodeGroupWithAddonPolicies = this._iamNodeGroupWithAddonPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsIam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachPolicyArns = undefined;
      this._attachPolicyV2 = undefined;
      this._instanceProfileArn = undefined;
      this._instanceRoleArn = undefined;
      this._instanceRoleName = undefined;
      this._instanceRolePermissionBoundary = undefined;
      this._attachPolicy.internalValue = undefined;
      this._iamNodeGroupWithAddonPolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachPolicyArns = value.attachPolicyArns;
      this._attachPolicyV2 = value.attachPolicyV2;
      this._instanceProfileArn = value.instanceProfileArn;
      this._instanceRoleArn = value.instanceRoleArn;
      this._instanceRoleName = value.instanceRoleName;
      this._instanceRolePermissionBoundary = value.instanceRolePermissionBoundary;
      this._attachPolicy.internalValue = value.attachPolicy;
      this._iamNodeGroupWithAddonPolicies.internalValue = value.iamNodeGroupWithAddonPolicies;
    }
  }

  // attach_policy_arns - computed: false, optional: true, required: false
  private _attachPolicyArns?: string[]; 
  public get attachPolicyArns() {
    return this.getListAttribute('attach_policy_arns');
  }
  public set attachPolicyArns(value: string[]) {
    this._attachPolicyArns = value;
  }
  public resetAttachPolicyArns() {
    this._attachPolicyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyArnsInput() {
    return this._attachPolicyArns;
  }

  // attach_policy_v2 - computed: false, optional: true, required: false
  private _attachPolicyV2?: string; 
  public get attachPolicyV2() {
    return this.getStringAttribute('attach_policy_v2');
  }
  public set attachPolicyV2(value: string) {
    this._attachPolicyV2 = value;
  }
  public resetAttachPolicyV2() {
    this._attachPolicyV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyV2Input() {
    return this._attachPolicyV2;
  }

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // instance_role_arn - computed: false, optional: true, required: false
  private _instanceRoleArn?: string; 
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }
  public set instanceRoleArn(value: string) {
    this._instanceRoleArn = value;
  }
  public resetInstanceRoleArn() {
    this._instanceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleArnInput() {
    return this._instanceRoleArn;
  }

  // instance_role_name - computed: false, optional: true, required: false
  private _instanceRoleName?: string; 
  public get instanceRoleName() {
    return this.getStringAttribute('instance_role_name');
  }
  public set instanceRoleName(value: string) {
    this._instanceRoleName = value;
  }
  public resetInstanceRoleName() {
    this._instanceRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleNameInput() {
    return this._instanceRoleName;
  }

  // instance_role_permission_boundary - computed: false, optional: true, required: false
  private _instanceRolePermissionBoundary?: string; 
  public get instanceRolePermissionBoundary() {
    return this.getStringAttribute('instance_role_permission_boundary');
  }
  public set instanceRolePermissionBoundary(value: string) {
    this._instanceRolePermissionBoundary = value;
  }
  public resetInstanceRolePermissionBoundary() {
    this._instanceRolePermissionBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRolePermissionBoundaryInput() {
    return this._instanceRolePermissionBoundary;
  }

  // attach_policy - computed: false, optional: true, required: false
  private _attachPolicy = new EksClusterClusterConfigNodeGroupsIamAttachPolicyList(this, "attach_policy", false);
  public get attachPolicy() {
    return this._attachPolicy;
  }
  public putAttachPolicy(value: EksClusterClusterConfigNodeGroupsIamAttachPolicy[] | cdktf.IResolvable) {
    this._attachPolicy.internalValue = value;
  }
  public resetAttachPolicy() {
    this._attachPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachPolicyInput() {
    return this._attachPolicy.internalValue;
  }

  // iam_node_group_with_addon_policies - computed: false, optional: true, required: false
  private _iamNodeGroupWithAddonPolicies = new EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPoliciesList(this, "iam_node_group_with_addon_policies", false);
  public get iamNodeGroupWithAddonPolicies() {
    return this._iamNodeGroupWithAddonPolicies;
  }
  public putIamNodeGroupWithAddonPolicies(value: EksClusterClusterConfigNodeGroupsIamIamNodeGroupWithAddonPolicies[] | cdktf.IResolvable) {
    this._iamNodeGroupWithAddonPolicies.internalValue = value;
  }
  public resetIamNodeGroupWithAddonPolicies() {
    this._iamNodeGroupWithAddonPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamNodeGroupWithAddonPoliciesInput() {
    return this._iamNodeGroupWithAddonPolicies.internalValue;
  }
}

export class EksClusterClusterConfigNodeGroupsIamList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsIam[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsIamOutputReference {
    return new EksClusterClusterConfigNodeGroupsIamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsInstanceSelector {
  /**
  * CPU Architecture of the EC2 instance type. Valid variants are: 'x86_64' 'amd64' 'arm64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cpu_architecture EksCluster#cpu_architecture}
  */
  readonly cpuArchitecture?: string;
  /**
  * specifies the number of GPUs. It can be set to 0 to select non-GPU instance types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#gpus EksCluster#gpus}
  */
  readonly gpus?: number;
  /**
  * specifies the memory The unit defaults to GiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#memory EksCluster#memory}
  */
  readonly memory?: string;
  /**
  * specifies the number of vCPUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#vcpus EksCluster#vcpus}
  */
  readonly vcpus?: number;
}

export function eksClusterClusterConfigNodeGroupsInstanceSelectorToTerraform(struct?: EksClusterClusterConfigNodeGroupsInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_architecture: cdktf.stringToTerraform(struct!.cpuArchitecture),
    gpus: cdktf.numberToTerraform(struct!.gpus),
    memory: cdktf.stringToTerraform(struct!.memory),
    vcpus: cdktf.numberToTerraform(struct!.vcpus),
  }
}


export function eksClusterClusterConfigNodeGroupsInstanceSelectorToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsInstanceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_architecture: {
      value: cdktf.stringToHclTerraform(struct!.cpuArchitecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpus: {
      value: cdktf.numberToHclTerraform(struct!.gpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpus: {
      value: cdktf.numberToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsInstanceSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsInstanceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuArchitecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuArchitecture = this._cpuArchitecture;
    }
    if (this._gpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpus = this._gpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsInstanceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuArchitecture = undefined;
      this._gpus = undefined;
      this._memory = undefined;
      this._vcpus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuArchitecture = value.cpuArchitecture;
      this._gpus = value.gpus;
      this._memory = value.memory;
      this._vcpus = value.vcpus;
    }
  }

  // cpu_architecture - computed: false, optional: true, required: false
  private _cpuArchitecture?: string; 
  public get cpuArchitecture() {
    return this.getStringAttribute('cpu_architecture');
  }
  public set cpuArchitecture(value: string) {
    this._cpuArchitecture = value;
  }
  public resetCpuArchitecture() {
    this._cpuArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuArchitectureInput() {
    return this._cpuArchitecture;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: number; 
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }
  public set gpus(value: number) {
    this._gpus = value;
  }
  public resetGpus() {
    this._gpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // vcpus - computed: false, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }
}

export class EksClusterClusterConfigNodeGroupsInstanceSelectorList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsInstanceSelector[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsInstanceSelectorOutputReference {
    return new EksClusterClusterConfigNodeGroupsInstanceSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsInstancesDistribution {
  /**
  * Enable capacity rebalancing for spot instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#capacity_rebalance EksCluster#capacity_rebalance}
  */
  readonly capacityRebalance?: boolean | cdktf.IResolvable;
  /**
  * Enable admin container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_types EksCluster#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Maximum bid price in USD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#max_price EksCluster#max_price}
  */
  readonly maxPrice?: number;
  /**
  * base number of on-demand instances (non-negative)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#on_demand_base_capacity EksCluster#on_demand_base_capacity}
  */
  readonly onDemandBaseCapacity?: number;
  /**
  * Range [0-100]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#on_demand_percentage_above_base_capacity EksCluster#on_demand_percentage_above_base_capacity}
  */
  readonly onDemandPercentageAboveBaseCapacity?: number;
  /**
  * allocation strategy for spot instances. Valid values are capacity-optimized and lowest-price
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#spot_allocation_strategy EksCluster#spot_allocation_strategy}
  */
  readonly spotAllocationStrategy?: string;
  /**
  * Range [0-20]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#spot_instance_pools EksCluster#spot_instance_pools}
  */
  readonly spotInstancePools?: number;
}

export function eksClusterClusterConfigNodeGroupsInstancesDistributionToTerraform(struct?: EksClusterClusterConfigNodeGroupsInstancesDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_rebalance: cdktf.booleanToTerraform(struct!.capacityRebalance),
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
    max_price: cdktf.numberToTerraform(struct!.maxPrice),
    on_demand_base_capacity: cdktf.numberToTerraform(struct!.onDemandBaseCapacity),
    on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(struct!.onDemandPercentageAboveBaseCapacity),
    spot_allocation_strategy: cdktf.stringToTerraform(struct!.spotAllocationStrategy),
    spot_instance_pools: cdktf.numberToTerraform(struct!.spotInstancePools),
  }
}


export function eksClusterClusterConfigNodeGroupsInstancesDistributionToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsInstancesDistribution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_rebalance: {
      value: cdktf.booleanToHclTerraform(struct!.capacityRebalance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_price: {
      value: cdktf.numberToHclTerraform(struct!.maxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_demand_base_capacity: {
      value: cdktf.numberToHclTerraform(struct!.onDemandBaseCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_demand_percentage_above_base_capacity: {
      value: cdktf.numberToHclTerraform(struct!.onDemandPercentageAboveBaseCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.spotAllocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_instance_pools: {
      value: cdktf.numberToHclTerraform(struct!.spotInstancePools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsInstancesDistributionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsInstancesDistribution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityRebalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityRebalance = this._capacityRebalance;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._maxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrice = this._maxPrice;
    }
    if (this._onDemandBaseCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandBaseCapacity = this._onDemandBaseCapacity;
    }
    if (this._onDemandPercentageAboveBaseCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandPercentageAboveBaseCapacity = this._onDemandPercentageAboveBaseCapacity;
    }
    if (this._spotAllocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotAllocationStrategy = this._spotAllocationStrategy;
    }
    if (this._spotInstancePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstancePools = this._spotInstancePools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsInstancesDistribution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityRebalance = undefined;
      this._instanceTypes = undefined;
      this._maxPrice = undefined;
      this._onDemandBaseCapacity = undefined;
      this._onDemandPercentageAboveBaseCapacity = undefined;
      this._spotAllocationStrategy = undefined;
      this._spotInstancePools = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityRebalance = value.capacityRebalance;
      this._instanceTypes = value.instanceTypes;
      this._maxPrice = value.maxPrice;
      this._onDemandBaseCapacity = value.onDemandBaseCapacity;
      this._onDemandPercentageAboveBaseCapacity = value.onDemandPercentageAboveBaseCapacity;
      this._spotAllocationStrategy = value.spotAllocationStrategy;
      this._spotInstancePools = value.spotInstancePools;
    }
  }

  // capacity_rebalance - computed: false, optional: true, required: false
  private _capacityRebalance?: boolean | cdktf.IResolvable; 
  public get capacityRebalance() {
    return this.getBooleanAttribute('capacity_rebalance');
  }
  public set capacityRebalance(value: boolean | cdktf.IResolvable) {
    this._capacityRebalance = value;
  }
  public resetCapacityRebalance() {
    this._capacityRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityRebalanceInput() {
    return this._capacityRebalance;
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // max_price - computed: false, optional: true, required: false
  private _maxPrice?: number; 
  public get maxPrice() {
    return this.getNumberAttribute('max_price');
  }
  public set maxPrice(value: number) {
    this._maxPrice = value;
  }
  public resetMaxPrice() {
    this._maxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // on_demand_base_capacity - computed: false, optional: true, required: false
  private _onDemandBaseCapacity?: number; 
  public get onDemandBaseCapacity() {
    return this.getNumberAttribute('on_demand_base_capacity');
  }
  public set onDemandBaseCapacity(value: number) {
    this._onDemandBaseCapacity = value;
  }
  public resetOnDemandBaseCapacity() {
    this._onDemandBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandBaseCapacityInput() {
    return this._onDemandBaseCapacity;
  }

  // on_demand_percentage_above_base_capacity - computed: false, optional: true, required: false
  private _onDemandPercentageAboveBaseCapacity?: number; 
  public get onDemandPercentageAboveBaseCapacity() {
    return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
  }
  public set onDemandPercentageAboveBaseCapacity(value: number) {
    this._onDemandPercentageAboveBaseCapacity = value;
  }
  public resetOnDemandPercentageAboveBaseCapacity() {
    this._onDemandPercentageAboveBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandPercentageAboveBaseCapacityInput() {
    return this._onDemandPercentageAboveBaseCapacity;
  }

  // spot_allocation_strategy - computed: false, optional: true, required: false
  private _spotAllocationStrategy?: string; 
  public get spotAllocationStrategy() {
    return this.getStringAttribute('spot_allocation_strategy');
  }
  public set spotAllocationStrategy(value: string) {
    this._spotAllocationStrategy = value;
  }
  public resetSpotAllocationStrategy() {
    this._spotAllocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotAllocationStrategyInput() {
    return this._spotAllocationStrategy;
  }

  // spot_instance_pools - computed: false, optional: true, required: false
  private _spotInstancePools?: number; 
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }
  public set spotInstancePools(value: number) {
    this._spotInstancePools = value;
  }
  public resetSpotInstancePools() {
    this._spotInstancePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancePoolsInput() {
    return this._spotInstancePools;
  }
}

export class EksClusterClusterConfigNodeGroupsInstancesDistributionList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsInstancesDistribution[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsInstancesDistributionOutputReference {
    return new EksClusterClusterConfigNodeGroupsInstancesDistributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsKubeletExtraConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#eviction_hard EksCluster#eviction_hard}
  */
  readonly evictionHard?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#feature_gates EksCluster#feature_gates}
  */
  readonly featureGates?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#kube_reserved EksCluster#kube_reserved}
  */
  readonly kubeReserved?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#kube_reserved_cgroup EksCluster#kube_reserved_cgroup}
  */
  readonly kubeReservedCgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#system_reserved EksCluster#system_reserved}
  */
  readonly systemReserved?: { [key: string]: string };
}

export function eksClusterClusterConfigNodeGroupsKubeletExtraConfigToTerraform(struct?: EksClusterClusterConfigNodeGroupsKubeletExtraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eviction_hard: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.evictionHard),
    feature_gates: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.featureGates),
    kube_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubeReserved),
    kube_reserved_cgroup: cdktf.stringToTerraform(struct!.kubeReservedCgroup),
    system_reserved: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemReserved),
  }
}


export function eksClusterClusterConfigNodeGroupsKubeletExtraConfigToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsKubeletExtraConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eviction_hard: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.evictionHard),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    feature_gates: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.featureGates),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kube_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubeReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kube_reserved_cgroup: {
      value: cdktf.stringToHclTerraform(struct!.kubeReservedCgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_reserved: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemReserved),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsKubeletExtraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsKubeletExtraConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evictionHard !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionHard = this._evictionHard;
    }
    if (this._featureGates !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates;
    }
    if (this._kubeReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeReserved = this._kubeReserved;
    }
    if (this._kubeReservedCgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeReservedCgroup = this._kubeReservedCgroup;
    }
    if (this._systemReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReserved = this._systemReserved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsKubeletExtraConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evictionHard = undefined;
      this._featureGates = undefined;
      this._kubeReserved = undefined;
      this._kubeReservedCgroup = undefined;
      this._systemReserved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evictionHard = value.evictionHard;
      this._featureGates = value.featureGates;
      this._kubeReserved = value.kubeReserved;
      this._kubeReservedCgroup = value.kubeReservedCgroup;
      this._systemReserved = value.systemReserved;
    }
  }

  // eviction_hard - computed: false, optional: true, required: false
  private _evictionHard?: { [key: string]: string }; 
  public get evictionHard() {
    return this.getStringMapAttribute('eviction_hard');
  }
  public set evictionHard(value: { [key: string]: string }) {
    this._evictionHard = value;
  }
  public resetEvictionHard() {
    this._evictionHard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionHardInput() {
    return this._evictionHard;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: { [key: string]: string }; 
  public get featureGates() {
    return this.getStringMapAttribute('feature_gates');
  }
  public set featureGates(value: { [key: string]: string }) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
  }

  // kube_reserved - computed: false, optional: true, required: false
  private _kubeReserved?: { [key: string]: string }; 
  public get kubeReserved() {
    return this.getStringMapAttribute('kube_reserved');
  }
  public set kubeReserved(value: { [key: string]: string }) {
    this._kubeReserved = value;
  }
  public resetKubeReserved() {
    this._kubeReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeReservedInput() {
    return this._kubeReserved;
  }

  // kube_reserved_cgroup - computed: false, optional: true, required: false
  private _kubeReservedCgroup?: string; 
  public get kubeReservedCgroup() {
    return this.getStringAttribute('kube_reserved_cgroup');
  }
  public set kubeReservedCgroup(value: string) {
    this._kubeReservedCgroup = value;
  }
  public resetKubeReservedCgroup() {
    this._kubeReservedCgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeReservedCgroupInput() {
    return this._kubeReservedCgroup;
  }

  // system_reserved - computed: false, optional: true, required: false
  private _systemReserved?: { [key: string]: string }; 
  public get systemReserved() {
    return this.getStringMapAttribute('system_reserved');
  }
  public set systemReserved(value: { [key: string]: string }) {
    this._systemReserved = value;
  }
  public resetSystemReserved() {
    this._systemReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReservedInput() {
    return this._systemReserved;
  }
}

export class EksClusterClusterConfigNodeGroupsKubeletExtraConfigList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsKubeletExtraConfig[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsKubeletExtraConfigOutputReference {
    return new EksClusterClusterConfigNodeGroupsKubeletExtraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsPlacement {
  /**
  * placement group name 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#group EksCluster#group}
  */
  readonly group?: string;
}

export function eksClusterClusterConfigNodeGroupsPlacementToTerraform(struct?: EksClusterClusterConfigNodeGroupsPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
  }
}


export function eksClusterClusterConfigNodeGroupsPlacementToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsPlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsPlacementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsPlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsPlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}

export class EksClusterClusterConfigNodeGroupsPlacementList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsPlacement[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsPlacementOutputReference {
    return new EksClusterClusterConfigNodeGroupsPlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsSecurityGroups {
  /**
  * attaches additional security groups to the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#attach_ids EksCluster#attach_ids}
  */
  readonly attachIds?: string[];
  /**
  * attach a security group local to this nodegroup Not supported for managed nodegroups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#with_local EksCluster#with_local}
  */
  readonly withLocal?: boolean | cdktf.IResolvable;
  /**
  * attach the security group shared among all nodegroups in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#with_shared EksCluster#with_shared}
  */
  readonly withShared?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigNodeGroupsSecurityGroupsToTerraform(struct?: EksClusterClusterConfigNodeGroupsSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attachIds),
    with_local: cdktf.booleanToTerraform(struct!.withLocal),
    with_shared: cdktf.booleanToTerraform(struct!.withShared),
  }
}


export function eksClusterClusterConfigNodeGroupsSecurityGroupsToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attachIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    with_local: {
      value: cdktf.booleanToHclTerraform(struct!.withLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    with_shared: {
      value: cdktf.booleanToHclTerraform(struct!.withShared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachIds = this._attachIds;
    }
    if (this._withLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.withLocal = this._withLocal;
    }
    if (this._withShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.withShared = this._withShared;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachIds = undefined;
      this._withLocal = undefined;
      this._withShared = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachIds = value.attachIds;
      this._withLocal = value.withLocal;
      this._withShared = value.withShared;
    }
  }

  // attach_ids - computed: false, optional: true, required: false
  private _attachIds?: string[]; 
  public get attachIds() {
    return this.getListAttribute('attach_ids');
  }
  public set attachIds(value: string[]) {
    this._attachIds = value;
  }
  public resetAttachIds() {
    this._attachIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachIdsInput() {
    return this._attachIds;
  }

  // with_local - computed: false, optional: true, required: false
  private _withLocal?: boolean | cdktf.IResolvable; 
  public get withLocal() {
    return this.getBooleanAttribute('with_local');
  }
  public set withLocal(value: boolean | cdktf.IResolvable) {
    this._withLocal = value;
  }
  public resetWithLocal() {
    this._withLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withLocalInput() {
    return this._withLocal;
  }

  // with_shared - computed: false, optional: true, required: false
  private _withShared?: boolean | cdktf.IResolvable; 
  public get withShared() {
    return this.getBooleanAttribute('with_shared');
  }
  public set withShared(value: boolean | cdktf.IResolvable) {
    this._withShared = value;
  }
  public resetWithShared() {
    this._withShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSharedInput() {
    return this._withShared;
  }
}

export class EksClusterClusterConfigNodeGroupsSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsSecurityGroupsOutputReference {
    return new EksClusterClusterConfigNodeGroupsSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsSsh {
  /**
  * If Allow is true the SSH configuration provided is used, otherwise it is ignored. Only one of PublicKeyPath, PublicKey and PublicKeyName can be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#allow EksCluster#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Enables the ability to SSH onto nodes using SSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enable_ssm EksCluster#enable_ssm}
  */
  readonly enableSsm?: boolean | cdktf.IResolvable;
  /**
  * Public key to be added to the nodes SSH keychain. If Allow is false this value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#public_key EksCluster#public_key}
  */
  readonly publicKey?: string;
  /**
  * Public key name in EC2 to be added to the nodes SSH keychain. If Allow is false this value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#public_key_name EksCluster#public_key_name}
  */
  readonly publicKeyName?: string;
  /**
  * source securitgy group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#source_security_group_ids EksCluster#source_security_group_ids}
  */
  readonly sourceSecurityGroupIds?: string[];
}

export function eksClusterClusterConfigNodeGroupsSshToTerraform(struct?: EksClusterClusterConfigNodeGroupsSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    enable_ssm: cdktf.booleanToTerraform(struct!.enableSsm),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    public_key_name: cdktf.stringToTerraform(struct!.publicKeyName),
    source_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceSecurityGroupIds),
  }
}


export function eksClusterClusterConfigNodeGroupsSshToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ssm: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_name: {
      value: cdktf.stringToHclTerraform(struct!.publicKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceSecurityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._enableSsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsm = this._enableSsm;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._publicKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyName = this._publicKeyName;
    }
    if (this._sourceSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSecurityGroupIds = this._sourceSecurityGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._enableSsm = undefined;
      this._publicKey = undefined;
      this._publicKeyName = undefined;
      this._sourceSecurityGroupIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._enableSsm = value.enableSsm;
      this._publicKey = value.publicKey;
      this._publicKeyName = value.publicKeyName;
      this._sourceSecurityGroupIds = value.sourceSecurityGroupIds;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // enable_ssm - computed: false, optional: true, required: false
  private _enableSsm?: boolean | cdktf.IResolvable; 
  public get enableSsm() {
    return this.getBooleanAttribute('enable_ssm');
  }
  public set enableSsm(value: boolean | cdktf.IResolvable) {
    this._enableSsm = value;
  }
  public resetEnableSsm() {
    this._enableSsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsmInput() {
    return this._enableSsm;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // public_key_name - computed: false, optional: true, required: false
  private _publicKeyName?: string; 
  public get publicKeyName() {
    return this.getStringAttribute('public_key_name');
  }
  public set publicKeyName(value: string) {
    this._publicKeyName = value;
  }
  public resetPublicKeyName() {
    this._publicKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyNameInput() {
    return this._publicKeyName;
  }

  // source_security_group_ids - computed: false, optional: true, required: false
  private _sourceSecurityGroupIds?: string[]; 
  public get sourceSecurityGroupIds() {
    return this.getListAttribute('source_security_group_ids');
  }
  public set sourceSecurityGroupIds(value: string[]) {
    this._sourceSecurityGroupIds = value;
  }
  public resetSourceSecurityGroupIds() {
    this._sourceSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSecurityGroupIdsInput() {
    return this._sourceSecurityGroupIds;
  }
}

export class EksClusterClusterConfigNodeGroupsSshList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsSsh[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsSshOutputReference {
    return new EksClusterClusterConfigNodeGroupsSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsTaints {
  /**
  * effect of taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#effect EksCluster#effect}
  */
  readonly effect?: string;
  /**
  * key of taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#key EksCluster#key}
  */
  readonly key?: string;
  /**
  * value of taint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#value EksCluster#value}
  */
  readonly value?: string;
}

export function eksClusterClusterConfigNodeGroupsTaintsToTerraform(struct?: EksClusterClusterConfigNodeGroupsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eksClusterClusterConfigNodeGroupsTaintsToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class EksClusterClusterConfigNodeGroupsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
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

  public set internalValue(value: EksClusterClusterConfigNodeGroupsTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
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
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class EksClusterClusterConfigNodeGroupsTaintsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsTaints[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsTaintsOutputReference {
    return new EksClusterClusterConfigNodeGroupsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroupsUpdateConfig {
  /**
  * sets the max number of nodes that can become unavailable when updating a nodegroup (specified as number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#max_unavaliable EksCluster#max_unavaliable}
  */
  readonly maxUnavaliable?: number;
  /**
  * sets the max number of nodes that can become unavailable when updating a nodegroup (specified as percentage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#max_unavaliable_percetage EksCluster#max_unavaliable_percetage}
  */
  readonly maxUnavaliablePercetage?: number;
}

export function eksClusterClusterConfigNodeGroupsUpdateConfigToTerraform(struct?: EksClusterClusterConfigNodeGroupsUpdateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavaliable: cdktf.numberToTerraform(struct!.maxUnavaliable),
    max_unavaliable_percetage: cdktf.numberToTerraform(struct!.maxUnavaliablePercetage),
  }
}


export function eksClusterClusterConfigNodeGroupsUpdateConfigToHclTerraform(struct?: EksClusterClusterConfigNodeGroupsUpdateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavaliable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavaliable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavaliable_percetage: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavaliablePercetage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsUpdateConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroupsUpdateConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavaliable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavaliable = this._maxUnavaliable;
    }
    if (this._maxUnavaliablePercetage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavaliablePercetage = this._maxUnavaliablePercetage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroupsUpdateConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavaliable = undefined;
      this._maxUnavaliablePercetage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavaliable = value.maxUnavaliable;
      this._maxUnavaliablePercetage = value.maxUnavaliablePercetage;
    }
  }

  // max_unavaliable - computed: false, optional: true, required: false
  private _maxUnavaliable?: number; 
  public get maxUnavaliable() {
    return this.getNumberAttribute('max_unavaliable');
  }
  public set maxUnavaliable(value: number) {
    this._maxUnavaliable = value;
  }
  public resetMaxUnavaliable() {
    this._maxUnavaliable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavaliableInput() {
    return this._maxUnavaliable;
  }

  // max_unavaliable_percetage - computed: false, optional: true, required: false
  private _maxUnavaliablePercetage?: number; 
  public get maxUnavaliablePercetage() {
    return this.getNumberAttribute('max_unavaliable_percetage');
  }
  public set maxUnavaliablePercetage(value: number) {
    this._maxUnavaliablePercetage = value;
  }
  public resetMaxUnavaliablePercetage() {
    this._maxUnavaliablePercetage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavaliablePercetageInput() {
    return this._maxUnavaliablePercetage;
  }
}

export class EksClusterClusterConfigNodeGroupsUpdateConfigList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroupsUpdateConfig[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsUpdateConfigOutputReference {
    return new EksClusterClusterConfigNodeGroupsUpdateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigNodeGroups {
  /**
  * Specify custom AMIs, auto-ssm, auto, or static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ami EksCluster#ami}
  */
  readonly ami?: string;
  /**
  * Valid variants are: 'AmazonLinux2' (default), 'Ubuntu2004', 'Ubuntu1804', 'Bottlerocket', 'WindowsServer2019CoreContainer', 'WindowsServer2019FullContainer', 'WindowsServer2004CoreContainer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ami_family EksCluster#ami_family}
  */
  readonly amiFamily?: string;
  /**
  * See relevant AWS docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#asg_suspend_processes EksCluster#asg_suspend_processes}
  */
  readonly asgSuspendProcesses?: string[];
  /**
  * Limit nodes to specific AZs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#availability_zones EksCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Associate load balancers with auto scaling group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#classic_load_balancer_names EksCluster#classic_load_balancer_names}
  */
  readonly classicLoadBalancerNames?: string[];
  /**
  * Custom address used for DNS lookups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cluster_dns EksCluster#cluster_dns}
  */
  readonly clusterDns?: string;
  /**
  * configures T3 Unlimited, valid only for T-type instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cpu_credits EksCluster#cpu_credits}
  */
  readonly cpuCredits?: string;
  /**
  * Desired capacity of instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#desired_capacity EksCluster#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * requires requests to the metadata service to use IMDSv2 tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#disable_imdsv1 EksCluster#disable_imdsv1}
  */
  readonly disableImdsv1?: boolean | cdktf.IResolvable;
  /**
  * blocks all IMDS requests from non host networking pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#disable_pods_imds EksCluster#disable_pods_imds}
  */
  readonly disablePodsImds?: boolean | cdktf.IResolvable;
  /**
  * enables EBS optimization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ebs_optimized EksCluster#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * creates the maximum allowed number of EFA-enabled network cards on nodes in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#efa_enabled EksCluster#efa_enabled}
  */
  readonly efaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable EC2 detailed monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enable_detailed_monitoring EksCluster#enable_detailed_monitoring}
  */
  readonly enableDetailedMonitoring?: boolean | cdktf.IResolvable;
  /**
  * for instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_name EksCluster#instance_name}
  */
  readonly instanceName?: string;
  /**
  * for instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_prefix EksCluster#instance_prefix}
  */
  readonly instancePrefix?: string;
  /**
  * type of instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_type EksCluster#instance_type}
  */
  readonly instanceType?: string;
  /**
  * labels on nodes in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#labels EksCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maximum pods per node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#max_pods_per_node EksCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * Maximum size of instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#max_size EksCluster#max_size}
  */
  readonly maxSize?: number;
  /**
  * Minimum size of instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#min_size EksCluster#min_size}
  */
  readonly minSize?: number;
  /**
  * name of the node group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name?: string;
  /**
  * Override the vendor's bootstrapping script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#override_bootstrap_command EksCluster#override_bootstrap_command}
  */
  readonly overrideBootstrapCommand?: string;
  /**
  * executed before bootstrapping instances to the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#pre_bootstrap_commands EksCluster#pre_bootstrap_commands}
  */
  readonly preBootstrapCommands?: string[];
  /**
  * Enable private networking for nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#private_networking EksCluster#private_networking}
  */
  readonly privateNetworking?: boolean | cdktf.IResolvable;
  /**
  * Create new subnet from the CIDR block and limit nodes to this subnet (Applicable only for the WavelenghZone nodes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#subnet_cidr EksCluster#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Limit nodes to specific subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#subnets EksCluster#subnets}
  */
  readonly subnets?: string[];
  /**
  * Applied to the Autoscaling Group and to the EC2 instances (unmanaged), Applied to the EKS Nodegroup resource and to the EC2 instances (managed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Associate target group with auto scaling group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#target_group_arns EksCluster#target_group_arns}
  */
  readonly targetGroupArns?: string[];
  /**
  * Kuberenetes version for the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_encrypted EksCluster#volume_encrypted}
  */
  readonly volumeEncrypted?: boolean | cdktf.IResolvable;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_iops EksCluster#volume_iops}
  */
  readonly volumeIops?: number;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_kms_key_id EksCluster#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_name EksCluster#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volume size in gigabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_size EksCluster#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * of volumes attached to instances in the nodegroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_throughput EksCluster#volume_throughput}
  */
  readonly volumeThroughput?: number;
  /**
  * Valid variants are: 'gp2' is General Purpose SSD, 'gp3' is General Purpose SSD which can be optimised for high throughput (default), 'io1' is Provisioned IOPS SSD, 'sc1' is Cold HDD, 'st1' is Throughput Optimized HDD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#volume_type EksCluster#volume_type}
  */
  readonly volumeType?: string;
  /**
  * asg_metrics_collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#asg_metrics_collection EksCluster#asg_metrics_collection}
  */
  readonly asgMetricsCollection?: EksClusterClusterConfigNodeGroupsAsgMetricsCollection[] | cdktf.IResolvable;
  /**
  * bottle_rocket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#bottle_rocket EksCluster#bottle_rocket}
  */
  readonly bottleRocket?: EksClusterClusterConfigNodeGroupsBottleRocket[] | cdktf.IResolvable;
  /**
  * iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#iam EksCluster#iam}
  */
  readonly iam?: EksClusterClusterConfigNodeGroupsIam[] | cdktf.IResolvable;
  /**
  * instance_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instance_selector EksCluster#instance_selector}
  */
  readonly instanceSelector?: EksClusterClusterConfigNodeGroupsInstanceSelector[] | cdktf.IResolvable;
  /**
  * instances_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#instances_distribution EksCluster#instances_distribution}
  */
  readonly instancesDistribution?: EksClusterClusterConfigNodeGroupsInstancesDistribution[] | cdktf.IResolvable;
  /**
  * kubelet_extra_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#kubelet_extra_config EksCluster#kubelet_extra_config}
  */
  readonly kubeletExtraConfig?: EksClusterClusterConfigNodeGroupsKubeletExtraConfig[] | cdktf.IResolvable;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#placement EksCluster#placement}
  */
  readonly placement?: EksClusterClusterConfigNodeGroupsPlacement[] | cdktf.IResolvable;
  /**
  * security_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#security_groups EksCluster#security_groups}
  */
  readonly securityGroups?: EksClusterClusterConfigNodeGroupsSecurityGroups[] | cdktf.IResolvable;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ssh EksCluster#ssh}
  */
  readonly ssh?: EksClusterClusterConfigNodeGroupsSsh[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#taints EksCluster#taints}
  */
  readonly taints?: EksClusterClusterConfigNodeGroupsTaints[] | cdktf.IResolvable;
  /**
  * update_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#update_config EksCluster#update_config}
  */
  readonly updateConfig?: EksClusterClusterConfigNodeGroupsUpdateConfig[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigNodeGroupsToTerraform(struct?: EksClusterClusterConfigNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami: cdktf.stringToTerraform(struct!.ami),
    ami_family: cdktf.stringToTerraform(struct!.amiFamily),
    asg_suspend_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.asgSuspendProcesses),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    classic_load_balancer_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classicLoadBalancerNames),
    cluster_dns: cdktf.stringToTerraform(struct!.clusterDns),
    cpu_credits: cdktf.stringToTerraform(struct!.cpuCredits),
    desired_capacity: cdktf.numberToTerraform(struct!.desiredCapacity),
    disable_imdsv1: cdktf.booleanToTerraform(struct!.disableImdsv1),
    disable_pods_imds: cdktf.booleanToTerraform(struct!.disablePodsImds),
    ebs_optimized: cdktf.booleanToTerraform(struct!.ebsOptimized),
    efa_enabled: cdktf.booleanToTerraform(struct!.efaEnabled),
    enable_detailed_monitoring: cdktf.booleanToTerraform(struct!.enableDetailedMonitoring),
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    instance_prefix: cdktf.stringToTerraform(struct!.instancePrefix),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    override_bootstrap_command: cdktf.stringToTerraform(struct!.overrideBootstrapCommand),
    pre_bootstrap_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preBootstrapCommands),
    private_networking: cdktf.booleanToTerraform(struct!.privateNetworking),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    target_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetGroupArns),
    version: cdktf.stringToTerraform(struct!.version),
    volume_encrypted: cdktf.booleanToTerraform(struct!.volumeEncrypted),
    volume_iops: cdktf.numberToTerraform(struct!.volumeIops),
    volume_kms_key_id: cdktf.stringToTerraform(struct!.volumeKmsKeyId),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_throughput: cdktf.numberToTerraform(struct!.volumeThroughput),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    asg_metrics_collection: cdktf.listMapper(eksClusterClusterConfigNodeGroupsAsgMetricsCollectionToTerraform, true)(struct!.asgMetricsCollection),
    bottle_rocket: cdktf.listMapper(eksClusterClusterConfigNodeGroupsBottleRocketToTerraform, true)(struct!.bottleRocket),
    iam: cdktf.listMapper(eksClusterClusterConfigNodeGroupsIamToTerraform, true)(struct!.iam),
    instance_selector: cdktf.listMapper(eksClusterClusterConfigNodeGroupsInstanceSelectorToTerraform, true)(struct!.instanceSelector),
    instances_distribution: cdktf.listMapper(eksClusterClusterConfigNodeGroupsInstancesDistributionToTerraform, true)(struct!.instancesDistribution),
    kubelet_extra_config: cdktf.listMapper(eksClusterClusterConfigNodeGroupsKubeletExtraConfigToTerraform, true)(struct!.kubeletExtraConfig),
    placement: cdktf.listMapper(eksClusterClusterConfigNodeGroupsPlacementToTerraform, true)(struct!.placement),
    security_groups: cdktf.listMapper(eksClusterClusterConfigNodeGroupsSecurityGroupsToTerraform, true)(struct!.securityGroups),
    ssh: cdktf.listMapper(eksClusterClusterConfigNodeGroupsSshToTerraform, true)(struct!.ssh),
    taints: cdktf.listMapper(eksClusterClusterConfigNodeGroupsTaintsToTerraform, true)(struct!.taints),
    update_config: cdktf.listMapper(eksClusterClusterConfigNodeGroupsUpdateConfigToTerraform, true)(struct!.updateConfig),
  }
}


export function eksClusterClusterConfigNodeGroupsToHclTerraform(struct?: EksClusterClusterConfigNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami: {
      value: cdktf.stringToHclTerraform(struct!.ami),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ami_family: {
      value: cdktf.stringToHclTerraform(struct!.amiFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asg_suspend_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.asgSuspendProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    classic_load_balancer_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classicLoadBalancerNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_dns: {
      value: cdktf.stringToHclTerraform(struct!.clusterDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_credits: {
      value: cdktf.stringToHclTerraform(struct!.cpuCredits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_capacity: {
      value: cdktf.numberToHclTerraform(struct!.desiredCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_imdsv1: {
      value: cdktf.booleanToHclTerraform(struct!.disableImdsv1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_pods_imds: {
      value: cdktf.booleanToHclTerraform(struct!.disablePodsImds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ebs_optimized: {
      value: cdktf.booleanToHclTerraform(struct!.ebsOptimized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    efa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.efaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_detailed_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableDetailedMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_prefix: {
      value: cdktf.stringToHclTerraform(struct!.instancePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
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
    override_bootstrap_command: {
      value: cdktf.stringToHclTerraform(struct!.overrideBootstrapCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_bootstrap_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preBootstrapCommands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_networking: {
      value: cdktf.booleanToHclTerraform(struct!.privateNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    target_group_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetGroupArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.volumeEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_iops: {
      value: cdktf.numberToHclTerraform(struct!.volumeIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_throughput: {
      value: cdktf.numberToHclTerraform(struct!.volumeThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asg_metrics_collection: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsAsgMetricsCollectionToHclTerraform, true)(struct!.asgMetricsCollection),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsAsgMetricsCollectionList",
    },
    bottle_rocket: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsBottleRocketToHclTerraform, true)(struct!.bottleRocket),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsBottleRocketList",
    },
    iam: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsIamToHclTerraform, true)(struct!.iam),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsIamList",
    },
    instance_selector: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsInstanceSelectorToHclTerraform, true)(struct!.instanceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsInstanceSelectorList",
    },
    instances_distribution: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsInstancesDistributionToHclTerraform, true)(struct!.instancesDistribution),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsInstancesDistributionList",
    },
    kubelet_extra_config: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsKubeletExtraConfigToHclTerraform, true)(struct!.kubeletExtraConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsKubeletExtraConfigList",
    },
    placement: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsPlacementToHclTerraform, true)(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsPlacementList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsSecurityGroupsToHclTerraform, true)(struct!.securityGroups),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsSecurityGroupsList",
    },
    ssh: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsSshToHclTerraform, true)(struct!.ssh),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsSshList",
    },
    taints: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsTaintsList",
    },
    update_config: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsUpdateConfigToHclTerraform, true)(struct!.updateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsUpdateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ami !== undefined) {
      hasAnyValues = true;
      internalValueResult.ami = this._ami;
    }
    if (this._amiFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiFamily = this._amiFamily;
    }
    if (this._asgSuspendProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.asgSuspendProcesses = this._asgSuspendProcesses;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._classicLoadBalancerNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.classicLoadBalancerNames = this._classicLoadBalancerNames;
    }
    if (this._clusterDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDns = this._clusterDns;
    }
    if (this._cpuCredits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCredits = this._cpuCredits;
    }
    if (this._desiredCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredCapacity = this._desiredCapacity;
    }
    if (this._disableImdsv1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableImdsv1 = this._disableImdsv1;
    }
    if (this._disablePodsImds !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePodsImds = this._disablePodsImds;
    }
    if (this._ebsOptimized !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsOptimized = this._ebsOptimized;
    }
    if (this._efaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.efaEnabled = this._efaEnabled;
    }
    if (this._enableDetailedMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDetailedMonitoring = this._enableDetailedMonitoring;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._instancePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePrefix = this._instancePrefix;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideBootstrapCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideBootstrapCommand = this._overrideBootstrapCommand;
    }
    if (this._preBootstrapCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.preBootstrapCommands = this._preBootstrapCommands;
    }
    if (this._privateNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworking = this._privateNetworking;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._targetGroupArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArns = this._targetGroupArns;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._volumeEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeEncrypted = this._volumeEncrypted;
    }
    if (this._volumeIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeIops = this._volumeIops;
    }
    if (this._volumeKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeThroughput = this._volumeThroughput;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._asgMetricsCollection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asgMetricsCollection = this._asgMetricsCollection?.internalValue;
    }
    if (this._bottleRocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bottleRocket = this._bottleRocket?.internalValue;
    }
    if (this._iam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam?.internalValue;
    }
    if (this._instanceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSelector = this._instanceSelector?.internalValue;
    }
    if (this._instancesDistribution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancesDistribution = this._instancesDistribution?.internalValue;
    }
    if (this._kubeletExtraConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletExtraConfig = this._kubeletExtraConfig?.internalValue;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._securityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups?.internalValue;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    if (this._updateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateConfig = this._updateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ami = undefined;
      this._amiFamily = undefined;
      this._asgSuspendProcesses = undefined;
      this._availabilityZones = undefined;
      this._classicLoadBalancerNames = undefined;
      this._clusterDns = undefined;
      this._cpuCredits = undefined;
      this._desiredCapacity = undefined;
      this._disableImdsv1 = undefined;
      this._disablePodsImds = undefined;
      this._ebsOptimized = undefined;
      this._efaEnabled = undefined;
      this._enableDetailedMonitoring = undefined;
      this._instanceName = undefined;
      this._instancePrefix = undefined;
      this._instanceType = undefined;
      this._labels = undefined;
      this._maxPodsPerNode = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._overrideBootstrapCommand = undefined;
      this._preBootstrapCommands = undefined;
      this._privateNetworking = undefined;
      this._subnetCidr = undefined;
      this._subnets = undefined;
      this._tags = undefined;
      this._targetGroupArns = undefined;
      this._version = undefined;
      this._volumeEncrypted = undefined;
      this._volumeIops = undefined;
      this._volumeKmsKeyId = undefined;
      this._volumeName = undefined;
      this._volumeSize = undefined;
      this._volumeThroughput = undefined;
      this._volumeType = undefined;
      this._asgMetricsCollection.internalValue = undefined;
      this._bottleRocket.internalValue = undefined;
      this._iam.internalValue = undefined;
      this._instanceSelector.internalValue = undefined;
      this._instancesDistribution.internalValue = undefined;
      this._kubeletExtraConfig.internalValue = undefined;
      this._placement.internalValue = undefined;
      this._securityGroups.internalValue = undefined;
      this._ssh.internalValue = undefined;
      this._taints.internalValue = undefined;
      this._updateConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ami = value.ami;
      this._amiFamily = value.amiFamily;
      this._asgSuspendProcesses = value.asgSuspendProcesses;
      this._availabilityZones = value.availabilityZones;
      this._classicLoadBalancerNames = value.classicLoadBalancerNames;
      this._clusterDns = value.clusterDns;
      this._cpuCredits = value.cpuCredits;
      this._desiredCapacity = value.desiredCapacity;
      this._disableImdsv1 = value.disableImdsv1;
      this._disablePodsImds = value.disablePodsImds;
      this._ebsOptimized = value.ebsOptimized;
      this._efaEnabled = value.efaEnabled;
      this._enableDetailedMonitoring = value.enableDetailedMonitoring;
      this._instanceName = value.instanceName;
      this._instancePrefix = value.instancePrefix;
      this._instanceType = value.instanceType;
      this._labels = value.labels;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._overrideBootstrapCommand = value.overrideBootstrapCommand;
      this._preBootstrapCommands = value.preBootstrapCommands;
      this._privateNetworking = value.privateNetworking;
      this._subnetCidr = value.subnetCidr;
      this._subnets = value.subnets;
      this._tags = value.tags;
      this._targetGroupArns = value.targetGroupArns;
      this._version = value.version;
      this._volumeEncrypted = value.volumeEncrypted;
      this._volumeIops = value.volumeIops;
      this._volumeKmsKeyId = value.volumeKmsKeyId;
      this._volumeName = value.volumeName;
      this._volumeSize = value.volumeSize;
      this._volumeThroughput = value.volumeThroughput;
      this._volumeType = value.volumeType;
      this._asgMetricsCollection.internalValue = value.asgMetricsCollection;
      this._bottleRocket.internalValue = value.bottleRocket;
      this._iam.internalValue = value.iam;
      this._instanceSelector.internalValue = value.instanceSelector;
      this._instancesDistribution.internalValue = value.instancesDistribution;
      this._kubeletExtraConfig.internalValue = value.kubeletExtraConfig;
      this._placement.internalValue = value.placement;
      this._securityGroups.internalValue = value.securityGroups;
      this._ssh.internalValue = value.ssh;
      this._taints.internalValue = value.taints;
      this._updateConfig.internalValue = value.updateConfig;
    }
  }

  // ami - computed: false, optional: true, required: false
  private _ami?: string; 
  public get ami() {
    return this.getStringAttribute('ami');
  }
  public set ami(value: string) {
    this._ami = value;
  }
  public resetAmi() {
    this._ami = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiInput() {
    return this._ami;
  }

  // ami_family - computed: false, optional: true, required: false
  private _amiFamily?: string; 
  public get amiFamily() {
    return this.getStringAttribute('ami_family');
  }
  public set amiFamily(value: string) {
    this._amiFamily = value;
  }
  public resetAmiFamily() {
    this._amiFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiFamilyInput() {
    return this._amiFamily;
  }

  // asg_suspend_processes - computed: false, optional: true, required: false
  private _asgSuspendProcesses?: string[]; 
  public get asgSuspendProcesses() {
    return this.getListAttribute('asg_suspend_processes');
  }
  public set asgSuspendProcesses(value: string[]) {
    this._asgSuspendProcesses = value;
  }
  public resetAsgSuspendProcesses() {
    this._asgSuspendProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgSuspendProcessesInput() {
    return this._asgSuspendProcesses;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // classic_load_balancer_names - computed: false, optional: true, required: false
  private _classicLoadBalancerNames?: string[]; 
  public get classicLoadBalancerNames() {
    return this.getListAttribute('classic_load_balancer_names');
  }
  public set classicLoadBalancerNames(value: string[]) {
    this._classicLoadBalancerNames = value;
  }
  public resetClassicLoadBalancerNames() {
    this._classicLoadBalancerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classicLoadBalancerNamesInput() {
    return this._classicLoadBalancerNames;
  }

  // cluster_dns - computed: false, optional: true, required: false
  private _clusterDns?: string; 
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }
  public set clusterDns(value: string) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // cpu_credits - computed: false, optional: true, required: false
  private _cpuCredits?: string; 
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }
  public set cpuCredits(value: string) {
    this._cpuCredits = value;
  }
  public resetCpuCredits() {
    this._cpuCredits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCreditsInput() {
    return this._cpuCredits;
  }

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // disable_imdsv1 - computed: false, optional: true, required: false
  private _disableImdsv1?: boolean | cdktf.IResolvable; 
  public get disableImdsv1() {
    return this.getBooleanAttribute('disable_imdsv1');
  }
  public set disableImdsv1(value: boolean | cdktf.IResolvable) {
    this._disableImdsv1 = value;
  }
  public resetDisableImdsv1() {
    this._disableImdsv1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableImdsv1Input() {
    return this._disableImdsv1;
  }

  // disable_pods_imds - computed: false, optional: true, required: false
  private _disablePodsImds?: boolean | cdktf.IResolvable; 
  public get disablePodsImds() {
    return this.getBooleanAttribute('disable_pods_imds');
  }
  public set disablePodsImds(value: boolean | cdktf.IResolvable) {
    this._disablePodsImds = value;
  }
  public resetDisablePodsImds() {
    this._disablePodsImds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePodsImdsInput() {
    return this._disablePodsImds;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
  }

  // efa_enabled - computed: false, optional: true, required: false
  private _efaEnabled?: boolean | cdktf.IResolvable; 
  public get efaEnabled() {
    return this.getBooleanAttribute('efa_enabled');
  }
  public set efaEnabled(value: boolean | cdktf.IResolvable) {
    this._efaEnabled = value;
  }
  public resetEfaEnabled() {
    this._efaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efaEnabledInput() {
    return this._efaEnabled;
  }

  // enable_detailed_monitoring - computed: false, optional: true, required: false
  private _enableDetailedMonitoring?: boolean | cdktf.IResolvable; 
  public get enableDetailedMonitoring() {
    return this.getBooleanAttribute('enable_detailed_monitoring');
  }
  public set enableDetailedMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableDetailedMonitoring = value;
  }
  public resetEnableDetailedMonitoring() {
    this._enableDetailedMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailedMonitoringInput() {
    return this._enableDetailedMonitoring;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_prefix - computed: false, optional: true, required: false
  private _instancePrefix?: string; 
  public get instancePrefix() {
    return this.getStringAttribute('instance_prefix');
  }
  public set instancePrefix(value: string) {
    this._instancePrefix = value;
  }
  public resetInstancePrefix() {
    this._instancePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePrefixInput() {
    return this._instancePrefix;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // max_pods_per_node - computed: false, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // override_bootstrap_command - computed: false, optional: true, required: false
  private _overrideBootstrapCommand?: string; 
  public get overrideBootstrapCommand() {
    return this.getStringAttribute('override_bootstrap_command');
  }
  public set overrideBootstrapCommand(value: string) {
    this._overrideBootstrapCommand = value;
  }
  public resetOverrideBootstrapCommand() {
    this._overrideBootstrapCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideBootstrapCommandInput() {
    return this._overrideBootstrapCommand;
  }

  // pre_bootstrap_commands - computed: false, optional: true, required: false
  private _preBootstrapCommands?: string[]; 
  public get preBootstrapCommands() {
    return this.getListAttribute('pre_bootstrap_commands');
  }
  public set preBootstrapCommands(value: string[]) {
    this._preBootstrapCommands = value;
  }
  public resetPreBootstrapCommands() {
    this._preBootstrapCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preBootstrapCommandsInput() {
    return this._preBootstrapCommands;
  }

  // private_networking - computed: false, optional: true, required: false
  private _privateNetworking?: boolean | cdktf.IResolvable; 
  public get privateNetworking() {
    return this.getBooleanAttribute('private_networking');
  }
  public set privateNetworking(value: boolean | cdktf.IResolvable) {
    this._privateNetworking = value;
  }
  public resetPrivateNetworking() {
    this._privateNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkingInput() {
    return this._privateNetworking;
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_group_arns - computed: false, optional: true, required: false
  private _targetGroupArns?: string[]; 
  public get targetGroupArns() {
    return this.getListAttribute('target_group_arns');
  }
  public set targetGroupArns(value: string[]) {
    this._targetGroupArns = value;
  }
  public resetTargetGroupArns() {
    this._targetGroupArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnsInput() {
    return this._targetGroupArns;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // volume_encrypted - computed: false, optional: true, required: false
  private _volumeEncrypted?: boolean | cdktf.IResolvable; 
  public get volumeEncrypted() {
    return this.getBooleanAttribute('volume_encrypted');
  }
  public set volumeEncrypted(value: boolean | cdktf.IResolvable) {
    this._volumeEncrypted = value;
  }
  public resetVolumeEncrypted() {
    this._volumeEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeEncryptedInput() {
    return this._volumeEncrypted;
  }

  // volume_iops - computed: false, optional: true, required: false
  private _volumeIops?: number; 
  public get volumeIops() {
    return this.getNumberAttribute('volume_iops');
  }
  public set volumeIops(value: number) {
    this._volumeIops = value;
  }
  public resetVolumeIops() {
    this._volumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIopsInput() {
    return this._volumeIops;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_throughput - computed: false, optional: true, required: false
  private _volumeThroughput?: number; 
  public get volumeThroughput() {
    return this.getNumberAttribute('volume_throughput');
  }
  public set volumeThroughput(value: number) {
    this._volumeThroughput = value;
  }
  public resetVolumeThroughput() {
    this._volumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeThroughputInput() {
    return this._volumeThroughput;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // asg_metrics_collection - computed: false, optional: true, required: false
  private _asgMetricsCollection = new EksClusterClusterConfigNodeGroupsAsgMetricsCollectionList(this, "asg_metrics_collection", false);
  public get asgMetricsCollection() {
    return this._asgMetricsCollection;
  }
  public putAsgMetricsCollection(value: EksClusterClusterConfigNodeGroupsAsgMetricsCollection[] | cdktf.IResolvable) {
    this._asgMetricsCollection.internalValue = value;
  }
  public resetAsgMetricsCollection() {
    this._asgMetricsCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asgMetricsCollectionInput() {
    return this._asgMetricsCollection.internalValue;
  }

  // bottle_rocket - computed: false, optional: true, required: false
  private _bottleRocket = new EksClusterClusterConfigNodeGroupsBottleRocketList(this, "bottle_rocket", false);
  public get bottleRocket() {
    return this._bottleRocket;
  }
  public putBottleRocket(value: EksClusterClusterConfigNodeGroupsBottleRocket[] | cdktf.IResolvable) {
    this._bottleRocket.internalValue = value;
  }
  public resetBottleRocket() {
    this._bottleRocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottleRocketInput() {
    return this._bottleRocket.internalValue;
  }

  // iam - computed: false, optional: true, required: false
  private _iam = new EksClusterClusterConfigNodeGroupsIamList(this, "iam", false);
  public get iam() {
    return this._iam;
  }
  public putIam(value: EksClusterClusterConfigNodeGroupsIam[] | cdktf.IResolvable) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }

  // instance_selector - computed: false, optional: true, required: false
  private _instanceSelector = new EksClusterClusterConfigNodeGroupsInstanceSelectorList(this, "instance_selector", false);
  public get instanceSelector() {
    return this._instanceSelector;
  }
  public putInstanceSelector(value: EksClusterClusterConfigNodeGroupsInstanceSelector[] | cdktf.IResolvable) {
    this._instanceSelector.internalValue = value;
  }
  public resetInstanceSelector() {
    this._instanceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectorInput() {
    return this._instanceSelector.internalValue;
  }

  // instances_distribution - computed: false, optional: true, required: false
  private _instancesDistribution = new EksClusterClusterConfigNodeGroupsInstancesDistributionList(this, "instances_distribution", false);
  public get instancesDistribution() {
    return this._instancesDistribution;
  }
  public putInstancesDistribution(value: EksClusterClusterConfigNodeGroupsInstancesDistribution[] | cdktf.IResolvable) {
    this._instancesDistribution.internalValue = value;
  }
  public resetInstancesDistribution() {
    this._instancesDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesDistributionInput() {
    return this._instancesDistribution.internalValue;
  }

  // kubelet_extra_config - computed: false, optional: true, required: false
  private _kubeletExtraConfig = new EksClusterClusterConfigNodeGroupsKubeletExtraConfigList(this, "kubelet_extra_config", false);
  public get kubeletExtraConfig() {
    return this._kubeletExtraConfig;
  }
  public putKubeletExtraConfig(value: EksClusterClusterConfigNodeGroupsKubeletExtraConfig[] | cdktf.IResolvable) {
    this._kubeletExtraConfig.internalValue = value;
  }
  public resetKubeletExtraConfig() {
    this._kubeletExtraConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletExtraConfigInput() {
    return this._kubeletExtraConfig.internalValue;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new EksClusterClusterConfigNodeGroupsPlacementList(this, "placement", false);
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: EksClusterClusterConfigNodeGroupsPlacement[] | cdktf.IResolvable) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new EksClusterClusterConfigNodeGroupsSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: EksClusterClusterConfigNodeGroupsSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new EksClusterClusterConfigNodeGroupsSshList(this, "ssh", false);
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: EksClusterClusterConfigNodeGroupsSsh[] | cdktf.IResolvable) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new EksClusterClusterConfigNodeGroupsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: EksClusterClusterConfigNodeGroupsTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // update_config - computed: false, optional: true, required: false
  private _updateConfig = new EksClusterClusterConfigNodeGroupsUpdateConfigList(this, "update_config", false);
  public get updateConfig() {
    return this._updateConfig;
  }
  public putUpdateConfig(value: EksClusterClusterConfigNodeGroupsUpdateConfig[] | cdktf.IResolvable) {
    this._updateConfig.internalValue = value;
  }
  public resetUpdateConfig() {
    this._updateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateConfigInput() {
    return this._updateConfig.internalValue;
  }
}

export class EksClusterClusterConfigNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigNodeGroupsOutputReference {
    return new EksClusterClusterConfigNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigPrivateCluster {
  /**
  * specifies additional endpoint services that must be enabled for private access. Valid entries are: 'cloudformation', 'autoscaling', 'logs'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#additional_endpoint_services EksCluster#additional_endpoint_services}
  */
  readonly additionalEndpointServices?: string[];
  /**
  * enables creation of a fully-private cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#enabled EksCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * skips the creation process for endpoints completely. This is only used in case of an already provided VPC and if the user decided to set it to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#skip_endpoint_creation EksCluster#skip_endpoint_creation}
  */
  readonly skipEndpointCreation?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigPrivateClusterToTerraform(struct?: EksClusterClusterConfigPrivateCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_endpoint_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalEndpointServices),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    skip_endpoint_creation: cdktf.booleanToTerraform(struct!.skipEndpointCreation),
  }
}


export function eksClusterClusterConfigPrivateClusterToHclTerraform(struct?: EksClusterClusterConfigPrivateCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_endpoint_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalEndpointServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_endpoint_creation: {
      value: cdktf.booleanToHclTerraform(struct!.skipEndpointCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigPrivateClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigPrivateCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalEndpointServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEndpointServices = this._additionalEndpointServices;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._skipEndpointCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipEndpointCreation = this._skipEndpointCreation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigPrivateCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalEndpointServices = undefined;
      this._enabled = undefined;
      this._skipEndpointCreation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalEndpointServices = value.additionalEndpointServices;
      this._enabled = value.enabled;
      this._skipEndpointCreation = value.skipEndpointCreation;
    }
  }

  // additional_endpoint_services - computed: false, optional: true, required: false
  private _additionalEndpointServices?: string[]; 
  public get additionalEndpointServices() {
    return this.getListAttribute('additional_endpoint_services');
  }
  public set additionalEndpointServices(value: string[]) {
    this._additionalEndpointServices = value;
  }
  public resetAdditionalEndpointServices() {
    this._additionalEndpointServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEndpointServicesInput() {
    return this._additionalEndpointServices;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // skip_endpoint_creation - computed: false, optional: true, required: false
  private _skipEndpointCreation?: boolean | cdktf.IResolvable; 
  public get skipEndpointCreation() {
    return this.getBooleanAttribute('skip_endpoint_creation');
  }
  public set skipEndpointCreation(value: boolean | cdktf.IResolvable) {
    this._skipEndpointCreation = value;
  }
  public resetSkipEndpointCreation() {
    this._skipEndpointCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEndpointCreationInput() {
    return this._skipEndpointCreation;
  }
}

export class EksClusterClusterConfigPrivateClusterList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigPrivateCluster[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigPrivateClusterOutputReference {
    return new EksClusterClusterConfigPrivateClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigSecretsEncryption {
  /**
  * Flag to encrypt existing secrets. Default is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#encrypt_existing_secrets EksCluster#encrypt_existing_secrets}
  */
  readonly encryptExistingSecrets?: boolean | cdktf.IResolvable;
  /**
  * KMS key ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#key_arn EksCluster#key_arn}
  */
  readonly keyArn?: string;
}

export function eksClusterClusterConfigSecretsEncryptionToTerraform(struct?: EksClusterClusterConfigSecretsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypt_existing_secrets: cdktf.booleanToTerraform(struct!.encryptExistingSecrets),
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
  }
}


export function eksClusterClusterConfigSecretsEncryptionToHclTerraform(struct?: EksClusterClusterConfigSecretsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypt_existing_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.encryptExistingSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_arn: {
      value: cdktf.stringToHclTerraform(struct!.keyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigSecretsEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigSecretsEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptExistingSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptExistingSecrets = this._encryptExistingSecrets;
    }
    if (this._keyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyArn = this._keyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigSecretsEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptExistingSecrets = undefined;
      this._keyArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptExistingSecrets = value.encryptExistingSecrets;
      this._keyArn = value.keyArn;
    }
  }

  // encrypt_existing_secrets - computed: false, optional: true, required: false
  private _encryptExistingSecrets?: boolean | cdktf.IResolvable; 
  public get encryptExistingSecrets() {
    return this.getBooleanAttribute('encrypt_existing_secrets');
  }
  public set encryptExistingSecrets(value: boolean | cdktf.IResolvable) {
    this._encryptExistingSecrets = value;
  }
  public resetEncryptExistingSecrets() {
    this._encryptExistingSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptExistingSecretsInput() {
    return this._encryptExistingSecrets;
  }

  // key_arn - computed: false, optional: true, required: false
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  public resetKeyArn() {
    this._keyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn;
  }
}

export class EksClusterClusterConfigSecretsEncryptionList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigSecretsEncryption[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigSecretsEncryptionOutputReference {
    return new EksClusterClusterConfigSecretsEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigVpcClusterEndpoints {
  /**
  * enable private access to the Kubernetes API server endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#private_access EksCluster#private_access}
  */
  readonly privateAccess?: boolean | cdktf.IResolvable;
  /**
  * enable public access to the Kubernetes API server endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#public_access EksCluster#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
}

export function eksClusterClusterConfigVpcClusterEndpointsToTerraform(struct?: EksClusterClusterConfigVpcClusterEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_access: cdktf.booleanToTerraform(struct!.privateAccess),
    public_access: cdktf.booleanToTerraform(struct!.publicAccess),
  }
}


export function eksClusterClusterConfigVpcClusterEndpointsToHclTerraform(struct?: EksClusterClusterConfigVpcClusterEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_access: {
      value: cdktf.booleanToHclTerraform(struct!.privateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_access: {
      value: cdktf.booleanToHclTerraform(struct!.publicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigVpcClusterEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigVpcClusterEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess;
    }
    if (this._publicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigVpcClusterEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateAccess = undefined;
      this._publicAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateAccess = value.privateAccess;
      this._publicAccess = value.publicAccess;
    }
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess?: boolean | cdktf.IResolvable; 
  public get privateAccess() {
    return this.getBooleanAttribute('private_access');
  }
  public set privateAccess(value: boolean | cdktf.IResolvable) {
    this._privateAccess = value;
  }
  public resetPrivateAccess() {
    this._privateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess?: boolean | cdktf.IResolvable; 
  public get publicAccess() {
    return this.getBooleanAttribute('public_access');
  }
  public set publicAccess(value: boolean | cdktf.IResolvable) {
    this._publicAccess = value;
  }
  public resetPublicAccess() {
    this._publicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess;
  }
}

export class EksClusterClusterConfigVpcClusterEndpointsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigVpcClusterEndpoints[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigVpcClusterEndpointsOutputReference {
    return new EksClusterClusterConfigVpcClusterEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigVpcNat {
  /**
  * Valid variants are: 'HighlyAvailable' configures a highly available NAT gateway, 'Single' configures a single NAT gateway (default), 'Disable' disables NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#gateway EksCluster#gateway}
  */
  readonly gateway?: string;
}

export function eksClusterClusterConfigVpcNatToTerraform(struct?: EksClusterClusterConfigVpcNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
  }
}


export function eksClusterClusterConfigVpcNatToHclTerraform(struct?: EksClusterClusterConfigVpcNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigVpcNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigVpcNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigVpcNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }
}

export class EksClusterClusterConfigVpcNatList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigVpcNat[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigVpcNatOutputReference {
    return new EksClusterClusterConfigVpcNatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigVpcSubnetsPrivate {
  /**
  * dont know what this is, not in docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#az EksCluster#az}
  */
  readonly az?: string;
  /**
  * dont know what this is, not in docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cidr EksCluster#cidr}
  */
  readonly cidr?: string;
  /**
  * id of subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name?: string;
}

export function eksClusterClusterConfigVpcSubnetsPrivateToTerraform(struct?: EksClusterClusterConfigVpcSubnetsPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az: cdktf.stringToTerraform(struct!.az),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function eksClusterClusterConfigVpcSubnetsPrivateToHclTerraform(struct?: EksClusterClusterConfigVpcSubnetsPrivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az: {
      value: cdktf.stringToHclTerraform(struct!.az),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class EksClusterClusterConfigVpcSubnetsPrivateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigVpcSubnetsPrivate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._az !== undefined) {
      hasAnyValues = true;
      internalValueResult.az = this._az;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
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

  public set internalValue(value: EksClusterClusterConfigVpcSubnetsPrivate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._az = undefined;
      this._cidr = undefined;
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
      this._az = value.az;
      this._cidr = value.cidr;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // az - computed: false, optional: true, required: false
  private _az?: string; 
  public get az() {
    return this.getStringAttribute('az');
  }
  public set az(value: string) {
    this._az = value;
  }
  public resetAz() {
    this._az = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // id - computed: false, optional: true, required: false
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
}

export class EksClusterClusterConfigVpcSubnetsPrivateList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigVpcSubnetsPrivate[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigVpcSubnetsPrivateOutputReference {
    return new EksClusterClusterConfigVpcSubnetsPrivateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigVpcSubnetsPublic {
  /**
  * dont know what this is, not in docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#az EksCluster#az}
  */
  readonly az?: string;
  /**
  * dont know what this is, not in docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cidr EksCluster#cidr}
  */
  readonly cidr?: string;
  /**
  * id of subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#name EksCluster#name}
  */
  readonly name?: string;
}

export function eksClusterClusterConfigVpcSubnetsPublicToTerraform(struct?: EksClusterClusterConfigVpcSubnetsPublic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az: cdktf.stringToTerraform(struct!.az),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function eksClusterClusterConfigVpcSubnetsPublicToHclTerraform(struct?: EksClusterClusterConfigVpcSubnetsPublic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az: {
      value: cdktf.stringToHclTerraform(struct!.az),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class EksClusterClusterConfigVpcSubnetsPublicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigVpcSubnetsPublic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._az !== undefined) {
      hasAnyValues = true;
      internalValueResult.az = this._az;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
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

  public set internalValue(value: EksClusterClusterConfigVpcSubnetsPublic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._az = undefined;
      this._cidr = undefined;
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
      this._az = value.az;
      this._cidr = value.cidr;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // az - computed: false, optional: true, required: false
  private _az?: string; 
  public get az() {
    return this.getStringAttribute('az');
  }
  public set az(value: string) {
    this._az = value;
  }
  public resetAz() {
    this._az = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // id - computed: false, optional: true, required: false
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
}

export class EksClusterClusterConfigVpcSubnetsPublicList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigVpcSubnetsPublic[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigVpcSubnetsPublicOutputReference {
    return new EksClusterClusterConfigVpcSubnetsPublicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigVpcSubnets {
  /**
  * private block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#private EksCluster#private}
  */
  readonly private?: EksClusterClusterConfigVpcSubnetsPrivate[] | cdktf.IResolvable;
  /**
  * public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#public EksCluster#public}
  */
  readonly public?: EksClusterClusterConfigVpcSubnetsPublic[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigVpcSubnetsToTerraform(struct?: EksClusterClusterConfigVpcSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private: cdktf.listMapper(eksClusterClusterConfigVpcSubnetsPrivateToTerraform, true)(struct!.private),
    public: cdktf.listMapper(eksClusterClusterConfigVpcSubnetsPublicToTerraform, true)(struct!.public),
  }
}


export function eksClusterClusterConfigVpcSubnetsToHclTerraform(struct?: EksClusterClusterConfigVpcSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigVpcSubnetsPrivateToHclTerraform, true)(struct!.private),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigVpcSubnetsPrivateList",
    },
    public: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigVpcSubnetsPublicToHclTerraform, true)(struct!.public),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigVpcSubnetsPublicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigVpcSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigVpcSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._private?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private?.internalValue;
    }
    if (this._public?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigVpcSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._private.internalValue = undefined;
      this._public.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._private.internalValue = value.private;
      this._public.internalValue = value.public;
    }
  }

  // private - computed: false, optional: true, required: false
  private _private = new EksClusterClusterConfigVpcSubnetsPrivateList(this, "private", false);
  public get private() {
    return this._private;
  }
  public putPrivate(value: EksClusterClusterConfigVpcSubnetsPrivate[] | cdktf.IResolvable) {
    this._private.internalValue = value;
  }
  public resetPrivate() {
    this._private.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private.internalValue;
  }

  // public - computed: false, optional: true, required: false
  private _public = new EksClusterClusterConfigVpcSubnetsPublicList(this, "public", false);
  public get public() {
    return this._public;
  }
  public putPublic(value: EksClusterClusterConfigVpcSubnetsPublic[] | cdktf.IResolvable) {
    this._public.internalValue = value;
  }
  public resetPublic() {
    this._public.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public.internalValue;
  }
}

export class EksClusterClusterConfigVpcSubnetsList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigVpcSubnets[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigVpcSubnetsOutputReference {
    return new EksClusterClusterConfigVpcSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfigVpc {
  /**
  * AutoAllocateIPV6 requests an IPv6 CIDR block with /56 prefix for the VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#auto_allocate_ipv6 EksCluster#auto_allocate_ipv6}
  */
  readonly autoAllocateIpv6?: boolean | cdktf.IResolvable;
  /**
  * AWS VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cidr EksCluster#cidr}
  */
  readonly cidr?: string;
  /**
  * for additional CIDR associations, e.g. a CIDR for private subnets or any ad-hoc subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#extra_cidrs EksCluster#extra_cidrs}
  */
  readonly extraCidrs?: string[];
  /**
  * for additional CIDR associations, e.g. a CIDR for private subnets or any ad-hoc subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#extra_ipv6_cidrs EksCluster#extra_ipv6_cidrs}
  */
  readonly extraIpv6Cidrs?: string[];
  /**
  * AWS VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#id EksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * n/a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ipv6_cidr EksCluster#ipv6_cidr}
  */
  readonly ipv6Cidr?: string;
  /**
  * n/a
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#ipv6_pool EksCluster#ipv6_pool}
  */
  readonly ipv6Pool?: string;
  /**
  * Automatically add security group rules to and from the default cluster security group and the shared node security group. This allows unmanaged nodes to communicate with the control plane and managed nodes. This option cannot be disabled when using vendor created security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#manage_shared_node_security_group_rules EksCluster#manage_shared_node_security_group_rules}
  */
  readonly manageSharedNodeSecurityGroupRules?: boolean | cdktf.IResolvable;
  /**
  * which CIDR blocks to allow access to public k8s API endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#public_access_cidrs EksCluster#public_access_cidrs}
  */
  readonly publicAccessCidrs?: string[];
  /**
  * (aka the ControlPlaneSecurityGroup) for communication between control plane and nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#security_group EksCluster#security_group}
  */
  readonly securityGroup?: string;
  /**
  * for pre-defined shared node SG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#shared_node_security_group EksCluster#shared_node_security_group}
  */
  readonly sharedNodeSecurityGroup?: string;
  /**
  * cluster_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cluster_endpoints EksCluster#cluster_endpoints}
  */
  readonly clusterEndpoints?: EksClusterClusterConfigVpcClusterEndpoints[] | cdktf.IResolvable;
  /**
  * nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#nat EksCluster#nat}
  */
  readonly nat?: EksClusterClusterConfigVpcNat[] | cdktf.IResolvable;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#subnets EksCluster#subnets}
  */
  readonly subnets?: EksClusterClusterConfigVpcSubnets[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigVpcToTerraform(struct?: EksClusterClusterConfigVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_allocate_ipv6: cdktf.booleanToTerraform(struct!.autoAllocateIpv6),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    extra_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraCidrs),
    extra_ipv6_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraIpv6Cidrs),
    id: cdktf.stringToTerraform(struct!.id),
    ipv6_cidr: cdktf.stringToTerraform(struct!.ipv6Cidr),
    ipv6_pool: cdktf.stringToTerraform(struct!.ipv6Pool),
    manage_shared_node_security_group_rules: cdktf.booleanToTerraform(struct!.manageSharedNodeSecurityGroupRules),
    public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicAccessCidrs),
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
    shared_node_security_group: cdktf.stringToTerraform(struct!.sharedNodeSecurityGroup),
    cluster_endpoints: cdktf.listMapper(eksClusterClusterConfigVpcClusterEndpointsToTerraform, true)(struct!.clusterEndpoints),
    nat: cdktf.listMapper(eksClusterClusterConfigVpcNatToTerraform, true)(struct!.nat),
    subnets: cdktf.listMapper(eksClusterClusterConfigVpcSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function eksClusterClusterConfigVpcToHclTerraform(struct?: EksClusterClusterConfigVpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_allocate_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.autoAllocateIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_ipv6_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraIpv6Cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_pool: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage_shared_node_security_group_rules: {
      value: cdktf.booleanToHclTerraform(struct!.manageSharedNodeSecurityGroupRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_access_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publicAccessCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_group: {
      value: cdktf.stringToHclTerraform(struct!.securityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_node_security_group: {
      value: cdktf.stringToHclTerraform(struct!.sharedNodeSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_endpoints: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigVpcClusterEndpointsToHclTerraform, true)(struct!.clusterEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigVpcClusterEndpointsList",
    },
    nat: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigVpcNatToHclTerraform, true)(struct!.nat),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigVpcNatList",
    },
    subnets: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigVpcSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigVpcSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksClusterClusterConfigVpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAllocateIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAllocateIpv6 = this._autoAllocateIpv6;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._extraCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraCidrs = this._extraCidrs;
    }
    if (this._extraIpv6Cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraIpv6Cidrs = this._extraIpv6Cidrs;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv6Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Cidr = this._ipv6Cidr;
    }
    if (this._ipv6Pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Pool = this._ipv6Pool;
    }
    if (this._manageSharedNodeSecurityGroupRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageSharedNodeSecurityGroupRules = this._manageSharedNodeSecurityGroupRules;
    }
    if (this._publicAccessCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccessCidrs = this._publicAccessCidrs;
    }
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    if (this._sharedNodeSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedNodeSecurityGroup = this._sharedNodeSecurityGroup;
    }
    if (this._clusterEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEndpoints = this._clusterEndpoints?.internalValue;
    }
    if (this._nat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfigVpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoAllocateIpv6 = undefined;
      this._cidr = undefined;
      this._extraCidrs = undefined;
      this._extraIpv6Cidrs = undefined;
      this._id = undefined;
      this._ipv6Cidr = undefined;
      this._ipv6Pool = undefined;
      this._manageSharedNodeSecurityGroupRules = undefined;
      this._publicAccessCidrs = undefined;
      this._securityGroup = undefined;
      this._sharedNodeSecurityGroup = undefined;
      this._clusterEndpoints.internalValue = undefined;
      this._nat.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoAllocateIpv6 = value.autoAllocateIpv6;
      this._cidr = value.cidr;
      this._extraCidrs = value.extraCidrs;
      this._extraIpv6Cidrs = value.extraIpv6Cidrs;
      this._id = value.id;
      this._ipv6Cidr = value.ipv6Cidr;
      this._ipv6Pool = value.ipv6Pool;
      this._manageSharedNodeSecurityGroupRules = value.manageSharedNodeSecurityGroupRules;
      this._publicAccessCidrs = value.publicAccessCidrs;
      this._securityGroup = value.securityGroup;
      this._sharedNodeSecurityGroup = value.sharedNodeSecurityGroup;
      this._clusterEndpoints.internalValue = value.clusterEndpoints;
      this._nat.internalValue = value.nat;
      this._subnets.internalValue = value.subnets;
    }
  }

  // auto_allocate_ipv6 - computed: false, optional: true, required: false
  private _autoAllocateIpv6?: boolean | cdktf.IResolvable; 
  public get autoAllocateIpv6() {
    return this.getBooleanAttribute('auto_allocate_ipv6');
  }
  public set autoAllocateIpv6(value: boolean | cdktf.IResolvable) {
    this._autoAllocateIpv6 = value;
  }
  public resetAutoAllocateIpv6() {
    this._autoAllocateIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAllocateIpv6Input() {
    return this._autoAllocateIpv6;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // extra_cidrs - computed: false, optional: true, required: false
  private _extraCidrs?: string[]; 
  public get extraCidrs() {
    return this.getListAttribute('extra_cidrs');
  }
  public set extraCidrs(value: string[]) {
    this._extraCidrs = value;
  }
  public resetExtraCidrs() {
    this._extraCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraCidrsInput() {
    return this._extraCidrs;
  }

  // extra_ipv6_cidrs - computed: false, optional: true, required: false
  private _extraIpv6Cidrs?: string[]; 
  public get extraIpv6Cidrs() {
    return this.getListAttribute('extra_ipv6_cidrs');
  }
  public set extraIpv6Cidrs(value: string[]) {
    this._extraIpv6Cidrs = value;
  }
  public resetExtraIpv6Cidrs() {
    this._extraIpv6Cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraIpv6CidrsInput() {
    return this._extraIpv6Cidrs;
  }

  // id - computed: false, optional: true, required: false
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

  // ipv6_cidr - computed: false, optional: true, required: false
  private _ipv6Cidr?: string; 
  public get ipv6Cidr() {
    return this.getStringAttribute('ipv6_cidr');
  }
  public set ipv6Cidr(value: string) {
    this._ipv6Cidr = value;
  }
  public resetIpv6Cidr() {
    this._ipv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrInput() {
    return this._ipv6Cidr;
  }

  // ipv6_pool - computed: false, optional: true, required: false
  private _ipv6Pool?: string; 
  public get ipv6Pool() {
    return this.getStringAttribute('ipv6_pool');
  }
  public set ipv6Pool(value: string) {
    this._ipv6Pool = value;
  }
  public resetIpv6Pool() {
    this._ipv6Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PoolInput() {
    return this._ipv6Pool;
  }

  // manage_shared_node_security_group_rules - computed: false, optional: true, required: false
  private _manageSharedNodeSecurityGroupRules?: boolean | cdktf.IResolvable; 
  public get manageSharedNodeSecurityGroupRules() {
    return this.getBooleanAttribute('manage_shared_node_security_group_rules');
  }
  public set manageSharedNodeSecurityGroupRules(value: boolean | cdktf.IResolvable) {
    this._manageSharedNodeSecurityGroupRules = value;
  }
  public resetManageSharedNodeSecurityGroupRules() {
    this._manageSharedNodeSecurityGroupRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageSharedNodeSecurityGroupRulesInput() {
    return this._manageSharedNodeSecurityGroupRules;
  }

  // public_access_cidrs - computed: false, optional: true, required: false
  private _publicAccessCidrs?: string[]; 
  public get publicAccessCidrs() {
    return this.getListAttribute('public_access_cidrs');
  }
  public set publicAccessCidrs(value: string[]) {
    this._publicAccessCidrs = value;
  }
  public resetPublicAccessCidrs() {
    this._publicAccessCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessCidrsInput() {
    return this._publicAccessCidrs;
  }

  // security_group - computed: false, optional: true, required: false
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // shared_node_security_group - computed: false, optional: true, required: false
  private _sharedNodeSecurityGroup?: string; 
  public get sharedNodeSecurityGroup() {
    return this.getStringAttribute('shared_node_security_group');
  }
  public set sharedNodeSecurityGroup(value: string) {
    this._sharedNodeSecurityGroup = value;
  }
  public resetSharedNodeSecurityGroup() {
    this._sharedNodeSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedNodeSecurityGroupInput() {
    return this._sharedNodeSecurityGroup;
  }

  // cluster_endpoints - computed: false, optional: true, required: false
  private _clusterEndpoints = new EksClusterClusterConfigVpcClusterEndpointsList(this, "cluster_endpoints", false);
  public get clusterEndpoints() {
    return this._clusterEndpoints;
  }
  public putClusterEndpoints(value: EksClusterClusterConfigVpcClusterEndpoints[] | cdktf.IResolvable) {
    this._clusterEndpoints.internalValue = value;
  }
  public resetClusterEndpoints() {
    this._clusterEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointsInput() {
    return this._clusterEndpoints.internalValue;
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new EksClusterClusterConfigVpcNatList(this, "nat", false);
  public get nat() {
    return this._nat;
  }
  public putNat(value: EksClusterClusterConfigVpcNat[] | cdktf.IResolvable) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new EksClusterClusterConfigVpcSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: EksClusterClusterConfigVpcSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}

export class EksClusterClusterConfigVpcList extends cdktf.ComplexList {
  public internalValue? : EksClusterClusterConfigVpc[] | cdktf.IResolvable

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
  public get(index: number): EksClusterClusterConfigVpcOutputReference {
    return new EksClusterClusterConfigVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksClusterClusterConfig {
  /**
  * apiversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#apiversion EksCluster#apiversion}
  */
  readonly apiversion?: string;
  /**
  * availability zones of a cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#availability_zones EksCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * kind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#kind EksCluster#kind}
  */
  readonly kind?: string;
  /**
  * access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#access_config EksCluster#access_config}
  */
  readonly accessConfig?: EksClusterClusterConfigAccessConfig[] | cdktf.IResolvable;
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#addons EksCluster#addons}
  */
  readonly addons?: EksClusterClusterConfigAddons[] | cdktf.IResolvable;
  /**
  * addons_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#addons_config EksCluster#addons_config}
  */
  readonly addonsConfig?: EksClusterClusterConfigAddonsConfig[] | cdktf.IResolvable;
  /**
  * auto_mode_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#auto_mode_config EksCluster#auto_mode_config}
  */
  readonly autoModeConfig?: EksClusterClusterConfigAutoModeConfig[] | cdktf.IResolvable;
  /**
  * cloud_watch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#cloud_watch EksCluster#cloud_watch}
  */
  readonly cloudWatch?: EksClusterClusterConfigCloudWatch[] | cdktf.IResolvable;
  /**
  * fargate_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#fargate_profiles EksCluster#fargate_profiles}
  */
  readonly fargateProfiles?: EksClusterClusterConfigFargateProfiles[] | cdktf.IResolvable;
  /**
  * iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#iam EksCluster#iam}
  */
  readonly iam?: EksClusterClusterConfigIam[] | cdktf.IResolvable;
  /**
  * identity_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#identity_mappings EksCluster#identity_mappings}
  */
  readonly identityMappings?: EksClusterClusterConfigIdentityMappings[] | cdktf.IResolvable;
  /**
  * identity_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#identity_providers EksCluster#identity_providers}
  */
  readonly identityProviders?: EksClusterClusterConfigIdentityProviders[] | cdktf.IResolvable;
  /**
  * kubernetes_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#kubernetes_network_config EksCluster#kubernetes_network_config}
  */
  readonly kubernetesNetworkConfig?: EksClusterClusterConfigKubernetesNetworkConfig[] | cdktf.IResolvable;
  /**
  * managed_nodegroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#managed_nodegroups EksCluster#managed_nodegroups}
  */
  readonly managedNodegroups?: EksClusterClusterConfigManagedNodegroups[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#metadata EksCluster#metadata}
  */
  readonly metadata: EksClusterClusterConfigMetadata[] | cdktf.IResolvable;
  /**
  * node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#node_groups EksCluster#node_groups}
  */
  readonly nodeGroups?: EksClusterClusterConfigNodeGroups[] | cdktf.IResolvable;
  /**
  * private_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#private_cluster EksCluster#private_cluster}
  */
  readonly privateCluster?: EksClusterClusterConfigPrivateCluster[] | cdktf.IResolvable;
  /**
  * secrets_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#secrets_encryption EksCluster#secrets_encryption}
  */
  readonly secretsEncryption?: EksClusterClusterConfigSecretsEncryption[] | cdktf.IResolvable;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#vpc EksCluster#vpc}
  */
  readonly vpc?: EksClusterClusterConfigVpc[] | cdktf.IResolvable;
}

export function eksClusterClusterConfigToTerraform(struct?: EksClusterClusterConfigOutputReference | EksClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apiversion: cdktf.stringToTerraform(struct!.apiversion),
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityZones),
    kind: cdktf.stringToTerraform(struct!.kind),
    access_config: cdktf.listMapper(eksClusterClusterConfigAccessConfigToTerraform, true)(struct!.accessConfig),
    addons: cdktf.listMapper(eksClusterClusterConfigAddonsToTerraform, true)(struct!.addons),
    addons_config: cdktf.listMapper(eksClusterClusterConfigAddonsConfigToTerraform, true)(struct!.addonsConfig),
    auto_mode_config: cdktf.listMapper(eksClusterClusterConfigAutoModeConfigToTerraform, true)(struct!.autoModeConfig),
    cloud_watch: cdktf.listMapper(eksClusterClusterConfigCloudWatchToTerraform, true)(struct!.cloudWatch),
    fargate_profiles: cdktf.listMapper(eksClusterClusterConfigFargateProfilesToTerraform, true)(struct!.fargateProfiles),
    iam: cdktf.listMapper(eksClusterClusterConfigIamToTerraform, true)(struct!.iam),
    identity_mappings: cdktf.listMapper(eksClusterClusterConfigIdentityMappingsToTerraform, true)(struct!.identityMappings),
    identity_providers: cdktf.listMapper(eksClusterClusterConfigIdentityProvidersToTerraform, true)(struct!.identityProviders),
    kubernetes_network_config: cdktf.listMapper(eksClusterClusterConfigKubernetesNetworkConfigToTerraform, true)(struct!.kubernetesNetworkConfig),
    managed_nodegroups: cdktf.listMapper(eksClusterClusterConfigManagedNodegroupsToTerraform, true)(struct!.managedNodegroups),
    metadata: cdktf.listMapper(eksClusterClusterConfigMetadataToTerraform, true)(struct!.metadata),
    node_groups: cdktf.listMapper(eksClusterClusterConfigNodeGroupsToTerraform, true)(struct!.nodeGroups),
    private_cluster: cdktf.listMapper(eksClusterClusterConfigPrivateClusterToTerraform, true)(struct!.privateCluster),
    secrets_encryption: cdktf.listMapper(eksClusterClusterConfigSecretsEncryptionToTerraform, true)(struct!.secretsEncryption),
    vpc: cdktf.listMapper(eksClusterClusterConfigVpcToTerraform, true)(struct!.vpc),
  }
}


export function eksClusterClusterConfigToHclTerraform(struct?: EksClusterClusterConfigOutputReference | EksClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apiversion: {
      value: cdktf.stringToHclTerraform(struct!.apiversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_config: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAccessConfigToHclTerraform, true)(struct!.accessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAccessConfigList",
    },
    addons: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAddonsToHclTerraform, true)(struct!.addons),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAddonsList",
    },
    addons_config: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAddonsConfigToHclTerraform, true)(struct!.addonsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAddonsConfigList",
    },
    auto_mode_config: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigAutoModeConfigToHclTerraform, true)(struct!.autoModeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigAutoModeConfigList",
    },
    cloud_watch: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigCloudWatchToHclTerraform, true)(struct!.cloudWatch),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigCloudWatchList",
    },
    fargate_profiles: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigFargateProfilesToHclTerraform, true)(struct!.fargateProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigFargateProfilesList",
    },
    iam: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIamToHclTerraform, true)(struct!.iam),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIamList",
    },
    identity_mappings: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIdentityMappingsToHclTerraform, true)(struct!.identityMappings),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIdentityMappingsList",
    },
    identity_providers: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigIdentityProvidersToHclTerraform, true)(struct!.identityProviders),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigIdentityProvidersList",
    },
    kubernetes_network_config: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigKubernetesNetworkConfigToHclTerraform, true)(struct!.kubernetesNetworkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigKubernetesNetworkConfigList",
    },
    managed_nodegroups: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigManagedNodegroupsToHclTerraform, true)(struct!.managedNodegroups),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigManagedNodegroupsList",
    },
    metadata: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigMetadataList",
    },
    node_groups: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigNodeGroupsToHclTerraform, true)(struct!.nodeGroups),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigNodeGroupsList",
    },
    private_cluster: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigPrivateClusterToHclTerraform, true)(struct!.privateCluster),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigPrivateClusterList",
    },
    secrets_encryption: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigSecretsEncryptionToHclTerraform, true)(struct!.secretsEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigSecretsEncryptionList",
    },
    vpc: {
      value: cdktf.listMapperHcl(eksClusterClusterConfigVpcToHclTerraform, true)(struct!.vpc),
      isBlock: true,
      type: "list",
      storageClassType: "EksClusterClusterConfigVpcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksClusterClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiversion = this._apiversion;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._accessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfig = this._accessConfig?.internalValue;
    }
    if (this._addons?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addons = this._addons?.internalValue;
    }
    if (this._addonsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonsConfig = this._addonsConfig?.internalValue;
    }
    if (this._autoModeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoModeConfig = this._autoModeConfig?.internalValue;
    }
    if (this._cloudWatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatch = this._cloudWatch?.internalValue;
    }
    if (this._fargateProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fargateProfiles = this._fargateProfiles?.internalValue;
    }
    if (this._iam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam?.internalValue;
    }
    if (this._identityMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityMappings = this._identityMappings?.internalValue;
    }
    if (this._identityProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviders = this._identityProviders?.internalValue;
    }
    if (this._kubernetesNetworkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNetworkConfig = this._kubernetesNetworkConfig?.internalValue;
    }
    if (this._managedNodegroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedNodegroups = this._managedNodegroups?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._nodeGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroups = this._nodeGroups?.internalValue;
    }
    if (this._privateCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateCluster = this._privateCluster?.internalValue;
    }
    if (this._secretsEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsEncryption = this._secretsEncryption?.internalValue;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiversion = undefined;
      this._availabilityZones = undefined;
      this._kind = undefined;
      this._accessConfig.internalValue = undefined;
      this._addons.internalValue = undefined;
      this._addonsConfig.internalValue = undefined;
      this._autoModeConfig.internalValue = undefined;
      this._cloudWatch.internalValue = undefined;
      this._fargateProfiles.internalValue = undefined;
      this._iam.internalValue = undefined;
      this._identityMappings.internalValue = undefined;
      this._identityProviders.internalValue = undefined;
      this._kubernetesNetworkConfig.internalValue = undefined;
      this._managedNodegroups.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._nodeGroups.internalValue = undefined;
      this._privateCluster.internalValue = undefined;
      this._secretsEncryption.internalValue = undefined;
      this._vpc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiversion = value.apiversion;
      this._availabilityZones = value.availabilityZones;
      this._kind = value.kind;
      this._accessConfig.internalValue = value.accessConfig;
      this._addons.internalValue = value.addons;
      this._addonsConfig.internalValue = value.addonsConfig;
      this._autoModeConfig.internalValue = value.autoModeConfig;
      this._cloudWatch.internalValue = value.cloudWatch;
      this._fargateProfiles.internalValue = value.fargateProfiles;
      this._iam.internalValue = value.iam;
      this._identityMappings.internalValue = value.identityMappings;
      this._identityProviders.internalValue = value.identityProviders;
      this._kubernetesNetworkConfig.internalValue = value.kubernetesNetworkConfig;
      this._managedNodegroups.internalValue = value.managedNodegroups;
      this._metadata.internalValue = value.metadata;
      this._nodeGroups.internalValue = value.nodeGroups;
      this._privateCluster.internalValue = value.privateCluster;
      this._secretsEncryption.internalValue = value.secretsEncryption;
      this._vpc.internalValue = value.vpc;
    }
  }

  // apiversion - computed: false, optional: true, required: false
  private _apiversion?: string; 
  public get apiversion() {
    return this.getStringAttribute('apiversion');
  }
  public set apiversion(value: string) {
    this._apiversion = value;
  }
  public resetApiversion() {
    this._apiversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiversionInput() {
    return this._apiversion;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new EksClusterClusterConfigAccessConfigList(this, "access_config", false);
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: EksClusterClusterConfigAccessConfig[] | cdktf.IResolvable) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // addons - computed: false, optional: true, required: false
  private _addons = new EksClusterClusterConfigAddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }
  public putAddons(value: EksClusterClusterConfigAddons[] | cdktf.IResolvable) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // addons_config - computed: false, optional: true, required: false
  private _addonsConfig = new EksClusterClusterConfigAddonsConfigList(this, "addons_config", false);
  public get addonsConfig() {
    return this._addonsConfig;
  }
  public putAddonsConfig(value: EksClusterClusterConfigAddonsConfig[] | cdktf.IResolvable) {
    this._addonsConfig.internalValue = value;
  }
  public resetAddonsConfig() {
    this._addonsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsConfigInput() {
    return this._addonsConfig.internalValue;
  }

  // auto_mode_config - computed: false, optional: true, required: false
  private _autoModeConfig = new EksClusterClusterConfigAutoModeConfigList(this, "auto_mode_config", false);
  public get autoModeConfig() {
    return this._autoModeConfig;
  }
  public putAutoModeConfig(value: EksClusterClusterConfigAutoModeConfig[] | cdktf.IResolvable) {
    this._autoModeConfig.internalValue = value;
  }
  public resetAutoModeConfig() {
    this._autoModeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoModeConfigInput() {
    return this._autoModeConfig.internalValue;
  }

  // cloud_watch - computed: false, optional: true, required: false
  private _cloudWatch = new EksClusterClusterConfigCloudWatchList(this, "cloud_watch", false);
  public get cloudWatch() {
    return this._cloudWatch;
  }
  public putCloudWatch(value: EksClusterClusterConfigCloudWatch[] | cdktf.IResolvable) {
    this._cloudWatch.internalValue = value;
  }
  public resetCloudWatch() {
    this._cloudWatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchInput() {
    return this._cloudWatch.internalValue;
  }

  // fargate_profiles - computed: false, optional: true, required: false
  private _fargateProfiles = new EksClusterClusterConfigFargateProfilesList(this, "fargate_profiles", false);
  public get fargateProfiles() {
    return this._fargateProfiles;
  }
  public putFargateProfiles(value: EksClusterClusterConfigFargateProfiles[] | cdktf.IResolvable) {
    this._fargateProfiles.internalValue = value;
  }
  public resetFargateProfiles() {
    this._fargateProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fargateProfilesInput() {
    return this._fargateProfiles.internalValue;
  }

  // iam - computed: false, optional: true, required: false
  private _iam = new EksClusterClusterConfigIamList(this, "iam", false);
  public get iam() {
    return this._iam;
  }
  public putIam(value: EksClusterClusterConfigIam[] | cdktf.IResolvable) {
    this._iam.internalValue = value;
  }
  public resetIam() {
    this._iam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam.internalValue;
  }

  // identity_mappings - computed: false, optional: true, required: false
  private _identityMappings = new EksClusterClusterConfigIdentityMappingsList(this, "identity_mappings", false);
  public get identityMappings() {
    return this._identityMappings;
  }
  public putIdentityMappings(value: EksClusterClusterConfigIdentityMappings[] | cdktf.IResolvable) {
    this._identityMappings.internalValue = value;
  }
  public resetIdentityMappings() {
    this._identityMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityMappingsInput() {
    return this._identityMappings.internalValue;
  }

  // identity_providers - computed: false, optional: true, required: false
  private _identityProviders = new EksClusterClusterConfigIdentityProvidersList(this, "identity_providers", false);
  public get identityProviders() {
    return this._identityProviders;
  }
  public putIdentityProviders(value: EksClusterClusterConfigIdentityProviders[] | cdktf.IResolvable) {
    this._identityProviders.internalValue = value;
  }
  public resetIdentityProviders() {
    this._identityProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProvidersInput() {
    return this._identityProviders.internalValue;
  }

  // kubernetes_network_config - computed: false, optional: true, required: false
  private _kubernetesNetworkConfig = new EksClusterClusterConfigKubernetesNetworkConfigList(this, "kubernetes_network_config", false);
  public get kubernetesNetworkConfig() {
    return this._kubernetesNetworkConfig;
  }
  public putKubernetesNetworkConfig(value: EksClusterClusterConfigKubernetesNetworkConfig[] | cdktf.IResolvable) {
    this._kubernetesNetworkConfig.internalValue = value;
  }
  public resetKubernetesNetworkConfig() {
    this._kubernetesNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNetworkConfigInput() {
    return this._kubernetesNetworkConfig.internalValue;
  }

  // managed_nodegroups - computed: false, optional: true, required: false
  private _managedNodegroups = new EksClusterClusterConfigManagedNodegroupsList(this, "managed_nodegroups", false);
  public get managedNodegroups() {
    return this._managedNodegroups;
  }
  public putManagedNodegroups(value: EksClusterClusterConfigManagedNodegroups[] | cdktf.IResolvable) {
    this._managedNodegroups.internalValue = value;
  }
  public resetManagedNodegroups() {
    this._managedNodegroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNodegroupsInput() {
    return this._managedNodegroups.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new EksClusterClusterConfigMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: EksClusterClusterConfigMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // node_groups - computed: false, optional: true, required: false
  private _nodeGroups = new EksClusterClusterConfigNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }
  public putNodeGroups(value: EksClusterClusterConfigNodeGroups[] | cdktf.IResolvable) {
    this._nodeGroups.internalValue = value;
  }
  public resetNodeGroups() {
    this._nodeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupsInput() {
    return this._nodeGroups.internalValue;
  }

  // private_cluster - computed: false, optional: true, required: false
  private _privateCluster = new EksClusterClusterConfigPrivateClusterList(this, "private_cluster", false);
  public get privateCluster() {
    return this._privateCluster;
  }
  public putPrivateCluster(value: EksClusterClusterConfigPrivateCluster[] | cdktf.IResolvable) {
    this._privateCluster.internalValue = value;
  }
  public resetPrivateCluster() {
    this._privateCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterInput() {
    return this._privateCluster.internalValue;
  }

  // secrets_encryption - computed: false, optional: true, required: false
  private _secretsEncryption = new EksClusterClusterConfigSecretsEncryptionList(this, "secrets_encryption", false);
  public get secretsEncryption() {
    return this._secretsEncryption;
  }
  public putSecretsEncryption(value: EksClusterClusterConfigSecretsEncryption[] | cdktf.IResolvable) {
    this._secretsEncryption.internalValue = value;
  }
  public resetSecretsEncryption() {
    this._secretsEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsEncryptionInput() {
    return this._secretsEncryption.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new EksClusterClusterConfigVpcList(this, "vpc", false);
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: EksClusterClusterConfigVpc[] | cdktf.IResolvable) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}
export interface EksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#create EksCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#delete EksCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#update EksCluster#update}
  */
  readonly update?: string;
}

export function eksClusterTimeoutsToTerraform(struct?: EksClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function eksClusterTimeoutsToHclTerraform(struct?: EksClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster rafay_eks_cluster}
*/
export class EksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_eks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksCluster to import
  * @param importFromId The id of the existing EksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_eks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_cluster rafay_eks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_eks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.54',
        providerVersionConstraint: '1.1.54'
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
    this._cluster.internalValue = config.cluster;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._timeouts.internalValue = config.timeouts;
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

  // cluster - computed: false, optional: false, required: true
  private _cluster = new EksClusterClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: EksClusterCluster) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // cluster_config - computed: false, optional: false, required: true
  private _clusterConfig = new EksClusterClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: EksClusterClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EksClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EksClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      cluster: eksClusterClusterToTerraform(this._cluster.internalValue),
      cluster_config: eksClusterClusterConfigToTerraform(this._clusterConfig.internalValue),
      timeouts: eksClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      cluster: {
        value: eksClusterClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterClusterList",
      },
      cluster_config: {
        value: eksClusterClusterConfigToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksClusterClusterConfigList",
      },
      timeouts: {
        value: eksClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EksClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
