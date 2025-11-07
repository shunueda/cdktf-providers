// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapmirrorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Snapmirror provision destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#create_destination Snapmirror#create_destination}
  */
  readonly createDestination?: SnapmirrorCreateDestination;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#cx_profile_name Snapmirror#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Snapmirror destination endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#destination_endpoint Snapmirror#destination_endpoint}
  */
  readonly destinationEndpoint: SnapmirrorDestinationEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#healthy Snapmirror#healthy}
  */
  readonly healthy?: boolean | cdktf.IResolvable;
  /**
  * initialize the relationship
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#initialize Snapmirror#initialize}
  */
  readonly initialize?: boolean | cdktf.IResolvable;
  /**
  * policy details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#policy Snapmirror#policy}
  */
  readonly policy?: SnapmirrorPolicy;
  /**
  * Snapmirror source endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#source_endpoint Snapmirror#source_endpoint}
  */
  readonly sourceEndpoint: SnapmirrorSourceEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#state Snapmirror#state}
  */
  readonly state?: string;
}
export interface SnapmirrorCreateDestination {
  /**
  * Enable this property to provision the destination endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#enabled Snapmirror#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function snapmirrorCreateDestinationToTerraform(struct?: SnapmirrorCreateDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function snapmirrorCreateDestinationToHclTerraform(struct?: SnapmirrorCreateDestination | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapmirrorCreateDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorCreateDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapmirrorCreateDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SnapmirrorDestinationEndpointCluster {
  /**
  * cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#name Snapmirror#name}
  */
  readonly name: string;
}

