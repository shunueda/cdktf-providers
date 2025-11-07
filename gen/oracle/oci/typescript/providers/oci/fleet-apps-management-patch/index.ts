// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementPatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#compartment_id FleetAppsManagementPatch#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#defined_tags FleetAppsManagementPatch#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#description FleetAppsManagementPatch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#freeform_tags FleetAppsManagementPatch#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#id FleetAppsManagementPatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#name FleetAppsManagementPatch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#severity FleetAppsManagementPatch#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#time_released FleetAppsManagementPatch#time_released}
  */
  readonly timeReleased: string;
  /**
  * artifact_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#artifact_details FleetAppsManagementPatch#artifact_details}
  */
  readonly artifactDetails: FleetAppsManagementPatchArtifactDetails;
  /**
  * dependent_patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#dependent_patches FleetAppsManagementPatch#dependent_patches}
  */
  readonly dependentPatches?: FleetAppsManagementPatchDependentPatches[] | cdktf.IResolvable;
  /**
  * patch_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#patch_type FleetAppsManagementPatch#patch_type}
  */
  readonly patchType: FleetAppsManagementPatchPatchType;
  /**
  * product block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#product FleetAppsManagementPatch#product}
  */
  readonly product: FleetAppsManagementPatchProduct;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#timeouts FleetAppsManagementPatch#timeouts}
  */
  readonly timeouts?: FleetAppsManagementPatchTimeouts;
}
export interface FleetAppsManagementPatchArtifactDetailsArtifactContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#bucket FleetAppsManagementPatch#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#checksum FleetAppsManagementPatch#checksum}
  */
  readonly checksum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#namespace FleetAppsManagementPatch#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#object FleetAppsManagementPatch#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#source_type FleetAppsManagementPatch#source_type}
  */
  readonly sourceType: string;
}

