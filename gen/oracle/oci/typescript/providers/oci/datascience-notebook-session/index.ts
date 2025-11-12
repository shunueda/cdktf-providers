// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatascienceNotebookSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#compartment_id DatascienceNotebookSession#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#defined_tags DatascienceNotebookSession#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#display_name DatascienceNotebookSession#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#freeform_tags DatascienceNotebookSession#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#id DatascienceNotebookSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#project_id DatascienceNotebookSession#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#state DatascienceNotebookSession#state}
  */
  readonly state?: string;
  /**
  * notebook_session_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#notebook_session_config_details DatascienceNotebookSession#notebook_session_config_details}
  */
  readonly notebookSessionConfigDetails?: DatascienceNotebookSessionNotebookSessionConfigDetails;
  /**
  * notebook_session_configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#notebook_session_configuration_details DatascienceNotebookSession#notebook_session_configuration_details}
  */
  readonly notebookSessionConfigurationDetails?: DatascienceNotebookSessionNotebookSessionConfigurationDetails;
  /**
  * notebook_session_runtime_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#notebook_session_runtime_config_details DatascienceNotebookSession#notebook_session_runtime_config_details}
  */
  readonly notebookSessionRuntimeConfigDetails?: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails;
  /**
  * notebook_session_storage_mount_configuration_details_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#notebook_session_storage_mount_configuration_details_list DatascienceNotebookSession#notebook_session_storage_mount_configuration_details_list}
  */
  readonly notebookSessionStorageMountConfigurationDetailsList?: DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#timeouts DatascienceNotebookSession#timeouts}
  */
  readonly timeouts?: DatascienceNotebookSessionTimeouts;
}
export interface DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#cpu_baseline DatascienceNotebookSession#cpu_baseline}
  */
  readonly cpuBaseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}
  */
  readonly ocpus?: number;
}

export function datascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsToTerraform(struct?: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_baseline: cdktf.stringToTerraform(struct!.cpuBaseline),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsToHclTerraform(struct?: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_baseline: {
      value: cdktf.stringToHclTerraform(struct!.cpuBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBaseline = this._cpuBaseline;
    }
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

  public set internalValue(value: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuBaseline = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuBaseline = value.cpuBaseline;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // cpu_baseline - computed: true, optional: true, required: false
  private _cpuBaseline?: string; 
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }
  public set cpuBaseline(value: string) {
    this._cpuBaseline = value;
  }
  public resetCpuBaseline() {
    this._cpuBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBaselineInput() {
    return this._cpuBaseline;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatascienceNotebookSessionNotebookSessionConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * notebook_session_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#notebook_session_shape_config_details DatascienceNotebookSession#notebook_session_shape_config_details}
  */
  readonly notebookSessionShapeConfigDetails?: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails;
}

export function datascienceNotebookSessionNotebookSessionConfigDetailsToTerraform(struct?: DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    shape: cdktf.stringToTerraform(struct!.shape),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    notebook_session_shape_config_details: datascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsToTerraform(struct!.notebookSessionShapeConfigDetails),
  }
}


export function datascienceNotebookSessionNotebookSessionConfigDetailsToHclTerraform(struct?: DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSizeInGbs),
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
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
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
    notebook_session_shape_config_details: {
      value: datascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsToHclTerraform(struct!.notebookSessionShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceNotebookSessionNotebookSessionConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSizeInGbs = this._blockStorageSizeInGbs;
    }
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._notebookSessionShapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookSessionShapeConfigDetails = this._notebookSessionShapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceNotebookSessionNotebookSessionConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSizeInGbs = undefined;
      this._privateEndpointId = undefined;
      this._shape = undefined;
      this._subnetId = undefined;
      this._notebookSessionShapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSizeInGbs = value.blockStorageSizeInGbs;
      this._privateEndpointId = value.privateEndpointId;
      this._shape = value.shape;
      this._subnetId = value.subnetId;
      this._notebookSessionShapeConfigDetails.internalValue = value.notebookSessionShapeConfigDetails;
    }
  }

  // block_storage_size_in_gbs - computed: true, optional: true, required: false
  private _blockStorageSizeInGbs?: number; 
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }
  public set blockStorageSizeInGbs(value: number) {
    this._blockStorageSizeInGbs = value;
  }
  public resetBlockStorageSizeInGbs() {
    this._blockStorageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInGbsInput() {
    return this._blockStorageSizeInGbs;
  }

  // private_endpoint_id - computed: true, optional: true, required: false
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

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // subnet_id - computed: true, optional: true, required: false
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

  // notebook_session_shape_config_details - computed: false, optional: true, required: false
  private _notebookSessionShapeConfigDetails = new DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference(this, "notebook_session_shape_config_details");
  public get notebookSessionShapeConfigDetails() {
    return this._notebookSessionShapeConfigDetails;
  }
  public putNotebookSessionShapeConfigDetails(value: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails) {
    this._notebookSessionShapeConfigDetails.internalValue = value;
  }
  public resetNotebookSessionShapeConfigDetails() {
    this._notebookSessionShapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionShapeConfigDetailsInput() {
    return this._notebookSessionShapeConfigDetails.internalValue;
  }
}
export interface DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#cpu_baseline DatascienceNotebookSession#cpu_baseline}
  */
  readonly cpuBaseline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}
  */
  readonly ocpus?: number;
}

