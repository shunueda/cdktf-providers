// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterTypeEksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#allow_override_credentials ClusterTypeEks#allow_override_credentials}
  */
  readonly allowOverrideCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#auto_sync_namespaces ClusterTypeEks#auto_sync_namespaces}
  */
  readonly autoSyncNamespaces: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#cluster_field_override ClusterTypeEks#cluster_field_override}
  */
  readonly clusterFieldOverride?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#cluster_role_arn ClusterTypeEks#cluster_role_arn}
  */
  readonly clusterRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#credentials ClusterTypeEks#credentials}
  */
  readonly credentials: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#enable_fargate ClusterTypeEks#enable_fargate}
  */
  readonly enableFargate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#enable_identity_provider ClusterTypeEks#enable_identity_provider}
  */
  readonly enableIdentityProvider?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#enable_private_endpoint ClusterTypeEks#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#enable_secrets_encryption ClusterTypeEks#enable_secrets_encryption}
  */
  readonly enableSecretsEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#id ClusterTypeEks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#kms_key_arn ClusterTypeEks#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#log_types ClusterTypeEks#log_types}
  */
  readonly logTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#name ClusterTypeEks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#namespace_label_selectors ClusterTypeEks#namespace_label_selectors}
  */
  readonly namespaceLabelSelectors?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#nodepool_field_override ClusterTypeEks#nodepool_field_override}
  */
  readonly nodepoolFieldOverride?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#pod_execution_role_arn ClusterTypeEks#pod_execution_role_arn}
  */
  readonly podExecutionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#pod_label_selectors ClusterTypeEks#pod_label_selectors}
  */
  readonly podLabelSelectors?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#region ClusterTypeEks#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#security_groups ClusterTypeEks#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#subnet_id ClusterTypeEks#subnet_id}
  */
  readonly subnetId: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#subnets ClusterTypeEks#subnets}
  */
  readonly subnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#system_metadata ClusterTypeEks#system_metadata}
  */
  readonly systemMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#version ClusterTypeEks#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#vpc_id ClusterTypeEks#vpc_id}
  */
  readonly vpcId: string;
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#addons ClusterTypeEks#addons}
  */
  readonly addons?: ClusterTypeEksAddons[] | cdktf.IResolvable;
  /**
  * nodepools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#nodepools ClusterTypeEks#nodepools}
  */
  readonly nodepools: ClusterTypeEksNodepools[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#timeouts ClusterTypeEks#timeouts}
  */
  readonly timeouts?: ClusterTypeEksTimeouts;
  /**
  * vault_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#vault_auth ClusterTypeEks#vault_auth}
  */
  readonly vaultAuth?: ClusterTypeEksVaultAuth;
}
export interface ClusterTypeEksAddons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#addon_selector ClusterTypeEks#addon_selector}
  */
  readonly addonSelector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#catalog ClusterTypeEks#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#channel ClusterTypeEks#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#name ClusterTypeEks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#namespace ClusterTypeEks#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#sequence_number ClusterTypeEks#sequence_number}
  */
  readonly sequenceNumber: number;
}

export function clusterTypeEksAddonsToTerraform(struct?: ClusterTypeEksAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_selector: cdktf.stringToTerraform(struct!.addonSelector),
    catalog: cdktf.stringToTerraform(struct!.catalog),
    channel: cdktf.stringToTerraform(struct!.channel),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
  }
}


export function clusterTypeEksAddonsToHclTerraform(struct?: ClusterTypeEksAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_selector: {
      value: cdktf.stringToHclTerraform(struct!.addonSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeEksAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTypeEksAddons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonSelector = this._addonSelector;
    }
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._sequenceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumber = this._sequenceNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeEksAddons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addonSelector = undefined;
      this._catalog = undefined;
      this._channel = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._sequenceNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addonSelector = value.addonSelector;
      this._catalog = value.catalog;
      this._channel = value.channel;
      this._name = value.name;
      this._namespace = value.namespace;
      this._sequenceNumber = value.sequenceNumber;
    }
  }

  // addon_selector - computed: false, optional: false, required: true
  private _addonSelector?: string; 
  public get addonSelector() {
    return this.getStringAttribute('addon_selector');
  }
  public set addonSelector(value: string) {
    this._addonSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonSelectorInput() {
    return this._addonSelector;
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
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

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }
}