export function fleetAppsManagementPatchArtifactDetailsArtifactContentToTerraform(struct?: FleetAppsManagementPatchArtifactDetailsArtifactContentOutputReference | FleetAppsManagementPatchArtifactDetailsArtifactContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    checksum: cdktf.stringToTerraform(struct!.checksum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function fleetAppsManagementPatchArtifactDetailsArtifactContentToHclTerraform(struct?: FleetAppsManagementPatchArtifactDetailsArtifactContentOutputReference | FleetAppsManagementPatchArtifactDetailsArtifactContent): any {
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
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
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
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPatchArtifactDetailsArtifactContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementPatchArtifactDetailsArtifactContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPatchArtifactDetailsArtifactContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._checksum = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._checksum = value.checksum;
      this._namespace = value.namespace;
      this._object = value.object;
      this._sourceType = value.sourceType;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // checksum - computed: false, optional: false, required: true
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
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

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface FleetAppsManagementPatchArtifactDetailsArtifact {
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#content FleetAppsManagementPatch#content}
  */
  readonly content?: FleetAppsManagementPatchArtifactDetailsArtifactContent;
}

export function fleetAppsManagementPatchArtifactDetailsArtifactToTerraform(struct?: FleetAppsManagementPatchArtifactDetailsArtifactOutputReference | FleetAppsManagementPatchArtifactDetailsArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: fleetAppsManagementPatchArtifactDetailsArtifactContentToTerraform(struct!.content),
  }
}


export function fleetAppsManagementPatchArtifactDetailsArtifactToHclTerraform(struct?: FleetAppsManagementPatchArtifactDetailsArtifactOutputReference | FleetAppsManagementPatchArtifactDetailsArtifact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: fleetAppsManagementPatchArtifactDetailsArtifactContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPatchArtifactDetailsArtifactContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPatchArtifactDetailsArtifactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementPatchArtifactDetailsArtifact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPatchArtifactDetailsArtifact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content.internalValue = value.content;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content = new FleetAppsManagementPatchArtifactDetailsArtifactContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: FleetAppsManagementPatchArtifactDetailsArtifactContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}
export interface FleetAppsManagementPatchArtifactDetailsArtifactsContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#bucket FleetAppsManagementPatch#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#checksum FleetAppsManagementPatch#checksum}
  */
  readonly checksum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#namespace FleetAppsManagementPatch#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#object FleetAppsManagementPatch#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#source_type FleetAppsManagementPatch#source_type}
  */
  readonly sourceType: string;
}

export function fleetAppsManagementPatchArtifactDetailsArtifactsContentToTerraform(struct?: FleetAppsManagementPatchArtifactDetailsArtifactsContentOutputReference | FleetAppsManagementPatchArtifactDetailsArtifactsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    checksum: cdktf.stringToTerraform(struct!.checksum),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function fleetAppsManagementPatchArtifactDetailsArtifactsContentToHclTerraform(struct?: FleetAppsManagementPatchArtifactDetailsArtifactsContentOutputReference | FleetAppsManagementPatchArtifactDetailsArtifactsContent): any {
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
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
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
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPatchArtifactDetailsArtifactsContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementPatchArtifactDetailsArtifactsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPatchArtifactDetailsArtifactsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._checksum = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._checksum = value.checksum;
      this._namespace = value.namespace;
      this._object = value.object;
      this._sourceType = value.sourceType;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // checksum - computed: false, optional: false, required: true
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
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

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface FleetAppsManagementPatchArtifactDetailsArtifacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#architecture FleetAppsManagementPatch#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#os_type FleetAppsManagementPatch#os_type}
  */
  readonly osType?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#content FleetAppsManagementPatch#content}
  */
  readonly content?: FleetAppsManagementPatchArtifactDetailsArtifactsContent;
}

export function fleetAppsManagementPatchArtifactDetailsArtifactsToTerraform(struct?: FleetAppsManagementPatchArtifactDetailsArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    os_type: cdktf.stringToTerraform(struct!.osType),
    content: fleetAppsManagementPatchArtifactDetailsArtifactsContentToTerraform(struct!.content),
  }
}


export function fleetAppsManagementPatchArtifactDetailsArtifactsToHclTerraform(struct?: FleetAppsManagementPatchArtifactDetailsArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architecture: {
      value: cdktf.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: fleetAppsManagementPatchArtifactDetailsArtifactsContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPatchArtifactDetailsArtifactsContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPatchArtifactDetailsArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementPatchArtifactDetailsArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPatchArtifactDetailsArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture = undefined;
      this._osType = undefined;
      this._content.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture = value.architecture;
      this._osType = value.osType;
      this._content.internalValue = value.content;
    }
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // os_type - computed: true, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // content - computed: false, optional: true, required: false
  private _content = new FleetAppsManagementPatchArtifactDetailsArtifactsContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: FleetAppsManagementPatchArtifactDetailsArtifactsContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}

export class FleetAppsManagementPatchArtifactDetailsArtifactsList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementPatchArtifactDetailsArtifacts[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementPatchArtifactDetailsArtifactsOutputReference {
    return new FleetAppsManagementPatchArtifactDetailsArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementPatchArtifactDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#category FleetAppsManagementPatch#category}
  */
  readonly category: string;
  /**
  * artifact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#artifact FleetAppsManagementPatch#artifact}
  */
  readonly artifact?: FleetAppsManagementPatchArtifactDetailsArtifact;
  /**
  * artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#artifacts FleetAppsManagementPatch#artifacts}
  */
  readonly artifacts?: FleetAppsManagementPatchArtifactDetailsArtifacts[] | cdktf.IResolvable;
}

export function fleetAppsManagementPatchArtifactDetailsToTerraform(struct?: FleetAppsManagementPatchArtifactDetailsOutputReference | FleetAppsManagementPatchArtifactDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    artifact: fleetAppsManagementPatchArtifactDetailsArtifactToTerraform(struct!.artifact),
    artifacts: cdktf.listMapper(fleetAppsManagementPatchArtifactDetailsArtifactsToTerraform, true)(struct!.artifacts),
  }
}


export function fleetAppsManagementPatchArtifactDetailsToHclTerraform(struct?: FleetAppsManagementPatchArtifactDetailsOutputReference | FleetAppsManagementPatchArtifactDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifact: {
      value: fleetAppsManagementPatchArtifactDetailsArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPatchArtifactDetailsArtifactList",
    },
    artifacts: {
      value: cdktf.listMapperHcl(fleetAppsManagementPatchArtifactDetailsArtifactsToHclTerraform, true)(struct!.artifacts),
      isBlock: true,
      type: "list",
      storageClassType: "FleetAppsManagementPatchArtifactDetailsArtifactsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPatchArtifactDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementPatchArtifactDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact?.internalValue;
    }
    if (this._artifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifacts = this._artifacts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPatchArtifactDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._artifact.internalValue = undefined;
      this._artifacts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._artifact.internalValue = value.artifact;
      this._artifacts.internalValue = value.artifacts;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact = new FleetAppsManagementPatchArtifactDetailsArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: FleetAppsManagementPatchArtifactDetailsArtifact) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // artifacts - computed: false, optional: true, required: false
  private _artifacts = new FleetAppsManagementPatchArtifactDetailsArtifactsList(this, "artifacts", false);
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: FleetAppsManagementPatchArtifactDetailsArtifacts[] | cdktf.IResolvable) {
    this._artifacts.internalValue = value;
  }
  public resetArtifacts() {
    this._artifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }
}
export interface FleetAppsManagementPatchDependentPatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#id FleetAppsManagementPatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function fleetAppsManagementPatchDependentPatchesToTerraform(struct?: FleetAppsManagementPatchDependentPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function fleetAppsManagementPatchDependentPatchesToHclTerraform(struct?: FleetAppsManagementPatchDependentPatches | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPatchDependentPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FleetAppsManagementPatchDependentPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPatchDependentPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class FleetAppsManagementPatchDependentPatchesList extends cdktf.ComplexList {
  public internalValue? : FleetAppsManagementPatchDependentPatches[] | cdktf.IResolvable

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
  public get(index: number): FleetAppsManagementPatchDependentPatchesOutputReference {
    return new FleetAppsManagementPatchDependentPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FleetAppsManagementPatchPatchType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#platform_configuration_id FleetAppsManagementPatch#platform_configuration_id}
  */
  readonly platformConfigurationId: string;
}

