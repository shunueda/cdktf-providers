// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Data reference identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#external_data_reference ServiceBinding#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * External Data Set identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#external_data_set ServiceBinding#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#id ServiceBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * container_workload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#container_workload ServiceBinding#container_workload}
  */
  readonly containerWorkload?: ServiceBindingContainerWorkload;
  /**
  * port_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#port_overrides ServiceBinding#port_overrides}
  */
  readonly portOverrides?: ServiceBindingPortOverrides[] | cdktf.IResolvable;
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#virtual_service ServiceBinding#virtual_service}
  */
  readonly virtualService: ServiceBindingVirtualService;
  /**
  * workload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#workload ServiceBinding#workload}
  */
  readonly workload?: ServiceBindingWorkload;
}
export interface ServiceBindingContainerWorkload {
  /**
  * Container Workload URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#href ServiceBinding#href}
  */
  readonly href: string;
}

export function serviceBindingContainerWorkloadToTerraform(struct?: ServiceBindingContainerWorkloadOutputReference | ServiceBindingContainerWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function serviceBindingContainerWorkloadToHclTerraform(struct?: ServiceBindingContainerWorkloadOutputReference | ServiceBindingContainerWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceBindingContainerWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceBindingContainerWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceBindingContainerWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface ServiceBindingPortOverrides {
  /**
  * Overriding port number (or starting point when specifying a range). Allowed range is 0 - 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#new_port ServiceBinding#new_port}
  */
  readonly newPort: number;
  /**
  * Overriding port range ending port. Allowed range is 0 - 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#new_to_port ServiceBinding#new_to_port}
  */
  readonly newToPort?: number;
  /**
  * Port Number in the original service which to override (integer 0-65535). Starting port when specifying a range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#port ServiceBinding#port}
  */
  readonly port?: number;
  /**
  * Transport protocol in the original service which to override. Allowed values are 6 (TCP) and 17 (UDP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#proto ServiceBinding#proto}
  */
  readonly proto?: number;
}

export function serviceBindingPortOverridesToTerraform(struct?: ServiceBindingPortOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_port: cdktf.numberToTerraform(struct!.newPort),
    new_to_port: cdktf.numberToTerraform(struct!.newToPort),
    port: cdktf.numberToTerraform(struct!.port),
    proto: cdktf.numberToTerraform(struct!.proto),
  }
}


export function serviceBindingPortOverridesToHclTerraform(struct?: ServiceBindingPortOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_port: {
      value: cdktf.numberToHclTerraform(struct!.newPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_to_port: {
      value: cdktf.numberToHclTerraform(struct!.newToPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.numberToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceBindingPortOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceBindingPortOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPort = this._newPort;
    }
    if (this._newToPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.newToPort = this._newToPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceBindingPortOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newPort = undefined;
      this._newToPort = undefined;
      this._port = undefined;
      this._proto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newPort = value.newPort;
      this._newToPort = value.newToPort;
      this._port = value.port;
      this._proto = value.proto;
    }
  }

  // new_port - computed: false, optional: false, required: true
  private _newPort?: number; 
  public get newPort() {
    return this.getNumberAttribute('new_port');
  }
  public set newPort(value: number) {
    this._newPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newPortInput() {
    return this._newPort;
  }

  // new_to_port - computed: false, optional: true, required: false
  private _newToPort?: number; 
  public get newToPort() {
    return this.getNumberAttribute('new_to_port');
  }
  public set newToPort(value: number) {
    this._newToPort = value;
  }
  public resetNewToPort() {
    this._newToPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newToPortInput() {
    return this._newToPort;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: number; 
  public get proto() {
    return this.getNumberAttribute('proto');
  }
  public set proto(value: number) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }
}

export class ServiceBindingPortOverridesList extends cdktf.ComplexList {
  public internalValue? : ServiceBindingPortOverrides[] | cdktf.IResolvable

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
  public get(index: number): ServiceBindingPortOverridesOutputReference {
    return new ServiceBindingPortOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceBindingVirtualService {
  /**
  * Virtual Service URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#href ServiceBinding#href}
  */
  readonly href: string;
}

export function serviceBindingVirtualServiceToTerraform(struct?: ServiceBindingVirtualServiceOutputReference | ServiceBindingVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function serviceBindingVirtualServiceToHclTerraform(struct?: ServiceBindingVirtualServiceOutputReference | ServiceBindingVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceBindingVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceBindingVirtualService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceBindingVirtualService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface ServiceBindingWorkload {
  /**
  * Workload URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#href ServiceBinding#href}
  */
  readonly href: string;
}

export function serviceBindingWorkloadToTerraform(struct?: ServiceBindingWorkloadOutputReference | ServiceBindingWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function serviceBindingWorkloadToHclTerraform(struct?: ServiceBindingWorkloadOutputReference | ServiceBindingWorkload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceBindingWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceBindingWorkload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceBindingWorkload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding illumio-core_service_binding}
*/
export class ServiceBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_service_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceBinding to import
  * @param importFromId The id of the existing ServiceBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_service_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service_binding illumio-core_service_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_service_binding',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._containerWorkload.internalValue = config.containerWorkload;
    this._portOverrides.internalValue = config.portOverrides;
    this._virtualService.internalValue = config.virtualService;
    this._workload.internalValue = config.workload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bound_service - computed: true, optional: false, required: false
  private _boundService = new cdktf.StringMap(this, "bound_service");
  public get boundService() {
    return this._boundService;
  }

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // container_workload - computed: false, optional: true, required: false
  private _containerWorkload = new ServiceBindingContainerWorkloadOutputReference(this, "container_workload");
  public get containerWorkload() {
    return this._containerWorkload;
  }
  public putContainerWorkload(value: ServiceBindingContainerWorkload) {
    this._containerWorkload.internalValue = value;
  }
  public resetContainerWorkload() {
    this._containerWorkload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerWorkloadInput() {
    return this._containerWorkload.internalValue;
  }

  // port_overrides - computed: false, optional: true, required: false
  private _portOverrides = new ServiceBindingPortOverridesList(this, "port_overrides", true);
  public get portOverrides() {
    return this._portOverrides;
  }
  public putPortOverrides(value: ServiceBindingPortOverrides[] | cdktf.IResolvable) {
    this._portOverrides.internalValue = value;
  }
  public resetPortOverrides() {
    this._portOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverridesInput() {
    return this._portOverrides.internalValue;
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new ServiceBindingVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: ServiceBindingVirtualService) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new ServiceBindingWorkloadOutputReference(this, "workload");
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: ServiceBindingWorkload) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      container_workload: serviceBindingContainerWorkloadToTerraform(this._containerWorkload.internalValue),
      port_overrides: cdktf.listMapper(serviceBindingPortOverridesToTerraform, true)(this._portOverrides.internalValue),
      virtual_service: serviceBindingVirtualServiceToTerraform(this._virtualService.internalValue),
      workload: serviceBindingWorkloadToTerraform(this._workload.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      container_workload: {
        value: serviceBindingContainerWorkloadToHclTerraform(this._containerWorkload.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceBindingContainerWorkloadList",
      },
      port_overrides: {
        value: cdktf.listMapperHcl(serviceBindingPortOverridesToHclTerraform, true)(this._portOverrides.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceBindingPortOverridesList",
      },
      virtual_service: {
        value: serviceBindingVirtualServiceToHclTerraform(this._virtualService.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceBindingVirtualServiceList",
      },
      workload: {
        value: serviceBindingWorkloadToHclTerraform(this._workload.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceBindingWorkloadList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
