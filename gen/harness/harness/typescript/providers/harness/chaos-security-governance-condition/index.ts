// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChaosSecurityGovernanceConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the security governance condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#description ChaosSecurityGovernanceCondition#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#id ChaosSecurityGovernanceCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of infrastructure (Kubernetes, KubernetesV2, Linux, Windows, CloudFoundry, Container)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#infra_type ChaosSecurityGovernanceCondition#infra_type}
  */
  readonly infraType: string;
  /**
  * Name of the security governance condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#name ChaosSecurityGovernanceCondition#name}
  */
  readonly name: string;
  /**
  * The organization ID of the security governance condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#org_id ChaosSecurityGovernanceCondition#org_id}
  */
  readonly orgId: string;
  /**
  * The project ID of the security governance condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#project_id ChaosSecurityGovernanceCondition#project_id}
  */
  readonly projectId: string;
  /**
  * Tags for the security governance condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#tags ChaosSecurityGovernanceCondition#tags}
  */
  readonly tags?: string[];
  /**
  * fault_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#fault_spec ChaosSecurityGovernanceCondition#fault_spec}
  */
  readonly faultSpec: ChaosSecurityGovernanceConditionFaultSpec;
  /**
  * k8s_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#k8s_spec ChaosSecurityGovernanceCondition#k8s_spec}
  */
  readonly k8SSpec?: ChaosSecurityGovernanceConditionK8SSpec;
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#machine_spec ChaosSecurityGovernanceCondition#machine_spec}
  */
  readonly machineSpec?: ChaosSecurityGovernanceConditionMachineSpec;
}
export interface ChaosSecurityGovernanceConditionFaultSpecFaults {
  /**
  * Type of the fault (FAULT or FAULT_GROUP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#fault_type ChaosSecurityGovernanceCondition#fault_type}
  */
  readonly faultType: string;
  /**
  * Name of the fault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#name ChaosSecurityGovernanceCondition#name}
  */
  readonly name: string;
}

