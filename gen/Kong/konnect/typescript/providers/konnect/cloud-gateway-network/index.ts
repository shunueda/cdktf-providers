// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGatewayNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of availability zones that the network is attached to. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_network#availability_zones CloudGatewayNetwork#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * CIDR block configuration for the network. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_network#cidr_block CloudGatewayNetwork#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_network#cloud_gateway_provider_account_id CloudGatewayNetwork#cloud_gateway_provider_account_id}
  */
  readonly cloudGatewayProviderAccountId: string;
  /**
  * Human-readable name of the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_network#name CloudGatewayNetwork#name}
  */
  readonly name: string;
  /**
  * Region ID for cloud provider region. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_network#region CloudGatewayNetwork#region}
  */
  readonly region: string;
}
export interface CloudGatewayNetworkProviderMetadata {
}

export function cloudGatewayNetworkProviderMetadataToTerraform(struct?: CloudGatewayNetworkProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayNetworkProviderMetadataToHclTerraform(struct?: CloudGatewayNetworkProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayNetworkProviderMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayNetworkProviderMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayNetworkProviderMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_network konnect_cloud_gateway_network}
*/
export class CloudGatewayNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_cloud_gateway_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGatewayNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGatewayNetwork to import
  * @param importFromId The id of the existing CloudGatewayNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGatewayNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_cloud_gateway_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/cloud_gateway_network konnect_cloud_gateway_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGatewayNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGatewayNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_cloud_gateway_network',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZones = config.availabilityZones;
    this._cidrBlock = config.cidrBlock;
    this._cloudGatewayProviderAccountId = config.cloudGatewayProviderAccountId;
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // cloud_gateway_provider_account_id - computed: false, optional: false, required: true
  private _cloudGatewayProviderAccountId?: string; 
  public get cloudGatewayProviderAccountId() {
    return this.getStringAttribute('cloud_gateway_provider_account_id');
  }
  public set cloudGatewayProviderAccountId(value: string) {
    this._cloudGatewayProviderAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGatewayProviderAccountIdInput() {
    return this._cloudGatewayProviderAccountId;
  }

  // configuration_reference_count - computed: true, optional: false, required: false
  public get configurationReferenceCount() {
    return this.getNumberAttribute('configuration_reference_count');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // provider_metadata - computed: true, optional: false, required: false
  private _providerMetadata = new CloudGatewayNetworkProviderMetadataOutputReference(this, "provider_metadata");
  public get providerMetadata() {
    return this._providerMetadata;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // transit_gateway_count - computed: true, optional: false, required: false
  public get transitGatewayCount() {
    return this.getNumberAttribute('transit_gateway_count');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      cloud_gateway_provider_account_id: cdktf.stringToTerraform(this._cloudGatewayProviderAccountId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_gateway_provider_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudGatewayProviderAccountId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