export class ClusterTypeEksAddonsList extends cdktf.ComplexList {
  public internalValue? : ClusterTypeEksAddons[] | cdktf.IResolvable

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
  public get(index: number): ClusterTypeEksAddonsOutputReference {
    return new ClusterTypeEksAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTypeEksNodepools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#ami_type ClusterTypeEks#ami_type}
  */
  readonly amiType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#disk_size ClusterTypeEks#disk_size}
  */
  readonly diskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#iam_role ClusterTypeEks#iam_role}
  */
  readonly iamRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#image_id ClusterTypeEks#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#instance_type ClusterTypeEks#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#name ClusterTypeEks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#node_annotations ClusterTypeEks#node_annotations}
  */
  readonly nodeAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#node_labels ClusterTypeEks#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#security_groups ClusterTypeEks#security_groups}
  */
  readonly securityGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#ssh_key_name ClusterTypeEks#ssh_key_name}
  */
  readonly sshKeyName?: string;
}

export function clusterTypeEksNodepoolsToTerraform(struct?: ClusterTypeEksNodepools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_type: cdktf.stringToTerraform(struct!.amiType),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    iam_role: cdktf.stringToTerraform(struct!.iamRole),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    name: cdktf.stringToTerraform(struct!.name),
    node_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAnnotations),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    ssh_key_name: cdktf.stringToTerraform(struct!.sshKeyName),
  }
}


