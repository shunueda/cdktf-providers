// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlEksclusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the AWS Credential in Tanzu Mission Control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#credential_name DataTanzuMissionControlEkscluster#credential_name}
  */
  readonly credentialName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#id DataTanzuMissionControlEkscluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#name DataTanzuMissionControlEkscluster#name}
  */
  readonly name: string;
  /**
  * Wait timeout duration until cluster resource reaches READY state. Accepted timeout duration values like 5s, 45m, or 3h, higher than zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#ready_wait_timeout DataTanzuMissionControlEkscluster#ready_wait_timeout}
  */
  readonly readyWaitTimeout?: string;
  /**
  * AWS Region of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#region DataTanzuMissionControlEkscluster#region}
  */
  readonly region: string;
  /**
  * Wait until pinniped extension is ready to provide kubeconfig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#wait_for_kubeconfig DataTanzuMissionControlEkscluster#wait_for_kubeconfig}
  */
  readonly waitForKubeconfig?: boolean | cdktf.IResolvable;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#meta DataTanzuMissionControlEkscluster#meta}
  */
  readonly meta?: DataTanzuMissionControlEksclusterMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#spec DataTanzuMissionControlEkscluster#spec}
  */
  readonly spec?: DataTanzuMissionControlEksclusterSpec;
}
export interface DataTanzuMissionControlEksclusterMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#annotations DataTanzuMissionControlEkscluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#description DataTanzuMissionControlEkscluster#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#labels DataTanzuMissionControlEkscluster#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataTanzuMissionControlEksclusterMetaToTerraform(struct?: DataTanzuMissionControlEksclusterMetaOutputReference | DataTanzuMissionControlEksclusterMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataTanzuMissionControlEksclusterMetaToHclTerraform(struct?: DataTanzuMissionControlEksclusterMetaOutputReference | DataTanzuMissionControlEksclusterMeta): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfig {
  /**
  * Subnet id for the ENI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#id DataTanzuMissionControlEkscluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Security groups for the ENI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#security_groups DataTanzuMissionControlEkscluster#security_groups}
  */
  readonly securityGroups?: string[];
}

export function dataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigToTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
  }
}


export function dataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfig | cdktf.IResolvable): any {
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
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._securityGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._securityGroups = value.securityGroups;
    }
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

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
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
}

export class DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfig[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigOutputReference {
    return new DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfig {
  /**
  * eni_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#eni_config DataTanzuMissionControlEkscluster#eni_config}
  */
  readonly eniConfig?: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfig[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigToTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigOutputReference | DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eni_config: cdktf.listMapper(dataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigToTerraform, true)(struct!.eniConfig),
  }
}


export function dataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigOutputReference | DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eni_config: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigToHclTerraform, true)(struct!.eniConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eniConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eniConfig = this._eniConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eniConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eniConfig.internalValue = value.eniConfig;
    }
  }

  // eni_config - computed: false, optional: true, required: false
  private _eniConfig = new DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfigList(this, "eni_config", false);
  public get eniConfig() {
    return this._eniConfig;
  }
  public putEniConfig(value: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigEniConfig[] | cdktf.IResolvable) {
    this._eniConfig.internalValue = value;
  }
  public resetEniConfig() {
    this._eniConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eniConfigInput() {
    return this._eniConfig.internalValue;
  }
}
export interface DataTanzuMissionControlEksclusterSpecConfigAddonsConfig {
  /**
  * vpc_cni_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#vpc_cni_config DataTanzuMissionControlEkscluster#vpc_cni_config}
  */
  readonly vpcCniConfig?: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfig;
}

export function dataTanzuMissionControlEksclusterSpecConfigAddonsConfigToTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigOutputReference | DataTanzuMissionControlEksclusterSpecConfigAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_cni_config: dataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigToTerraform(struct!.vpcCniConfig),
  }
}


export function dataTanzuMissionControlEksclusterSpecConfigAddonsConfigToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigOutputReference | DataTanzuMissionControlEksclusterSpecConfigAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_cni_config: {
      value: dataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigToHclTerraform(struct!.vpcCniConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecConfigAddonsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecConfigAddonsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcCniConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcCniConfig = this._vpcCniConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecConfigAddonsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpcCniConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpcCniConfig.internalValue = value.vpcCniConfig;
    }
  }

  // vpc_cni_config - computed: false, optional: true, required: false
  private _vpcCniConfig = new DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfigOutputReference(this, "vpc_cni_config");
  public get vpcCniConfig() {
    return this._vpcCniConfig;
  }
  public putVpcCniConfig(value: DataTanzuMissionControlEksclusterSpecConfigAddonsConfigVpcCniConfig) {
    this._vpcCniConfig.internalValue = value;
  }
  public resetVpcCniConfig() {
    this._vpcCniConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCniConfigInput() {
    return this._vpcCniConfig.internalValue;
  }
}
export interface DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfig {
  /**
  * Service CIDR for Kubernetes services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#service_cidr DataTanzuMissionControlEkscluster#service_cidr}
  */
  readonly serviceCidr: string;
}

export function dataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfigToTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfigOutputReference | DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
  }
}


