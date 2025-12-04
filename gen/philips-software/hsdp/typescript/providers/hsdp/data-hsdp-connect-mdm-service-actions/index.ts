// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHsdpConnectMdmServiceActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions#id DataHsdpConnectMdmServiceActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions#filter DataHsdpConnectMdmServiceActions#filter}
  */
  readonly filter?: DataHsdpConnectMdmServiceActionsFilter;
}
export interface DataHsdpConnectMdmServiceActionsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions#id DataHsdpConnectMdmServiceActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions#name DataHsdpConnectMdmServiceActions#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions#organization_guid_value DataHsdpConnectMdmServiceActions#organization_guid_value}
  */
  readonly organizationGuidValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions#standard_service_id DataHsdpConnectMdmServiceActions#standard_service_id}
  */
  readonly standardServiceId?: string;
}

export function dataHsdpConnectMdmServiceActionsFilterToTerraform(struct?: DataHsdpConnectMdmServiceActionsFilterOutputReference | DataHsdpConnectMdmServiceActionsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    organization_guid_value: cdktf.stringToTerraform(struct!.organizationGuidValue),
    standard_service_id: cdktf.stringToTerraform(struct!.standardServiceId),
  }
}


export function dataHsdpConnectMdmServiceActionsFilterToHclTerraform(struct?: DataHsdpConnectMdmServiceActionsFilterOutputReference | DataHsdpConnectMdmServiceActionsFilter): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_guid_value: {
      value: cdktf.stringToHclTerraform(struct!.organizationGuidValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_service_id: {
      value: cdktf.stringToHclTerraform(struct!.standardServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHsdpConnectMdmServiceActionsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHsdpConnectMdmServiceActionsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationGuidValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationGuidValue = this._organizationGuidValue;
    }
    if (this._standardServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardServiceId = this._standardServiceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHsdpConnectMdmServiceActionsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
      this._organizationGuidValue = undefined;
      this._standardServiceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
      this._organizationGuidValue = value.organizationGuidValue;
      this._standardServiceId = value.standardServiceId;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organization_guid_value - computed: false, optional: true, required: false
  private _organizationGuidValue?: string; 
  public get organizationGuidValue() {
    return this.getStringAttribute('organization_guid_value');
  }
  public set organizationGuidValue(value: string) {
    this._organizationGuidValue = value;
  }
  public resetOrganizationGuidValue() {
    this._organizationGuidValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationGuidValueInput() {
    return this._organizationGuidValue;
  }

  // standard_service_id - computed: false, optional: true, required: false
  private _standardServiceId?: string; 
  public get standardServiceId() {
    return this.getStringAttribute('standard_service_id');
  }
  public set standardServiceId(value: string) {
    this._standardServiceId = value;
  }
  public resetStandardServiceId() {
    this._standardServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardServiceIdInput() {
    return this._standardServiceId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions hsdp_connect_mdm_service_actions}
*/
export class DataHsdpConnectMdmServiceActions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_service_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHsdpConnectMdmServiceActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHsdpConnectMdmServiceActions to import
  * @param importFromId The id of the existing DataHsdpConnectMdmServiceActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHsdpConnectMdmServiceActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_service_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_service_actions hsdp_connect_mdm_service_actions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHsdpConnectMdmServiceActionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHsdpConnectMdmServiceActionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_service_actions',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
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
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // descriptions - computed: true, optional: false, required: false
  public get descriptions() {
    return this.getListAttribute('descriptions');
  }

  // guids - computed: true, optional: false, required: false
  public get guids() {
    return this.getListAttribute('guids');
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataHsdpConnectMdmServiceActionsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataHsdpConnectMdmServiceActionsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      filter: dataHsdpConnectMdmServiceActionsFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataHsdpConnectMdmServiceActionsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHsdpConnectMdmServiceActionsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
