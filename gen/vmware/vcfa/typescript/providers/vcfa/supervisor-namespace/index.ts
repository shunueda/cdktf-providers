// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SupervisorNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Supervisor Namespace Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#class_name SupervisorNamespace#class_name}
  */
  readonly className: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#description SupervisorNamespace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#id SupervisorNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prefix for the Supervisor Namespace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#name_prefix SupervisorNamespace#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * The name of the Project the Supervisor Namespace belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#project_name SupervisorNamespace#project_name}
  */
  readonly projectName: string;
  /**
  * Name of the Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#region_name SupervisorNamespace#region_name}
  */
  readonly regionName: string;
  /**
  * Name of the VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#vpc_name SupervisorNamespace#vpc_name}
  */
  readonly vpcName: string;
  /**
  * storage_classes_initial_class_config_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#storage_classes_initial_class_config_overrides SupervisorNamespace#storage_classes_initial_class_config_overrides}
  */
  readonly storageClassesInitialClassConfigOverrides: SupervisorNamespaceStorageClassesInitialClassConfigOverrides[] | cdktf.IResolvable;
  /**
  * zones_initial_class_config_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#zones_initial_class_config_overrides SupervisorNamespace#zones_initial_class_config_overrides}
  */
  readonly zonesInitialClassConfigOverrides: SupervisorNamespaceZonesInitialClassConfigOverrides[] | cdktf.IResolvable;
}
export interface SupervisorNamespaceStorageClasses {
}