export function dataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfigToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfigOutputReference | DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCidr = this._serviceCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceCidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceCidr = value.serviceCidr;
    }
  }

  // service_cidr - computed: false, optional: false, required: true
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }
}
export interface DataTanzuMissionControlEksclusterSpecConfigLogging {
  /**
  * Enable API server logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#api_server DataTanzuMissionControlEkscluster#api_server}
  */
  readonly apiServer?: boolean | cdktf.IResolvable;
  /**
  * Enable audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#audit DataTanzuMissionControlEkscluster#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * Enable authenticator logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#authenticator DataTanzuMissionControlEkscluster#authenticator}
  */
  readonly authenticator?: boolean | cdktf.IResolvable;
  /**
  * Enable controller manager logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#controller_manager DataTanzuMissionControlEkscluster#controller_manager}
  */
  readonly controllerManager?: boolean | cdktf.IResolvable;
  /**
  * Enable scheduler logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#scheduler DataTanzuMissionControlEkscluster#scheduler}
  */
  readonly scheduler?: boolean | cdktf.IResolvable;
}

export function dataTanzuMissionControlEksclusterSpecConfigLoggingToTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigLoggingOutputReference | DataTanzuMissionControlEksclusterSpecConfigLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: cdktf.booleanToTerraform(struct!.apiServer),
    audit: cdktf.booleanToTerraform(struct!.audit),
    authenticator: cdktf.booleanToTerraform(struct!.authenticator),
    controller_manager: cdktf.booleanToTerraform(struct!.controllerManager),
    scheduler: cdktf.booleanToTerraform(struct!.scheduler),
  }
}