export function datascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsToTerraform(struct?: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_baseline: cdktf.stringToTerraform(struct!.cpuBaseline),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function datascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsToHclTerraform(struct?: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_baseline: {
      value: cdktf.stringToHclTerraform(struct!.cpuBaseline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuBaseline !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuBaseline = this._cpuBaseline;
    }
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

  public set internalValue(value: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuBaseline = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuBaseline = value.cpuBaseline;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // cpu_baseline - computed: true, optional: true, required: false
  private _cpuBaseline?: string; 
  public get cpuBaseline() {
    return this.getStringAttribute('cpu_baseline');
  }
  public set cpuBaseline(value: string) {
    this._cpuBaseline = value;
  }
  public resetCpuBaseline() {
    this._cpuBaseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuBaselineInput() {
    return this._cpuBaseline;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DatascienceNotebookSessionNotebookSessionConfigurationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}
  */
  readonly blockStorageSizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}
  */
  readonly subnetId: string;
  /**
  * notebook_session_shape_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#notebook_session_shape_config_details DatascienceNotebookSession#notebook_session_shape_config_details}
  */
  readonly notebookSessionShapeConfigDetails?: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails;
}

export function datascienceNotebookSessionNotebookSessionConfigurationDetailsToTerraform(struct?: DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference | DatascienceNotebookSessionNotebookSessionConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size_in_gbs: cdktf.numberToTerraform(struct!.blockStorageSizeInGbs),
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    shape: cdktf.stringToTerraform(struct!.shape),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    notebook_session_shape_config_details: datascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsToTerraform(struct!.notebookSessionShapeConfigDetails),
  }
}


export function datascienceNotebookSessionNotebookSessionConfigurationDetailsToHclTerraform(struct?: DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference | DatascienceNotebookSessionNotebookSessionConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSizeInGbs),
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
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
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
    notebook_session_shape_config_details: {
      value: datascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsToHclTerraform(struct!.notebookSessionShapeConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceNotebookSessionNotebookSessionConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSizeInGbs = this._blockStorageSizeInGbs;
    }
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._notebookSessionShapeConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookSessionShapeConfigDetails = this._notebookSessionShapeConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceNotebookSessionNotebookSessionConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSizeInGbs = undefined;
      this._privateEndpointId = undefined;
      this._shape = undefined;
      this._subnetId = undefined;
      this._notebookSessionShapeConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSizeInGbs = value.blockStorageSizeInGbs;
      this._privateEndpointId = value.privateEndpointId;
      this._shape = value.shape;
      this._subnetId = value.subnetId;
      this._notebookSessionShapeConfigDetails.internalValue = value.notebookSessionShapeConfigDetails;
    }
  }

  // block_storage_size_in_gbs - computed: true, optional: true, required: false
  private _blockStorageSizeInGbs?: number; 
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }
  public set blockStorageSizeInGbs(value: number) {
    this._blockStorageSizeInGbs = value;
  }
  public resetBlockStorageSizeInGbs() {
    this._blockStorageSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInGbsInput() {
    return this._blockStorageSizeInGbs;
  }

  // private_endpoint_id - computed: true, optional: true, required: false
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

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
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

  // notebook_session_shape_config_details - computed: false, optional: true, required: false
  private _notebookSessionShapeConfigDetails = new DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference(this, "notebook_session_shape_config_details");
  public get notebookSessionShapeConfigDetails() {
    return this._notebookSessionShapeConfigDetails;
  }
  public putNotebookSessionShapeConfigDetails(value: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails) {
    this._notebookSessionShapeConfigDetails.internalValue = value;
  }
  public resetNotebookSessionShapeConfigDetails() {
    this._notebookSessionShapeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionShapeConfigDetailsInput() {
    return this._notebookSessionShapeConfigDetails.internalValue;
  }
}
export interface DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#url DatascienceNotebookSession#url}
  */
  readonly url: string;
}

