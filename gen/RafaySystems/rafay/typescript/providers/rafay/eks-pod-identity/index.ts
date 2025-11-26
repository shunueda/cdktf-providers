// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EksPodIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#id EksPodIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#metadata EksPodIdentity#metadata}
  */
  readonly metadata: EksPodIdentityMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#spec EksPodIdentity#spec}
  */
  readonly spec: EksPodIdentitySpec;
}
export interface EksPodIdentityMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#cluster_name EksPodIdentity#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#project_name EksPodIdentity#project_name}
  */
  readonly projectName: string;
}

export function eksPodIdentityMetadataToTerraform(struct?: EksPodIdentityMetadataOutputReference | EksPodIdentityMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    project_name: cdktf.stringToTerraform(struct!.projectName),
  }
}


export function eksPodIdentityMetadataToHclTerraform(struct?: EksPodIdentityMetadataOutputReference | EksPodIdentityMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksPodIdentityMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksPodIdentityMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksPodIdentityMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
      this._projectName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
      this._projectName = value.projectName;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }
}
export interface EksPodIdentitySpecWellKnownPolicies {
  /**
  * service account annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#auto_scaler EksPodIdentity#auto_scaler}
  */
  readonly autoScaler?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the aws-load-balancer-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#aws_load_balancer_controller EksPodIdentity#aws_load_balancer_controller}
  */
  readonly awsLoadBalancerController?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#cert_manager EksPodIdentity#cert_manager}
  */
  readonly certManager?: boolean | cdktf.IResolvable;
  /**
  * adds cert-manager policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#ebs_csi_controller EksPodIdentity#ebs_csi_controller}
  */
  readonly ebsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds policies for using the ebs-csi-controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#efs_csi_controller EksPodIdentity#efs_csi_controller}
  */
  readonly efsCsiController?: boolean | cdktf.IResolvable;
  /**
  * adds external-dns policies for Amazon Route 53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#external_dns EksPodIdentity#external_dns}
  */
  readonly externalDns?: boolean | cdktf.IResolvable;
  /**
  * allows for full ECR (Elastic Container Registry) access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#image_builder EksPodIdentity#image_builder}
  */
  readonly imageBuilder?: boolean | cdktf.IResolvable;
}

export function eksPodIdentitySpecWellKnownPoliciesToTerraform(struct?: EksPodIdentitySpecWellKnownPolicies | cdktf.IResolvable): any {
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


export function eksPodIdentitySpecWellKnownPoliciesToHclTerraform(struct?: EksPodIdentitySpecWellKnownPolicies | cdktf.IResolvable): any {
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

export class EksPodIdentitySpecWellKnownPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EksPodIdentitySpecWellKnownPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EksPodIdentitySpecWellKnownPolicies | cdktf.IResolvable | undefined) {
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

export class EksPodIdentitySpecWellKnownPoliciesList extends cdktf.ComplexList {
  public internalValue? : EksPodIdentitySpecWellKnownPolicies[] | cdktf.IResolvable

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
  public get(index: number): EksPodIdentitySpecWellKnownPoliciesOutputReference {
    return new EksPodIdentitySpecWellKnownPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EksPodIdentitySpec {
  /**
  * enable flag to create service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#create_service_account EksPodIdentity#create_service_account}
  */
  readonly createServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * namespace of service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#namespace EksPodIdentity#namespace}
  */
  readonly namespace: string;
  /**
  * permission boundary ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#permission_boundary_arn EksPodIdentity#permission_boundary_arn}
  */
  readonly permissionBoundaryArn?: string;
  /**
  * permission policy document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#permission_policy EksPodIdentity#permission_policy}
  */
  readonly permissionPolicy?: string;
  /**
  * permission policy ARNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#permission_policy_arns EksPodIdentity#permission_policy_arns}
  */
  readonly permissionPolicyArns?: string[];
  /**
  * role ARN of AWS role to associate with service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#role_arn EksPodIdentity#role_arn}
  */
  readonly roleArn?: string;
  /**
  * aws role name to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#role_name EksPodIdentity#role_name}
  */
  readonly roleName?: string;
  /**
  * name of service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#service_account_name EksPodIdentity#service_account_name}
  */
  readonly serviceAccountName: string;
  /**
  * AWS tags for the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#tags EksPodIdentity#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * well_known_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#well_known_policies EksPodIdentity#well_known_policies}
  */
  readonly wellKnownPolicies?: EksPodIdentitySpecWellKnownPolicies[] | cdktf.IResolvable;
}

export function eksPodIdentitySpecToTerraform(struct?: EksPodIdentitySpecOutputReference | EksPodIdentitySpec): any {
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
    well_known_policies: cdktf.listMapper(eksPodIdentitySpecWellKnownPoliciesToTerraform, true)(struct!.wellKnownPolicies),
  }
}


export function eksPodIdentitySpecToHclTerraform(struct?: EksPodIdentitySpecOutputReference | EksPodIdentitySpec): any {
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
      value: cdktf.listMapperHcl(eksPodIdentitySpecWellKnownPoliciesToHclTerraform, true)(struct!.wellKnownPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "EksPodIdentitySpecWellKnownPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EksPodIdentitySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EksPodIdentitySpec | undefined {
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

  public set internalValue(value: EksPodIdentitySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _wellKnownPolicies = new EksPodIdentitySpecWellKnownPoliciesList(this, "well_known_policies", false);
  public get wellKnownPolicies() {
    return this._wellKnownPolicies;
  }
  public putWellKnownPolicies(value: EksPodIdentitySpecWellKnownPolicies[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity rafay_eks_pod_identity}
*/
export class EksPodIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_eks_pod_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EksPodIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksPodIdentity to import
  * @param importFromId The id of the existing EksPodIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksPodIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_eks_pod_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/eks_pod_identity rafay_eks_pod_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksPodIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: EksPodIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_eks_pod_identity',
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
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
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

  // metadata - computed: false, optional: false, required: true
  private _metadata = new EksPodIdentityMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: EksPodIdentityMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new EksPodIdentitySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: EksPodIdentitySpec) {
    this._spec.internalValue = value;
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
      id: cdktf.stringToTerraform(this._id),
      metadata: eksPodIdentityMetadataToTerraform(this._metadata.internalValue),
      spec: eksPodIdentitySpecToTerraform(this._spec.internalValue),
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
        value: eksPodIdentityMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksPodIdentityMetadataList",
      },
      spec: {
        value: eksPodIdentitySpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EksPodIdentitySpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
