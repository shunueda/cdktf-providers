// https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#driver DockerVolume#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#driver_opts DockerVolume#driver_opts}
  */
  readonly driverOpts?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#endpoint_id DockerVolume#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#id DockerVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#labels DockerVolume#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#name DockerVolume#name}
  */
  readonly name: string;
  /**
  * cluster_volume_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#cluster_volume_spec DockerVolume#cluster_volume_spec}
  */
  readonly clusterVolumeSpec?: DockerVolumeClusterVolumeSpec[] | cdktf.IResolvable;
}
export interface DockerVolumeClusterVolumeSpecAccessMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#mount_volume DockerVolume#mount_volume}
  */
  readonly mountVolume?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#scope DockerVolume#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#sharing DockerVolume#sharing}
  */
  readonly sharing?: string;
}

export function dockerVolumeClusterVolumeSpecAccessModeToTerraform(struct?: DockerVolumeClusterVolumeSpecAccessModeOutputReference | DockerVolumeClusterVolumeSpecAccessMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_volume: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mountVolume),
    scope: cdktf.stringToTerraform(struct!.scope),
    sharing: cdktf.stringToTerraform(struct!.sharing),
  }
}


export function dockerVolumeClusterVolumeSpecAccessModeToHclTerraform(struct?: DockerVolumeClusterVolumeSpecAccessModeOutputReference | DockerVolumeClusterVolumeSpecAccessMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_volume: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.mountVolume),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sharing: {
      value: cdktf.stringToHclTerraform(struct!.sharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DockerVolumeClusterVolumeSpecAccessModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DockerVolumeClusterVolumeSpecAccessMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountVolume = this._mountVolume;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerVolumeClusterVolumeSpecAccessMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountVolume = undefined;
      this._scope = undefined;
      this._sharing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountVolume = value.mountVolume;
      this._scope = value.scope;
      this._sharing = value.sharing;
    }
  }

  // mount_volume - computed: false, optional: true, required: false
  private _mountVolume?: { [key: string]: string }; 
  public get mountVolume() {
    return this.getStringMapAttribute('mount_volume');
  }
  public set mountVolume(value: { [key: string]: string }) {
    this._mountVolume = value;
  }
  public resetMountVolume() {
    this._mountVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountVolumeInput() {
    return this._mountVolume;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing?: string; 
  public get sharing() {
    return this.getStringAttribute('sharing');
  }
  public set sharing(value: string) {
    this._sharing = value;
  }
  public resetSharing() {
    this._sharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing;
  }
}
export interface DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#property1 DockerVolume#property1}
  */
  readonly property1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#property2 DockerVolume#property2}
  */
  readonly property2?: string;
}

export function dockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredToTerraform(struct?: DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property1: cdktf.stringToTerraform(struct!.property1),
    property2: cdktf.stringToTerraform(struct!.property2),
  }
}