export function datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionToTerraform(struct?: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionToHclTerraform(struct?: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList extends cdktf.ComplexList {
  public internalValue? : DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection[] | cdktf.IResolvable

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
  public get(index: number): DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference {
    return new DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails {
  /**
  * notebook_session_git_repo_config_collection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#notebook_session_git_repo_config_collection DatascienceNotebookSession#notebook_session_git_repo_config_collection}
  */
  readonly notebookSessionGitRepoConfigCollection?: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection[] | cdktf.IResolvable;
}

export function datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsToTerraform(struct?: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notebook_session_git_repo_config_collection: cdktf.listMapper(datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionToTerraform, true)(struct!.notebookSessionGitRepoConfigCollection),
  }
}


export function datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsToHclTerraform(struct?: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notebook_session_git_repo_config_collection: {
      value: cdktf.listMapperHcl(datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionToHclTerraform, true)(struct!.notebookSessionGitRepoConfigCollection),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notebookSessionGitRepoConfigCollection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookSessionGitRepoConfigCollection = this._notebookSessionGitRepoConfigCollection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notebookSessionGitRepoConfigCollection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notebookSessionGitRepoConfigCollection.internalValue = value.notebookSessionGitRepoConfigCollection;
    }
  }

  // notebook_session_git_repo_config_collection - computed: false, optional: true, required: false
  private _notebookSessionGitRepoConfigCollection = new DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList(this, "notebook_session_git_repo_config_collection", false);
  public get notebookSessionGitRepoConfigCollection() {
    return this._notebookSessionGitRepoConfigCollection;
  }
  public putNotebookSessionGitRepoConfigCollection(value: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection[] | cdktf.IResolvable) {
    this._notebookSessionGitRepoConfigCollection.internalValue = value;
  }
  public resetNotebookSessionGitRepoConfigCollection() {
    this._notebookSessionGitRepoConfigCollection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionGitRepoConfigCollectionInput() {
    return this._notebookSessionGitRepoConfigCollection.internalValue;
  }
}
export interface DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#custom_environment_variables DatascienceNotebookSession#custom_environment_variables}
  */
  readonly customEnvironmentVariables?: { [key: string]: string };
  /**
  * notebook_session_git_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#notebook_session_git_config_details DatascienceNotebookSession#notebook_session_git_config_details}
  */
  readonly notebookSessionGitConfigDetails?: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails;
}

export function datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsToTerraform(struct?: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customEnvironmentVariables),
    notebook_session_git_config_details: datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsToTerraform(struct!.notebookSessionGitConfigDetails),
  }
}


export function datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsToHclTerraform(struct?: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference | DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notebook_session_git_config_details: {
      value: datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsToHclTerraform(struct!.notebookSessionGitConfigDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEnvironmentVariables = this._customEnvironmentVariables;
    }
    if (this._notebookSessionGitConfigDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookSessionGitConfigDetails = this._notebookSessionGitConfigDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customEnvironmentVariables = undefined;
      this._notebookSessionGitConfigDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customEnvironmentVariables = value.customEnvironmentVariables;
      this._notebookSessionGitConfigDetails.internalValue = value.notebookSessionGitConfigDetails;
    }
  }

  // custom_environment_variables - computed: true, optional: true, required: false
  private _customEnvironmentVariables?: { [key: string]: string }; 
  public get customEnvironmentVariables() {
    return this.getStringMapAttribute('custom_environment_variables');
  }
  public set customEnvironmentVariables(value: { [key: string]: string }) {
    this._customEnvironmentVariables = value;
  }
  public resetCustomEnvironmentVariables() {
    this._customEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvironmentVariablesInput() {
    return this._customEnvironmentVariables;
  }

  // notebook_session_git_config_details - computed: false, optional: true, required: false
  private _notebookSessionGitConfigDetails = new DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference(this, "notebook_session_git_config_details");
  public get notebookSessionGitConfigDetails() {
    return this._notebookSessionGitConfigDetails;
  }
  public putNotebookSessionGitConfigDetails(value: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails) {
    this._notebookSessionGitConfigDetails.internalValue = value;
  }
  public resetNotebookSessionGitConfigDetails() {
    this._notebookSessionGitConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionGitConfigDetailsInput() {
    return this._notebookSessionGitConfigDetails.internalValue;
  }
}
export interface DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#bucket DatascienceNotebookSession#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#destination_directory_name DatascienceNotebookSession#destination_directory_name}
  */
  readonly destinationDirectoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#destination_path DatascienceNotebookSession#destination_path}
  */
  readonly destinationPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#export_id DatascienceNotebookSession#export_id}
  */
  readonly exportId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#mount_target_id DatascienceNotebookSession#mount_target_id}
  */
  readonly mountTargetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#namespace DatascienceNotebookSession#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#prefix DatascienceNotebookSession#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#storage_type DatascienceNotebookSession#storage_type}
  */
  readonly storageType: string;
}

export function datascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructToTerraform(struct?: DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    destination_directory_name: cdktf.stringToTerraform(struct!.destinationDirectoryName),
    destination_path: cdktf.stringToTerraform(struct!.destinationPath),
    export_id: cdktf.stringToTerraform(struct!.exportId),
    mount_target_id: cdktf.stringToTerraform(struct!.mountTargetId),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
  }
}


