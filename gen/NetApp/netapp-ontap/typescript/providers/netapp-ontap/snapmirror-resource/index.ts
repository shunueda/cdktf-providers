// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapmirrorResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Snapmirror provision destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#create_destination SnapmirrorResource#create_destination}
  */
  readonly createDestination?: SnapmirrorResourceCreateDestination;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#cx_profile_name SnapmirrorResource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Snapmirror destination endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#destination_endpoint SnapmirrorResource#destination_endpoint}
  */
  readonly destinationEndpoint: SnapmirrorResourceDestinationEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#healthy SnapmirrorResource#healthy}
  */
  readonly healthy?: boolean | cdktf.IResolvable;
  /**
  * initialize the relationship
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#initialize SnapmirrorResource#initialize}
  */
  readonly initialize?: boolean | cdktf.IResolvable;
  /**
  * policy details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#policy SnapmirrorResource#policy}
  */
  readonly policy?: SnapmirrorResourcePolicy;
  /**
  * Snapmirror source endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#source_endpoint SnapmirrorResource#source_endpoint}
  */
  readonly sourceEndpoint: SnapmirrorResourceSourceEndpoint;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#state SnapmirrorResource#state}
  */
  readonly state?: string;
}
export interface SnapmirrorResourceCreateDestination {
  /**
  * Enable this property to provision the destination endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#enabled SnapmirrorResource#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function snapmirrorResourceCreateDestinationToTerraform(struct?: SnapmirrorResourceCreateDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function snapmirrorResourceCreateDestinationToHclTerraform(struct?: SnapmirrorResourceCreateDestination | cdktf.IResolvable): any {
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

export class SnapmirrorResourceCreateDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorResourceCreateDestination | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorResourceCreateDestination | cdktf.IResolvable | undefined) {
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
export interface SnapmirrorResourceDestinationEndpointCluster {
  /**
  * cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#name SnapmirrorResource#name}
  */
  readonly name: string;
}

