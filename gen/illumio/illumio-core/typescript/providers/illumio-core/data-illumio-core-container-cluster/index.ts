// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/container_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIllumioCoreContainerClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * URI of the Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/container_cluster#href DataIllumioCoreContainerCluster#href}
  */
  readonly href: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/container_cluster#id DataIllumioCoreContainerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataIllumioCoreContainerClusterErrors {
}

export function dataIllumioCoreContainerClusterErrorsToTerraform(struct?: DataIllumioCoreContainerClusterErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreContainerClusterErrorsToHclTerraform(struct?: DataIllumioCoreContainerClusterErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreContainerClusterErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreContainerClusterErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreContainerClusterErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audit_event - computed: true, optional: false, required: false
  private _auditEvent = new cdktf.StringMap(this, "audit_event");
  public get auditEvent() {
    return this._auditEvent;
  }

  // duplicate_ids - computed: true, optional: false, required: false
  public get duplicateIds() {
    return this.getListAttribute('duplicate_ids');
  }

  // error_type - computed: true, optional: false, required: false
  public get errorType() {
    return this.getStringAttribute('error_type');
  }
}

export class DataIllumioCoreContainerClusterErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreContainerClusterErrorsOutputReference {
    return new DataIllumioCoreContainerClusterErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreContainerClusterNodes {
}

export function dataIllumioCoreContainerClusterNodesToTerraform(struct?: DataIllumioCoreContainerClusterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreContainerClusterNodesToHclTerraform(struct?: DataIllumioCoreContainerClusterNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreContainerClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreContainerClusterNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreContainerClusterNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pod_subnet - computed: true, optional: false, required: false
  public get podSubnet() {
    return this.getStringAttribute('pod_subnet');
  }
}

export class DataIllumioCoreContainerClusterNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreContainerClusterNodesOutputReference {
    return new DataIllumioCoreContainerClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/container_cluster illumio-core_container_cluster}
*/
export class DataIllumioCoreContainerCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_container_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIllumioCoreContainerCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIllumioCoreContainerCluster to import
  * @param importFromId The id of the existing DataIllumioCoreContainerCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/container_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIllumioCoreContainerCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_container_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/container_cluster illumio-core_container_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIllumioCoreContainerClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataIllumioCoreContainerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_container_cluster',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._href = config.href;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // container_cluster_id - computed: true, optional: false, required: false
  public get containerClusterId() {
    return this.getStringAttribute('container_cluster_id');
  }

  // container_runtime - computed: true, optional: false, required: false
  public get containerRuntime() {
    return this.getStringAttribute('container_runtime');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataIllumioCoreContainerClusterErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
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

  // kubelink_version - computed: true, optional: false, required: false
  public get kubelinkVersion() {
    return this.getStringAttribute('kubelink_version');
  }

  // last_connected - computed: true, optional: false, required: false
  public get lastConnected() {
    return this.getStringAttribute('last_connected');
  }

  // manager_type - computed: true, optional: false, required: false
  public get managerType() {
    return this.getStringAttribute('manager_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataIllumioCoreContainerClusterNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // online - computed: true, optional: false, required: false
  public get online() {
    return this.getBooleanAttribute('online');
  }

  // pce_fqdn - computed: true, optional: false, required: false
  public get pceFqdn() {
    return this.getStringAttribute('pce_fqdn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      href: cdktf.stringToTerraform(this._href),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      href: {
        value: cdktf.stringToHclTerraform(this._href),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
