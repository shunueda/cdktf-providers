// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGatewayCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of control-plane geos supported for deploying cloud-gateways configurations. must be one of ["us", "eu", "au", "me", "in", "sg"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_custom_domain#control_plane_geo CloudGatewayCustomDomain#control_plane_geo}
  */
  readonly controlPlaneGeo: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_custom_domain#control_plane_id CloudGatewayCustomDomain#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Domain name of the custom domain. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_custom_domain#domain CloudGatewayCustomDomain#domain}
  */
  readonly domain: string;
}
export interface CloudGatewayCustomDomainStateMetadata {
}

export function cloudGatewayCustomDomainStateMetadataToTerraform(struct?: CloudGatewayCustomDomainStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGatewayCustomDomainStateMetadataToHclTerraform(struct?: CloudGatewayCustomDomainStateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGatewayCustomDomainStateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGatewayCustomDomainStateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGatewayCustomDomainStateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // reported_status - computed: true, optional: false, required: false
  public get reportedStatus() {
    return this.getStringAttribute('reported_status');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_custom_domain konnect_cloud_gateway_custom_domain}
*/
export class CloudGatewayCustomDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_cloud_gateway_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGatewayCustomDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGatewayCustomDomain to import
  * @param importFromId The id of the existing CloudGatewayCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGatewayCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_cloud_gateway_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/cloud_gateway_custom_domain konnect_cloud_gateway_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGatewayCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGatewayCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_cloud_gateway_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlPlaneGeo = config.controlPlaneGeo;
    this._controlPlaneId = config.controlPlaneId;
    this._domain = config.domain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // control_plane_geo - computed: false, optional: false, required: true
  private _controlPlaneGeo?: string; 
  public get controlPlaneGeo() {
    return this.getStringAttribute('control_plane_geo');
  }
  public set controlPlaneGeo(value: string) {
    this._controlPlaneGeo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneGeoInput() {
    return this._controlPlaneGeo;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // entity_version - computed: true, optional: false, required: false
  public get entityVersion() {
    return this.getNumberAttribute('entity_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sni_id - computed: true, optional: false, required: false
  public get sniId() {
    return this.getStringAttribute('sni_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_metadata - computed: true, optional: false, required: false
  private _stateMetadata = new CloudGatewayCustomDomainStateMetadataOutputReference(this, "state_metadata");
  public get stateMetadata() {
    return this._stateMetadata;
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
      control_plane_geo: cdktf.stringToTerraform(this._controlPlaneGeo),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      domain: cdktf.stringToTerraform(this._domain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_plane_geo: {
        value: cdktf.stringToHclTerraform(this._controlPlaneGeo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
