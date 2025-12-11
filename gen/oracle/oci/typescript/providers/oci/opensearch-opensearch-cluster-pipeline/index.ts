// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchOpensearchClusterPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#compartment_id OpensearchOpensearchClusterPipeline#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#data_prepper_configuration_body OpensearchOpensearchClusterPipeline#data_prepper_configuration_body}
  */
  readonly dataPrepperConfigurationBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#defined_tags OpensearchOpensearchClusterPipeline#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#display_name OpensearchOpensearchClusterPipeline#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#freeform_tags OpensearchOpensearchClusterPipeline#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#id OpensearchOpensearchClusterPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#memory_gb OpensearchOpensearchClusterPipeline#memory_gb}
  */
  readonly memoryGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#node_count OpensearchOpensearchClusterPipeline#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#node_shape OpensearchOpensearchClusterPipeline#node_shape}
  */
  readonly nodeShape?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#nsg_id OpensearchOpensearchClusterPipeline#nsg_id}
  */
  readonly nsgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#ocpu_count OpensearchOpensearchClusterPipeline#ocpu_count}
  */
  readonly ocpuCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#opc_dry_run OpensearchOpensearchClusterPipeline#opc_dry_run}
  */
  readonly opcDryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#pipeline_configuration_body OpensearchOpensearchClusterPipeline#pipeline_configuration_body}
  */
  readonly pipelineConfigurationBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#subnet_compartment_id OpensearchOpensearchClusterPipeline#subnet_compartment_id}
  */
  readonly subnetCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#subnet_id OpensearchOpensearchClusterPipeline#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#vcn_compartment_id OpensearchOpensearchClusterPipeline#vcn_compartment_id}
  */
  readonly vcnCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#vcn_id OpensearchOpensearchClusterPipeline#vcn_id}
  */
  readonly vcnId?: string;
  /**
  * reverse_connection_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#reverse_connection_endpoints OpensearchOpensearchClusterPipeline#reverse_connection_endpoints}
  */
  readonly reverseConnectionEndpoints?: OpensearchOpensearchClusterPipelineReverseConnectionEndpoints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#timeouts OpensearchOpensearchClusterPipeline#timeouts}
  */
  readonly timeouts?: OpensearchOpensearchClusterPipelineTimeouts;
}
export interface OpensearchOpensearchClusterPipelineReverseConnectionEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#customer_fqdn OpensearchOpensearchClusterPipeline#customer_fqdn}
  */
  readonly customerFqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#customer_ip OpensearchOpensearchClusterPipeline#customer_ip}
  */
  readonly customerIp: string;
}

export function opensearchOpensearchClusterPipelineReverseConnectionEndpointsToTerraform(struct?: OpensearchOpensearchClusterPipelineReverseConnectionEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_fqdn: cdktf.stringToTerraform(struct!.customerFqdn),
    customer_ip: cdktf.stringToTerraform(struct!.customerIp),
  }
}


