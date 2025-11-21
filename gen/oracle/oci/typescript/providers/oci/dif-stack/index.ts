// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DifStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#add_service_trigger DifStack#add_service_trigger}
  */
  readonly addServiceTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#compartment_id DifStack#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#defined_tags DifStack#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#deploy_artifacts_trigger DifStack#deploy_artifacts_trigger}
  */
  readonly deployArtifactsTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#display_name DifStack#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#freeform_tags DifStack#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#id DifStack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#notification_email DifStack#notification_email}
  */
  readonly notificationEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#services DifStack#services}
  */
  readonly services: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#stack_templates DifStack#stack_templates}
  */
  readonly stackTemplates: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#subnet_id DifStack#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * adb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#adb DifStack#adb}
  */
  readonly adb?: DifStackAdb[] | cdktf.IResolvable;
  /**
  * dataflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#dataflow DifStack#dataflow}
  */
  readonly dataflow?: DifStackDataflow[] | cdktf.IResolvable;
  /**
  * genai block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#genai DifStack#genai}
  */
  readonly genai?: DifStackGenai[] | cdktf.IResolvable;
  /**
  * ggcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#ggcs DifStack#ggcs}
  */
  readonly ggcs?: DifStackGgcs[] | cdktf.IResolvable;
  /**
  * objectstorage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#objectstorage DifStack#objectstorage}
  */
  readonly objectstorage?: DifStackObjectstorage[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#timeouts DifStack#timeouts}
  */
  readonly timeouts?: DifStackTimeouts;
}
export interface DifStackServiceDetailsAdditionalDetailsAssignedConnections {
}

export function difStackServiceDetailsAdditionalDetailsAssignedConnectionsToTerraform(struct?: DifStackServiceDetailsAdditionalDetailsAssignedConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function difStackServiceDetailsAdditionalDetailsAssignedConnectionsToHclTerraform(struct?: DifStackServiceDetailsAdditionalDetailsAssignedConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DifStackServiceDetailsAdditionalDetailsAssignedConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DifStackServiceDetailsAdditionalDetailsAssignedConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackServiceDetailsAdditionalDetailsAssignedConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getStringAttribute('requested_by');
  }
}