export function datascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructToHclTerraform(struct?: DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_directory_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationDirectoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_path: {
      value: cdktf.stringToHclTerraform(struct!.destinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_id: {
      value: cdktf.stringToHclTerraform(struct!.exportId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target_id: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetId),
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._destinationDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDirectoryName = this._destinationDirectoryName;
    }
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    if (this._exportId !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportId = this._exportId;
    }
    if (this._mountTargetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetId = this._mountTargetId;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._destinationDirectoryName = undefined;
      this._destinationPath = undefined;
      this._exportId = undefined;
      this._mountTargetId = undefined;
      this._namespace = undefined;
      this._prefix = undefined;
      this._storageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._destinationDirectoryName = value.destinationDirectoryName;
      this._destinationPath = value.destinationPath;
      this._exportId = value.exportId;
      this._mountTargetId = value.mountTargetId;
      this._namespace = value.namespace;
      this._prefix = value.prefix;
      this._storageType = value.storageType;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // destination_directory_name - computed: false, optional: false, required: true
  private _destinationDirectoryName?: string; 
  public get destinationDirectoryName() {
    return this.getStringAttribute('destination_directory_name');
  }
  public set destinationDirectoryName(value: string) {
    this._destinationDirectoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDirectoryNameInput() {
    return this._destinationDirectoryName;
  }

  // destination_path - computed: true, optional: true, required: false
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  public resetDestinationPath() {
    this._destinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // export_id - computed: true, optional: true, required: false
  private _exportId?: string; 
  public get exportId() {
    return this.getStringAttribute('export_id');
  }
  public set exportId(value: string) {
    this._exportId = value;
  }
  public resetExportId() {
    this._exportId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportIdInput() {
    return this._exportId;
  }

  // mount_target_id - computed: true, optional: true, required: false
  private _mountTargetId?: string; 
  public get mountTargetId() {
    return this.getStringAttribute('mount_target_id');
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }
  public resetMountTargetId() {
    this._mountTargetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetIdInput() {
    return this._mountTargetId;
  }

  // namespace - computed: true, optional: true, required: false
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}

export class DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList extends cdktf.ComplexList {
  public internalValue? : DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference {
    return new DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatascienceNotebookSessionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#create DatascienceNotebookSession#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#delete DatascienceNotebookSession#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#update DatascienceNotebookSession#update}
  */
  readonly update?: string;
}

export function datascienceNotebookSessionTimeoutsToTerraform(struct?: DatascienceNotebookSessionTimeouts | cdktf.IResolvable): any {
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


export function datascienceNotebookSessionTimeoutsToHclTerraform(struct?: DatascienceNotebookSessionTimeouts | cdktf.IResolvable): any {
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

export class DatascienceNotebookSessionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatascienceNotebookSessionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatascienceNotebookSessionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session oci_datascience_notebook_session}
*/
export class DatascienceNotebookSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datascience_notebook_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatascienceNotebookSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatascienceNotebookSession to import
  * @param importFromId The id of the existing DatascienceNotebookSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatascienceNotebookSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datascience_notebook_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/datascience_notebook_session oci_datascience_notebook_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatascienceNotebookSessionConfig
  */
  public constructor(scope: Construct, id: string, config: DatascienceNotebookSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_notebook_session',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._projectId = config.projectId;
    this._state = config.state;
    this._notebookSessionConfigDetails.internalValue = config.notebookSessionConfigDetails;
    this._notebookSessionConfigurationDetails.internalValue = config.notebookSessionConfigurationDetails;
    this._notebookSessionRuntimeConfigDetails.internalValue = config.notebookSessionRuntimeConfigDetails;
    this._notebookSessionStorageMountConfigurationDetailsList.internalValue = config.notebookSessionStorageMountConfigurationDetailsList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // notebook_session_url - computed: true, optional: false, required: false
  public get notebookSessionUrl() {
    return this.getStringAttribute('notebook_session_url');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // notebook_session_config_details - computed: false, optional: true, required: false
  private _notebookSessionConfigDetails = new DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference(this, "notebook_session_config_details");
  public get notebookSessionConfigDetails() {
    return this._notebookSessionConfigDetails;
  }
  public putNotebookSessionConfigDetails(value: DatascienceNotebookSessionNotebookSessionConfigDetails) {
    this._notebookSessionConfigDetails.internalValue = value;
  }
  public resetNotebookSessionConfigDetails() {
    this._notebookSessionConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionConfigDetailsInput() {
    return this._notebookSessionConfigDetails.internalValue;
  }

  // notebook_session_configuration_details - computed: false, optional: true, required: false
  private _notebookSessionConfigurationDetails = new DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference(this, "notebook_session_configuration_details");
  public get notebookSessionConfigurationDetails() {
    return this._notebookSessionConfigurationDetails;
  }
  public putNotebookSessionConfigurationDetails(value: DatascienceNotebookSessionNotebookSessionConfigurationDetails) {
    this._notebookSessionConfigurationDetails.internalValue = value;
  }
  public resetNotebookSessionConfigurationDetails() {
    this._notebookSessionConfigurationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionConfigurationDetailsInput() {
    return this._notebookSessionConfigurationDetails.internalValue;
  }

  // notebook_session_runtime_config_details - computed: false, optional: true, required: false
  private _notebookSessionRuntimeConfigDetails = new DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference(this, "notebook_session_runtime_config_details");
  public get notebookSessionRuntimeConfigDetails() {
    return this._notebookSessionRuntimeConfigDetails;
  }
  public putNotebookSessionRuntimeConfigDetails(value: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails) {
    this._notebookSessionRuntimeConfigDetails.internalValue = value;
  }
  public resetNotebookSessionRuntimeConfigDetails() {
    this._notebookSessionRuntimeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionRuntimeConfigDetailsInput() {
    return this._notebookSessionRuntimeConfigDetails.internalValue;
  }

  // notebook_session_storage_mount_configuration_details_list - computed: false, optional: true, required: false
  private _notebookSessionStorageMountConfigurationDetailsList = new DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList(this, "notebook_session_storage_mount_configuration_details_list", false);
  public get notebookSessionStorageMountConfigurationDetailsList() {
    return this._notebookSessionStorageMountConfigurationDetailsList;
  }
  public putNotebookSessionStorageMountConfigurationDetailsList(value: DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct[] | cdktf.IResolvable) {
    this._notebookSessionStorageMountConfigurationDetailsList.internalValue = value;
  }
  public resetNotebookSessionStorageMountConfigurationDetailsList() {
    this._notebookSessionStorageMountConfigurationDetailsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookSessionStorageMountConfigurationDetailsListInput() {
    return this._notebookSessionStorageMountConfigurationDetailsList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatascienceNotebookSessionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatascienceNotebookSessionTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      state: cdktf.stringToTerraform(this._state),
      notebook_session_config_details: datascienceNotebookSessionNotebookSessionConfigDetailsToTerraform(this._notebookSessionConfigDetails.internalValue),
      notebook_session_configuration_details: datascienceNotebookSessionNotebookSessionConfigurationDetailsToTerraform(this._notebookSessionConfigurationDetails.internalValue),
      notebook_session_runtime_config_details: datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsToTerraform(this._notebookSessionRuntimeConfigDetails.internalValue),
      notebook_session_storage_mount_configuration_details_list: cdktf.listMapper(datascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructToTerraform, true)(this._notebookSessionStorageMountConfigurationDetailsList.internalValue),
      timeouts: datascienceNotebookSessionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notebook_session_config_details: {
        value: datascienceNotebookSessionNotebookSessionConfigDetailsToHclTerraform(this._notebookSessionConfigDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceNotebookSessionNotebookSessionConfigDetailsList",
      },
      notebook_session_configuration_details: {
        value: datascienceNotebookSessionNotebookSessionConfigurationDetailsToHclTerraform(this._notebookSessionConfigurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceNotebookSessionNotebookSessionConfigurationDetailsList",
      },
      notebook_session_runtime_config_details: {
        value: datascienceNotebookSessionNotebookSessionRuntimeConfigDetailsToHclTerraform(this._notebookSessionRuntimeConfigDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsList",
      },
      notebook_session_storage_mount_configuration_details_list: {
        value: cdktf.listMapperHcl(datascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructToHclTerraform, true)(this._notebookSessionStorageMountConfigurationDetailsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList",
      },
      timeouts: {
        value: datascienceNotebookSessionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatascienceNotebookSessionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