export function clusterTypeEksNodepoolsToHclTerraform(struct?: ClusterTypeEksNodepools | cdktf.IResolvable): any {
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
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iam_role: {
      value: cdktf.stringToHclTerraform(struct!.iamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssh_key_name: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeEksNodepoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTypeEksNodepools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amiType !== undefined) {
      hasAnyValues = true;
      internalValueResult.amiType = this._amiType;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._iamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAnnotations = this._nodeAnnotations;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._sshKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyName = this._sshKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeEksNodepools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amiType = undefined;
      this._diskSize = undefined;
      this._iamRole = undefined;
      this._imageId = undefined;
      this._instanceType = undefined;
      this._name = undefined;
      this._nodeAnnotations = undefined;
      this._nodeLabels = undefined;
      this._securityGroups = undefined;
      this._sshKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amiType = value.amiType;
      this._diskSize = value.diskSize;
      this._iamRole = value.iamRole;
      this._imageId = value.imageId;
      this._instanceType = value.instanceType;
      this._name = value.name;
      this._nodeAnnotations = value.nodeAnnotations;
      this._nodeLabels = value.nodeLabels;
      this._securityGroups = value.securityGroups;
      this._sshKeyName = value.sshKeyName;
    }
  }

  // ami_type - computed: false, optional: true, required: false
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

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // iam_role - computed: false, optional: false, required: true
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // node_annotations - computed: false, optional: true, required: false
  private _nodeAnnotations?: { [key: string]: string }; 
  public get nodeAnnotations() {
    return this.getStringMapAttribute('node_annotations');
  }
  public set nodeAnnotations(value: { [key: string]: string }) {
    this._nodeAnnotations = value;
  }
  public resetNodeAnnotations() {
    this._nodeAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAnnotationsInput() {
    return this._nodeAnnotations;
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

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // ssh_key_name - computed: false, optional: true, required: false
  private _sshKeyName?: string; 
  public get sshKeyName() {
    return this.getStringAttribute('ssh_key_name');
  }
  public set sshKeyName(value: string) {
    this._sshKeyName = value;
  }
  public resetSshKeyName() {
    this._sshKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNameInput() {
    return this._sshKeyName;
  }
}

export class ClusterTypeEksNodepoolsList extends cdktf.ComplexList {
  public internalValue? : ClusterTypeEksNodepools[] | cdktf.IResolvable

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
  public get(index: number): ClusterTypeEksNodepoolsOutputReference {
    return new ClusterTypeEksNodepoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTypeEksTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#create ClusterTypeEks#create}
  */
  readonly create?: string;
}

export function clusterTypeEksTimeoutsToTerraform(struct?: ClusterTypeEksTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function clusterTypeEksTimeoutsToHclTerraform(struct?: ClusterTypeEksTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeEksTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTypeEksTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeEksTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
export interface ClusterTypeEksVaultAuthRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#name ClusterTypeEks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#namespace ClusterTypeEks#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#policies ClusterTypeEks#policies}
  */
  readonly policies: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#service_account_name ClusterTypeEks#service_account_name}
  */
  readonly serviceAccountName: string;
}

export function clusterTypeEksVaultAuthRolesToTerraform(struct?: ClusterTypeEksVaultAuthRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    policies: cdktf.stringToTerraform(struct!.policies),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function clusterTypeEksVaultAuthRolesToHclTerraform(struct?: ClusterTypeEksVaultAuthRoles | cdktf.IResolvable): any {
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
    policies: {
      value: cdktf.stringToHclTerraform(struct!.policies),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeEksVaultAuthRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTypeEksVaultAuthRoles | cdktf.IResolvable | undefined {
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
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeEksVaultAuthRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._policies = undefined;
      this._serviceAccountName = undefined;
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
      this._policies = value.policies;
      this._serviceAccountName = value.serviceAccountName;
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

  // policies - computed: false, optional: false, required: true
  private _policies?: string; 
  public get policies() {
    return this.getStringAttribute('policies');
  }
  public set policies(value: string) {
    this._policies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
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
}

export class ClusterTypeEksVaultAuthRolesList extends cdktf.ComplexList {
  public internalValue? : ClusterTypeEksVaultAuthRoles[] | cdktf.IResolvable

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
  public get(index: number): ClusterTypeEksVaultAuthRolesOutputReference {
    return new ClusterTypeEksVaultAuthRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTypeEksVaultAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#addon_name ClusterTypeEks#addon_name}
  */
  readonly addonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#credentials_id ClusterTypeEks#credentials_id}
  */
  readonly credentialsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#credentials_name ClusterTypeEks#credentials_name}
  */
  readonly credentialsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#delete_auth_path ClusterTypeEks#delete_auth_path}
  */
  readonly deleteAuthPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#name ClusterTypeEks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#path ClusterTypeEks#path}
  */
  readonly path: string;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#roles ClusterTypeEks#roles}
  */
  readonly roles?: ClusterTypeEksVaultAuthRoles[] | cdktf.IResolvable;
}

export function clusterTypeEksVaultAuthToTerraform(struct?: ClusterTypeEksVaultAuthOutputReference | ClusterTypeEksVaultAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_name: cdktf.stringToTerraform(struct!.addonName),
    credentials_id: cdktf.stringToTerraform(struct!.credentialsId),
    credentials_name: cdktf.stringToTerraform(struct!.credentialsName),
    delete_auth_path: cdktf.booleanToTerraform(struct!.deleteAuthPath),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    roles: cdktf.listMapper(clusterTypeEksVaultAuthRolesToTerraform, true)(struct!.roles),
  }
}


export function clusterTypeEksVaultAuthToHclTerraform(struct?: ClusterTypeEksVaultAuthOutputReference | ClusterTypeEksVaultAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_name: {
      value: cdktf.stringToHclTerraform(struct!.addonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialsId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_auth_path: {
      value: cdktf.booleanToHclTerraform(struct!.deleteAuthPath),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(clusterTypeEksVaultAuthRolesToHclTerraform, true)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTypeEksVaultAuthRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeEksVaultAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTypeEksVaultAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonName = this._addonName;
    }
    if (this._credentialsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsId = this._credentialsId;
    }
    if (this._credentialsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsName = this._credentialsName;
    }
    if (this._deleteAuthPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAuthPath = this._deleteAuthPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeEksVaultAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addonName = undefined;
      this._credentialsId = undefined;
      this._credentialsName = undefined;
      this._deleteAuthPath = undefined;
      this._name = undefined;
      this._path = undefined;
      this._roles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addonName = value.addonName;
      this._credentialsId = value.credentialsId;
      this._credentialsName = value.credentialsName;
      this._deleteAuthPath = value.deleteAuthPath;
      this._name = value.name;
      this._path = value.path;
      this._roles.internalValue = value.roles;
    }
  }

  // addon_name - computed: false, optional: false, required: true
  private _addonName?: string; 
  public get addonName() {
    return this.getStringAttribute('addon_name');
  }
  public set addonName(value: string) {
    this._addonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNameInput() {
    return this._addonName;
  }

  // credentials_id - computed: false, optional: true, required: false
  private _credentialsId?: string; 
  public get credentialsId() {
    return this.getStringAttribute('credentials_id');
  }
  public set credentialsId(value: string) {
    this._credentialsId = value;
  }
  public resetCredentialsId() {
    this._credentialsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsIdInput() {
    return this._credentialsId;
  }

  // credentials_name - computed: false, optional: true, required: false
  private _credentialsName?: string; 
  public get credentialsName() {
    return this.getStringAttribute('credentials_name');
  }
  public set credentialsName(value: string) {
    this._credentialsName = value;
  }
  public resetCredentialsName() {
    this._credentialsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsNameInput() {
    return this._credentialsName;
  }

  // delete_auth_path - computed: false, optional: true, required: false
  private _deleteAuthPath?: boolean | cdktf.IResolvable; 
  public get deleteAuthPath() {
    return this.getBooleanAttribute('delete_auth_path');
  }
  public set deleteAuthPath(value: boolean | cdktf.IResolvable) {
    this._deleteAuthPath = value;
  }
  public resetDeleteAuthPath() {
    this._deleteAuthPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAuthPathInput() {
    return this._deleteAuthPath;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new ClusterTypeEksVaultAuthRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: ClusterTypeEksVaultAuthRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks nirmata_cluster_type_eks}
*/
export class ClusterTypeEks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_cluster_type_eks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterTypeEks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterTypeEks to import
  * @param importFromId The id of the existing ClusterTypeEks that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterTypeEks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_cluster_type_eks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_eks nirmata_cluster_type_eks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterTypeEksConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterTypeEksConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_cluster_type_eks',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowOverrideCredentials = config.allowOverrideCredentials;
    this._autoSyncNamespaces = config.autoSyncNamespaces;
    this._clusterFieldOverride = config.clusterFieldOverride;
    this._clusterRoleArn = config.clusterRoleArn;
    this._credentials = config.credentials;
    this._enableFargate = config.enableFargate;
    this._enableIdentityProvider = config.enableIdentityProvider;
    this._enablePrivateEndpoint = config.enablePrivateEndpoint;
    this._enableSecretsEncryption = config.enableSecretsEncryption;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._logTypes = config.logTypes;
    this._name = config.name;
    this._namespaceLabelSelectors = config.namespaceLabelSelectors;
    this._nodepoolFieldOverride = config.nodepoolFieldOverride;
    this._podExecutionRoleArn = config.podExecutionRoleArn;
    this._podLabelSelectors = config.podLabelSelectors;
    this._region = config.region;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._subnets = config.subnets;
    this._systemMetadata = config.systemMetadata;
    this._version = config.version;
    this._vpcId = config.vpcId;
    this._addons.internalValue = config.addons;
    this._nodepools.internalValue = config.nodepools;
    this._timeouts.internalValue = config.timeouts;
    this._vaultAuth.internalValue = config.vaultAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_override_credentials - computed: false, optional: true, required: false
  private _allowOverrideCredentials?: boolean | cdktf.IResolvable; 
  public get allowOverrideCredentials() {
    return this.getBooleanAttribute('allow_override_credentials');
  }
  public set allowOverrideCredentials(value: boolean | cdktf.IResolvable) {
    this._allowOverrideCredentials = value;
  }
  public resetAllowOverrideCredentials() {
    this._allowOverrideCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverrideCredentialsInput() {
    return this._allowOverrideCredentials;
  }

  // auto_sync_namespaces - computed: false, optional: false, required: true
  private _autoSyncNamespaces?: boolean | cdktf.IResolvable; 
  public get autoSyncNamespaces() {
    return this.getBooleanAttribute('auto_sync_namespaces');
  }
  public set autoSyncNamespaces(value: boolean | cdktf.IResolvable) {
    this._autoSyncNamespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncNamespacesInput() {
    return this._autoSyncNamespaces;
  }

  // cluster_field_override - computed: false, optional: true, required: false
  private _clusterFieldOverride?: { [key: string]: string }; 
  public get clusterFieldOverride() {
    return this.getStringMapAttribute('cluster_field_override');
  }
  public set clusterFieldOverride(value: { [key: string]: string }) {
    this._clusterFieldOverride = value;
  }
  public resetClusterFieldOverride() {
    this._clusterFieldOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFieldOverrideInput() {
    return this._clusterFieldOverride;
  }

  // cluster_role_arn - computed: false, optional: false, required: true
  private _clusterRoleArn?: string; 
  public get clusterRoleArn() {
    return this.getStringAttribute('cluster_role_arn');
  }
  public set clusterRoleArn(value: string) {
    this._clusterRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleArnInput() {
    return this._clusterRoleArn;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // enable_fargate - computed: false, optional: true, required: false
  private _enableFargate?: boolean | cdktf.IResolvable; 
  public get enableFargate() {
    return this.getBooleanAttribute('enable_fargate');
  }
  public set enableFargate(value: boolean | cdktf.IResolvable) {
    this._enableFargate = value;
  }
  public resetEnableFargate() {
    this._enableFargate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFargateInput() {
    return this._enableFargate;
  }

  // enable_identity_provider - computed: false, optional: true, required: false
  private _enableIdentityProvider?: boolean | cdktf.IResolvable; 
  public get enableIdentityProvider() {
    return this.getBooleanAttribute('enable_identity_provider');
  }
  public set enableIdentityProvider(value: boolean | cdktf.IResolvable) {
    this._enableIdentityProvider = value;
  }
  public resetEnableIdentityProvider() {
    this._enableIdentityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentityProviderInput() {
    return this._enableIdentityProvider;
  }

  // enable_private_endpoint - computed: false, optional: true, required: false
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }
  public set enablePrivateEndpoint(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  public resetEnablePrivateEndpoint() {
    this._enablePrivateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEndpointInput() {
    return this._enablePrivateEndpoint;
  }

  // enable_secrets_encryption - computed: false, optional: true, required: false
  private _enableSecretsEncryption?: boolean | cdktf.IResolvable; 
  public get enableSecretsEncryption() {
    return this.getBooleanAttribute('enable_secrets_encryption');
  }
  public set enableSecretsEncryption(value: boolean | cdktf.IResolvable) {
    this._enableSecretsEncryption = value;
  }
  public resetEnableSecretsEncryption() {
    this._enableSecretsEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecretsEncryptionInput() {
    return this._enableSecretsEncryption;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // log_types - computed: false, optional: true, required: false
  private _logTypes?: string[]; 
  public get logTypes() {
    return this.getListAttribute('log_types');
  }
  public set logTypes(value: string[]) {
    this._logTypes = value;
  }
  public resetLogTypes() {
    this._logTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
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

  // namespace_label_selectors - computed: false, optional: true, required: false
  private _namespaceLabelSelectors?: { [key: string]: string }; 
  public get namespaceLabelSelectors() {
    return this.getStringMapAttribute('namespace_label_selectors');
  }
  public set namespaceLabelSelectors(value: { [key: string]: string }) {
    this._namespaceLabelSelectors = value;
  }
  public resetNamespaceLabelSelectors() {
    this._namespaceLabelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceLabelSelectorsInput() {
    return this._namespaceLabelSelectors;
  }

  // nodepool_field_override - computed: false, optional: true, required: false
  private _nodepoolFieldOverride?: { [key: string]: string }; 
  public get nodepoolFieldOverride() {
    return this.getStringMapAttribute('nodepool_field_override');
  }
  public set nodepoolFieldOverride(value: { [key: string]: string }) {
    this._nodepoolFieldOverride = value;
  }
  public resetNodepoolFieldOverride() {
    this._nodepoolFieldOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolFieldOverrideInput() {
    return this._nodepoolFieldOverride;
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

  // pod_label_selectors - computed: false, optional: true, required: false
  private _podLabelSelectors?: { [key: string]: string }; 
  public get podLabelSelectors() {
    return this.getStringMapAttribute('pod_label_selectors');
  }
  public set podLabelSelectors(value: { [key: string]: string }) {
    this._podLabelSelectors = value;
  }
  public resetPodLabelSelectors() {
    this._podLabelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podLabelSelectorsInput() {
    return this._podLabelSelectors;
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

  // security_groups - computed: false, optional: false, required: true
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string[]; 
  public get subnetId() {
    return this.getListAttribute('subnet_id');
  }
  public set subnetId(value: string[]) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // system_metadata - computed: false, optional: true, required: false
  private _systemMetadata?: { [key: string]: string }; 
  public get systemMetadata() {
    return this.getStringMapAttribute('system_metadata');
  }
  public set systemMetadata(value: { [key: string]: string }) {
    this._systemMetadata = value;
  }
  public resetSystemMetadata() {
    this._systemMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMetadataInput() {
    return this._systemMetadata;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // addons - computed: false, optional: true, required: false
  private _addons = new ClusterTypeEksAddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }
  public putAddons(value: ClusterTypeEksAddons[] | cdktf.IResolvable) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // nodepools - computed: false, optional: false, required: true
  private _nodepools = new ClusterTypeEksNodepoolsList(this, "nodepools", false);
  public get nodepools() {
    return this._nodepools;
  }
  public putNodepools(value: ClusterTypeEksNodepools[] | cdktf.IResolvable) {
    this._nodepools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolsInput() {
    return this._nodepools.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTypeEksTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTypeEksTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vault_auth - computed: false, optional: true, required: false
  private _vaultAuth = new ClusterTypeEksVaultAuthOutputReference(this, "vault_auth");
  public get vaultAuth() {
    return this._vaultAuth;
  }
  public putVaultAuth(value: ClusterTypeEksVaultAuth) {
    this._vaultAuth.internalValue = value;
  }
  public resetVaultAuth() {
    this._vaultAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAuthInput() {
    return this._vaultAuth.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_override_credentials: cdktf.booleanToTerraform(this._allowOverrideCredentials),
      auto_sync_namespaces: cdktf.booleanToTerraform(this._autoSyncNamespaces),
      cluster_field_override: cdktf.hashMapper(cdktf.stringToTerraform)(this._clusterFieldOverride),
      cluster_role_arn: cdktf.stringToTerraform(this._clusterRoleArn),
      credentials: cdktf.stringToTerraform(this._credentials),
      enable_fargate: cdktf.booleanToTerraform(this._enableFargate),
      enable_identity_provider: cdktf.booleanToTerraform(this._enableIdentityProvider),
      enable_private_endpoint: cdktf.booleanToTerraform(this._enablePrivateEndpoint),
      enable_secrets_encryption: cdktf.booleanToTerraform(this._enableSecretsEncryption),
      id: cdktf.stringToTerraform(this._id),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      log_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logTypes),
      name: cdktf.stringToTerraform(this._name),
      namespace_label_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(this._namespaceLabelSelectors),
      nodepool_field_override: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodepoolFieldOverride),
      pod_execution_role_arn: cdktf.stringToTerraform(this._podExecutionRoleArn),
      pod_label_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(this._podLabelSelectors),
      region: cdktf.stringToTerraform(this._region),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetId),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      system_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemMetadata),
      version: cdktf.stringToTerraform(this._version),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      addons: cdktf.listMapper(clusterTypeEksAddonsToTerraform, true)(this._addons.internalValue),
      nodepools: cdktf.listMapper(clusterTypeEksNodepoolsToTerraform, true)(this._nodepools.internalValue),
      timeouts: clusterTypeEksTimeoutsToTerraform(this._timeouts.internalValue),
      vault_auth: clusterTypeEksVaultAuthToTerraform(this._vaultAuth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_override_credentials: {
        value: cdktf.booleanToHclTerraform(this._allowOverrideCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_sync_namespaces: {
        value: cdktf.booleanToHclTerraform(this._autoSyncNamespaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_field_override: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._clusterFieldOverride),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cluster_role_arn: {
        value: cdktf.stringToHclTerraform(this._clusterRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_fargate: {
        value: cdktf.booleanToHclTerraform(this._enableFargate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_identity_provider: {
        value: cdktf.booleanToHclTerraform(this._enableIdentityProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_private_endpoint: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_secrets_encryption: {
        value: cdktf.booleanToHclTerraform(this._enableSecretsEncryption),
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
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_label_selectors: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._namespaceLabelSelectors),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      nodepool_field_override: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodepoolFieldOverride),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      pod_execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._podExecutionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_label_selectors: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._podLabelSelectors),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      system_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addons: {
        value: cdktf.listMapperHcl(clusterTypeEksAddonsToHclTerraform, true)(this._addons.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterTypeEksAddonsList",
      },
      nodepools: {
        value: cdktf.listMapperHcl(clusterTypeEksNodepoolsToHclTerraform, true)(this._nodepools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterTypeEksNodepoolsList",
      },
      timeouts: {
        value: clusterTypeEksTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTypeEksTimeouts",
      },
      vault_auth: {
        value: clusterTypeEksVaultAuthToHclTerraform(this._vaultAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterTypeEksVaultAuthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