export class DifStackServiceDetailsAdditionalDetailsAssignedConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DifStackServiceDetailsAdditionalDetailsAssignedConnectionsOutputReference {
    return new DifStackServiceDetailsAdditionalDetailsAssignedConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackServiceDetailsAdditionalDetailsEndpointDetails {
}

export function difStackServiceDetailsAdditionalDetailsEndpointDetailsToTerraform(struct?: DifStackServiceDetailsAdditionalDetailsEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function difStackServiceDetailsAdditionalDetailsEndpointDetailsToHclTerraform(struct?: DifStackServiceDetailsAdditionalDetailsEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DifStackServiceDetailsAdditionalDetailsEndpointDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DifStackServiceDetailsAdditionalDetailsEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackServiceDetailsAdditionalDetailsEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
}

export class DifStackServiceDetailsAdditionalDetailsEndpointDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DifStackServiceDetailsAdditionalDetailsEndpointDetailsOutputReference {
    return new DifStackServiceDetailsAdditionalDetailsEndpointDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackServiceDetailsAdditionalDetails {
}

export function difStackServiceDetailsAdditionalDetailsToTerraform(struct?: DifStackServiceDetailsAdditionalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function difStackServiceDetailsAdditionalDetailsToHclTerraform(struct?: DifStackServiceDetailsAdditionalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DifStackServiceDetailsAdditionalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DifStackServiceDetailsAdditionalDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackServiceDetailsAdditionalDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_connections - computed: true, optional: false, required: false
  private _assignedConnections = new DifStackServiceDetailsAdditionalDetailsAssignedConnectionsList(this, "assigned_connections", false);
  public get assignedConnections() {
    return this._assignedConnections;
  }

  // endpoint_details - computed: true, optional: false, required: false
  private _endpointDetails = new DifStackServiceDetailsAdditionalDetailsEndpointDetailsList(this, "endpoint_details", false);
  public get endpointDetails() {
    return this._endpointDetails;
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // oci_region - computed: true, optional: false, required: false
  public get ociRegion() {
    return this.getStringAttribute('oci_region');
  }

  // private_endpoint_id - computed: true, optional: false, required: false
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
}

export class DifStackServiceDetailsAdditionalDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DifStackServiceDetailsAdditionalDetailsOutputReference {
    return new DifStackServiceDetailsAdditionalDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackServiceDetails {
}

export function difStackServiceDetailsToTerraform(struct?: DifStackServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function difStackServiceDetailsToHclTerraform(struct?: DifStackServiceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DifStackServiceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DifStackServiceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackServiceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_details - computed: true, optional: false, required: false
  private _additionalDetails = new DifStackServiceDetailsAdditionalDetailsList(this, "additional_details", false);
  public get additionalDetails() {
    return this._additionalDetails;
  }

  // current_artifact_path - computed: true, optional: false, required: false
  public get currentArtifactPath() {
    return this.getStringAttribute('current_artifact_path');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DifStackServiceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DifStackServiceDetailsOutputReference {
    return new DifStackServiceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackAdbDbCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#secret_id DifStack#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#user_name DifStack#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#user_type DifStack#user_type}
  */
  readonly userType: string;
}

export function difStackAdbDbCredentialsToTerraform(struct?: DifStackAdbDbCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    user_name: cdktf.stringToTerraform(struct!.userName),
    user_type: cdktf.stringToTerraform(struct!.userType),
  }
}


export function difStackAdbDbCredentialsToHclTerraform(struct?: DifStackAdbDbCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_type: {
      value: cdktf.stringToHclTerraform(struct!.userType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackAdbDbCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackAdbDbCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._userType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userType = this._userType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackAdbDbCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretId = undefined;
      this._userName = undefined;
      this._userType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretId = value.secretId;
      this._userName = value.userName;
      this._userType = value.userType;
    }
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_type - computed: false, optional: false, required: true
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }
}

export class DifStackAdbDbCredentialsList extends cdktf.ComplexList {
  public internalValue? : DifStackAdbDbCredentials[] | cdktf.IResolvable

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
  public get(index: number): DifStackAdbDbCredentialsOutputReference {
    return new DifStackAdbDbCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackAdb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#admin_password_id DifStack#admin_password_id}
  */
  readonly adminPasswordId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#artifact_object_storage_path DifStack#artifact_object_storage_path}
  */
  readonly artifactObjectStoragePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#data_storage_size_in_tbs DifStack#data_storage_size_in_tbs}
  */
  readonly dataStorageSizeInTbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#db_version DifStack#db_version}
  */
  readonly dbVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#db_workload DifStack#db_workload}
  */
  readonly dbWorkload: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#ecpu DifStack#ecpu}
  */
  readonly ecpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#instance_id DifStack#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#is_mtls_connection_required DifStack#is_mtls_connection_required}
  */
  readonly isMtlsConnectionRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#is_public DifStack#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#subnet_id DifStack#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#tools_public_access DifStack#tools_public_access}
  */
  readonly toolsPublicAccess?: string;
  /**
  * db_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#db_credentials DifStack#db_credentials}
  */
  readonly dbCredentials?: DifStackAdbDbCredentials[] | cdktf.IResolvable;
}

export function difStackAdbToTerraform(struct?: DifStackAdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password_id: cdktf.stringToTerraform(struct!.adminPasswordId),
    artifact_object_storage_path: cdktf.stringToTerraform(struct!.artifactObjectStoragePath),
    data_storage_size_in_tbs: cdktf.numberToTerraform(struct!.dataStorageSizeInTbs),
    db_version: cdktf.stringToTerraform(struct!.dbVersion),
    db_workload: cdktf.stringToTerraform(struct!.dbWorkload),
    ecpu: cdktf.numberToTerraform(struct!.ecpu),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    is_mtls_connection_required: cdktf.booleanToTerraform(struct!.isMtlsConnectionRequired),
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tools_public_access: cdktf.stringToTerraform(struct!.toolsPublicAccess),
    db_credentials: cdktf.listMapper(difStackAdbDbCredentialsToTerraform, true)(struct!.dbCredentials),
  }
}


export function difStackAdbToHclTerraform(struct?: DifStackAdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password_id: {
      value: cdktf.stringToHclTerraform(struct!.adminPasswordId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifact_object_storage_path: {
      value: cdktf.stringToHclTerraform(struct!.artifactObjectStoragePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_storage_size_in_tbs: {
      value: cdktf.numberToHclTerraform(struct!.dataStorageSizeInTbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_version: {
      value: cdktf.stringToHclTerraform(struct!.dbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_workload: {
      value: cdktf.stringToHclTerraform(struct!.dbWorkload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecpu: {
      value: cdktf.numberToHclTerraform(struct!.ecpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_mtls_connection_required: {
      value: cdktf.booleanToHclTerraform(struct!.isMtlsConnectionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_public: {
      value: cdktf.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tools_public_access: {
      value: cdktf.stringToHclTerraform(struct!.toolsPublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_credentials: {
      value: cdktf.listMapperHcl(difStackAdbDbCredentialsToHclTerraform, true)(struct!.dbCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackAdbDbCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackAdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackAdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPasswordId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPasswordId = this._adminPasswordId;
    }
    if (this._artifactObjectStoragePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactObjectStoragePath = this._artifactObjectStoragePath;
    }
    if (this._dataStorageSizeInTbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorageSizeInTbs = this._dataStorageSizeInTbs;
    }
    if (this._dbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbVersion = this._dbVersion;
    }
    if (this._dbWorkload !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbWorkload = this._dbWorkload;
    }
    if (this._ecpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecpu = this._ecpu;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._isMtlsConnectionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMtlsConnectionRequired = this._isMtlsConnectionRequired;
    }
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._toolsPublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolsPublicAccess = this._toolsPublicAccess;
    }
    if (this._dbCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbCredentials = this._dbCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackAdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPasswordId = undefined;
      this._artifactObjectStoragePath = undefined;
      this._dataStorageSizeInTbs = undefined;
      this._dbVersion = undefined;
      this._dbWorkload = undefined;
      this._ecpu = undefined;
      this._instanceId = undefined;
      this._isMtlsConnectionRequired = undefined;
      this._isPublic = undefined;
      this._subnetId = undefined;
      this._toolsPublicAccess = undefined;
      this._dbCredentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPasswordId = value.adminPasswordId;
      this._artifactObjectStoragePath = value.artifactObjectStoragePath;
      this._dataStorageSizeInTbs = value.dataStorageSizeInTbs;
      this._dbVersion = value.dbVersion;
      this._dbWorkload = value.dbWorkload;
      this._ecpu = value.ecpu;
      this._instanceId = value.instanceId;
      this._isMtlsConnectionRequired = value.isMtlsConnectionRequired;
      this._isPublic = value.isPublic;
      this._subnetId = value.subnetId;
      this._toolsPublicAccess = value.toolsPublicAccess;
      this._dbCredentials.internalValue = value.dbCredentials;
    }
  }

  // admin_password_id - computed: false, optional: false, required: true
  private _adminPasswordId?: string; 
  public get adminPasswordId() {
    return this.getStringAttribute('admin_password_id');
  }
  public set adminPasswordId(value: string) {
    this._adminPasswordId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordIdInput() {
    return this._adminPasswordId;
  }

  // artifact_object_storage_path - computed: false, optional: true, required: false
  private _artifactObjectStoragePath?: string; 
  public get artifactObjectStoragePath() {
    return this.getStringAttribute('artifact_object_storage_path');
  }
  public set artifactObjectStoragePath(value: string) {
    this._artifactObjectStoragePath = value;
  }
  public resetArtifactObjectStoragePath() {
    this._artifactObjectStoragePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactObjectStoragePathInput() {
    return this._artifactObjectStoragePath;
  }

  // data_storage_size_in_tbs - computed: false, optional: false, required: true
  private _dataStorageSizeInTbs?: number; 
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }
  public set dataStorageSizeInTbs(value: number) {
    this._dataStorageSizeInTbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInTbsInput() {
    return this._dataStorageSizeInTbs;
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // db_workload - computed: false, optional: false, required: true
  private _dbWorkload?: string; 
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }
  public set dbWorkload(value: string) {
    this._dbWorkload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkloadInput() {
    return this._dbWorkload;
  }

  // ecpu - computed: false, optional: false, required: true
  private _ecpu?: number; 
  public get ecpu() {
    return this.getNumberAttribute('ecpu');
  }
  public set ecpu(value: number) {
    this._ecpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecpuInput() {
    return this._ecpu;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_mtls_connection_required - computed: true, optional: true, required: false
  private _isMtlsConnectionRequired?: boolean | cdktf.IResolvable; 
  public get isMtlsConnectionRequired() {
    return this.getBooleanAttribute('is_mtls_connection_required');
  }
  public set isMtlsConnectionRequired(value: boolean | cdktf.IResolvable) {
    this._isMtlsConnectionRequired = value;
  }
  public resetIsMtlsConnectionRequired() {
    this._isMtlsConnectionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMtlsConnectionRequiredInput() {
    return this._isMtlsConnectionRequired;
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tools_public_access - computed: false, optional: true, required: false
  private _toolsPublicAccess?: string; 
  public get toolsPublicAccess() {
    return this.getStringAttribute('tools_public_access');
  }
  public set toolsPublicAccess(value: string) {
    this._toolsPublicAccess = value;
  }
  public resetToolsPublicAccess() {
    this._toolsPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsPublicAccessInput() {
    return this._toolsPublicAccess;
  }

  // db_credentials - computed: false, optional: true, required: false
  private _dbCredentials = new DifStackAdbDbCredentialsList(this, "db_credentials", false);
  public get dbCredentials() {
    return this._dbCredentials;
  }
  public putDbCredentials(value: DifStackAdbDbCredentials[] | cdktf.IResolvable) {
    this._dbCredentials.internalValue = value;
  }
  public resetDbCredentials() {
    this._dbCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbCredentialsInput() {
    return this._dbCredentials.internalValue;
  }
}

export class DifStackAdbList extends cdktf.ComplexList {
  public internalValue? : DifStackAdb[] | cdktf.IResolvable

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
  public get(index: number): DifStackAdbOutputReference {
    return new DifStackAdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackDataflowConnectionsConnectionDetailsDifDependencies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#service_instance_id DifStack#service_instance_id}
  */
  readonly serviceInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#service_type DifStack#service_type}
  */
  readonly serviceType: string;
}

export function difStackDataflowConnectionsConnectionDetailsDifDependenciesToTerraform(struct?: DifStackDataflowConnectionsConnectionDetailsDifDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_instance_id: cdktf.stringToTerraform(struct!.serviceInstanceId),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function difStackDataflowConnectionsConnectionDetailsDifDependenciesToHclTerraform(struct?: DifStackDataflowConnectionsConnectionDetailsDifDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackDataflowConnectionsConnectionDetailsDifDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackDataflowConnectionsConnectionDetailsDifDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstanceId = this._serviceInstanceId;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackDataflowConnectionsConnectionDetailsDifDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceInstanceId = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceInstanceId = value.serviceInstanceId;
      this._serviceType = value.serviceType;
    }
  }

  // service_instance_id - computed: false, optional: false, required: true
  private _serviceInstanceId?: string; 
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }
  public set serviceInstanceId(value: string) {
    this._serviceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceIdInput() {
    return this._serviceInstanceId;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}

export class DifStackDataflowConnectionsConnectionDetailsDifDependenciesList extends cdktf.ComplexList {
  public internalValue? : DifStackDataflowConnectionsConnectionDetailsDifDependencies[] | cdktf.IResolvable

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
  public get(index: number): DifStackDataflowConnectionsConnectionDetailsDifDependenciesOutputReference {
    return new DifStackDataflowConnectionsConnectionDetailsDifDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackDataflowConnectionsConnectionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#domain_names DifStack#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * dif_dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#dif_dependencies DifStack#dif_dependencies}
  */
  readonly difDependencies?: DifStackDataflowConnectionsConnectionDetailsDifDependencies[] | cdktf.IResolvable;
}

export function difStackDataflowConnectionsConnectionDetailsToTerraform(struct?: DifStackDataflowConnectionsConnectionDetailsOutputReference | DifStackDataflowConnectionsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNames),
    dif_dependencies: cdktf.listMapper(difStackDataflowConnectionsConnectionDetailsDifDependenciesToTerraform, true)(struct!.difDependencies),
  }
}


export function difStackDataflowConnectionsConnectionDetailsToHclTerraform(struct?: DifStackDataflowConnectionsConnectionDetailsOutputReference | DifStackDataflowConnectionsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dif_dependencies: {
      value: cdktf.listMapperHcl(difStackDataflowConnectionsConnectionDetailsDifDependenciesToHclTerraform, true)(struct!.difDependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackDataflowConnectionsConnectionDetailsDifDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackDataflowConnectionsConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DifStackDataflowConnectionsConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNames = this._domainNames;
    }
    if (this._difDependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.difDependencies = this._difDependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackDataflowConnectionsConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainNames = undefined;
      this._difDependencies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainNames = value.domainNames;
      this._difDependencies.internalValue = value.difDependencies;
    }
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // dif_dependencies - computed: false, optional: true, required: false
  private _difDependencies = new DifStackDataflowConnectionsConnectionDetailsDifDependenciesList(this, "dif_dependencies", false);
  public get difDependencies() {
    return this._difDependencies;
  }
  public putDifDependencies(value: DifStackDataflowConnectionsConnectionDetailsDifDependencies[] | cdktf.IResolvable) {
    this._difDependencies.internalValue = value;
  }
  public resetDifDependencies() {
    this._difDependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get difDependenciesInput() {
    return this._difDependencies.internalValue;
  }
}
export interface DifStackDataflowConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#subnet_id DifStack#subnet_id}
  */
  readonly subnetId: string;
  /**
  * connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#connection_details DifStack#connection_details}
  */
  readonly connectionDetails: DifStackDataflowConnectionsConnectionDetails;
}

export function difStackDataflowConnectionsToTerraform(struct?: DifStackDataflowConnectionsOutputReference | DifStackDataflowConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    connection_details: difStackDataflowConnectionsConnectionDetailsToTerraform(struct!.connectionDetails),
  }
}


export function difStackDataflowConnectionsToHclTerraform(struct?: DifStackDataflowConnectionsOutputReference | DifStackDataflowConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_details: {
      value: difStackDataflowConnectionsConnectionDetailsToHclTerraform(struct!.connectionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackDataflowConnectionsConnectionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackDataflowConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DifStackDataflowConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._connectionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDetails = this._connectionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackDataflowConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
      this._connectionDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
      this._connectionDetails.internalValue = value.connectionDetails;
    }
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // connection_details - computed: false, optional: false, required: true
  private _connectionDetails = new DifStackDataflowConnectionsConnectionDetailsOutputReference(this, "connection_details");
  public get connectionDetails() {
    return this._connectionDetails;
  }
  public putConnectionDetails(value: DifStackDataflowConnectionsConnectionDetails) {
    this._connectionDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails.internalValue;
  }
}
export interface DifStackDataflowDriverShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#memory_in_gbs DifStack#memory_in_gbs}
  */
  readonly memoryInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#ocpus DifStack#ocpus}
  */
  readonly ocpus: number;
}

export function difStackDataflowDriverShapeConfigToTerraform(struct?: DifStackDataflowDriverShapeConfigOutputReference | DifStackDataflowDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function difStackDataflowDriverShapeConfigToHclTerraform(struct?: DifStackDataflowDriverShapeConfigOutputReference | DifStackDataflowDriverShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackDataflowDriverShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DifStackDataflowDriverShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackDataflowDriverShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: false, optional: false, required: true
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: false, optional: false, required: true
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DifStackDataflowExecutorShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#memory_in_gbs DifStack#memory_in_gbs}
  */
  readonly memoryInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#ocpus DifStack#ocpus}
  */
  readonly ocpus: number;
}

export function difStackDataflowExecutorShapeConfigToTerraform(struct?: DifStackDataflowExecutorShapeConfigOutputReference | DifStackDataflowExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function difStackDataflowExecutorShapeConfigToHclTerraform(struct?: DifStackDataflowExecutorShapeConfigOutputReference | DifStackDataflowExecutorShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackDataflowExecutorShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DifStackDataflowExecutorShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackDataflowExecutorShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: false, optional: false, required: true
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: false, optional: false, required: true
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DifStackDataflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#archive_uri DifStack#archive_uri}
  */
  readonly archiveUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#driver_shape DifStack#driver_shape}
  */
  readonly driverShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#execute DifStack#execute}
  */
  readonly execute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#executor_shape DifStack#executor_shape}
  */
  readonly executorShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#instance_id DifStack#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#log_bucket_instance_id DifStack#log_bucket_instance_id}
  */
  readonly logBucketInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#num_executors DifStack#num_executors}
  */
  readonly numExecutors: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#private_endpoint_id DifStack#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#spark_version DifStack#spark_version}
  */
  readonly sparkVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#warehouse_bucket_instance_id DifStack#warehouse_bucket_instance_id}
  */
  readonly warehouseBucketInstanceId?: string;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#connections DifStack#connections}
  */
  readonly connections?: DifStackDataflowConnections;
  /**
  * driver_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#driver_shape_config DifStack#driver_shape_config}
  */
  readonly driverShapeConfig?: DifStackDataflowDriverShapeConfig;
  /**
  * executor_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#executor_shape_config DifStack#executor_shape_config}
  */
  readonly executorShapeConfig?: DifStackDataflowExecutorShapeConfig;
}

export function difStackDataflowToTerraform(struct?: DifStackDataflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uri: cdktf.stringToTerraform(struct!.archiveUri),
    driver_shape: cdktf.stringToTerraform(struct!.driverShape),
    execute: cdktf.stringToTerraform(struct!.execute),
    executor_shape: cdktf.stringToTerraform(struct!.executorShape),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    log_bucket_instance_id: cdktf.stringToTerraform(struct!.logBucketInstanceId),
    num_executors: cdktf.numberToTerraform(struct!.numExecutors),
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    spark_version: cdktf.stringToTerraform(struct!.sparkVersion),
    warehouse_bucket_instance_id: cdktf.stringToTerraform(struct!.warehouseBucketInstanceId),
    connections: difStackDataflowConnectionsToTerraform(struct!.connections),
    driver_shape_config: difStackDataflowDriverShapeConfigToTerraform(struct!.driverShapeConfig),
    executor_shape_config: difStackDataflowExecutorShapeConfigToTerraform(struct!.executorShapeConfig),
  }
}


export function difStackDataflowToHclTerraform(struct?: DifStackDataflow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uri: {
      value: cdktf.stringToHclTerraform(struct!.archiveUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    driver_shape: {
      value: cdktf.stringToHclTerraform(struct!.driverShape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execute: {
      value: cdktf.stringToHclTerraform(struct!.execute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executor_shape: {
      value: cdktf.stringToHclTerraform(struct!.executorShape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_bucket_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.logBucketInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_executors: {
      value: cdktf.numberToHclTerraform(struct!.numExecutors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_version: {
      value: cdktf.stringToHclTerraform(struct!.sparkVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse_bucket_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.warehouseBucketInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connections: {
      value: difStackDataflowConnectionsToHclTerraform(struct!.connections),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackDataflowConnectionsList",
    },
    driver_shape_config: {
      value: difStackDataflowDriverShapeConfigToHclTerraform(struct!.driverShapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackDataflowDriverShapeConfigList",
    },
    executor_shape_config: {
      value: difStackDataflowExecutorShapeConfigToHclTerraform(struct!.executorShapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackDataflowExecutorShapeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackDataflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackDataflow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUri = this._archiveUri;
    }
    if (this._driverShape !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverShape = this._driverShape;
    }
    if (this._execute !== undefined) {
      hasAnyValues = true;
      internalValueResult.execute = this._execute;
    }
    if (this._executorShape !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorShape = this._executorShape;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._logBucketInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBucketInstanceId = this._logBucketInstanceId;
    }
    if (this._numExecutors !== undefined) {
      hasAnyValues = true;
      internalValueResult.numExecutors = this._numExecutors;
    }
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._sparkVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkVersion = this._sparkVersion;
    }
    if (this._warehouseBucketInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouseBucketInstanceId = this._warehouseBucketInstanceId;
    }
    if (this._connections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connections = this._connections?.internalValue;
    }
    if (this._driverShapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverShapeConfig = this._driverShapeConfig?.internalValue;
    }
    if (this._executorShapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorShapeConfig = this._executorShapeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackDataflow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._archiveUri = undefined;
      this._driverShape = undefined;
      this._execute = undefined;
      this._executorShape = undefined;
      this._instanceId = undefined;
      this._logBucketInstanceId = undefined;
      this._numExecutors = undefined;
      this._privateEndpointId = undefined;
      this._sparkVersion = undefined;
      this._warehouseBucketInstanceId = undefined;
      this._connections.internalValue = undefined;
      this._driverShapeConfig.internalValue = undefined;
      this._executorShapeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._archiveUri = value.archiveUri;
      this._driverShape = value.driverShape;
      this._execute = value.execute;
      this._executorShape = value.executorShape;
      this._instanceId = value.instanceId;
      this._logBucketInstanceId = value.logBucketInstanceId;
      this._numExecutors = value.numExecutors;
      this._privateEndpointId = value.privateEndpointId;
      this._sparkVersion = value.sparkVersion;
      this._warehouseBucketInstanceId = value.warehouseBucketInstanceId;
      this._connections.internalValue = value.connections;
      this._driverShapeConfig.internalValue = value.driverShapeConfig;
      this._executorShapeConfig.internalValue = value.executorShapeConfig;
    }
  }

  // archive_uri - computed: false, optional: true, required: false
  private _archiveUri?: string; 
  public get archiveUri() {
    return this.getStringAttribute('archive_uri');
  }
  public set archiveUri(value: string) {
    this._archiveUri = value;
  }
  public resetArchiveUri() {
    this._archiveUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUriInput() {
    return this._archiveUri;
  }

  // driver_shape - computed: false, optional: false, required: true
  private _driverShape?: string; 
  public get driverShape() {
    return this.getStringAttribute('driver_shape');
  }
  public set driverShape(value: string) {
    this._driverShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverShapeInput() {
    return this._driverShape;
  }

  // execute - computed: false, optional: true, required: false
  private _execute?: string; 
  public get execute() {
    return this.getStringAttribute('execute');
  }
  public set execute(value: string) {
    this._execute = value;
  }
  public resetExecute() {
    this._execute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute;
  }

  // executor_shape - computed: false, optional: false, required: true
  private _executorShape?: string; 
  public get executorShape() {
    return this.getStringAttribute('executor_shape');
  }
  public set executorShape(value: string) {
    this._executorShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executorShapeInput() {
    return this._executorShape;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // log_bucket_instance_id - computed: false, optional: false, required: true
  private _logBucketInstanceId?: string; 
  public get logBucketInstanceId() {
    return this.getStringAttribute('log_bucket_instance_id');
  }
  public set logBucketInstanceId(value: string) {
    this._logBucketInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBucketInstanceIdInput() {
    return this._logBucketInstanceId;
  }

  // num_executors - computed: false, optional: false, required: true
  private _numExecutors?: number; 
  public get numExecutors() {
    return this.getNumberAttribute('num_executors');
  }
  public set numExecutors(value: number) {
    this._numExecutors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numExecutorsInput() {
    return this._numExecutors;
  }

  // private_endpoint_id - computed: false, optional: true, required: false
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  public resetPrivateEndpointId() {
    this._privateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // spark_version - computed: false, optional: false, required: true
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }

  // warehouse_bucket_instance_id - computed: false, optional: true, required: false
  private _warehouseBucketInstanceId?: string; 
  public get warehouseBucketInstanceId() {
    return this.getStringAttribute('warehouse_bucket_instance_id');
  }
  public set warehouseBucketInstanceId(value: string) {
    this._warehouseBucketInstanceId = value;
  }
  public resetWarehouseBucketInstanceId() {
    this._warehouseBucketInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseBucketInstanceIdInput() {
    return this._warehouseBucketInstanceId;
  }

  // connections - computed: false, optional: true, required: false
  private _connections = new DifStackDataflowConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }
  public putConnections(value: DifStackDataflowConnections) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // driver_shape_config - computed: false, optional: true, required: false
  private _driverShapeConfig = new DifStackDataflowDriverShapeConfigOutputReference(this, "driver_shape_config");
  public get driverShapeConfig() {
    return this._driverShapeConfig;
  }
  public putDriverShapeConfig(value: DifStackDataflowDriverShapeConfig) {
    this._driverShapeConfig.internalValue = value;
  }
  public resetDriverShapeConfig() {
    this._driverShapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverShapeConfigInput() {
    return this._driverShapeConfig.internalValue;
  }

  // executor_shape_config - computed: false, optional: true, required: false
  private _executorShapeConfig = new DifStackDataflowExecutorShapeConfigOutputReference(this, "executor_shape_config");
  public get executorShapeConfig() {
    return this._executorShapeConfig;
  }
  public putExecutorShapeConfig(value: DifStackDataflowExecutorShapeConfig) {
    this._executorShapeConfig.internalValue = value;
  }
  public resetExecutorShapeConfig() {
    this._executorShapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorShapeConfigInput() {
    return this._executorShapeConfig.internalValue;
  }
}

export class DifStackDataflowList extends cdktf.ComplexList {
  public internalValue? : DifStackDataflow[] | cdktf.IResolvable

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
  public get(index: number): DifStackDataflowOutputReference {
    return new DifStackDataflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackGenaiEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#endpoint_name DifStack#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#is_content_moderation_enabled DifStack#is_content_moderation_enabled}
  */
  readonly isContentModerationEnabled: boolean | cdktf.IResolvable;
}

export function difStackGenaiEndpointsToTerraform(struct?: DifStackGenaiEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_name: cdktf.stringToTerraform(struct!.endpointName),
    is_content_moderation_enabled: cdktf.booleanToTerraform(struct!.isContentModerationEnabled),
  }
}


export function difStackGenaiEndpointsToHclTerraform(struct?: DifStackGenaiEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_content_moderation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isContentModerationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackGenaiEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackGenaiEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointName = this._endpointName;
    }
    if (this._isContentModerationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isContentModerationEnabled = this._isContentModerationEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackGenaiEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointName = undefined;
      this._isContentModerationEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointName = value.endpointName;
      this._isContentModerationEnabled = value.isContentModerationEnabled;
    }
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // is_content_moderation_enabled - computed: false, optional: false, required: true
  private _isContentModerationEnabled?: boolean | cdktf.IResolvable; 
  public get isContentModerationEnabled() {
    return this.getBooleanAttribute('is_content_moderation_enabled');
  }
  public set isContentModerationEnabled(value: boolean | cdktf.IResolvable) {
    this._isContentModerationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isContentModerationEnabledInput() {
    return this._isContentModerationEnabled;
  }
}

export class DifStackGenaiEndpointsList extends cdktf.ComplexList {
  public internalValue? : DifStackGenaiEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DifStackGenaiEndpointsOutputReference {
    return new DifStackGenaiEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackGenai {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#base_model DifStack#base_model}
  */
  readonly baseModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#cluster_type DifStack#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#instance_id DifStack#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#oci_region DifStack#oci_region}
  */
  readonly ociRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#unit_count DifStack#unit_count}
  */
  readonly unitCount: number;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#endpoints DifStack#endpoints}
  */
  readonly endpoints?: DifStackGenaiEndpoints[] | cdktf.IResolvable;
}

export function difStackGenaiToTerraform(struct?: DifStackGenai | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_model: cdktf.stringToTerraform(struct!.baseModel),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    oci_region: cdktf.stringToTerraform(struct!.ociRegion),
    unit_count: cdktf.numberToTerraform(struct!.unitCount),
    endpoints: cdktf.listMapper(difStackGenaiEndpointsToTerraform, true)(struct!.endpoints),
  }
}


export function difStackGenaiToHclTerraform(struct?: DifStackGenai | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_model: {
      value: cdktf.stringToHclTerraform(struct!.baseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oci_region: {
      value: cdktf.stringToHclTerraform(struct!.ociRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_count: {
      value: cdktf.numberToHclTerraform(struct!.unitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoints: {
      value: cdktf.listMapperHcl(difStackGenaiEndpointsToHclTerraform, true)(struct!.endpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackGenaiEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackGenaiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackGenai | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseModel = this._baseModel;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ociRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ociRegion = this._ociRegion;
    }
    if (this._unitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitCount = this._unitCount;
    }
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackGenai | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseModel = undefined;
      this._clusterType = undefined;
      this._instanceId = undefined;
      this._ociRegion = undefined;
      this._unitCount = undefined;
      this._endpoints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseModel = value.baseModel;
      this._clusterType = value.clusterType;
      this._instanceId = value.instanceId;
      this._ociRegion = value.ociRegion;
      this._unitCount = value.unitCount;
      this._endpoints.internalValue = value.endpoints;
    }
  }

  // base_model - computed: false, optional: false, required: true
  private _baseModel?: string; 
  public get baseModel() {
    return this.getStringAttribute('base_model');
  }
  public set baseModel(value: string) {
    this._baseModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseModelInput() {
    return this._baseModel;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // oci_region - computed: false, optional: false, required: true
  private _ociRegion?: string; 
  public get ociRegion() {
    return this.getStringAttribute('oci_region');
  }
  public set ociRegion(value: string) {
    this._ociRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRegionInput() {
    return this._ociRegion;
  }

  // unit_count - computed: false, optional: false, required: true
  private _unitCount?: number; 
  public get unitCount() {
    return this.getNumberAttribute('unit_count');
  }
  public set unitCount(value: number) {
    this._unitCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitCountInput() {
    return this._unitCount;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new DifStackGenaiEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DifStackGenaiEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }
}

export class DifStackGenaiList extends cdktf.ComplexList {
  public internalValue? : DifStackGenai[] | cdktf.IResolvable

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
  public get(index: number): DifStackGenaiOutputReference {
    return new DifStackGenaiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackGgcsConnectionsDifDependencies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#service_instance_id DifStack#service_instance_id}
  */
  readonly serviceInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#service_type DifStack#service_type}
  */
  readonly serviceType: string;
}

export function difStackGgcsConnectionsDifDependenciesToTerraform(struct?: DifStackGgcsConnectionsDifDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_instance_id: cdktf.stringToTerraform(struct!.serviceInstanceId),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
  }
}


export function difStackGgcsConnectionsDifDependenciesToHclTerraform(struct?: DifStackGgcsConnectionsDifDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackGgcsConnectionsDifDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackGgcsConnectionsDifDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstanceId = this._serviceInstanceId;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackGgcsConnectionsDifDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceInstanceId = undefined;
      this._serviceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceInstanceId = value.serviceInstanceId;
      this._serviceType = value.serviceType;
    }
  }

  // service_instance_id - computed: false, optional: false, required: true
  private _serviceInstanceId?: string; 
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }
  public set serviceInstanceId(value: string) {
    this._serviceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceIdInput() {
    return this._serviceInstanceId;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }
}

export class DifStackGgcsConnectionsDifDependenciesList extends cdktf.ComplexList {
  public internalValue? : DifStackGgcsConnectionsDifDependencies[] | cdktf.IResolvable

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
  public get(index: number): DifStackGgcsConnectionsDifDependenciesOutputReference {
    return new DifStackGgcsConnectionsDifDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackGgcsConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#connection_id DifStack#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#connection_name DifStack#connection_name}
  */
  readonly connectionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#gg_admin_secret_id DifStack#gg_admin_secret_id}
  */
  readonly ggAdminSecretId?: string;
  /**
  * dif_dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#dif_dependencies DifStack#dif_dependencies}
  */
  readonly difDependencies?: DifStackGgcsConnectionsDifDependencies[] | cdktf.IResolvable;
}

export function difStackGgcsConnectionsToTerraform(struct?: DifStackGgcsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_name: cdktf.stringToTerraform(struct!.connectionName),
    gg_admin_secret_id: cdktf.stringToTerraform(struct!.ggAdminSecretId),
    dif_dependencies: cdktf.listMapper(difStackGgcsConnectionsDifDependenciesToTerraform, true)(struct!.difDependencies),
  }
}


export function difStackGgcsConnectionsToHclTerraform(struct?: DifStackGgcsConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_name: {
      value: cdktf.stringToHclTerraform(struct!.connectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gg_admin_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.ggAdminSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dif_dependencies: {
      value: cdktf.listMapperHcl(difStackGgcsConnectionsDifDependenciesToHclTerraform, true)(struct!.difDependencies),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackGgcsConnectionsDifDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackGgcsConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackGgcsConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionName = this._connectionName;
    }
    if (this._ggAdminSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ggAdminSecretId = this._ggAdminSecretId;
    }
    if (this._difDependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.difDependencies = this._difDependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackGgcsConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._connectionName = undefined;
      this._ggAdminSecretId = undefined;
      this._difDependencies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._connectionName = value.connectionName;
      this._ggAdminSecretId = value.ggAdminSecretId;
      this._difDependencies.internalValue = value.difDependencies;
    }
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // gg_admin_secret_id - computed: false, optional: true, required: false
  private _ggAdminSecretId?: string; 
  public get ggAdminSecretId() {
    return this.getStringAttribute('gg_admin_secret_id');
  }
  public set ggAdminSecretId(value: string) {
    this._ggAdminSecretId = value;
  }
  public resetGgAdminSecretId() {
    this._ggAdminSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ggAdminSecretIdInput() {
    return this._ggAdminSecretId;
  }

  // dif_dependencies - computed: false, optional: true, required: false
  private _difDependencies = new DifStackGgcsConnectionsDifDependenciesList(this, "dif_dependencies", false);
  public get difDependencies() {
    return this._difDependencies;
  }
  public putDifDependencies(value: DifStackGgcsConnectionsDifDependencies[] | cdktf.IResolvable) {
    this._difDependencies.internalValue = value;
  }
  public resetDifDependencies() {
    this._difDependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get difDependenciesInput() {
    return this._difDependencies.internalValue;
  }
}

export class DifStackGgcsConnectionsList extends cdktf.ComplexList {
  public internalValue? : DifStackGgcsConnections[] | cdktf.IResolvable

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
  public get(index: number): DifStackGgcsConnectionsOutputReference {
    return new DifStackGgcsConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackGgcsSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#action DifStack#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#should_start_source_operations DifStack#should_start_source_operations}
  */
  readonly shouldStartSourceOperations: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#source_id DifStack#source_id}
  */
  readonly sourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#target_connection_name DifStack#target_connection_name}
  */
  readonly targetConnectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#target_uri DifStack#target_uri}
  */
  readonly targetUri?: string;
}

export function difStackGgcsSourcesToTerraform(struct?: DifStackGgcsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    should_start_source_operations: cdktf.booleanToTerraform(struct!.shouldStartSourceOperations),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    target_connection_name: cdktf.stringToTerraform(struct!.targetConnectionName),
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
  }
}


export function difStackGgcsSourcesToHclTerraform(struct?: DifStackGgcsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_start_source_operations: {
      value: cdktf.booleanToHclTerraform(struct!.shouldStartSourceOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_connection_name: {
      value: cdktf.stringToHclTerraform(struct!.targetConnectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackGgcsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackGgcsSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._shouldStartSourceOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldStartSourceOperations = this._shouldStartSourceOperations;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._targetConnectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetConnectionName = this._targetConnectionName;
    }
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackGgcsSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._shouldStartSourceOperations = undefined;
      this._sourceId = undefined;
      this._targetConnectionName = undefined;
      this._targetUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._shouldStartSourceOperations = value.shouldStartSourceOperations;
      this._sourceId = value.sourceId;
      this._targetConnectionName = value.targetConnectionName;
      this._targetUri = value.targetUri;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // should_start_source_operations - computed: false, optional: false, required: true
  private _shouldStartSourceOperations?: boolean | cdktf.IResolvable; 
  public get shouldStartSourceOperations() {
    return this.getBooleanAttribute('should_start_source_operations');
  }
  public set shouldStartSourceOperations(value: boolean | cdktf.IResolvable) {
    this._shouldStartSourceOperations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldStartSourceOperationsInput() {
    return this._shouldStartSourceOperations;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // target_connection_name - computed: false, optional: true, required: false
  private _targetConnectionName?: string; 
  public get targetConnectionName() {
    return this.getStringAttribute('target_connection_name');
  }
  public set targetConnectionName(value: string) {
    this._targetConnectionName = value;
  }
  public resetTargetConnectionName() {
    this._targetConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConnectionNameInput() {
    return this._targetConnectionName;
  }

  // target_uri - computed: false, optional: true, required: false
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  public resetTargetUri() {
    this._targetUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }
}

export class DifStackGgcsSourcesList extends cdktf.ComplexList {
  public internalValue? : DifStackGgcsSources[] | cdktf.IResolvable

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
  public get(index: number): DifStackGgcsSourcesOutputReference {
    return new DifStackGgcsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackGgcsTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#action DifStack#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#should_start_target_operations DifStack#should_start_target_operations}
  */
  readonly shouldStartTargetOperations: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#source_connection_name DifStack#source_connection_name}
  */
  readonly sourceConnectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#source_uri DifStack#source_uri}
  */
  readonly sourceUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#target_id DifStack#target_id}
  */
  readonly targetId: string;
}

export function difStackGgcsTargetsToTerraform(struct?: DifStackGgcsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    should_start_target_operations: cdktf.booleanToTerraform(struct!.shouldStartTargetOperations),
    source_connection_name: cdktf.stringToTerraform(struct!.sourceConnectionName),
    source_uri: cdktf.stringToTerraform(struct!.sourceUri),
    target_id: cdktf.stringToTerraform(struct!.targetId),
  }
}


export function difStackGgcsTargetsToHclTerraform(struct?: DifStackGgcsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_start_target_operations: {
      value: cdktf.booleanToHclTerraform(struct!.shouldStartTargetOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_connection_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceConnectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_uri: {
      value: cdktf.stringToHclTerraform(struct!.sourceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_id: {
      value: cdktf.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackGgcsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackGgcsTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._shouldStartTargetOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldStartTargetOperations = this._shouldStartTargetOperations;
    }
    if (this._sourceConnectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectionName = this._sourceConnectionName;
    }
    if (this._sourceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUri = this._sourceUri;
    }
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackGgcsTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._shouldStartTargetOperations = undefined;
      this._sourceConnectionName = undefined;
      this._sourceUri = undefined;
      this._targetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._shouldStartTargetOperations = value.shouldStartTargetOperations;
      this._sourceConnectionName = value.sourceConnectionName;
      this._sourceUri = value.sourceUri;
      this._targetId = value.targetId;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // should_start_target_operations - computed: false, optional: false, required: true
  private _shouldStartTargetOperations?: boolean | cdktf.IResolvable; 
  public get shouldStartTargetOperations() {
    return this.getBooleanAttribute('should_start_target_operations');
  }
  public set shouldStartTargetOperations(value: boolean | cdktf.IResolvable) {
    this._shouldStartTargetOperations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldStartTargetOperationsInput() {
    return this._shouldStartTargetOperations;
  }

  // source_connection_name - computed: false, optional: true, required: false
  private _sourceConnectionName?: string; 
  public get sourceConnectionName() {
    return this.getStringAttribute('source_connection_name');
  }
  public set sourceConnectionName(value: string) {
    this._sourceConnectionName = value;
  }
  public resetSourceConnectionName() {
    this._sourceConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionNameInput() {
    return this._sourceConnectionName;
  }

  // source_uri - computed: false, optional: true, required: false
  private _sourceUri?: string; 
  public get sourceUri() {
    return this.getStringAttribute('source_uri');
  }
  public set sourceUri(value: string) {
    this._sourceUri = value;
  }
  public resetSourceUri() {
    this._sourceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriInput() {
    return this._sourceUri;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }
}

export class DifStackGgcsTargetsList extends cdktf.ComplexList {
  public internalValue? : DifStackGgcsTargets[] | cdktf.IResolvable

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
  public get(index: number): DifStackGgcsTargetsOutputReference {
    return new DifStackGgcsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackGgcsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#action DifStack#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#secret_id DifStack#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#user_name DifStack#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#user_type DifStack#user_type}
  */
  readonly userType: string;
}

export function difStackGgcsUsersToTerraform(struct?: DifStackGgcsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    user_name: cdktf.stringToTerraform(struct!.userName),
    user_type: cdktf.stringToTerraform(struct!.userType),
  }
}


export function difStackGgcsUsersToHclTerraform(struct?: DifStackGgcsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_type: {
      value: cdktf.stringToHclTerraform(struct!.userType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackGgcsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackGgcsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._userType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userType = this._userType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackGgcsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._secretId = undefined;
      this._userName = undefined;
      this._userType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._secretId = value.secretId;
      this._userName = value.userName;
      this._userType = value.userType;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_type - computed: false, optional: false, required: true
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }
}

export class DifStackGgcsUsersList extends cdktf.ComplexList {
  public internalValue? : DifStackGgcsUsers[] | cdktf.IResolvable

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
  public get(index: number): DifStackGgcsUsersOutputReference {
    return new DifStackGgcsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackGgcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#artifact_object_storage_path DifStack#artifact_object_storage_path}
  */
  readonly artifactObjectStoragePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#instance_id DifStack#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#ocpu DifStack#ocpu}
  */
  readonly ocpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#ogg_version DifStack#ogg_version}
  */
  readonly oggVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#password_secret_id DifStack#password_secret_id}
  */
  readonly passwordSecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#public_subnet_id DifStack#public_subnet_id}
  */
  readonly publicSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#subnet_id DifStack#subnet_id}
  */
  readonly subnetId: string;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#connections DifStack#connections}
  */
  readonly connections?: DifStackGgcsConnections[] | cdktf.IResolvable;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#sources DifStack#sources}
  */
  readonly sources?: DifStackGgcsSources[] | cdktf.IResolvable;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#targets DifStack#targets}
  */
  readonly targets?: DifStackGgcsTargets[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#users DifStack#users}
  */
  readonly users?: DifStackGgcsUsers[] | cdktf.IResolvable;
}

export function difStackGgcsToTerraform(struct?: DifStackGgcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_object_storage_path: cdktf.stringToTerraform(struct!.artifactObjectStoragePath),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ocpu: cdktf.numberToTerraform(struct!.ocpu),
    ogg_version: cdktf.stringToTerraform(struct!.oggVersion),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    public_subnet_id: cdktf.stringToTerraform(struct!.publicSubnetId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    connections: cdktf.listMapper(difStackGgcsConnectionsToTerraform, true)(struct!.connections),
    sources: cdktf.listMapper(difStackGgcsSourcesToTerraform, true)(struct!.sources),
    targets: cdktf.listMapper(difStackGgcsTargetsToTerraform, true)(struct!.targets),
    users: cdktf.listMapper(difStackGgcsUsersToTerraform, true)(struct!.users),
  }
}


export function difStackGgcsToHclTerraform(struct?: DifStackGgcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_object_storage_path: {
      value: cdktf.stringToHclTerraform(struct!.artifactObjectStoragePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocpu: {
      value: cdktf.numberToHclTerraform(struct!.ocpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ogg_version: {
      value: cdktf.stringToHclTerraform(struct!.oggVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.publicSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connections: {
      value: cdktf.listMapperHcl(difStackGgcsConnectionsToHclTerraform, true)(struct!.connections),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackGgcsConnectionsList",
    },
    sources: {
      value: cdktf.listMapperHcl(difStackGgcsSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackGgcsSourcesList",
    },
    targets: {
      value: cdktf.listMapperHcl(difStackGgcsTargetsToHclTerraform, true)(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackGgcsTargetsList",
    },
    users: {
      value: cdktf.listMapperHcl(difStackGgcsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DifStackGgcsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackGgcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackGgcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactObjectStoragePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactObjectStoragePath = this._artifactObjectStoragePath;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ocpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpu = this._ocpu;
    }
    if (this._oggVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.oggVersion = this._oggVersion;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._publicSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicSubnetId = this._publicSubnetId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._connections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connections = this._connections?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackGgcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactObjectStoragePath = undefined;
      this._instanceId = undefined;
      this._ocpu = undefined;
      this._oggVersion = undefined;
      this._passwordSecretId = undefined;
      this._publicSubnetId = undefined;
      this._subnetId = undefined;
      this._connections.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._targets.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactObjectStoragePath = value.artifactObjectStoragePath;
      this._instanceId = value.instanceId;
      this._ocpu = value.ocpu;
      this._oggVersion = value.oggVersion;
      this._passwordSecretId = value.passwordSecretId;
      this._publicSubnetId = value.publicSubnetId;
      this._subnetId = value.subnetId;
      this._connections.internalValue = value.connections;
      this._sources.internalValue = value.sources;
      this._targets.internalValue = value.targets;
      this._users.internalValue = value.users;
    }
  }

  // artifact_object_storage_path - computed: false, optional: true, required: false
  private _artifactObjectStoragePath?: string; 
  public get artifactObjectStoragePath() {
    return this.getStringAttribute('artifact_object_storage_path');
  }
  public set artifactObjectStoragePath(value: string) {
    this._artifactObjectStoragePath = value;
  }
  public resetArtifactObjectStoragePath() {
    this._artifactObjectStoragePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactObjectStoragePathInput() {
    return this._artifactObjectStoragePath;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ocpu - computed: false, optional: false, required: true
  private _ocpu?: number; 
  public get ocpu() {
    return this.getNumberAttribute('ocpu');
  }
  public set ocpu(value: number) {
    this._ocpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuInput() {
    return this._ocpu;
  }

  // ogg_version - computed: true, optional: true, required: false
  private _oggVersion?: string; 
  public get oggVersion() {
    return this.getStringAttribute('ogg_version');
  }
  public set oggVersion(value: string) {
    this._oggVersion = value;
  }
  public resetOggVersion() {
    this._oggVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oggVersionInput() {
    return this._oggVersion;
  }

  // password_secret_id - computed: false, optional: false, required: true
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // public_subnet_id - computed: true, optional: true, required: false
  private _publicSubnetId?: string; 
  public get publicSubnetId() {
    return this.getStringAttribute('public_subnet_id');
  }
  public set publicSubnetId(value: string) {
    this._publicSubnetId = value;
  }
  public resetPublicSubnetId() {
    this._publicSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetIdInput() {
    return this._publicSubnetId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // connections - computed: false, optional: true, required: false
  private _connections = new DifStackGgcsConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: DifStackGgcsConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DifStackGgcsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DifStackGgcsSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new DifStackGgcsTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: DifStackGgcsTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DifStackGgcsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DifStackGgcsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

export class DifStackGgcsList extends cdktf.ComplexList {
  public internalValue? : DifStackGgcs[] | cdktf.IResolvable

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
  public get(index: number): DifStackGgcsOutputReference {
    return new DifStackGgcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackObjectstorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#auto_tiering DifStack#auto_tiering}
  */
  readonly autoTiering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#instance_id DifStack#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#object_versioning DifStack#object_versioning}
  */
  readonly objectVersioning: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#storage_tier DifStack#storage_tier}
  */
  readonly storageTier: string;
}

export function difStackObjectstorageToTerraform(struct?: DifStackObjectstorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_tiering: cdktf.stringToTerraform(struct!.autoTiering),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    object_versioning: cdktf.stringToTerraform(struct!.objectVersioning),
    storage_tier: cdktf.stringToTerraform(struct!.storageTier),
  }
}


export function difStackObjectstorageToHclTerraform(struct?: DifStackObjectstorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_tiering: {
      value: cdktf.stringToHclTerraform(struct!.autoTiering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_versioning: {
      value: cdktf.stringToHclTerraform(struct!.objectVersioning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_tier: {
      value: cdktf.stringToHclTerraform(struct!.storageTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DifStackObjectstorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DifStackObjectstorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTiering !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTiering = this._autoTiering;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._objectVersioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectVersioning = this._objectVersioning;
    }
    if (this._storageTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageTier = this._storageTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DifStackObjectstorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoTiering = undefined;
      this._instanceId = undefined;
      this._objectVersioning = undefined;
      this._storageTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoTiering = value.autoTiering;
      this._instanceId = value.instanceId;
      this._objectVersioning = value.objectVersioning;
      this._storageTier = value.storageTier;
    }
  }

  // auto_tiering - computed: true, optional: true, required: false
  private _autoTiering?: string; 
  public get autoTiering() {
    return this.getStringAttribute('auto_tiering');
  }
  public set autoTiering(value: string) {
    this._autoTiering = value;
  }
  public resetAutoTiering() {
    this._autoTiering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTieringInput() {
    return this._autoTiering;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // object_versioning - computed: false, optional: false, required: true
  private _objectVersioning?: string; 
  public get objectVersioning() {
    return this.getStringAttribute('object_versioning');
  }
  public set objectVersioning(value: string) {
    this._objectVersioning = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersioningInput() {
    return this._objectVersioning;
  }

  // storage_tier - computed: false, optional: false, required: true
  private _storageTier?: string; 
  public get storageTier() {
    return this.getStringAttribute('storage_tier');
  }
  public set storageTier(value: string) {
    this._storageTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTierInput() {
    return this._storageTier;
  }
}

export class DifStackObjectstorageList extends cdktf.ComplexList {
  public internalValue? : DifStackObjectstorage[] | cdktf.IResolvable

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
  public get(index: number): DifStackObjectstorageOutputReference {
    return new DifStackObjectstorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DifStackTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#create DifStack#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#delete DifStack#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#update DifStack#update}
  */
  readonly update?: string;
}

export function difStackTimeoutsToTerraform(struct?: DifStackTimeouts | cdktf.IResolvable): any {
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


export function difStackTimeoutsToHclTerraform(struct?: DifStackTimeouts | cdktf.IResolvable): any {
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

export class DifStackTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DifStackTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DifStackTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack oci_dif_stack}
*/
export class DifStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dif_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DifStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DifStack to import
  * @param importFromId The id of the existing DifStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DifStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dif_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/dif_stack oci_dif_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DifStackConfig
  */
  public constructor(scope: Construct, id: string, config: DifStackConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dif_stack',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addServiceTrigger = config.addServiceTrigger;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._deployArtifactsTrigger = config.deployArtifactsTrigger;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._notificationEmail = config.notificationEmail;
    this._services = config.services;
    this._stackTemplates = config.stackTemplates;
    this._subnetId = config.subnetId;
    this._adb.internalValue = config.adb;
    this._dataflow.internalValue = config.dataflow;
    this._genai.internalValue = config.genai;
    this._ggcs.internalValue = config.ggcs;
    this._objectstorage.internalValue = config.objectstorage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_service_trigger - computed: false, optional: true, required: false
  private _addServiceTrigger?: number; 
  public get addServiceTrigger() {
    return this.getNumberAttribute('add_service_trigger');
  }
  public set addServiceTrigger(value: number) {
    this._addServiceTrigger = value;
  }
  public resetAddServiceTrigger() {
    this._addServiceTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addServiceTriggerInput() {
    return this._addServiceTrigger;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deploy_artifacts_trigger - computed: false, optional: true, required: false
  private _deployArtifactsTrigger?: number; 
  public get deployArtifactsTrigger() {
    return this.getNumberAttribute('deploy_artifacts_trigger');
  }
  public set deployArtifactsTrigger(value: number) {
    this._deployArtifactsTrigger = value;
  }
  public resetDeployArtifactsTrigger() {
    this._deployArtifactsTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactsTriggerInput() {
    return this._deployArtifactsTrigger;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // notification_email - computed: false, optional: true, required: false
  private _notificationEmail?: string; 
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }
  public set notificationEmail(value: string) {
    this._notificationEmail = value;
  }
  public resetNotificationEmail() {
    this._notificationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailInput() {
    return this._notificationEmail;
  }

  // service_details - computed: true, optional: false, required: false
  private _serviceDetails = new DifStackServiceDetailsList(this, "service_details", false);
  public get serviceDetails() {
    return this._serviceDetails;
  }

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // stack_templates - computed: false, optional: false, required: true
  private _stackTemplates?: string[]; 
  public get stackTemplates() {
    return cdktf.Fn.tolist(this.getListAttribute('stack_templates'));
  }
  public set stackTemplates(value: string[]) {
    this._stackTemplates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTemplatesInput() {
    return this._stackTemplates;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // adb - computed: false, optional: true, required: false
  private _adb = new DifStackAdbList(this, "adb", false);
  public get adb() {
    return this._adb;
  }
  public putAdb(value: DifStackAdb[] | cdktf.IResolvable) {
    this._adb.internalValue = value;
  }
  public resetAdb() {
    this._adb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adbInput() {
    return this._adb.internalValue;
  }

  // dataflow - computed: false, optional: true, required: false
  private _dataflow = new DifStackDataflowList(this, "dataflow", false);
  public get dataflow() {
    return this._dataflow;
  }
  public putDataflow(value: DifStackDataflow[] | cdktf.IResolvable) {
    this._dataflow.internalValue = value;
  }
  public resetDataflow() {
    this._dataflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowInput() {
    return this._dataflow.internalValue;
  }

  // genai - computed: false, optional: true, required: false
  private _genai = new DifStackGenaiList(this, "genai", false);
  public get genai() {
    return this._genai;
  }
  public putGenai(value: DifStackGenai[] | cdktf.IResolvable) {
    this._genai.internalValue = value;
  }
  public resetGenai() {
    this._genai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genaiInput() {
    return this._genai.internalValue;
  }

  // ggcs - computed: false, optional: true, required: false
  private _ggcs = new DifStackGgcsList(this, "ggcs", false);
  public get ggcs() {
    return this._ggcs;
  }
  public putGgcs(value: DifStackGgcs[] | cdktf.IResolvable) {
    this._ggcs.internalValue = value;
  }
  public resetGgcs() {
    this._ggcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ggcsInput() {
    return this._ggcs.internalValue;
  }

  // objectstorage - computed: false, optional: true, required: false
  private _objectstorage = new DifStackObjectstorageList(this, "objectstorage", false);
  public get objectstorage() {
    return this._objectstorage;
  }
  public putObjectstorage(value: DifStackObjectstorage[] | cdktf.IResolvable) {
    this._objectstorage.internalValue = value;
  }
  public resetObjectstorage() {
    this._objectstorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectstorageInput() {
    return this._objectstorage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DifStackTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DifStackTimeouts) {
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
      add_service_trigger: cdktf.numberToTerraform(this._addServiceTrigger),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deploy_artifacts_trigger: cdktf.numberToTerraform(this._deployArtifactsTrigger),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      stack_templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stackTemplates),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      adb: cdktf.listMapper(difStackAdbToTerraform, true)(this._adb.internalValue),
      dataflow: cdktf.listMapper(difStackDataflowToTerraform, true)(this._dataflow.internalValue),
      genai: cdktf.listMapper(difStackGenaiToTerraform, true)(this._genai.internalValue),
      ggcs: cdktf.listMapper(difStackGgcsToTerraform, true)(this._ggcs.internalValue),
      objectstorage: cdktf.listMapper(difStackObjectstorageToTerraform, true)(this._objectstorage.internalValue),
      timeouts: difStackTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_service_trigger: {
        value: cdktf.numberToHclTerraform(this._addServiceTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deploy_artifacts_trigger: {
        value: cdktf.numberToHclTerraform(this._deployArtifactsTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_email: {
        value: cdktf.stringToHclTerraform(this._notificationEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      stack_templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stackTemplates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adb: {
        value: cdktf.listMapperHcl(difStackAdbToHclTerraform, true)(this._adb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DifStackAdbList",
      },
      dataflow: {
        value: cdktf.listMapperHcl(difStackDataflowToHclTerraform, true)(this._dataflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DifStackDataflowList",
      },
      genai: {
        value: cdktf.listMapperHcl(difStackGenaiToHclTerraform, true)(this._genai.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DifStackGenaiList",
      },
      ggcs: {
        value: cdktf.listMapperHcl(difStackGgcsToHclTerraform, true)(this._ggcs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DifStackGgcsList",
      },
      objectstorage: {
        value: cdktf.listMapperHcl(difStackObjectstorageToHclTerraform, true)(this._objectstorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DifStackObjectstorageList",
      },
      timeouts: {
        value: difStackTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DifStackTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