export function opensearchOpensearchClusterPipelineReverseConnectionEndpointsToHclTerraform(struct?: OpensearchOpensearchClusterPipelineReverseConnectionEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.customerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_ip: {
      value: cdktf.stringToHclTerraform(struct!.customerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchClusterPipelineReverseConnectionEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchOpensearchClusterPipelineReverseConnectionEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerFqdn = this._customerFqdn;
    }
    if (this._customerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerIp = this._customerIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchClusterPipelineReverseConnectionEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerFqdn = undefined;
      this._customerIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerFqdn = value.customerFqdn;
      this._customerIp = value.customerIp;
    }
  }

  // customer_fqdn - computed: false, optional: false, required: true
  private _customerFqdn?: string; 
  public get customerFqdn() {
    return this.getStringAttribute('customer_fqdn');
  }
  public set customerFqdn(value: string) {
    this._customerFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerFqdnInput() {
    return this._customerFqdn;
  }

  // customer_ip - computed: false, optional: false, required: true
  private _customerIp?: string; 
  public get customerIp() {
    return this.getStringAttribute('customer_ip');
  }
  public set customerIp(value: string) {
    this._customerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIpInput() {
    return this._customerIp;
  }
}

export class OpensearchOpensearchClusterPipelineReverseConnectionEndpointsList extends cdktf.ComplexList {
  public internalValue? : OpensearchOpensearchClusterPipelineReverseConnectionEndpoints[] | cdktf.IResolvable

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
  public get(index: number): OpensearchOpensearchClusterPipelineReverseConnectionEndpointsOutputReference {
    return new OpensearchOpensearchClusterPipelineReverseConnectionEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchOpensearchClusterPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#create OpensearchOpensearchClusterPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#delete OpensearchOpensearchClusterPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#update OpensearchOpensearchClusterPipeline#update}
  */
  readonly update?: string;
}

export function opensearchOpensearchClusterPipelineTimeoutsToTerraform(struct?: OpensearchOpensearchClusterPipelineTimeouts | cdktf.IResolvable): any {
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


export function opensearchOpensearchClusterPipelineTimeoutsToHclTerraform(struct?: OpensearchOpensearchClusterPipelineTimeouts | cdktf.IResolvable): any {
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

export class OpensearchOpensearchClusterPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchOpensearchClusterPipelineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpensearchOpensearchClusterPipelineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline oci_opensearch_opensearch_cluster_pipeline}
*/
export class OpensearchOpensearchClusterPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opensearch_opensearch_cluster_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchOpensearchClusterPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchOpensearchClusterPipeline to import
  * @param importFromId The id of the existing OpensearchOpensearchClusterPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchOpensearchClusterPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opensearch_opensearch_cluster_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/opensearch_opensearch_cluster_pipeline oci_opensearch_opensearch_cluster_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchOpensearchClusterPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchOpensearchClusterPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opensearch_opensearch_cluster_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._dataPrepperConfigurationBody = config.dataPrepperConfigurationBody;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._memoryGb = config.memoryGb;
    this._nodeCount = config.nodeCount;
    this._nodeShape = config.nodeShape;
    this._nsgId = config.nsgId;
    this._ocpuCount = config.ocpuCount;
    this._opcDryRun = config.opcDryRun;
    this._pipelineConfigurationBody = config.pipelineConfigurationBody;
    this._subnetCompartmentId = config.subnetCompartmentId;
    this._subnetId = config.subnetId;
    this._vcnCompartmentId = config.vcnCompartmentId;
    this._vcnId = config.vcnId;
    this._reverseConnectionEndpoints.internalValue = config.reverseConnectionEndpoints;
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

  // data_prepper_configuration_body - computed: false, optional: false, required: true
  private _dataPrepperConfigurationBody?: string; 
  public get dataPrepperConfigurationBody() {
    return this.getStringAttribute('data_prepper_configuration_body');
  }
  public set dataPrepperConfigurationBody(value: string) {
    this._dataPrepperConfigurationBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPrepperConfigurationBodyInput() {
    return this._dataPrepperConfigurationBody;
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

  // memory_gb - computed: false, optional: false, required: true
  private _memoryGb?: number; 
  public get memoryGb() {
    return this.getNumberAttribute('memory_gb');
  }
  public set memoryGb(value: number) {
    this._memoryGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGbInput() {
    return this._memoryGb;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_shape - computed: true, optional: true, required: false
  private _nodeShape?: string; 
  public get nodeShape() {
    return this.getStringAttribute('node_shape');
  }
  public set nodeShape(value: string) {
    this._nodeShape = value;
  }
  public resetNodeShape() {
    this._nodeShape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeShapeInput() {
    return this._nodeShape;
  }

  // nsg_id - computed: true, optional: true, required: false
  private _nsgId?: string; 
  public get nsgId() {
    return this.getStringAttribute('nsg_id');
  }
  public set nsgId(value: string) {
    this._nsgId = value;
  }
  public resetNsgId() {
    this._nsgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdInput() {
    return this._nsgId;
  }

  // ocpu_count - computed: false, optional: false, required: true
  private _ocpuCount?: number; 
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }
  public set ocpuCount(value: number) {
    this._ocpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuCountInput() {
    return this._ocpuCount;
  }

  // opc_dry_run - computed: true, optional: true, required: false
  private _opcDryRun?: boolean | cdktf.IResolvable; 
  public get opcDryRun() {
    return this.getBooleanAttribute('opc_dry_run');
  }
  public set opcDryRun(value: boolean | cdktf.IResolvable) {
    this._opcDryRun = value;
  }
  public resetOpcDryRun() {
    this._opcDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcDryRunInput() {
    return this._opcDryRun;
  }

  // opensearch_pipeline_fqdn - computed: true, optional: false, required: false
  public get opensearchPipelineFqdn() {
    return this.getStringAttribute('opensearch_pipeline_fqdn');
  }

  // opensearch_pipeline_private_ip - computed: true, optional: false, required: false
  public get opensearchPipelinePrivateIp() {
    return this.getStringAttribute('opensearch_pipeline_private_ip');
  }

  // pipeline_configuration_body - computed: false, optional: false, required: true
  private _pipelineConfigurationBody?: string; 
  public get pipelineConfigurationBody() {
    return this.getStringAttribute('pipeline_configuration_body');
  }
  public set pipelineConfigurationBody(value: string) {
    this._pipelineConfigurationBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigurationBodyInput() {
    return this._pipelineConfigurationBody;
  }

  // pipeline_mode - computed: true, optional: false, required: false
  public get pipelineMode() {
    return this.getStringAttribute('pipeline_mode');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_compartment_id - computed: true, optional: true, required: false
  private _subnetCompartmentId?: string; 
  public get subnetCompartmentId() {
    return this.getStringAttribute('subnet_compartment_id');
  }
  public set subnetCompartmentId(value: string) {
    this._subnetCompartmentId = value;
  }
  public resetSubnetCompartmentId() {
    this._subnetCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCompartmentIdInput() {
    return this._subnetCompartmentId;
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

  // vcn_compartment_id - computed: true, optional: true, required: false
  private _vcnCompartmentId?: string; 
  public get vcnCompartmentId() {
    return this.getStringAttribute('vcn_compartment_id');
  }
  public set vcnCompartmentId(value: string) {
    this._vcnCompartmentId = value;
  }
  public resetVcnCompartmentId() {
    this._vcnCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnCompartmentIdInput() {
    return this._vcnCompartmentId;
  }

  // vcn_id - computed: true, optional: true, required: false
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  public resetVcnId() {
    this._vcnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // reverse_connection_endpoints - computed: false, optional: true, required: false
  private _reverseConnectionEndpoints = new OpensearchOpensearchClusterPipelineReverseConnectionEndpointsList(this, "reverse_connection_endpoints", false);
  public get reverseConnectionEndpoints() {
    return this._reverseConnectionEndpoints;
  }
  public putReverseConnectionEndpoints(value: OpensearchOpensearchClusterPipelineReverseConnectionEndpoints[] | cdktf.IResolvable) {
    this._reverseConnectionEndpoints.internalValue = value;
  }
  public resetReverseConnectionEndpoints() {
    this._reverseConnectionEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseConnectionEndpointsInput() {
    return this._reverseConnectionEndpoints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpensearchOpensearchClusterPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpensearchOpensearchClusterPipelineTimeouts) {
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
      data_prepper_configuration_body: cdktf.stringToTerraform(this._dataPrepperConfigurationBody),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      memory_gb: cdktf.numberToTerraform(this._memoryGb),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_shape: cdktf.stringToTerraform(this._nodeShape),
      nsg_id: cdktf.stringToTerraform(this._nsgId),
      ocpu_count: cdktf.numberToTerraform(this._ocpuCount),
      opc_dry_run: cdktf.booleanToTerraform(this._opcDryRun),
      pipeline_configuration_body: cdktf.stringToTerraform(this._pipelineConfigurationBody),
      subnet_compartment_id: cdktf.stringToTerraform(this._subnetCompartmentId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vcn_compartment_id: cdktf.stringToTerraform(this._vcnCompartmentId),
      vcn_id: cdktf.stringToTerraform(this._vcnId),
      reverse_connection_endpoints: cdktf.listMapper(opensearchOpensearchClusterPipelineReverseConnectionEndpointsToTerraform, true)(this._reverseConnectionEndpoints.internalValue),
      timeouts: opensearchOpensearchClusterPipelineTimeoutsToTerraform(this._timeouts.internalValue),
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
      data_prepper_configuration_body: {
        value: cdktf.stringToHclTerraform(this._dataPrepperConfigurationBody),
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
      memory_gb: {
        value: cdktf.numberToHclTerraform(this._memoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_shape: {
        value: cdktf.stringToHclTerraform(this._nodeShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsg_id: {
        value: cdktf.stringToHclTerraform(this._nsgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocpu_count: {
        value: cdktf.numberToHclTerraform(this._ocpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      opc_dry_run: {
        value: cdktf.booleanToHclTerraform(this._opcDryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pipeline_configuration_body: {
        value: cdktf.stringToHclTerraform(this._pipelineConfigurationBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_compartment_id: {
        value: cdktf.stringToHclTerraform(this._subnetCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcn_compartment_id: {
        value: cdktf.stringToHclTerraform(this._vcnCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcn_id: {
        value: cdktf.stringToHclTerraform(this._vcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_connection_endpoints: {
        value: cdktf.listMapperHcl(opensearchOpensearchClusterPipelineReverseConnectionEndpointsToHclTerraform, true)(this._reverseConnectionEndpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchOpensearchClusterPipelineReverseConnectionEndpointsList",
      },
      timeouts: {
        value: opensearchOpensearchClusterPipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchOpensearchClusterPipelineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