export function fleetAppsManagementPatchPatchTypeToTerraform(struct?: FleetAppsManagementPatchPatchTypeOutputReference | FleetAppsManagementPatchPatchType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform_configuration_id: cdktf.stringToTerraform(struct!.platformConfigurationId),
  }
}


export function fleetAppsManagementPatchPatchTypeToHclTerraform(struct?: FleetAppsManagementPatchPatchTypeOutputReference | FleetAppsManagementPatchPatchType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    platform_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.platformConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementPatchPatchTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementPatchPatchType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platformConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformConfigurationId = this._platformConfigurationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPatchPatchType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._platformConfigurationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._platformConfigurationId = value.platformConfigurationId;
    }
  }

  // platform_configuration_id - computed: false, optional: false, required: true
  private _platformConfigurationId?: string; 
  public get platformConfigurationId() {
    return this.getStringAttribute('platform_configuration_id');
  }
  public set platformConfigurationId(value: string) {
    this._platformConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformConfigurationIdInput() {
    return this._platformConfigurationId;
  }
}
export interface FleetAppsManagementPatchProduct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#platform_configuration_id FleetAppsManagementPatch#platform_configuration_id}
  */
  readonly platformConfigurationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#version FleetAppsManagementPatch#version}
  */
  readonly version: string;
}

