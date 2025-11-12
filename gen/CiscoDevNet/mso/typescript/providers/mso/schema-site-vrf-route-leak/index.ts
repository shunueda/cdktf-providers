// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteVrfRouteLeakConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#id SchemaSiteVrfRouteLeak#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#schema_id SchemaSiteVrfRouteLeak#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#site_id SchemaSiteVrfRouteLeak#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#subnet_ips SchemaSiteVrfRouteLeak#subnet_ips}
  */
  readonly subnetIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#target_vrf_name SchemaSiteVrfRouteLeak#target_vrf_name}
  */
  readonly targetVrfName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#target_vrf_schema_id SchemaSiteVrfRouteLeak#target_vrf_schema_id}
  */
  readonly targetVrfSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#target_vrf_template_name SchemaSiteVrfRouteLeak#target_vrf_template_name}
  */
  readonly targetVrfTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#template_name SchemaSiteVrfRouteLeak#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#tenant_name SchemaSiteVrfRouteLeak#tenant_name}
  */
  readonly tenantName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#type SchemaSiteVrfRouteLeak#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#vrf_name SchemaSiteVrfRouteLeak#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak mso_schema_site_vrf_route_leak}
*/
export class SchemaSiteVrfRouteLeak extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_vrf_route_leak";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteVrfRouteLeak resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteVrfRouteLeak to import
  * @param importFromId The id of the existing SchemaSiteVrfRouteLeak that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteVrfRouteLeak to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_vrf_route_leak", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_vrf_route_leak mso_schema_site_vrf_route_leak} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteVrfRouteLeakConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteVrfRouteLeakConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_vrf_route_leak',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
    this._subnetIps = config.subnetIps;
    this._targetVrfName = config.targetVrfName;
    this._targetVrfSchemaId = config.targetVrfSchemaId;
    this._targetVrfTemplateName = config.targetVrfTemplateName;
    this._templateName = config.templateName;
    this._tenantName = config.tenantName;
    this._type = config.type;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // subnet_ips - computed: true, optional: true, required: false
  private _subnetIps?: string[]; 
  public get subnetIps() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ips'));
  }
  public set subnetIps(value: string[]) {
    this._subnetIps = value;
  }
  public resetSubnetIps() {
    this._subnetIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpsInput() {
    return this._subnetIps;
  }

  // target_vrf_name - computed: false, optional: false, required: true
  private _targetVrfName?: string; 
  public get targetVrfName() {
    return this.getStringAttribute('target_vrf_name');
  }
  public set targetVrfName(value: string) {
    this._targetVrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVrfNameInput() {
    return this._targetVrfName;
  }

  // target_vrf_schema_id - computed: true, optional: true, required: false
  private _targetVrfSchemaId?: string; 
  public get targetVrfSchemaId() {
    return this.getStringAttribute('target_vrf_schema_id');
  }
  public set targetVrfSchemaId(value: string) {
    this._targetVrfSchemaId = value;
  }
  public resetTargetVrfSchemaId() {
    this._targetVrfSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVrfSchemaIdInput() {
    return this._targetVrfSchemaId;
  }

  // target_vrf_template_name - computed: true, optional: true, required: false
  private _targetVrfTemplateName?: string; 
  public get targetVrfTemplateName() {
    return this.getStringAttribute('target_vrf_template_name');
  }
  public set targetVrfTemplateName(value: string) {
    this._targetVrfTemplateName = value;
  }
  public resetTargetVrfTemplateName() {
    this._targetVrfTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVrfTemplateNameInput() {
    return this._targetVrfTemplateName;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
      subnet_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIps),
      target_vrf_name: cdktf.stringToTerraform(this._targetVrfName),
      target_vrf_schema_id: cdktf.stringToTerraform(this._targetVrfSchemaId),
      target_vrf_template_name: cdktf.stringToTerraform(this._targetVrfTemplateName),
      template_name: cdktf.stringToTerraform(this._templateName),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      type: cdktf.stringToTerraform(this._type),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_vrf_name: {
        value: cdktf.stringToHclTerraform(this._targetVrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vrf_schema_id: {
        value: cdktf.stringToHclTerraform(this._targetVrfSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_vrf_template_name: {
        value: cdktf.stringToHclTerraform(this._targetVrfTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
