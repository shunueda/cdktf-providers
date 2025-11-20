// https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human readable name for an IP Filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter#filter_name IpFilter#filter_name}
  */
  readonly filterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter#id IpFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of IP Groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter#ip_groups IpFilter#ip_groups}
  */
  readonly ipGroups: string[];
  /**
  * Scope of resources covered by this IP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter#operation_groups IpFilter#operation_groups}
  */
  readonly operationGroups?: string[];
  /**
  * Scope of resources covered by this IP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter#resource_group IpFilter#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * A CRN that specifies the scope of the ip filter, specifically the organization or environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter#resource_scope IpFilter#resource_scope}
  */
  readonly resourceScope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter confluent_ip_filter}
*/
export class IpFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_ip_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpFilter to import
  * @param importFromId The id of the existing IpFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_ip_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.53.0/docs/resources/ip_filter confluent_ip_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpFilterConfig
  */
  public constructor(scope: Construct, id: string, config: IpFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_ip_filter',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.53.0',
        providerVersionConstraint: '2.53.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterName = config.filterName;
    this._id = config.id;
    this._ipGroups = config.ipGroups;
    this._operationGroups = config.operationGroups;
    this._resourceGroup = config.resourceGroup;
    this._resourceScope = config.resourceScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
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

  // ip_groups - computed: false, optional: false, required: true
  private _ipGroups?: string[]; 
  public get ipGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_groups'));
  }
  public set ipGroups(value: string[]) {
    this._ipGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupsInput() {
    return this._ipGroups;
  }

  // operation_groups - computed: true, optional: true, required: false
  private _operationGroups?: string[]; 
  public get operationGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_groups'));
  }
  public set operationGroups(value: string[]) {
    this._operationGroups = value;
  }
  public resetOperationGroups() {
    this._operationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationGroupsInput() {
    return this._operationGroups;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_scope - computed: true, optional: true, required: false
  private _resourceScope?: string; 
  public get resourceScope() {
    return this.getStringAttribute('resource_scope');
  }
  public set resourceScope(value: string) {
    this._resourceScope = value;
  }
  public resetResourceScope() {
    this._resourceScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceScopeInput() {
    return this._resourceScope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_name: cdktf.stringToTerraform(this._filterName),
      id: cdktf.stringToTerraform(this._id),
      ip_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipGroups),
      operation_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operationGroups),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      resource_scope: cdktf.stringToTerraform(this._resourceScope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_name: {
        value: cdktf.stringToHclTerraform(this._filterName),
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
      ip_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      operation_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operationGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_scope: {
        value: cdktf.stringToHclTerraform(this._resourceScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