export function fleetAppsManagementPatchProductToTerraform(struct?: FleetAppsManagementPatchProductOutputReference | FleetAppsManagementPatchProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform_configuration_id: cdktf.stringToTerraform(struct!.platformConfigurationId),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fleetAppsManagementPatchProductToHclTerraform(struct?: FleetAppsManagementPatchProductOutputReference | FleetAppsManagementPatchProduct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    platform_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.platformConfigurationId),
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

export class FleetAppsManagementPatchProductOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementPatchProduct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platformConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformConfigurationId = this._platformConfigurationId;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementPatchProduct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._platformConfigurationId = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._platformConfigurationId = value.platformConfigurationId;
      this._version = value.version;
    }
  }

  // platform_configuration_id - computed: false, optional: false, required: true
  private _platformConfigurationId?: string; 
  public get platformConfigurationId() {
    return this.getStringAttribute('platform_configuration_id');
  }
  public set platformConfigurationId(value: string) {
    this._platformConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformConfigurationIdInput() {
    return this._platformConfigurationId;
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
}
export interface FleetAppsManagementPatchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#create FleetAppsManagementPatch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#delete FleetAppsManagementPatch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#update FleetAppsManagementPatch#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementPatchTimeoutsToTerraform(struct?: FleetAppsManagementPatchTimeouts | cdktf.IResolvable): any {
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


export function fleetAppsManagementPatchTimeoutsToHclTerraform(struct?: FleetAppsManagementPatchTimeouts | cdktf.IResolvable): any {
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

export class FleetAppsManagementPatchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementPatchTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FleetAppsManagementPatchTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch oci_fleet_apps_management_patch}
*/
export class FleetAppsManagementPatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_patch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementPatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementPatch to import
  * @param importFromId The id of the existing FleetAppsManagementPatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementPatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_patch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_patch oci_fleet_apps_management_patch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementPatchConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementPatchConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_patch',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._severity = config.severity;
    this._timeReleased = config.timeReleased;
    this._artifactDetails.internalValue = config.artifactDetails;
    this._dependentPatches.internalValue = config.dependentPatches;
    this._patchType.internalValue = config.patchType;
    this._product.internalValue = config.product;
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

  // description - computed: true, optional: true, required: false
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

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // time_released - computed: false, optional: false, required: true
  private _timeReleased?: string; 
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }
  public set timeReleased(value: string) {
    this._timeReleased = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeReleasedInput() {
    return this._timeReleased;
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // artifact_details - computed: false, optional: false, required: true
  private _artifactDetails = new FleetAppsManagementPatchArtifactDetailsOutputReference(this, "artifact_details");
  public get artifactDetails() {
    return this._artifactDetails;
  }
  public putArtifactDetails(value: FleetAppsManagementPatchArtifactDetails) {
    this._artifactDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactDetailsInput() {
    return this._artifactDetails.internalValue;
  }

  // dependent_patches - computed: false, optional: true, required: false
  private _dependentPatches = new FleetAppsManagementPatchDependentPatchesList(this, "dependent_patches", false);
  public get dependentPatches() {
    return this._dependentPatches;
  }
  public putDependentPatches(value: FleetAppsManagementPatchDependentPatches[] | cdktf.IResolvable) {
    this._dependentPatches.internalValue = value;
  }
  public resetDependentPatches() {
    this._dependentPatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependentPatchesInput() {
    return this._dependentPatches.internalValue;
  }

  // patch_type - computed: false, optional: false, required: true
  private _patchType = new FleetAppsManagementPatchPatchTypeOutputReference(this, "patch_type");
  public get patchType() {
    return this._patchType;
  }
  public putPatchType(value: FleetAppsManagementPatchPatchType) {
    this._patchType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeInput() {
    return this._patchType.internalValue;
  }

  // product - computed: false, optional: false, required: true
  private _product = new FleetAppsManagementPatchProductOutputReference(this, "product");
  public get product() {
    return this._product;
  }
  public putProduct(value: FleetAppsManagementPatchProduct) {
    this._product.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementPatchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementPatchTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      severity: cdktf.stringToTerraform(this._severity),
      time_released: cdktf.stringToTerraform(this._timeReleased),
      artifact_details: fleetAppsManagementPatchArtifactDetailsToTerraform(this._artifactDetails.internalValue),
      dependent_patches: cdktf.listMapper(fleetAppsManagementPatchDependentPatchesToTerraform, true)(this._dependentPatches.internalValue),
      patch_type: fleetAppsManagementPatchPatchTypeToTerraform(this._patchType.internalValue),
      product: fleetAppsManagementPatchProductToTerraform(this._product.internalValue),
      timeouts: fleetAppsManagementPatchTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_released: {
        value: cdktf.stringToHclTerraform(this._timeReleased),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_details: {
        value: fleetAppsManagementPatchArtifactDetailsToHclTerraform(this._artifactDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementPatchArtifactDetailsList",
      },
      dependent_patches: {
        value: cdktf.listMapperHcl(fleetAppsManagementPatchDependentPatchesToHclTerraform, true)(this._dependentPatches.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementPatchDependentPatchesList",
      },
      patch_type: {
        value: fleetAppsManagementPatchPatchTypeToHclTerraform(this._patchType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementPatchPatchTypeList",
      },
      product: {
        value: fleetAppsManagementPatchProductToHclTerraform(this._product.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementPatchProductList",
      },
      timeouts: {
        value: fleetAppsManagementPatchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementPatchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