export function dockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredToHclTerraform(struct?: DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferred | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property1: {
      value: cdktf.stringToHclTerraform(struct!.property1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property2: {
      value: cdktf.stringToHclTerraform(struct!.property2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferred | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.property1 = this._property1;
    }
    if (this._property2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.property2 = this._property2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferred | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._property1 = undefined;
      this._property2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._property1 = value.property1;
      this._property2 = value.property2;
    }
  }

  // property1 - computed: false, optional: true, required: false
  private _property1?: string; 
  public get property1() {
    return this.getStringAttribute('property1');
  }
  public set property1(value: string) {
    this._property1 = value;
  }
  public resetProperty1() {
    this._property1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get property1Input() {
    return this._property1;
  }

  // property2 - computed: false, optional: true, required: false
  private _property2?: string; 
  public get property2() {
    return this.getStringAttribute('property2');
  }
  public set property2(value: string) {
    this._property2 = value;
  }
  public resetProperty2() {
    this._property2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get property2Input() {
    return this._property2;
  }
}

export class DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredList extends cdktf.ComplexList {
  public internalValue? : DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferred[] | cdktf.IResolvable

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
  public get(index: number): DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredOutputReference {
    return new DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#property1 DockerVolume#property1}
  */
  readonly property1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#property2 DockerVolume#property2}
  */
  readonly property2?: string;
}

export function dockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteToTerraform(struct?: DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property1: cdktf.stringToTerraform(struct!.property1),
    property2: cdktf.stringToTerraform(struct!.property2),
  }
}


export function dockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteToHclTerraform(struct?: DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property1: {
      value: cdktf.stringToHclTerraform(struct!.property1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property2: {
      value: cdktf.stringToHclTerraform(struct!.property2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.property1 = this._property1;
    }
    if (this._property2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.property2 = this._property2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._property1 = undefined;
      this._property2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._property1 = value.property1;
      this._property2 = value.property2;
    }
  }

  // property1 - computed: false, optional: true, required: false
  private _property1?: string; 
  public get property1() {
    return this.getStringAttribute('property1');
  }
  public set property1(value: string) {
    this._property1 = value;
  }
  public resetProperty1() {
    this._property1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get property1Input() {
    return this._property1;
  }

  // property2 - computed: false, optional: true, required: false
  private _property2?: string; 
  public get property2() {
    return this.getStringAttribute('property2');
  }
  public set property2(value: string) {
    this._property2 = value;
  }
  public resetProperty2() {
    this._property2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get property2Input() {
    return this._property2;
  }
}

export class DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteList extends cdktf.ComplexList {
  public internalValue? : DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisite[] | cdktf.IResolvable

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
  public get(index: number): DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteOutputReference {
    return new DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DockerVolumeClusterVolumeSpecAccessibilityRequirements {
  /**
  * preferred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#preferred DockerVolume#preferred}
  */
  readonly preferred?: DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferred[] | cdktf.IResolvable;
  /**
  * requisite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#requisite DockerVolume#requisite}
  */
  readonly requisite?: DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisite[] | cdktf.IResolvable;
}

export function dockerVolumeClusterVolumeSpecAccessibilityRequirementsToTerraform(struct?: DockerVolumeClusterVolumeSpecAccessibilityRequirementsOutputReference | DockerVolumeClusterVolumeSpecAccessibilityRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred: cdktf.listMapper(dockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredToTerraform, true)(struct!.preferred),
    requisite: cdktf.listMapper(dockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteToTerraform, true)(struct!.requisite),
  }
}


export function dockerVolumeClusterVolumeSpecAccessibilityRequirementsToHclTerraform(struct?: DockerVolumeClusterVolumeSpecAccessibilityRequirementsOutputReference | DockerVolumeClusterVolumeSpecAccessibilityRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred: {
      value: cdktf.listMapperHcl(dockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredToHclTerraform, true)(struct!.preferred),
      isBlock: true,
      type: "list",
      storageClassType: "DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredList",
    },
    requisite: {
      value: cdktf.listMapperHcl(dockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteToHclTerraform, true)(struct!.requisite),
      isBlock: true,
      type: "list",
      storageClassType: "DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DockerVolumeClusterVolumeSpecAccessibilityRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DockerVolumeClusterVolumeSpecAccessibilityRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferred = this._preferred?.internalValue;
    }
    if (this._requisite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requisite = this._requisite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerVolumeClusterVolumeSpecAccessibilityRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferred.internalValue = undefined;
      this._requisite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferred.internalValue = value.preferred;
      this._requisite.internalValue = value.requisite;
    }
  }

  // preferred - computed: false, optional: true, required: false
  private _preferred = new DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferredList(this, "preferred", false);
  public get preferred() {
    return this._preferred;
  }
  public putPreferred(value: DockerVolumeClusterVolumeSpecAccessibilityRequirementsPreferred[] | cdktf.IResolvable) {
    this._preferred.internalValue = value;
  }
  public resetPreferred() {
    this._preferred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred.internalValue;
  }

  // requisite - computed: false, optional: true, required: false
  private _requisite = new DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisiteList(this, "requisite", false);
  public get requisite() {
    return this._requisite;
  }
  public putRequisite(value: DockerVolumeClusterVolumeSpecAccessibilityRequirementsRequisite[] | cdktf.IResolvable) {
    this._requisite.internalValue = value;
  }
  public resetRequisite() {
    this._requisite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requisiteInput() {
    return this._requisite.internalValue;
  }
}
export interface DockerVolumeClusterVolumeSpecCapacityRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#limit_bytes DockerVolume#limit_bytes}
  */
  readonly limitBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#required_bytes DockerVolume#required_bytes}
  */
  readonly requiredBytes?: number;
}

export function dockerVolumeClusterVolumeSpecCapacityRangeToTerraform(struct?: DockerVolumeClusterVolumeSpecCapacityRangeOutputReference | DockerVolumeClusterVolumeSpecCapacityRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit_bytes: cdktf.numberToTerraform(struct!.limitBytes),
    required_bytes: cdktf.numberToTerraform(struct!.requiredBytes),
  }
}


export function dockerVolumeClusterVolumeSpecCapacityRangeToHclTerraform(struct?: DockerVolumeClusterVolumeSpecCapacityRangeOutputReference | DockerVolumeClusterVolumeSpecCapacityRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.limitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_bytes: {
      value: cdktf.numberToHclTerraform(struct!.requiredBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DockerVolumeClusterVolumeSpecCapacityRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DockerVolumeClusterVolumeSpecCapacityRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitBytes = this._limitBytes;
    }
    if (this._requiredBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredBytes = this._requiredBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerVolumeClusterVolumeSpecCapacityRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limitBytes = undefined;
      this._requiredBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limitBytes = value.limitBytes;
      this._requiredBytes = value.requiredBytes;
    }
  }

  // limit_bytes - computed: false, optional: true, required: false
  private _limitBytes?: number; 
  public get limitBytes() {
    return this.getNumberAttribute('limit_bytes');
  }
  public set limitBytes(value: number) {
    this._limitBytes = value;
  }
  public resetLimitBytes() {
    this._limitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitBytesInput() {
    return this._limitBytes;
  }

  // required_bytes - computed: false, optional: true, required: false
  private _requiredBytes?: number; 
  public get requiredBytes() {
    return this.getNumberAttribute('required_bytes');
  }
  public set requiredBytes(value: number) {
    this._requiredBytes = value;
  }
  public resetRequiredBytes() {
    this._requiredBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredBytesInput() {
    return this._requiredBytes;
  }
}
export interface DockerVolumeClusterVolumeSpecSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#key DockerVolume#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#secret DockerVolume#secret}
  */
  readonly secret: string;
}

export function dockerVolumeClusterVolumeSpecSecretsToTerraform(struct?: DockerVolumeClusterVolumeSpecSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dockerVolumeClusterVolumeSpecSecretsToHclTerraform(struct?: DockerVolumeClusterVolumeSpecSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DockerVolumeClusterVolumeSpecSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DockerVolumeClusterVolumeSpecSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerVolumeClusterVolumeSpecSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secret = value.secret;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class DockerVolumeClusterVolumeSpecSecretsList extends cdktf.ComplexList {
  public internalValue? : DockerVolumeClusterVolumeSpecSecrets[] | cdktf.IResolvable

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
  public get(index: number): DockerVolumeClusterVolumeSpecSecretsOutputReference {
    return new DockerVolumeClusterVolumeSpecSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DockerVolumeClusterVolumeSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#availability DockerVolume#availability}
  */
  readonly availability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#group DockerVolume#group}
  */
  readonly group?: string;
  /**
  * access_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#access_mode DockerVolume#access_mode}
  */
  readonly accessMode?: DockerVolumeClusterVolumeSpecAccessMode;
  /**
  * accessibility_requirements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#accessibility_requirements DockerVolume#accessibility_requirements}
  */
  readonly accessibilityRequirements?: DockerVolumeClusterVolumeSpecAccessibilityRequirements;
  /**
  * capacity_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#capacity_range DockerVolume#capacity_range}
  */
  readonly capacityRange?: DockerVolumeClusterVolumeSpecCapacityRange;
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#secrets DockerVolume#secrets}
  */
  readonly secrets?: DockerVolumeClusterVolumeSpecSecrets[] | cdktf.IResolvable;
}

export function dockerVolumeClusterVolumeSpecToTerraform(struct?: DockerVolumeClusterVolumeSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    group: cdktf.stringToTerraform(struct!.group),
    access_mode: dockerVolumeClusterVolumeSpecAccessModeToTerraform(struct!.accessMode),
    accessibility_requirements: dockerVolumeClusterVolumeSpecAccessibilityRequirementsToTerraform(struct!.accessibilityRequirements),
    capacity_range: dockerVolumeClusterVolumeSpecCapacityRangeToTerraform(struct!.capacityRange),
    secrets: cdktf.listMapper(dockerVolumeClusterVolumeSpecSecretsToTerraform, true)(struct!.secrets),
  }
}


export function dockerVolumeClusterVolumeSpecToHclTerraform(struct?: DockerVolumeClusterVolumeSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_mode: {
      value: dockerVolumeClusterVolumeSpecAccessModeToHclTerraform(struct!.accessMode),
      isBlock: true,
      type: "list",
      storageClassType: "DockerVolumeClusterVolumeSpecAccessModeList",
    },
    accessibility_requirements: {
      value: dockerVolumeClusterVolumeSpecAccessibilityRequirementsToHclTerraform(struct!.accessibilityRequirements),
      isBlock: true,
      type: "list",
      storageClassType: "DockerVolumeClusterVolumeSpecAccessibilityRequirementsList",
    },
    capacity_range: {
      value: dockerVolumeClusterVolumeSpecCapacityRangeToHclTerraform(struct!.capacityRange),
      isBlock: true,
      type: "list",
      storageClassType: "DockerVolumeClusterVolumeSpecCapacityRangeList",
    },
    secrets: {
      value: cdktf.listMapperHcl(dockerVolumeClusterVolumeSpecSecretsToHclTerraform, true)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DockerVolumeClusterVolumeSpecSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DockerVolumeClusterVolumeSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DockerVolumeClusterVolumeSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._accessMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode?.internalValue;
    }
    if (this._accessibilityRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessibilityRequirements = this._accessibilityRequirements?.internalValue;
    }
    if (this._capacityRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityRange = this._capacityRange?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DockerVolumeClusterVolumeSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._group = undefined;
      this._accessMode.internalValue = undefined;
      this._accessibilityRequirements.internalValue = undefined;
      this._capacityRange.internalValue = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._group = value.group;
      this._accessMode.internalValue = value.accessMode;
      this._accessibilityRequirements.internalValue = value.accessibilityRequirements;
      this._capacityRange.internalValue = value.capacityRange;
      this._secrets.internalValue = value.secrets;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
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

  // access_mode - computed: false, optional: true, required: false
  private _accessMode = new DockerVolumeClusterVolumeSpecAccessModeOutputReference(this, "access_mode");
  public get accessMode() {
    return this._accessMode;
  }
  public putAccessMode(value: DockerVolumeClusterVolumeSpecAccessMode) {
    this._accessMode.internalValue = value;
  }
  public resetAccessMode() {
    this._accessMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode.internalValue;
  }

  // accessibility_requirements - computed: false, optional: true, required: false
  private _accessibilityRequirements = new DockerVolumeClusterVolumeSpecAccessibilityRequirementsOutputReference(this, "accessibility_requirements");
  public get accessibilityRequirements() {
    return this._accessibilityRequirements;
  }
  public putAccessibilityRequirements(value: DockerVolumeClusterVolumeSpecAccessibilityRequirements) {
    this._accessibilityRequirements.internalValue = value;
  }
  public resetAccessibilityRequirements() {
    this._accessibilityRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityRequirementsInput() {
    return this._accessibilityRequirements.internalValue;
  }

  // capacity_range - computed: false, optional: true, required: false
  private _capacityRange = new DockerVolumeClusterVolumeSpecCapacityRangeOutputReference(this, "capacity_range");
  public get capacityRange() {
    return this._capacityRange;
  }
  public putCapacityRange(value: DockerVolumeClusterVolumeSpecCapacityRange) {
    this._capacityRange.internalValue = value;
  }
  public resetCapacityRange() {
    this._capacityRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityRangeInput() {
    return this._capacityRange.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DockerVolumeClusterVolumeSpecSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DockerVolumeClusterVolumeSpecSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}

export class DockerVolumeClusterVolumeSpecList extends cdktf.ComplexList {
  public internalValue? : DockerVolumeClusterVolumeSpec[] | cdktf.IResolvable

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
  public get(index: number): DockerVolumeClusterVolumeSpecOutputReference {
    return new DockerVolumeClusterVolumeSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume portainer_docker_volume}
*/
export class DockerVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_docker_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DockerVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DockerVolume to import
  * @param importFromId The id of the existing DockerVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DockerVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_docker_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/docker_volume portainer_docker_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DockerVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: DockerVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_docker_volume',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._driver = config.driver;
    this._driverOpts = config.driverOpts;
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._clusterVolumeSpec.internalValue = config.clusterVolumeSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // driver_opts - computed: false, optional: true, required: false
  private _driverOpts?: { [key: string]: string }; 
  public get driverOpts() {
    return this.getStringMapAttribute('driver_opts');
  }
  public set driverOpts(value: { [key: string]: string }) {
    this._driverOpts = value;
  }
  public resetDriverOpts() {
    this._driverOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptsInput() {
    return this._driverOpts;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // cluster_volume_spec - computed: false, optional: true, required: false
  private _clusterVolumeSpec = new DockerVolumeClusterVolumeSpecList(this, "cluster_volume_spec", false);
  public get clusterVolumeSpec() {
    return this._clusterVolumeSpec;
  }
  public putClusterVolumeSpec(value: DockerVolumeClusterVolumeSpec[] | cdktf.IResolvable) {
    this._clusterVolumeSpec.internalValue = value;
  }
  public resetClusterVolumeSpec() {
    this._clusterVolumeSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVolumeSpecInput() {
    return this._clusterVolumeSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      driver: cdktf.stringToTerraform(this._driver),
      driver_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._driverOpts),
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      cluster_volume_spec: cdktf.listMapper(dockerVolumeClusterVolumeSpecToTerraform, true)(this._clusterVolumeSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      driver: {
        value: cdktf.stringToHclTerraform(this._driver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver_opts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._driverOpts),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_volume_spec: {
        value: cdktf.listMapperHcl(dockerVolumeClusterVolumeSpecToHclTerraform, true)(this._clusterVolumeSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DockerVolumeClusterVolumeSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