export function dataTanzuMissionControlEksclusterSpecConfigLoggingToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigLoggingOutputReference | DataTanzuMissionControlEksclusterSpecConfigLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server: {
      value: cdktf.booleanToHclTerraform(struct!.apiServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authenticator: {
      value: cdktf.booleanToHclTerraform(struct!.authenticator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    controller_manager: {
      value: cdktf.booleanToHclTerraform(struct!.controllerManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduler: {
      value: cdktf.booleanToHclTerraform(struct!.scheduler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecConfigLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer;
    }
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._authenticator !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticator = this._authenticator;
    }
    if (this._controllerManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerManager = this._controllerManager;
    }
    if (this._scheduler !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecConfigLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServer = undefined;
      this._audit = undefined;
      this._authenticator = undefined;
      this._controllerManager = undefined;
      this._scheduler = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServer = value.apiServer;
      this._audit = value.audit;
      this._authenticator = value.authenticator;
      this._controllerManager = value.controllerManager;
      this._scheduler = value.scheduler;
    }
  }

  // api_server - computed: false, optional: true, required: false
  private _apiServer?: boolean | cdktf.IResolvable; 
  public get apiServer() {
    return this.getBooleanAttribute('api_server');
  }
  public set apiServer(value: boolean | cdktf.IResolvable) {
    this._apiServer = value;
  }
  public resetApiServer() {
    this._apiServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // authenticator - computed: false, optional: true, required: false
  private _authenticator?: boolean | cdktf.IResolvable; 
  public get authenticator() {
    return this.getBooleanAttribute('authenticator');
  }
  public set authenticator(value: boolean | cdktf.IResolvable) {
    this._authenticator = value;
  }
  public resetAuthenticator() {
    this._authenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorInput() {
    return this._authenticator;
  }

  // controller_manager - computed: false, optional: true, required: false
  private _controllerManager?: boolean | cdktf.IResolvable; 
  public get controllerManager() {
    return this.getBooleanAttribute('controller_manager');
  }
  public set controllerManager(value: boolean | cdktf.IResolvable) {
    this._controllerManager = value;
  }
  public resetControllerManager() {
    this._controllerManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerManagerInput() {
    return this._controllerManager;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler?: boolean | cdktf.IResolvable; 
  public get scheduler() {
    return this.getBooleanAttribute('scheduler');
  }
  public set scheduler(value: boolean | cdktf.IResolvable) {
    this._scheduler = value;
  }
  public resetScheduler() {
    this._scheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler;
  }
}
export interface DataTanzuMissionControlEksclusterSpecConfigVpc {
  /**
  * Enable Kubernetes API requests within your cluster's VPC (such as node to control plane communication) use the private VPC endpoint (see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#enable_private_access DataTanzuMissionControlEkscluster#enable_private_access}
  */
  readonly enablePrivateAccess?: boolean | cdktf.IResolvable;
  /**
  * Enable cluster API server access from the internet. You can, optionally, limit the CIDR blocks that can access the public endpoint using public_access_cidrs (see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#enable_public_access DataTanzuMissionControlEkscluster#enable_public_access}
  */
  readonly enablePublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Specify which addresses from the internet can communicate to the public endpoint, if public endpoint is enabled (see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#public_access_cidrs DataTanzuMissionControlEkscluster#public_access_cidrs}
  */
  readonly publicAccessCidrs?: string[];
  /**
  * Security groups for the cluster VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#security_groups DataTanzuMissionControlEkscluster#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Subnet ids used by the cluster (see [Amazon EKS VPC and subnet requirements and considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html#network-requirements-subnets))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#subnet_ids DataTanzuMissionControlEkscluster#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function dataTanzuMissionControlEksclusterSpecConfigVpcToTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigVpcOutputReference | DataTanzuMissionControlEksclusterSpecConfigVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_private_access: cdktf.booleanToTerraform(struct!.enablePrivateAccess),
    enable_public_access: cdktf.booleanToTerraform(struct!.enablePublicAccess),
    public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicAccessCidrs),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function dataTanzuMissionControlEksclusterSpecConfigVpcToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigVpcOutputReference | DataTanzuMissionControlEksclusterSpecConfigVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_private_access: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_public_access: {
      value: cdktf.booleanToHclTerraform(struct!.enablePublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_access_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publicAccessCidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecConfigVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecConfigVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateAccess = this._enablePrivateAccess;
    }
    if (this._enablePublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicAccess = this._enablePublicAccess;
    }
    if (this._publicAccessCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccessCidrs = this._publicAccessCidrs;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecConfigVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePrivateAccess = undefined;
      this._enablePublicAccess = undefined;
      this._publicAccessCidrs = undefined;
      this._securityGroups = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateAccess = value.enablePrivateAccess;
      this._enablePublicAccess = value.enablePublicAccess;
      this._publicAccessCidrs = value.publicAccessCidrs;
      this._securityGroups = value.securityGroups;
      this._subnetIds = value.subnetIds;
    }
  }

  // enable_private_access - computed: false, optional: true, required: false
  private _enablePrivateAccess?: boolean | cdktf.IResolvable; 
  public get enablePrivateAccess() {
    return this.getBooleanAttribute('enable_private_access');
  }
  public set enablePrivateAccess(value: boolean | cdktf.IResolvable) {
    this._enablePrivateAccess = value;
  }
  public resetEnablePrivateAccess() {
    this._enablePrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateAccessInput() {
    return this._enablePrivateAccess;
  }

  // enable_public_access - computed: false, optional: true, required: false
  private _enablePublicAccess?: boolean | cdktf.IResolvable; 
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }
  public set enablePublicAccess(value: boolean | cdktf.IResolvable) {
    this._enablePublicAccess = value;
  }
  public resetEnablePublicAccess() {
    this._enablePublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicAccessInput() {
    return this._enablePublicAccess;
  }

  // public_access_cidrs - computed: false, optional: true, required: false
  private _publicAccessCidrs?: string[]; 
  public get publicAccessCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('public_access_cidrs'));
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

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
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

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface DataTanzuMissionControlEksclusterSpecConfig {
  /**
  * Kubernetes version of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#kubernetes_version DataTanzuMissionControlEkscluster#kubernetes_version}
  */
  readonly kubernetesVersion: string;
  /**
  * ARN of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#role_arn DataTanzuMissionControlEkscluster#role_arn}
  */
  readonly roleArn: string;
  /**
  * The metadata to apply to the cluster to assist with categorization and organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#tags DataTanzuMissionControlEkscluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * addons_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#addons_config DataTanzuMissionControlEkscluster#addons_config}
  */
  readonly addonsConfig?: DataTanzuMissionControlEksclusterSpecConfigAddonsConfig;
  /**
  * kubernetes_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#kubernetes_network_config DataTanzuMissionControlEkscluster#kubernetes_network_config}
  */
  readonly kubernetesNetworkConfig?: DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfig;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#logging DataTanzuMissionControlEkscluster#logging}
  */
  readonly logging?: DataTanzuMissionControlEksclusterSpecConfigLogging;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#vpc DataTanzuMissionControlEkscluster#vpc}
  */
  readonly vpc: DataTanzuMissionControlEksclusterSpecConfigVpc;
}

export function dataTanzuMissionControlEksclusterSpecConfigToTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigOutputReference | DataTanzuMissionControlEksclusterSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_version: cdktf.stringToTerraform(struct!.kubernetesVersion),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    addons_config: dataTanzuMissionControlEksclusterSpecConfigAddonsConfigToTerraform(struct!.addonsConfig),
    kubernetes_network_config: dataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfigToTerraform(struct!.kubernetesNetworkConfig),
    logging: dataTanzuMissionControlEksclusterSpecConfigLoggingToTerraform(struct!.logging),
    vpc: dataTanzuMissionControlEksclusterSpecConfigVpcToTerraform(struct!.vpc),
  }
}


export function dataTanzuMissionControlEksclusterSpecConfigToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecConfigOutputReference | DataTanzuMissionControlEksclusterSpecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_version: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
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
    addons_config: {
      value: dataTanzuMissionControlEksclusterSpecConfigAddonsConfigToHclTerraform(struct!.addonsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecConfigAddonsConfigList",
    },
    kubernetes_network_config: {
      value: dataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfigToHclTerraform(struct!.kubernetesNetworkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfigList",
    },
    logging: {
      value: dataTanzuMissionControlEksclusterSpecConfigLoggingToHclTerraform(struct!.logging),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecConfigLoggingList",
    },
    vpc: {
      value: dataTanzuMissionControlEksclusterSpecConfigVpcToHclTerraform(struct!.vpc),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecConfigVpcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesVersion = this._kubernetesVersion;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._addonsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonsConfig = this._addonsConfig?.internalValue;
    }
    if (this._kubernetesNetworkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNetworkConfig = this._kubernetesNetworkConfig?.internalValue;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    if (this._vpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubernetesVersion = undefined;
      this._roleArn = undefined;
      this._tags = undefined;
      this._addonsConfig.internalValue = undefined;
      this._kubernetesNetworkConfig.internalValue = undefined;
      this._logging.internalValue = undefined;
      this._vpc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubernetesVersion = value.kubernetesVersion;
      this._roleArn = value.roleArn;
      this._tags = value.tags;
      this._addonsConfig.internalValue = value.addonsConfig;
      this._kubernetesNetworkConfig.internalValue = value.kubernetesNetworkConfig;
      this._logging.internalValue = value.logging;
      this._vpc.internalValue = value.vpc;
    }
  }

  // kubernetes_version - computed: false, optional: false, required: true
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
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

  // addons_config - computed: false, optional: true, required: false
  private _addonsConfig = new DataTanzuMissionControlEksclusterSpecConfigAddonsConfigOutputReference(this, "addons_config");
  public get addonsConfig() {
    return this._addonsConfig;
  }
  public putAddonsConfig(value: DataTanzuMissionControlEksclusterSpecConfigAddonsConfig) {
    this._addonsConfig.internalValue = value;
  }
  public resetAddonsConfig() {
    this._addonsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsConfigInput() {
    return this._addonsConfig.internalValue;
  }

  // kubernetes_network_config - computed: false, optional: true, required: false
  private _kubernetesNetworkConfig = new DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfigOutputReference(this, "kubernetes_network_config");
  public get kubernetesNetworkConfig() {
    return this._kubernetesNetworkConfig;
  }
  public putKubernetesNetworkConfig(value: DataTanzuMissionControlEksclusterSpecConfigKubernetesNetworkConfig) {
    this._kubernetesNetworkConfig.internalValue = value;
  }
  public resetKubernetesNetworkConfig() {
    this._kubernetesNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNetworkConfigInput() {
    return this._kubernetesNetworkConfig.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new DataTanzuMissionControlEksclusterSpecConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: DataTanzuMissionControlEksclusterSpecConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc = new DataTanzuMissionControlEksclusterSpecConfigVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: DataTanzuMissionControlEksclusterSpecConfigVpc) {
    this._vpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }
}
export interface DataTanzuMissionControlEksclusterSpecNodepoolInfo {
  /**
  * Description for the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#description DataTanzuMissionControlEkscluster#description}
  */
  readonly description?: string;
  /**
  * Name of the nodepool, immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#name DataTanzuMissionControlEkscluster#name}
  */
  readonly name: string;
}

export function dataTanzuMissionControlEksclusterSpecNodepoolInfoToTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolInfoOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataTanzuMissionControlEksclusterSpecNodepoolInfoToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolInfoOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolInfo): any {
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

export class DataTanzuMissionControlEksclusterSpecNodepoolInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecNodepoolInfo | undefined {
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

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecNodepoolInfo | undefined) {
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
export interface DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfo {
  /**
  * ID of the AMI to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#ami_id DataTanzuMissionControlEkscluster#ami_id}
  */
  readonly amiId?: string;
  /**
  * Override bootstrap command for the custom AMI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#override_bootstrap_cmd DataTanzuMissionControlEkscluster#override_bootstrap_cmd}
  */
  readonly overrideBootstrapCmd?: string;
}

export function dataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfoToTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfoOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_id: cdktf.stringToTerraform(struct!.amiId),
    override_bootstrap_cmd: cdktf.stringToTerraform(struct!.overrideBootstrapCmd),
  }
}


export function dataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfoToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfoOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami_id: {
      value: cdktf.stringToHclTerraform(struct!.amiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_bootstrap_cmd: {
      value: cdktf.stringToHclTerraform(struct!.overrideBootstrapCmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiId = this._amiId;
    }
    if (this._overrideBootstrapCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideBootstrapCmd = this._overrideBootstrapCmd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amiId = undefined;
      this._overrideBootstrapCmd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amiId = value.amiId;
      this._overrideBootstrapCmd = value.overrideBootstrapCmd;
    }
  }

  // ami_id - computed: false, optional: true, required: false
  private _amiId?: string; 
  public get amiId() {
    return this.getStringAttribute('ami_id');
  }
  public set amiId(value: string) {
    this._amiId = value;
  }
  public resetAmiId() {
    this._amiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiIdInput() {
    return this._amiId;
  }

  // override_bootstrap_cmd - computed: false, optional: true, required: false
  private _overrideBootstrapCmd?: string; 
  public get overrideBootstrapCmd() {
    return this.getStringAttribute('override_bootstrap_cmd');
  }
  public set overrideBootstrapCmd(value: string) {
    this._overrideBootstrapCmd = value;
  }
  public resetOverrideBootstrapCmd() {
    this._overrideBootstrapCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideBootstrapCmdInput() {
    return this._overrideBootstrapCmd;
  }
}
export interface DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplate {
  /**
  * The ID of the launch template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#id DataTanzuMissionControlEkscluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the launch template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#name DataTanzuMissionControlEkscluster#name}
  */
  readonly name?: string;
  /**
  * The version of the launch template to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#version DataTanzuMissionControlEkscluster#version}
  */
  readonly version?: string;
}

export function dataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplateToTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplateOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplateToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplateOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplate): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplate | undefined {
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
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
export interface DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccess {
  /**
  * Security groups for the VMs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#security_groups DataTanzuMissionControlEkscluster#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * SSH key allows you to connect to your instances and gather diagnostic information if there are issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#ssh_key DataTanzuMissionControlEkscluster#ssh_key}
  */
  readonly sshKey?: string;
}

export function dataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccessToTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccessOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
  }
}


export function dataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccessToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccessOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroups = undefined;
      this._sshKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._sshKey = value.sshKey;
    }
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
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

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }
}
export interface DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfig {
  /**
  * Desired size of nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#desired_size DataTanzuMissionControlEkscluster#desired_size}
  */
  readonly desiredSize?: number;
  /**
  * Maximum size of nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#max_size DataTanzuMissionControlEkscluster#max_size}
  */
  readonly maxSize?: number;
  /**
  * Minimum size of nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#min_size DataTanzuMissionControlEkscluster#min_size}
  */
  readonly minSize?: number;
}

export function dataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfigToTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfigOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_size: cdktf.numberToTerraform(struct!.desiredSize),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}


export function dataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfigToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfigOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_size: {
      value: cdktf.numberToHclTerraform(struct!.desiredSize),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredSize = this._desiredSize;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredSize = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredSize = value.desiredSize;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
    }
  }

  // desired_size - computed: false, optional: true, required: false
  private _desiredSize?: number; 
  public get desiredSize() {
    return this.getNumberAttribute('desired_size');
  }
  public set desiredSize(value: number) {
    this._desiredSize = value;
  }
  public resetDesiredSize() {
    this._desiredSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredSizeInput() {
    return this._desiredSize;
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
}
export interface DataTanzuMissionControlEksclusterSpecNodepoolSpecTaints {
  /**
  * Current effect state of the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#effect DataTanzuMissionControlEkscluster#effect}
  */
  readonly effect?: string;
  /**
  * The taint key to be applied to a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#key DataTanzuMissionControlEkscluster#key}
  */
  readonly key?: string;
  /**
  * The taint value corresponding to the taint key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#value DataTanzuMissionControlEkscluster#value}
  */
  readonly value?: string;
}

export function dataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsToTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecTaints | cdktf.IResolvable): any {
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


export function dataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecTaints | cdktf.IResolvable): any {
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

export class DataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlEksclusterSpecNodepoolSpecTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecTaints | cdktf.IResolvable | undefined) {
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

export class DataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlEksclusterSpecNodepoolSpecTaints[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsOutputReference {
    return new DataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfig {
  /**
  * Maximum number of nodes unavailable at once during a version update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#max_unavailable_nodes DataTanzuMissionControlEkscluster#max_unavailable_nodes}
  */
  readonly maxUnavailableNodes?: string;
  /**
  * Maximum percentage of nodes unavailable during a version update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#max_unavailable_percentage DataTanzuMissionControlEkscluster#max_unavailable_percentage}
  */
  readonly maxUnavailablePercentage?: string;
}

export function dataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfigToTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfigOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable_nodes: cdktf.stringToTerraform(struct!.maxUnavailableNodes),
    max_unavailable_percentage: cdktf.stringToTerraform(struct!.maxUnavailablePercentage),
  }
}


export function dataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfigToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfigOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable_nodes: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailableNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable_percentage: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailablePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailableNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailableNodes = this._maxUnavailableNodes;
    }
    if (this._maxUnavailablePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailablePercentage = this._maxUnavailablePercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxUnavailableNodes = undefined;
      this._maxUnavailablePercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxUnavailableNodes = value.maxUnavailableNodes;
      this._maxUnavailablePercentage = value.maxUnavailablePercentage;
    }
  }

  // max_unavailable_nodes - computed: false, optional: true, required: false
  private _maxUnavailableNodes?: string; 
  public get maxUnavailableNodes() {
    return this.getStringAttribute('max_unavailable_nodes');
  }
  public set maxUnavailableNodes(value: string) {
    this._maxUnavailableNodes = value;
  }
  public resetMaxUnavailableNodes() {
    this._maxUnavailableNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableNodesInput() {
    return this._maxUnavailableNodes;
  }

  // max_unavailable_percentage - computed: false, optional: true, required: false
  private _maxUnavailablePercentage?: string; 
  public get maxUnavailablePercentage() {
    return this.getStringAttribute('max_unavailable_percentage');
  }
  public set maxUnavailablePercentage(value: string) {
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
export interface DataTanzuMissionControlEksclusterSpecNodepoolSpec {
  /**
  * AMI type, immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#ami_type DataTanzuMissionControlEkscluster#ami_type}
  */
  readonly amiType?: string;
  /**
  * Capacity Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#capacity_type DataTanzuMissionControlEkscluster#capacity_type}
  */
  readonly capacityType?: string;
  /**
  * Nodepool instance types, immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#instance_types DataTanzuMissionControlEkscluster#instance_types}
  */
  readonly instanceTypes?: string[];
  /**
  * Kubernetes node labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#node_labels DataTanzuMissionControlEkscluster#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * AMI release version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#release_version DataTanzuMissionControlEkscluster#release_version}
  */
  readonly releaseVersion?: string;
  /**
  * ARN of the IAM role that provides permissions for the Kubernetes nodepool to make calls to AWS API operations, immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#role_arn DataTanzuMissionControlEkscluster#role_arn}
  */
  readonly roleArn: string;
  /**
  * Root disk size in GiB, immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#root_disk_size DataTanzuMissionControlEkscluster#root_disk_size}
  */
  readonly rootDiskSize?: number;
  /**
  * Subnets required for the nodepool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#subnet_ids DataTanzuMissionControlEkscluster#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * EKS specific tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#tags DataTanzuMissionControlEkscluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ami_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#ami_info DataTanzuMissionControlEkscluster#ami_info}
  */
  readonly amiInfo?: DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfo;
  /**
  * launch_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#launch_template DataTanzuMissionControlEkscluster#launch_template}
  */
  readonly launchTemplate?: DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplate;
  /**
  * remote_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#remote_access DataTanzuMissionControlEkscluster#remote_access}
  */
  readonly remoteAccess?: DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccess;
  /**
  * scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#scaling_config DataTanzuMissionControlEkscluster#scaling_config}
  */
  readonly scalingConfig?: DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfig;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#taints DataTanzuMissionControlEkscluster#taints}
  */
  readonly taints?: DataTanzuMissionControlEksclusterSpecNodepoolSpecTaints[] | cdktf.IResolvable;
  /**
  * update_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#update_config DataTanzuMissionControlEkscluster#update_config}
  */
  readonly updateConfig?: DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfig;
}

export function dataTanzuMissionControlEksclusterSpecNodepoolSpecToTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_type: cdktf.stringToTerraform(struct!.amiType),
    capacity_type: cdktf.stringToTerraform(struct!.capacityType),
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    release_version: cdktf.stringToTerraform(struct!.releaseVersion),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    root_disk_size: cdktf.numberToTerraform(struct!.rootDiskSize),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    ami_info: dataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfoToTerraform(struct!.amiInfo),
    launch_template: dataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplateToTerraform(struct!.launchTemplate),
    remote_access: dataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccessToTerraform(struct!.remoteAccess),
    scaling_config: dataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfigToTerraform(struct!.scalingConfig),
    taints: cdktf.listMapper(dataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsToTerraform, true)(struct!.taints),
    update_config: dataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfigToTerraform(struct!.updateConfig),
  }
}


export function dataTanzuMissionControlEksclusterSpecNodepoolSpecToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepoolSpecOutputReference | DataTanzuMissionControlEksclusterSpecNodepoolSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ami_type: {
      value: cdktf.stringToHclTerraform(struct!.amiType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_type: {
      value: cdktf.stringToHclTerraform(struct!.capacityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    release_version: {
      value: cdktf.stringToHclTerraform(struct!.releaseVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.rootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ami_info: {
      value: dataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfoToHclTerraform(struct!.amiInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfoList",
    },
    launch_template: {
      value: dataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplateToHclTerraform(struct!.launchTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplateList",
    },
    remote_access: {
      value: dataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccessToHclTerraform(struct!.remoteAccess),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccessList",
    },
    scaling_config: {
      value: dataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfigToHclTerraform(struct!.scalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfigList",
    },
    taints: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsList",
    },
    update_config: {
      value: dataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfigToHclTerraform(struct!.updateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecNodepoolSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpecNodepoolSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiType = this._amiType;
    }
    if (this._capacityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityType = this._capacityType;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._releaseVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseVersion = this._releaseVersion;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._rootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDiskSize = this._rootDiskSize;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._amiInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiInfo = this._amiInfo?.internalValue;
    }
    if (this._launchTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTemplate = this._launchTemplate?.internalValue;
    }
    if (this._remoteAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAccess = this._remoteAccess?.internalValue;
    }
    if (this._scalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingConfig = this._scalingConfig?.internalValue;
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

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecNodepoolSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amiType = undefined;
      this._capacityType = undefined;
      this._instanceTypes = undefined;
      this._nodeLabels = undefined;
      this._releaseVersion = undefined;
      this._roleArn = undefined;
      this._rootDiskSize = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._amiInfo.internalValue = undefined;
      this._launchTemplate.internalValue = undefined;
      this._remoteAccess.internalValue = undefined;
      this._scalingConfig.internalValue = undefined;
      this._taints.internalValue = undefined;
      this._updateConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amiType = value.amiType;
      this._capacityType = value.capacityType;
      this._instanceTypes = value.instanceTypes;
      this._nodeLabels = value.nodeLabels;
      this._releaseVersion = value.releaseVersion;
      this._roleArn = value.roleArn;
      this._rootDiskSize = value.rootDiskSize;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._amiInfo.internalValue = value.amiInfo;
      this._launchTemplate.internalValue = value.launchTemplate;
      this._remoteAccess.internalValue = value.remoteAccess;
      this._scalingConfig.internalValue = value.scalingConfig;
      this._taints.internalValue = value.taints;
      this._updateConfig.internalValue = value.updateConfig;
    }
  }

  // ami_type - computed: true, optional: true, required: false
  private _amiType?: string; 
  public get amiType() {
    return this.getStringAttribute('ami_type');
  }
  public set amiType(value: string) {
    this._amiType = value;
  }
  public resetAmiType() {
    this._amiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiTypeInput() {
    return this._amiType;
  }

  // capacity_type - computed: true, optional: true, required: false
  private _capacityType?: string; 
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }
  public set capacityType(value: string) {
    this._capacityType = value;
  }
  public resetCapacityType() {
    this._capacityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityTypeInput() {
    return this._capacityType;
  }

  // instance_types - computed: true, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_types'));
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

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // release_version - computed: true, optional: true, required: false
  private _releaseVersion?: string; 
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }
  public set releaseVersion(value: string) {
    this._releaseVersion = value;
  }
  public resetReleaseVersion() {
    this._releaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseVersionInput() {
    return this._releaseVersion;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // root_disk_size - computed: true, optional: true, required: false
  private _rootDiskSize?: number; 
  public get rootDiskSize() {
    return this.getNumberAttribute('root_disk_size');
  }
  public set rootDiskSize(value: number) {
    this._rootDiskSize = value;
  }
  public resetRootDiskSize() {
    this._rootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDiskSizeInput() {
    return this._rootDiskSize;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // ami_info - computed: false, optional: true, required: false
  private _amiInfo = new DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfoOutputReference(this, "ami_info");
  public get amiInfo() {
    return this._amiInfo;
  }
  public putAmiInfo(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecAmiInfo) {
    this._amiInfo.internalValue = value;
  }
  public resetAmiInfo() {
    this._amiInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiInfoInput() {
    return this._amiInfo.internalValue;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate = new DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplateOutputReference(this, "launch_template");
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public putLaunchTemplate(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecLaunchTemplate) {
    this._launchTemplate.internalValue = value;
  }
  public resetLaunchTemplate() {
    this._launchTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateInput() {
    return this._launchTemplate.internalValue;
  }

  // remote_access - computed: false, optional: true, required: false
  private _remoteAccess = new DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccessOutputReference(this, "remote_access");
  public get remoteAccess() {
    return this._remoteAccess;
  }
  public putRemoteAccess(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecRemoteAccess) {
    this._remoteAccess.internalValue = value;
  }
  public resetRemoteAccess() {
    this._remoteAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccessInput() {
    return this._remoteAccess.internalValue;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfigOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecScalingConfig) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new DataTanzuMissionControlEksclusterSpecNodepoolSpecTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecTaints[] | cdktf.IResolvable) {
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
  private _updateConfig = new DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfigOutputReference(this, "update_config");
  public get updateConfig() {
    return this._updateConfig;
  }
  public putUpdateConfig(value: DataTanzuMissionControlEksclusterSpecNodepoolSpecUpdateConfig) {
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
export interface DataTanzuMissionControlEksclusterSpecNodepool {
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#info DataTanzuMissionControlEkscluster#info}
  */
  readonly info: DataTanzuMissionControlEksclusterSpecNodepoolInfo;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#spec DataTanzuMissionControlEkscluster#spec}
  */
  readonly spec: DataTanzuMissionControlEksclusterSpecNodepoolSpec;
}

export function dataTanzuMissionControlEksclusterSpecNodepoolToTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info: dataTanzuMissionControlEksclusterSpecNodepoolInfoToTerraform(struct!.info),
    spec: dataTanzuMissionControlEksclusterSpecNodepoolSpecToTerraform(struct!.spec),
  }
}


export function dataTanzuMissionControlEksclusterSpecNodepoolToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecNodepool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info: {
      value: dataTanzuMissionControlEksclusterSpecNodepoolInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecNodepoolInfoList",
    },
    spec: {
      value: dataTanzuMissionControlEksclusterSpecNodepoolSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecNodepoolSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecNodepoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTanzuMissionControlEksclusterSpecNodepool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpecNodepool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._info.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._info.internalValue = value.info;
      this._spec.internalValue = value.spec;
    }
  }

  // info - computed: false, optional: false, required: true
  private _info = new DataTanzuMissionControlEksclusterSpecNodepoolInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: DataTanzuMissionControlEksclusterSpecNodepoolInfo) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataTanzuMissionControlEksclusterSpecNodepoolSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlEksclusterSpecNodepoolSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class DataTanzuMissionControlEksclusterSpecNodepoolList extends cdktf.ComplexList {
  public internalValue? : DataTanzuMissionControlEksclusterSpecNodepool[] | cdktf.IResolvable

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
  public get(index: number): DataTanzuMissionControlEksclusterSpecNodepoolOutputReference {
    return new DataTanzuMissionControlEksclusterSpecNodepoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTanzuMissionControlEksclusterSpec {
  /**
  * Name of the cluster group to which this cluster belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#cluster_group DataTanzuMissionControlEkscluster#cluster_group}
  */
  readonly clusterGroup?: string;
  /**
  * Optional proxy name is the name of the Proxy Config to be used for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#proxy DataTanzuMissionControlEkscluster#proxy}
  */
  readonly proxy?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#config DataTanzuMissionControlEkscluster#config}
  */
  readonly config: DataTanzuMissionControlEksclusterSpecConfig;
  /**
  * nodepool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#nodepool DataTanzuMissionControlEkscluster#nodepool}
  */
  readonly nodepool: DataTanzuMissionControlEksclusterSpecNodepool[] | cdktf.IResolvable;
}

export function dataTanzuMissionControlEksclusterSpecToTerraform(struct?: DataTanzuMissionControlEksclusterSpecOutputReference | DataTanzuMissionControlEksclusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    config: dataTanzuMissionControlEksclusterSpecConfigToTerraform(struct!.config),
    nodepool: cdktf.listMapper(dataTanzuMissionControlEksclusterSpecNodepoolToTerraform, true)(struct!.nodepool),
  }
}


export function dataTanzuMissionControlEksclusterSpecToHclTerraform(struct?: DataTanzuMissionControlEksclusterSpecOutputReference | DataTanzuMissionControlEksclusterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_group: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: dataTanzuMissionControlEksclusterSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecConfigList",
    },
    nodepool: {
      value: cdktf.listMapperHcl(dataTanzuMissionControlEksclusterSpecNodepoolToHclTerraform, true)(struct!.nodepool),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlEksclusterSpecNodepoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlEksclusterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlEksclusterSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._nodepool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodepool = this._nodepool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlEksclusterSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterGroup = undefined;
      this._proxy = undefined;
      this._config.internalValue = undefined;
      this._nodepool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterGroup = value.clusterGroup;
      this._proxy = value.proxy;
      this._config.internalValue = value.config;
      this._nodepool.internalValue = value.nodepool;
    }
  }

  // cluster_group - computed: false, optional: true, required: false
  private _clusterGroup?: string; 
  public get clusterGroup() {
    return this.getStringAttribute('cluster_group');
  }
  public set clusterGroup(value: string) {
    this._clusterGroup = value;
  }
  public resetClusterGroup() {
    this._clusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // config - computed: false, optional: false, required: true
  private _config = new DataTanzuMissionControlEksclusterSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataTanzuMissionControlEksclusterSpecConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // nodepool - computed: false, optional: false, required: true
  private _nodepool = new DataTanzuMissionControlEksclusterSpecNodepoolList(this, "nodepool", false);
  public get nodepool() {
    return this._nodepool;
  }
  public putNodepool(value: DataTanzuMissionControlEksclusterSpecNodepool[] | cdktf.IResolvable) {
    this._nodepool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolInput() {
    return this._nodepool.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster tanzu-mission-control_ekscluster}
*/
export class DataTanzuMissionControlEkscluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_ekscluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlEkscluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlEkscluster to import
  * @param importFromId The id of the existing DataTanzuMissionControlEkscluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlEkscluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_ekscluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/data-sources/ekscluster tanzu-mission-control_ekscluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlEksclusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlEksclusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_ekscluster',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.10',
        providerVersionConstraint: '1.4.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialName = config.credentialName;
    this._id = config.id;
    this._name = config.name;
    this._readyWaitTimeout = config.readyWaitTimeout;
    this._region = config.region;
    this._waitForKubeconfig = config.waitForKubeconfig;
    this._meta.internalValue = config.meta;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_name - computed: false, optional: false, required: true
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
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

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
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

  // ready_wait_timeout - computed: false, optional: true, required: false
  private _readyWaitTimeout?: string; 
  public get readyWaitTimeout() {
    return this.getStringAttribute('ready_wait_timeout');
  }
  public set readyWaitTimeout(value: string) {
    this._readyWaitTimeout = value;
  }
  public resetReadyWaitTimeout() {
    this._readyWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyWaitTimeoutInput() {
    return this._readyWaitTimeout;
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

  // status - computed: true, optional: false, required: false
  private _status = new cdktf.StringMap(this, "status");
  public get status() {
    return this._status;
  }

  // wait_for_kubeconfig - computed: false, optional: true, required: false
  private _waitForKubeconfig?: boolean | cdktf.IResolvable; 
  public get waitForKubeconfig() {
    return this.getBooleanAttribute('wait_for_kubeconfig');
  }
  public set waitForKubeconfig(value: boolean | cdktf.IResolvable) {
    this._waitForKubeconfig = value;
  }
  public resetWaitForKubeconfig() {
    this._waitForKubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForKubeconfigInput() {
    return this._waitForKubeconfig;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DataTanzuMissionControlEksclusterMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataTanzuMissionControlEksclusterMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataTanzuMissionControlEksclusterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlEksclusterSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_name: cdktf.stringToTerraform(this._credentialName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ready_wait_timeout: cdktf.stringToTerraform(this._readyWaitTimeout),
      region: cdktf.stringToTerraform(this._region),
      wait_for_kubeconfig: cdktf.booleanToTerraform(this._waitForKubeconfig),
      meta: dataTanzuMissionControlEksclusterMetaToTerraform(this._meta.internalValue),
      spec: dataTanzuMissionControlEksclusterSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_name: {
        value: cdktf.stringToHclTerraform(this._credentialName),
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
      ready_wait_timeout: {
        value: cdktf.stringToHclTerraform(this._readyWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_kubeconfig: {
        value: cdktf.booleanToHclTerraform(this._waitForKubeconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      meta: {
        value: dataTanzuMissionControlEksclusterMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlEksclusterMetaList",
      },
      spec: {
        value: dataTanzuMissionControlEksclusterSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlEksclusterSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