export function chaosSecurityGovernanceConditionFaultSpecFaultsToTerraform(struct?: ChaosSecurityGovernanceConditionFaultSpecFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fault_type: cdktf.stringToTerraform(struct!.faultType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function chaosSecurityGovernanceConditionFaultSpecFaultsToHclTerraform(struct?: ChaosSecurityGovernanceConditionFaultSpecFaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fault_type: {
      value: cdktf.stringToHclTerraform(struct!.faultType),
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

export class ChaosSecurityGovernanceConditionFaultSpecFaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChaosSecurityGovernanceConditionFaultSpecFaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._faultType !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultType = this._faultType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosSecurityGovernanceConditionFaultSpecFaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._faultType = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._faultType = value.faultType;
      this._name = value.name;
    }
  }

  // fault_type - computed: false, optional: false, required: true
  private _faultType?: string; 
  public get faultType() {
    return this.getStringAttribute('fault_type');
  }
  public set faultType(value: string) {
    this._faultType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get faultTypeInput() {
    return this._faultType;
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

export class ChaosSecurityGovernanceConditionFaultSpecFaultsList extends cdktf.ComplexList {
  public internalValue? : ChaosSecurityGovernanceConditionFaultSpecFaults[] | cdktf.IResolvable

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
  public get(index: number): ChaosSecurityGovernanceConditionFaultSpecFaultsOutputReference {
    return new ChaosSecurityGovernanceConditionFaultSpecFaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChaosSecurityGovernanceConditionFaultSpec {
  /**
  * Operator for comparing faults (EQUAL_TO or NOT_EQUAL_TO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#operator ChaosSecurityGovernanceCondition#operator}
  */
  readonly operator: string;
  /**
  * faults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#faults ChaosSecurityGovernanceCondition#faults}
  */
  readonly faults: ChaosSecurityGovernanceConditionFaultSpecFaults[] | cdktf.IResolvable;
}

export function chaosSecurityGovernanceConditionFaultSpecToTerraform(struct?: ChaosSecurityGovernanceConditionFaultSpecOutputReference | ChaosSecurityGovernanceConditionFaultSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    faults: cdktf.listMapper(chaosSecurityGovernanceConditionFaultSpecFaultsToTerraform, true)(struct!.faults),
  }
}


export function chaosSecurityGovernanceConditionFaultSpecToHclTerraform(struct?: ChaosSecurityGovernanceConditionFaultSpecOutputReference | ChaosSecurityGovernanceConditionFaultSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    faults: {
      value: cdktf.listMapperHcl(chaosSecurityGovernanceConditionFaultSpecFaultsToHclTerraform, true)(struct!.faults),
      isBlock: true,
      type: "list",
      storageClassType: "ChaosSecurityGovernanceConditionFaultSpecFaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChaosSecurityGovernanceConditionFaultSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChaosSecurityGovernanceConditionFaultSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._faults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faults = this._faults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosSecurityGovernanceConditionFaultSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._faults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._faults.internalValue = value.faults;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // faults - computed: false, optional: false, required: true
  private _faults = new ChaosSecurityGovernanceConditionFaultSpecFaultsList(this, "faults", false);
  public get faults() {
    return this._faults;
  }
  public putFaults(value: ChaosSecurityGovernanceConditionFaultSpecFaults[] | cdktf.IResolvable) {
    this._faults.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get faultsInput() {
    return this._faults.internalValue;
  }
}
export interface ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloads {
  /**
  * ID for the application map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#application_map_id ChaosSecurityGovernanceCondition#application_map_id}
  */
  readonly applicationMapId?: string;
  /**
  * Kind of the workload (e.g., deployment, statefulset)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#kind ChaosSecurityGovernanceCondition#kind}
  */
  readonly kind?: string;
  /**
  * Label selector for the workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#label ChaosSecurityGovernanceCondition#label}
  */
  readonly label?: string;
  /**
  * Namespace of the workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#namespace ChaosSecurityGovernanceCondition#namespace}
  */
  readonly namespace: string;
  /**
  * List of services associated with the workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#services ChaosSecurityGovernanceCondition#services}
  */
  readonly services?: string[];
}

export function chaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsToTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_map_id: cdktf.stringToTerraform(struct!.applicationMapId),
    kind: cdktf.stringToTerraform(struct!.kind),
    label: cdktf.stringToTerraform(struct!.label),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function chaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsToHclTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_map_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloads | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationMapId = this._applicationMapId;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloads | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationMapId = undefined;
      this._kind = undefined;
      this._label = undefined;
      this._namespace = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationMapId = value.applicationMapId;
      this._kind = value.kind;
      this._label = value.label;
      this._namespace = value.namespace;
      this._services = value.services;
    }
  }

  // application_map_id - computed: false, optional: true, required: false
  private _applicationMapId?: string; 
  public get applicationMapId() {
    return this.getStringAttribute('application_map_id');
  }
  public set applicationMapId(value: string) {
    this._applicationMapId = value;
  }
  public resetApplicationMapId() {
    this._applicationMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationMapIdInput() {
    return this._applicationMapId;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}

export class ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsList extends cdktf.ComplexList {
  public internalValue? : ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloads[] | cdktf.IResolvable

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
  public get(index: number): ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsOutputReference {
    return new ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChaosSecurityGovernanceConditionK8SSpecApplicationSpec {
  /**
  * Operator for application matching (EQUAL_TO or NOT_EQUAL_TO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#operator ChaosSecurityGovernanceCondition#operator}
  */
  readonly operator: string;
  /**
  * workloads block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#workloads ChaosSecurityGovernanceCondition#workloads}
  */
  readonly workloads?: ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloads[] | cdktf.IResolvable;
}

export function chaosSecurityGovernanceConditionK8SSpecApplicationSpecToTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecApplicationSpecOutputReference | ChaosSecurityGovernanceConditionK8SSpecApplicationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    workloads: cdktf.listMapper(chaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsToTerraform, true)(struct!.workloads),
  }
}


export function chaosSecurityGovernanceConditionK8SSpecApplicationSpecToHclTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecApplicationSpecOutputReference | ChaosSecurityGovernanceConditionK8SSpecApplicationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workloads: {
      value: cdktf.listMapperHcl(chaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsToHclTerraform, true)(struct!.workloads),
      isBlock: true,
      type: "list",
      storageClassType: "ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChaosSecurityGovernanceConditionK8SSpecApplicationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChaosSecurityGovernanceConditionK8SSpecApplicationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._workloads?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloads = this._workloads?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosSecurityGovernanceConditionK8SSpecApplicationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._workloads.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._workloads.internalValue = value.workloads;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // workloads - computed: false, optional: true, required: false
  private _workloads = new ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloadsList(this, "workloads", false);
  public get workloads() {
    return this._workloads;
  }
  public putWorkloads(value: ChaosSecurityGovernanceConditionK8SSpecApplicationSpecWorkloads[] | cdktf.IResolvable) {
    this._workloads.internalValue = value;
  }
  public resetWorkloads() {
    this._workloads.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadsInput() {
    return this._workloads.internalValue;
  }
}
export interface ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpec {
  /**
  * Operator for service account matching (EQUAL_TO or NOT_EQUAL_TO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#operator ChaosSecurityGovernanceCondition#operator}
  */
  readonly operator: string;
  /**
  * List of service accounts to include/exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#service_accounts ChaosSecurityGovernanceCondition#service_accounts}
  */
  readonly serviceAccounts: string[];
}

export function chaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpecToTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpecOutputReference | ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccounts),
  }
}


export function chaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpecToHclTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpecOutputReference | ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._serviceAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccounts = this._serviceAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._serviceAccounts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._serviceAccounts = value.serviceAccounts;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // service_accounts - computed: false, optional: false, required: true
  private _serviceAccounts?: string[]; 
  public get serviceAccounts() {
    return this.getListAttribute('service_accounts');
  }
  public set serviceAccounts(value: string[]) {
    this._serviceAccounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsInput() {
    return this._serviceAccounts;
  }
}
export interface ChaosSecurityGovernanceConditionK8SSpecInfraSpec {
  /**
  * List of infrastructure IDs to apply the condition to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#infra_ids ChaosSecurityGovernanceCondition#infra_ids}
  */
  readonly infraIds: string[];
  /**
  * Operator for comparing infrastructure IDs (EQUAL_TO or NOT_EQUAL_TO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#operator ChaosSecurityGovernanceCondition#operator}
  */
  readonly operator: string;
}

export function chaosSecurityGovernanceConditionK8SSpecInfraSpecToTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecInfraSpecOutputReference | ChaosSecurityGovernanceConditionK8SSpecInfraSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    infra_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.infraIds),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function chaosSecurityGovernanceConditionK8SSpecInfraSpecToHclTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecInfraSpecOutputReference | ChaosSecurityGovernanceConditionK8SSpecInfraSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    infra_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.infraIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChaosSecurityGovernanceConditionK8SSpecInfraSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChaosSecurityGovernanceConditionK8SSpecInfraSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infraIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraIds = this._infraIds;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosSecurityGovernanceConditionK8SSpecInfraSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infraIds = undefined;
      this._operator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infraIds = value.infraIds;
      this._operator = value.operator;
    }
  }

  // infra_ids - computed: false, optional: false, required: true
  private _infraIds?: string[]; 
  public get infraIds() {
    return this.getListAttribute('infra_ids');
  }
  public set infraIds(value: string[]) {
    this._infraIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraIdsInput() {
    return this._infraIds;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface ChaosSecurityGovernanceConditionK8SSpec {
  /**
  * application_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#application_spec ChaosSecurityGovernanceCondition#application_spec}
  */
  readonly applicationSpec?: ChaosSecurityGovernanceConditionK8SSpecApplicationSpec;
  /**
  * chaos_service_account_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#chaos_service_account_spec ChaosSecurityGovernanceCondition#chaos_service_account_spec}
  */
  readonly chaosServiceAccountSpec?: ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpec;
  /**
  * infra_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#infra_spec ChaosSecurityGovernanceCondition#infra_spec}
  */
  readonly infraSpec?: ChaosSecurityGovernanceConditionK8SSpecInfraSpec;
}

export function chaosSecurityGovernanceConditionK8SSpecToTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecOutputReference | ChaosSecurityGovernanceConditionK8SSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_spec: chaosSecurityGovernanceConditionK8SSpecApplicationSpecToTerraform(struct!.applicationSpec),
    chaos_service_account_spec: chaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpecToTerraform(struct!.chaosServiceAccountSpec),
    infra_spec: chaosSecurityGovernanceConditionK8SSpecInfraSpecToTerraform(struct!.infraSpec),
  }
}


export function chaosSecurityGovernanceConditionK8SSpecToHclTerraform(struct?: ChaosSecurityGovernanceConditionK8SSpecOutputReference | ChaosSecurityGovernanceConditionK8SSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_spec: {
      value: chaosSecurityGovernanceConditionK8SSpecApplicationSpecToHclTerraform(struct!.applicationSpec),
      isBlock: true,
      type: "list",
      storageClassType: "ChaosSecurityGovernanceConditionK8SSpecApplicationSpecList",
    },
    chaos_service_account_spec: {
      value: chaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpecToHclTerraform(struct!.chaosServiceAccountSpec),
      isBlock: true,
      type: "list",
      storageClassType: "ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpecList",
    },
    infra_spec: {
      value: chaosSecurityGovernanceConditionK8SSpecInfraSpecToHclTerraform(struct!.infraSpec),
      isBlock: true,
      type: "list",
      storageClassType: "ChaosSecurityGovernanceConditionK8SSpecInfraSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChaosSecurityGovernanceConditionK8SSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChaosSecurityGovernanceConditionK8SSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSpec = this._applicationSpec?.internalValue;
    }
    if (this._chaosServiceAccountSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chaosServiceAccountSpec = this._chaosServiceAccountSpec?.internalValue;
    }
    if (this._infraSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraSpec = this._infraSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosSecurityGovernanceConditionK8SSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationSpec.internalValue = undefined;
      this._chaosServiceAccountSpec.internalValue = undefined;
      this._infraSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationSpec.internalValue = value.applicationSpec;
      this._chaosServiceAccountSpec.internalValue = value.chaosServiceAccountSpec;
      this._infraSpec.internalValue = value.infraSpec;
    }
  }

  // application_spec - computed: false, optional: true, required: false
  private _applicationSpec = new ChaosSecurityGovernanceConditionK8SSpecApplicationSpecOutputReference(this, "application_spec");
  public get applicationSpec() {
    return this._applicationSpec;
  }
  public putApplicationSpec(value: ChaosSecurityGovernanceConditionK8SSpecApplicationSpec) {
    this._applicationSpec.internalValue = value;
  }
  public resetApplicationSpec() {
    this._applicationSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSpecInput() {
    return this._applicationSpec.internalValue;
  }

  // chaos_service_account_spec - computed: false, optional: true, required: false
  private _chaosServiceAccountSpec = new ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpecOutputReference(this, "chaos_service_account_spec");
  public get chaosServiceAccountSpec() {
    return this._chaosServiceAccountSpec;
  }
  public putChaosServiceAccountSpec(value: ChaosSecurityGovernanceConditionK8SSpecChaosServiceAccountSpec) {
    this._chaosServiceAccountSpec.internalValue = value;
  }
  public resetChaosServiceAccountSpec() {
    this._chaosServiceAccountSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chaosServiceAccountSpecInput() {
    return this._chaosServiceAccountSpec.internalValue;
  }

  // infra_spec - computed: false, optional: true, required: false
  private _infraSpec = new ChaosSecurityGovernanceConditionK8SSpecInfraSpecOutputReference(this, "infra_spec");
  public get infraSpec() {
    return this._infraSpec;
  }
  public putInfraSpec(value: ChaosSecurityGovernanceConditionK8SSpecInfraSpec) {
    this._infraSpec.internalValue = value;
  }
  public resetInfraSpec() {
    this._infraSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraSpecInput() {
    return this._infraSpec.internalValue;
  }
}
export interface ChaosSecurityGovernanceConditionMachineSpecInfraSpec {
  /**
  * List of infrastructure IDs to apply the condition to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#infra_ids ChaosSecurityGovernanceCondition#infra_ids}
  */
  readonly infraIds: string[];
  /**
  * Operator for comparing infrastructure IDs (EQUAL_TO or NOT_EQUAL_TO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#operator ChaosSecurityGovernanceCondition#operator}
  */
  readonly operator: string;
}

export function chaosSecurityGovernanceConditionMachineSpecInfraSpecToTerraform(struct?: ChaosSecurityGovernanceConditionMachineSpecInfraSpecOutputReference | ChaosSecurityGovernanceConditionMachineSpecInfraSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    infra_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.infraIds),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function chaosSecurityGovernanceConditionMachineSpecInfraSpecToHclTerraform(struct?: ChaosSecurityGovernanceConditionMachineSpecInfraSpecOutputReference | ChaosSecurityGovernanceConditionMachineSpecInfraSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    infra_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.infraIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChaosSecurityGovernanceConditionMachineSpecInfraSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChaosSecurityGovernanceConditionMachineSpecInfraSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infraIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraIds = this._infraIds;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosSecurityGovernanceConditionMachineSpecInfraSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infraIds = undefined;
      this._operator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infraIds = value.infraIds;
      this._operator = value.operator;
    }
  }

  // infra_ids - computed: false, optional: false, required: true
  private _infraIds?: string[]; 
  public get infraIds() {
    return this.getListAttribute('infra_ids');
  }
  public set infraIds(value: string[]) {
    this._infraIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraIdsInput() {
    return this._infraIds;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}
export interface ChaosSecurityGovernanceConditionMachineSpec {
  /**
  * infra_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#infra_spec ChaosSecurityGovernanceCondition#infra_spec}
  */
  readonly infraSpec?: ChaosSecurityGovernanceConditionMachineSpecInfraSpec;
}

export function chaosSecurityGovernanceConditionMachineSpecToTerraform(struct?: ChaosSecurityGovernanceConditionMachineSpecOutputReference | ChaosSecurityGovernanceConditionMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    infra_spec: chaosSecurityGovernanceConditionMachineSpecInfraSpecToTerraform(struct!.infraSpec),
  }
}


export function chaosSecurityGovernanceConditionMachineSpecToHclTerraform(struct?: ChaosSecurityGovernanceConditionMachineSpecOutputReference | ChaosSecurityGovernanceConditionMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    infra_spec: {
      value: chaosSecurityGovernanceConditionMachineSpecInfraSpecToHclTerraform(struct!.infraSpec),
      isBlock: true,
      type: "list",
      storageClassType: "ChaosSecurityGovernanceConditionMachineSpecInfraSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChaosSecurityGovernanceConditionMachineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChaosSecurityGovernanceConditionMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infraSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraSpec = this._infraSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChaosSecurityGovernanceConditionMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infraSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infraSpec.internalValue = value.infraSpec;
    }
  }

  // infra_spec - computed: false, optional: true, required: false
  private _infraSpec = new ChaosSecurityGovernanceConditionMachineSpecInfraSpecOutputReference(this, "infra_spec");
  public get infraSpec() {
    return this._infraSpec;
  }
  public putInfraSpec(value: ChaosSecurityGovernanceConditionMachineSpecInfraSpec) {
    this._infraSpec.internalValue = value;
  }
  public resetInfraSpec() {
    this._infraSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraSpecInput() {
    return this._infraSpec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition harness_chaos_security_governance_condition}
*/
export class ChaosSecurityGovernanceCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_chaos_security_governance_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChaosSecurityGovernanceCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChaosSecurityGovernanceCondition to import
  * @param importFromId The id of the existing ChaosSecurityGovernanceCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChaosSecurityGovernanceCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_chaos_security_governance_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/chaos_security_governance_condition harness_chaos_security_governance_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChaosSecurityGovernanceConditionConfig
  */
  public constructor(scope: Construct, id: string, config: ChaosSecurityGovernanceConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_chaos_security_governance_condition',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._infraType = config.infraType;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._faultSpec.internalValue = config.faultSpec;
    this._k8SSpec.internalValue = config.k8SSpec;
    this._machineSpec.internalValue = config.machineSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // infra_type - computed: false, optional: false, required: true
  private _infraType?: string; 
  public get infraType() {
    return this.getStringAttribute('infra_type');
  }
  public set infraType(value: string) {
    this._infraType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraTypeInput() {
    return this._infraType;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // fault_spec - computed: false, optional: false, required: true
  private _faultSpec = new ChaosSecurityGovernanceConditionFaultSpecOutputReference(this, "fault_spec");
  public get faultSpec() {
    return this._faultSpec;
  }
  public putFaultSpec(value: ChaosSecurityGovernanceConditionFaultSpec) {
    this._faultSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get faultSpecInput() {
    return this._faultSpec.internalValue;
  }

  // k8s_spec - computed: false, optional: true, required: false
  private _k8SSpec = new ChaosSecurityGovernanceConditionK8SSpecOutputReference(this, "k8s_spec");
  public get k8SSpec() {
    return this._k8SSpec;
  }
  public putK8SSpec(value: ChaosSecurityGovernanceConditionK8SSpec) {
    this._k8SSpec.internalValue = value;
  }
  public resetK8SSpec() {
    this._k8SSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SSpecInput() {
    return this._k8SSpec.internalValue;
  }

  // machine_spec - computed: false, optional: true, required: false
  private _machineSpec = new ChaosSecurityGovernanceConditionMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: ChaosSecurityGovernanceConditionMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  public resetMachineSpec() {
    this._machineSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      infra_type: cdktf.stringToTerraform(this._infraType),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      fault_spec: chaosSecurityGovernanceConditionFaultSpecToTerraform(this._faultSpec.internalValue),
      k8s_spec: chaosSecurityGovernanceConditionK8SSpecToTerraform(this._k8SSpec.internalValue),
      machine_spec: chaosSecurityGovernanceConditionMachineSpecToTerraform(this._machineSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      infra_type: {
        value: cdktf.stringToHclTerraform(this._infraType),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fault_spec: {
        value: chaosSecurityGovernanceConditionFaultSpecToHclTerraform(this._faultSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChaosSecurityGovernanceConditionFaultSpecList",
      },
      k8s_spec: {
        value: chaosSecurityGovernanceConditionK8SSpecToHclTerraform(this._k8SSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChaosSecurityGovernanceConditionK8SSpecList",
      },
      machine_spec: {
        value: chaosSecurityGovernanceConditionMachineSpecToHclTerraform(this._machineSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChaosSecurityGovernanceConditionMachineSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