export function snapmirrorDestinationEndpointClusterToTerraform(struct?: SnapmirrorDestinationEndpointCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snapmirrorDestinationEndpointClusterToHclTerraform(struct?: SnapmirrorDestinationEndpointCluster | cdktf.IResolvable): any {
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

export class SnapmirrorDestinationEndpointClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorDestinationEndpointCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorDestinationEndpointCluster | cdktf.IResolvable | undefined) {
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
export interface SnapmirrorDestinationEndpoint {
  /**
  * Cluster details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#cluster Snapmirror#cluster}
  */
  readonly cluster?: SnapmirrorDestinationEndpointCluster;
  /**
  * Path to the destination endpoint of the SnapMirror relationship
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#path Snapmirror#path}
  */
  readonly path: string;
}

export function snapmirrorDestinationEndpointToTerraform(struct?: SnapmirrorDestinationEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: snapmirrorDestinationEndpointClusterToTerraform(struct!.cluster),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function snapmirrorDestinationEndpointToHclTerraform(struct?: SnapmirrorDestinationEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: snapmirrorDestinationEndpointClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapmirrorDestinationEndpointCluster",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapmirrorDestinationEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorDestinationEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapmirrorDestinationEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster.internalValue = value.cluster;
      this._path = value.path;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new SnapmirrorDestinationEndpointClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: SnapmirrorDestinationEndpointCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
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
}
export interface SnapmirrorPolicyTransferSchedule {
  /**
  * schedule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#name Snapmirror#name}
  */
  readonly name: string;
}

export function snapmirrorPolicyTransferScheduleToTerraform(struct?: SnapmirrorPolicyTransferSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snapmirrorPolicyTransferScheduleToHclTerraform(struct?: SnapmirrorPolicyTransferSchedule | cdktf.IResolvable): any {
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

export class SnapmirrorPolicyTransferScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorPolicyTransferSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorPolicyTransferSchedule | cdktf.IResolvable | undefined) {
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
export interface SnapmirrorPolicy {
  /**
  * policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#name Snapmirror#name}
  */
  readonly name: string;
  /**
  * transfer schedule details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#transfer_schedule Snapmirror#transfer_schedule}
  */
  readonly transferSchedule?: SnapmirrorPolicyTransferSchedule;
}

export function snapmirrorPolicyToTerraform(struct?: SnapmirrorPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    transfer_schedule: snapmirrorPolicyTransferScheduleToTerraform(struct!.transferSchedule),
  }
}


export function snapmirrorPolicyToHclTerraform(struct?: SnapmirrorPolicy | cdktf.IResolvable): any {
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
    transfer_schedule: {
      value: snapmirrorPolicyTransferScheduleToHclTerraform(struct!.transferSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapmirrorPolicyTransferSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapmirrorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._transferSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferSchedule = this._transferSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapmirrorPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._transferSchedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._transferSchedule.internalValue = value.transferSchedule;
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

  // transfer_schedule - computed: false, optional: true, required: false
  private _transferSchedule = new SnapmirrorPolicyTransferScheduleOutputReference(this, "transfer_schedule");
  public get transferSchedule() {
    return this._transferSchedule;
  }
  public putTransferSchedule(value: SnapmirrorPolicyTransferSchedule) {
    this._transferSchedule.internalValue = value;
  }
  public resetTransferSchedule() {
    this._transferSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferScheduleInput() {
    return this._transferSchedule.internalValue;
  }
}
export interface SnapmirrorSourceEndpointCluster {
  /**
  * cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#name Snapmirror#name}
  */
  readonly name: string;
}

export function snapmirrorSourceEndpointClusterToTerraform(struct?: SnapmirrorSourceEndpointCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snapmirrorSourceEndpointClusterToHclTerraform(struct?: SnapmirrorSourceEndpointCluster | cdktf.IResolvable): any {
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

export class SnapmirrorSourceEndpointClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorSourceEndpointCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorSourceEndpointCluster | cdktf.IResolvable | undefined) {
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
export interface SnapmirrorSourceEndpoint {
  /**
  * Cluster details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#cluster Snapmirror#cluster}
  */
  readonly cluster?: SnapmirrorSourceEndpointCluster;
  /**
  * Path to the source endpoint of the SnapMirror relationship
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#path Snapmirror#path}
  */
  readonly path: string;
}

export function snapmirrorSourceEndpointToTerraform(struct?: SnapmirrorSourceEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: snapmirrorSourceEndpointClusterToTerraform(struct!.cluster),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function snapmirrorSourceEndpointToHclTerraform(struct?: SnapmirrorSourceEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: snapmirrorSourceEndpointClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapmirrorSourceEndpointCluster",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapmirrorSourceEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorSourceEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapmirrorSourceEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster.internalValue = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster.internalValue = value.cluster;
      this._path = value.path;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new SnapmirrorSourceEndpointClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: SnapmirrorSourceEndpointCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror netapp-ontap_snapmirror}
*/
export class Snapmirror extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_snapmirror";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snapmirror resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snapmirror to import
  * @param importFromId The id of the existing Snapmirror that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snapmirror to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_snapmirror", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror netapp-ontap_snapmirror} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapmirrorConfig
  */
  public constructor(scope: Construct, id: string, config: SnapmirrorConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_snapmirror',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createDestination.internalValue = config.createDestination;
    this._cxProfileName = config.cxProfileName;
    this._destinationEndpoint.internalValue = config.destinationEndpoint;
    this._healthy = config.healthy;
    this._initialize = config.initialize;
    this._policy.internalValue = config.policy;
    this._sourceEndpoint.internalValue = config.sourceEndpoint;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_destination - computed: false, optional: true, required: false
  private _createDestination = new SnapmirrorCreateDestinationOutputReference(this, "create_destination");
  public get createDestination() {
    return this._createDestination;
  }
  public putCreateDestination(value: SnapmirrorCreateDestination) {
    this._createDestination.internalValue = value;
  }
  public resetCreateDestination() {
    this._createDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDestinationInput() {
    return this._createDestination.internalValue;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // destination_endpoint - computed: false, optional: false, required: true
  private _destinationEndpoint = new SnapmirrorDestinationEndpointOutputReference(this, "destination_endpoint");
  public get destinationEndpoint() {
    return this._destinationEndpoint;
  }
  public putDestinationEndpoint(value: SnapmirrorDestinationEndpoint) {
    this._destinationEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndpointInput() {
    return this._destinationEndpoint.internalValue;
  }

  // healthy - computed: true, optional: true, required: false
  private _healthy?: boolean | cdktf.IResolvable; 
  public get healthy() {
    return this.getBooleanAttribute('healthy');
  }
  public set healthy(value: boolean | cdktf.IResolvable) {
    this._healthy = value;
  }
  public resetHealthy() {
    this._healthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initialize - computed: true, optional: true, required: false
  private _initialize?: boolean | cdktf.IResolvable; 
  public get initialize() {
    return this.getBooleanAttribute('initialize');
  }
  public set initialize(value: boolean | cdktf.IResolvable) {
    this._initialize = value;
  }
  public resetInitialize() {
    this._initialize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeInput() {
    return this._initialize;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new SnapmirrorPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: SnapmirrorPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // source_endpoint - computed: false, optional: false, required: true
  private _sourceEndpoint = new SnapmirrorSourceEndpointOutputReference(this, "source_endpoint");
  public get sourceEndpoint() {
    return this._sourceEndpoint;
  }
  public putSourceEndpoint(value: SnapmirrorSourceEndpoint) {
    this._sourceEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndpointInput() {
    return this._sourceEndpoint.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_destination: snapmirrorCreateDestinationToTerraform(this._createDestination.internalValue),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      destination_endpoint: snapmirrorDestinationEndpointToTerraform(this._destinationEndpoint.internalValue),
      healthy: cdktf.booleanToTerraform(this._healthy),
      initialize: cdktf.booleanToTerraform(this._initialize),
      policy: snapmirrorPolicyToTerraform(this._policy.internalValue),
      source_endpoint: snapmirrorSourceEndpointToTerraform(this._sourceEndpoint.internalValue),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_destination: {
        value: snapmirrorCreateDestinationToHclTerraform(this._createDestination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapmirrorCreateDestination",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint: {
        value: snapmirrorDestinationEndpointToHclTerraform(this._destinationEndpoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapmirrorDestinationEndpoint",
      },
      healthy: {
        value: cdktf.booleanToHclTerraform(this._healthy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      initialize: {
        value: cdktf.booleanToHclTerraform(this._initialize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: snapmirrorPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapmirrorPolicy",
      },
      source_endpoint: {
        value: snapmirrorSourceEndpointToHclTerraform(this._sourceEndpoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapmirrorSourceEndpoint",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