export function supervisorNamespaceStorageClassesToTerraform(struct?: SupervisorNamespaceStorageClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function supervisorNamespaceStorageClassesToHclTerraform(struct?: SupervisorNamespaceStorageClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SupervisorNamespaceStorageClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupervisorNamespaceStorageClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorNamespaceStorageClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getStringAttribute('limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SupervisorNamespaceStorageClassesList extends cdktf.ComplexList {

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
  public get(index: number): SupervisorNamespaceStorageClassesOutputReference {
    return new SupervisorNamespaceStorageClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupervisorNamespaceVmClasses {
}

export function supervisorNamespaceVmClassesToTerraform(struct?: SupervisorNamespaceVmClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function supervisorNamespaceVmClassesToHclTerraform(struct?: SupervisorNamespaceVmClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SupervisorNamespaceVmClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupervisorNamespaceVmClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorNamespaceVmClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SupervisorNamespaceVmClassesList extends cdktf.ComplexList {

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
  public get(index: number): SupervisorNamespaceVmClassesOutputReference {
    return new SupervisorNamespaceVmClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupervisorNamespaceZones {
}

export function supervisorNamespaceZonesToTerraform(struct?: SupervisorNamespaceZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function supervisorNamespaceZonesToHclTerraform(struct?: SupervisorNamespaceZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SupervisorNamespaceZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupervisorNamespaceZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorNamespaceZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_reservation - computed: true, optional: false, required: false
  public get cpuReservation() {
    return this.getStringAttribute('cpu_reservation');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_reservation - computed: true, optional: false, required: false
  public get memoryReservation() {
    return this.getStringAttribute('memory_reservation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SupervisorNamespaceZonesList extends cdktf.ComplexList {

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
  public get(index: number): SupervisorNamespaceZonesOutputReference {
    return new SupervisorNamespaceZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupervisorNamespaceStorageClassesInitialClassConfigOverrides {
  /**
  * Limit (format: `<number><unit>`, where `<unit>` can be `Mi`, `Gi`, or `Ti`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#limit SupervisorNamespace#limit}
  */
  readonly limit: string;
  /**
  * Name of the Storage Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#name SupervisorNamespace#name}
  */
  readonly name: string;
}

export function supervisorNamespaceStorageClassesInitialClassConfigOverridesToTerraform(struct?: SupervisorNamespaceStorageClassesInitialClassConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function supervisorNamespaceStorageClassesInitialClassConfigOverridesToHclTerraform(struct?: SupervisorNamespaceStorageClassesInitialClassConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
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

export class SupervisorNamespaceStorageClassesInitialClassConfigOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupervisorNamespaceStorageClassesInitialClassConfigOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorNamespaceStorageClassesInitialClassConfigOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._name = value.name;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

export class SupervisorNamespaceStorageClassesInitialClassConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : SupervisorNamespaceStorageClassesInitialClassConfigOverrides[] | cdktf.IResolvable

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
  public get(index: number): SupervisorNamespaceStorageClassesInitialClassConfigOverridesOutputReference {
    return new SupervisorNamespaceStorageClassesInitialClassConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupervisorNamespaceZonesInitialClassConfigOverrides {
  /**
  * CPU limit (format: `<number><unit>`, where `<unit>` can be `M` or `G`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#cpu_limit SupervisorNamespace#cpu_limit}
  */
  readonly cpuLimit: string;
  /**
  * CPU reservation (format: `<number><unit>`, where `<unit>` can be `M` or `G`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#cpu_reservation SupervisorNamespace#cpu_reservation}
  */
  readonly cpuReservation: string;
  /**
  * Memory limit (format: `<number><unit>`, where `<unit>` can be `Mi`, `Gi`, or `Ti`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#memory_limit SupervisorNamespace#memory_limit}
  */
  readonly memoryLimit: string;
  /**
  * Memory reservation (format: `<number><unit>`, where `<unit>` can be `Mi`, `Gi`, or `Ti`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#memory_reservation SupervisorNamespace#memory_reservation}
  */
  readonly memoryReservation: string;
  /**
  * Name of the Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#name SupervisorNamespace#name}
  */
  readonly name: string;
}

export function supervisorNamespaceZonesInitialClassConfigOverridesToTerraform(struct?: SupervisorNamespaceZonesInitialClassConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit: cdktf.stringToTerraform(struct!.cpuLimit),
    cpu_reservation: cdktf.stringToTerraform(struct!.cpuReservation),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
    memory_reservation: cdktf.stringToTerraform(struct!.memoryReservation),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function supervisorNamespaceZonesInitialClassConfigOverridesToHclTerraform(struct?: SupervisorNamespaceZonesInitialClassConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_reservation: {
      value: cdktf.stringToHclTerraform(struct!.cpuReservation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_reservation: {
      value: cdktf.stringToHclTerraform(struct!.memoryReservation),
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

export class SupervisorNamespaceZonesInitialClassConfigOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupervisorNamespaceZonesInitialClassConfigOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._cpuReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuReservation = this._cpuReservation;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryReservation !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservation = this._memoryReservation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupervisorNamespaceZonesInitialClassConfigOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuLimit = undefined;
      this._cpuReservation = undefined;
      this._memoryLimit = undefined;
      this._memoryReservation = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuLimit = value.cpuLimit;
      this._cpuReservation = value.cpuReservation;
      this._memoryLimit = value.memoryLimit;
      this._memoryReservation = value.memoryReservation;
      this._name = value.name;
    }
  }

  // cpu_limit - computed: false, optional: false, required: true
  private _cpuLimit?: string; 
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }
  public set cpuLimit(value: string) {
    this._cpuLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_reservation - computed: false, optional: false, required: true
  private _cpuReservation?: string; 
  public get cpuReservation() {
    return this.getStringAttribute('cpu_reservation');
  }
  public set cpuReservation(value: string) {
    this._cpuReservation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationInput() {
    return this._cpuReservation;
  }

  // memory_limit - computed: false, optional: false, required: true
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_reservation - computed: false, optional: false, required: true
  private _memoryReservation?: string; 
  public get memoryReservation() {
    return this.getStringAttribute('memory_reservation');
  }
  public set memoryReservation(value: string) {
    this._memoryReservation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationInput() {
    return this._memoryReservation;
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

export class SupervisorNamespaceZonesInitialClassConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : SupervisorNamespaceZonesInitialClassConfigOverrides[] | cdktf.IResolvable

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
  public get(index: number): SupervisorNamespaceZonesInitialClassConfigOverridesOutputReference {
    return new SupervisorNamespaceZonesInitialClassConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace vcfa_supervisor_namespace}
*/
export class SupervisorNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_supervisor_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SupervisorNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SupervisorNamespace to import
  * @param importFromId The id of the existing SupervisorNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SupervisorNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_supervisor_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/supervisor_namespace vcfa_supervisor_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SupervisorNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: SupervisorNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_supervisor_namespace',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._className = config.className;
    this._description = config.description;
    this._id = config.id;
    this._namePrefix = config.namePrefix;
    this._projectName = config.projectName;
    this._regionName = config.regionName;
    this._vpcName = config.vpcName;
    this._storageClassesInitialClassConfigOverrides.internalValue = config.storageClassesInitialClassConfigOverrides;
    this._zonesInitialClassConfigOverrides.internalValue = config.zonesInitialClassConfigOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_prefix - computed: false, optional: false, required: true
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
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

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getBooleanAttribute('ready');
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // storage_classes - computed: true, optional: false, required: false
  private _storageClasses = new SupervisorNamespaceStorageClassesList(this, "storage_classes", true);
  public get storageClasses() {
    return this._storageClasses;
  }

  // vm_classes - computed: true, optional: false, required: false
  private _vmClasses = new SupervisorNamespaceVmClassesList(this, "vm_classes", true);
  public get vmClasses() {
    return this._vmClasses;
  }

  // vpc_name - computed: false, optional: false, required: true
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new SupervisorNamespaceZonesList(this, "zones", true);
  public get zones() {
    return this._zones;
  }

  // storage_classes_initial_class_config_overrides - computed: false, optional: false, required: true
  private _storageClassesInitialClassConfigOverrides = new SupervisorNamespaceStorageClassesInitialClassConfigOverridesList(this, "storage_classes_initial_class_config_overrides", true);
  public get storageClassesInitialClassConfigOverrides() {
    return this._storageClassesInitialClassConfigOverrides;
  }
  public putStorageClassesInitialClassConfigOverrides(value: SupervisorNamespaceStorageClassesInitialClassConfigOverrides[] | cdktf.IResolvable) {
    this._storageClassesInitialClassConfigOverrides.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInitialClassConfigOverridesInput() {
    return this._storageClassesInitialClassConfigOverrides.internalValue;
  }

  // zones_initial_class_config_overrides - computed: false, optional: false, required: true
  private _zonesInitialClassConfigOverrides = new SupervisorNamespaceZonesInitialClassConfigOverridesList(this, "zones_initial_class_config_overrides", true);
  public get zonesInitialClassConfigOverrides() {
    return this._zonesInitialClassConfigOverrides;
  }
  public putZonesInitialClassConfigOverrides(value: SupervisorNamespaceZonesInitialClassConfigOverrides[] | cdktf.IResolvable) {
    this._zonesInitialClassConfigOverrides.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInitialClassConfigOverridesInput() {
    return this._zonesInitialClassConfigOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_name: cdktf.stringToTerraform(this._className),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_name: cdktf.stringToTerraform(this._regionName),
      vpc_name: cdktf.stringToTerraform(this._vpcName),
      storage_classes_initial_class_config_overrides: cdktf.listMapper(supervisorNamespaceStorageClassesInitialClassConfigOverridesToTerraform, true)(this._storageClassesInitialClassConfigOverrides.internalValue),
      zones_initial_class_config_overrides: cdktf.listMapper(supervisorNamespaceZonesInitialClassConfigOverridesToTerraform, true)(this._zonesInitialClassConfigOverrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_name: {
        value: cdktf.stringToHclTerraform(this._className),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_name: {
        value: cdktf.stringToHclTerraform(this._vpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_classes_initial_class_config_overrides: {
        value: cdktf.listMapperHcl(supervisorNamespaceStorageClassesInitialClassConfigOverridesToHclTerraform, true)(this._storageClassesInitialClassConfigOverrides.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SupervisorNamespaceStorageClassesInitialClassConfigOverridesList",
      },
      zones_initial_class_config_overrides: {
        value: cdktf.listMapperHcl(supervisorNamespaceZonesInitialClassConfigOverridesToHclTerraform, true)(this._zonesInitialClassConfigOverrides.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SupervisorNamespaceZonesInitialClassConfigOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