export function snapmirrorResourceDestinationEndpointClusterToTerraform(struct?: SnapmirrorResourceDestinationEndpointCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snapmirrorResourceDestinationEndpointClusterToHclTerraform(struct?: SnapmirrorResourceDestinationEndpointCluster | cdktf.IResolvable): any {
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

export class SnapmirrorResourceDestinationEndpointClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorResourceDestinationEndpointCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorResourceDestinationEndpointCluster | cdktf.IResolvable | undefined) {
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
export interface SnapmirrorResourceDestinationEndpoint {
  /**
  * Cluster details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#cluster SnapmirrorResource#cluster}
  */
  readonly cluster?: SnapmirrorResourceDestinationEndpointCluster;
  /**
  * Path to the destination endpoint of the SnapMirror relationship
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#path SnapmirrorResource#path}
  */
  readonly path: string;
}

export function snapmirrorResourceDestinationEndpointToTerraform(struct?: SnapmirrorResourceDestinationEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: snapmirrorResourceDestinationEndpointClusterToTerraform(struct!.cluster),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function snapmirrorResourceDestinationEndpointToHclTerraform(struct?: SnapmirrorResourceDestinationEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: snapmirrorResourceDestinationEndpointClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapmirrorResourceDestinationEndpointCluster",
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

export class SnapmirrorResourceDestinationEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorResourceDestinationEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorResourceDestinationEndpoint | cdktf.IResolvable | undefined) {
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
  private _cluster = new SnapmirrorResourceDestinationEndpointClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: SnapmirrorResourceDestinationEndpointCluster) {
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
export interface SnapmirrorResourcePolicyTransferSchedule {
  /**
  * schedule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#name SnapmirrorResource#name}
  */
  readonly name: string;
}

export function snapmirrorResourcePolicyTransferScheduleToTerraform(struct?: SnapmirrorResourcePolicyTransferSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snapmirrorResourcePolicyTransferScheduleToHclTerraform(struct?: SnapmirrorResourcePolicyTransferSchedule | cdktf.IResolvable): any {
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

export class SnapmirrorResourcePolicyTransferScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorResourcePolicyTransferSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorResourcePolicyTransferSchedule | cdktf.IResolvable | undefined) {
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
export interface SnapmirrorResourcePolicy {
  /**
  * policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#name SnapmirrorResource#name}
  */
  readonly name: string;
  /**
  * transfer schedule details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#transfer_schedule SnapmirrorResource#transfer_schedule}
  */
  readonly transferSchedule?: SnapmirrorResourcePolicyTransferSchedule;
}

export function snapmirrorResourcePolicyToTerraform(struct?: SnapmirrorResourcePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    transfer_schedule: snapmirrorResourcePolicyTransferScheduleToTerraform(struct!.transferSchedule),
  }
}


export function snapmirrorResourcePolicyToHclTerraform(struct?: SnapmirrorResourcePolicy | cdktf.IResolvable): any {
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
      value: snapmirrorResourcePolicyTransferScheduleToHclTerraform(struct!.transferSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapmirrorResourcePolicyTransferSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapmirrorResourcePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorResourcePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorResourcePolicy | cdktf.IResolvable | undefined) {
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
  private _transferSchedule = new SnapmirrorResourcePolicyTransferScheduleOutputReference(this, "transfer_schedule");
  public get transferSchedule() {
    return this._transferSchedule;
  }
  public putTransferSchedule(value: SnapmirrorResourcePolicyTransferSchedule) {
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
export interface SnapmirrorResourceSourceEndpointCluster {
  /**
  * cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#name SnapmirrorResource#name}
  */
  readonly name: string;
}

export function snapmirrorResourceSourceEndpointClusterToTerraform(struct?: SnapmirrorResourceSourceEndpointCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function snapmirrorResourceSourceEndpointClusterToHclTerraform(struct?: SnapmirrorResourceSourceEndpointCluster | cdktf.IResolvable): any {
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

export class SnapmirrorResourceSourceEndpointClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorResourceSourceEndpointCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorResourceSourceEndpointCluster | cdktf.IResolvable | undefined) {
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
export interface SnapmirrorResourceSourceEndpoint {
  /**
  * Cluster details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#cluster SnapmirrorResource#cluster}
  */
  readonly cluster?: SnapmirrorResourceSourceEndpointCluster;
  /**
  * Path to the source endpoint of the SnapMirror relationship
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#path SnapmirrorResource#path}
  */
  readonly path: string;
}

export function snapmirrorResourceSourceEndpointToTerraform(struct?: SnapmirrorResourceSourceEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: snapmirrorResourceSourceEndpointClusterToTerraform(struct!.cluster),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function snapmirrorResourceSourceEndpointToHclTerraform(struct?: SnapmirrorResourceSourceEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: snapmirrorResourceSourceEndpointClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "SnapmirrorResourceSourceEndpointCluster",
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

export class SnapmirrorResourceSourceEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnapmirrorResourceSourceEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SnapmirrorResourceSourceEndpoint | cdktf.IResolvable | undefined) {
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
  private _cluster = new SnapmirrorResourceSourceEndpointClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: SnapmirrorResourceSourceEndpointCluster) {
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
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource netapp-ontap_snapmirror_resource}
*/
export class SnapmirrorResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_snapmirror_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnapmirrorResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnapmirrorResource to import
  * @param importFromId The id of the existing SnapmirrorResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnapmirrorResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_snapmirror_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_resource netapp-ontap_snapmirror_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapmirrorResourceConfig
  */
  public constructor(scope: Construct, id: string, config: SnapmirrorResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_snapmirror_resource',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
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
  private _createDestination = new SnapmirrorResourceCreateDestinationOutputReference(this, "create_destination");
  public get createDestination() {
    return this._createDestination;
  }
  public putCreateDestination(value: SnapmirrorResourceCreateDestination) {
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
  private _destinationEndpoint = new SnapmirrorResourceDestinationEndpointOutputReference(this, "destination_endpoint");
  public get destinationEndpoint() {
    return this._destinationEndpoint;
  }
  public putDestinationEndpoint(value: SnapmirrorResourceDestinationEndpoint) {
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
  private _policy = new SnapmirrorResourcePolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: SnapmirrorResourcePolicy) {
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
  private _sourceEndpoint = new SnapmirrorResourceSourceEndpointOutputReference(this, "source_endpoint");
  public get sourceEndpoint() {
    return this._sourceEndpoint;
  }
  public putSourceEndpoint(value: SnapmirrorResourceSourceEndpoint) {
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
      create_destination: snapmirrorResourceCreateDestinationToTerraform(this._createDestination.internalValue),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      destination_endpoint: snapmirrorResourceDestinationEndpointToTerraform(this._destinationEndpoint.internalValue),
      healthy: cdktf.booleanToTerraform(this._healthy),
      initialize: cdktf.booleanToTerraform(this._initialize),
      policy: snapmirrorResourcePolicyToTerraform(this._policy.internalValue),
      source_endpoint: snapmirrorResourceSourceEndpointToTerraform(this._sourceEndpoint.internalValue),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_destination: {
        value: snapmirrorResourceCreateDestinationToHclTerraform(this._createDestination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapmirrorResourceCreateDestination",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_endpoint: {
        value: snapmirrorResourceDestinationEndpointToHclTerraform(this._destinationEndpoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapmirrorResourceDestinationEndpoint",
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
        value: snapmirrorResourcePolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapmirrorResourcePolicy",
      },
      source_endpoint: {
        value: snapmirrorResourceSourceEndpointToHclTerraform(this._sourceEndpoint.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnapmirrorResourceSourceEndpoint",
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
